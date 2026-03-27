'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, User, Minimize2 } from 'lucide-react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const PLACEHOLDER_EXAMPLES = [
  'Preciso de software de gestão de agendamentos e fichas de aptidão',
  'Que módulos existem para segurança alimentar?',
  'Como funciona a gestão de EPIs?',
  'Quero digitalizar a saúde ocupacional da minha empresa',
]

export function HeroChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const [typedPlaceholder, setTypedPlaceholder] = useState('')
  const [isTypingPlaceholder, setIsTypingPlaceholder] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Typewriter placeholder effect
  useEffect(() => {
    if (!isTypingPlaceholder || messages.length > 0 || input.length > 0) return
    const currentExample = PLACEHOLDER_EXAMPLES[placeholderIdx]
    if (typedPlaceholder.length < currentExample.length) {
      const t = setTimeout(() => setTypedPlaceholder(currentExample.slice(0, typedPlaceholder.length + 1)), 40)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setTypedPlaceholder('')
        setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDER_EXAMPLES.length)
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [typedPlaceholder, placeholderIdx, isTypingPlaceholder, messages.length, input.length])

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    setIsTypingPlaceholder(false)
    setExpanded(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map((m) => ({ role: m.role, content: m.content })) }),
      })

      if (!res.ok) throw new Error('Chat error')

      // Parse the streamed response
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let assistantText = ''
      const assistantId = (Date.now() + 1).toString()

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value, { stream: true })
          // Parse Vercel AI SDK stream format: 0:"text chunk"\n
          const lines = chunk.split('\n')
          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                const text = JSON.parse(line.slice(2))
                assistantText += text
                setMessages([...newMessages, { id: assistantId, role: 'assistant', content: assistantText }])
              } catch {
                // Not JSON, try raw
                assistantText += line.slice(2)
                setMessages([...newMessages, { id: assistantId, role: 'assistant', content: assistantText }])
              }
            }
          }
        }
      }

      if (!assistantText) {
        // Fallback: try parsing as JSON
        const text = await res.clone().text()
        const jsonMatch = text.match(/"reply":"([^"]+)"/)
        if (jsonMatch) {
          setMessages([...newMessages, { id: assistantId, role: 'assistant', content: jsonMatch[1] }])
        }
      }
    } catch {
      setMessages([
        ...newMessages,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Desculpe, ocorreu um erro. Contacte-nos em geral@safemed.solutions.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleSuggestion = (text: string) => {
    sendMessage(text)
  }

  const currentPlaceholder =
    messages.length > 0 || input.length > 0 ? 'Escreva a sua pergunta...' : typedPlaceholder || 'Escreva a sua pergunta...'

  return (
    <div className="w-full">
      {/* Expanded chat panel */}
      {expanded && messages.length > 0 && (
        <div className="mb-3 bg-white rounded-2xl border border-surface-200/80 shadow-xl shadow-surface-950/[0.06] overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface-50/80 border-b border-surface-100/60">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-safemed-500 to-safemed-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-surface-700">Safemed AI</span>
              <span className="text-[10px] text-surface-400">Assistente</span>
            </div>
            <button onClick={() => setExpanded(false)} className="p-1 hover:bg-surface-100 rounded transition-colors">
              <Minimize2 className="w-3.5 h-3.5 text-surface-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-[280px] overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-safemed-500 to-safemed-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-surface-900 text-white rounded-br-md'
                      : 'bg-surface-50 text-surface-700 rounded-bl-md border border-surface-100/60'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-surface-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3 h-3 text-surface-500" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-safemed-500 to-safemed-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="bg-surface-50 border border-surface-100/60 px-3.5 py-2.5 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input bar */}
      <form id="hero-chat-form" onSubmit={handleFormSubmit}>
        <div className="relative flex items-center bg-white rounded-2xl border border-surface-200/80 shadow-xl shadow-surface-950/[0.06] px-4 py-3 gap-3 transition-all duration-300 hover:shadow-2xl hover:shadow-surface-950/[0.08] focus-within:border-safemed-200 focus-within:shadow-safemed-500/[0.06]">
          <Sparkles className="w-4 h-4 text-safemed-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setIsTypingPlaceholder(e.target.value.length === 0)
            }}
            placeholder={currentPlaceholder}
            className="flex-1 text-sm text-surface-800 placeholder:text-surface-400 bg-transparent outline-none font-normal"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-8 h-8 rounded-xl bg-surface-900 flex items-center justify-center flex-shrink-0 hover:bg-surface-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </form>

      {/* Quick suggestions */}
      {messages.length === 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {['Gestão de fichas de aptidão', 'Segurança alimentar HACCP', 'Agendar demonstração'].map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="text-xs px-3 py-1.5 rounded-full bg-white/80 border border-surface-200/60 text-surface-500 hover:text-surface-700 hover:border-surface-300 hover:bg-white transition-all duration-200"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
