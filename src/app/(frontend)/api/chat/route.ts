import { streamText } from 'ai'
import { getAIModel } from '@/lib/ai/provider'
import { SAFEMED_SYSTEM_PROMPT } from '@/lib/ai/system-prompt'

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Check if AI is configured
    const provider = process.env.AI_PROVIDER || 'anthropic'
    const hasKey =
      (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY) ||
      (provider === 'openai' && process.env.OPENAI_API_KEY)

    if (!hasKey) {
      // Fallback: knowledge-based response without AI
      return fallbackResponse(messages)
    }

    // Limit conversation to prevent abuse
    const recentMessages = messages.slice(-10)

    const result = streamText({
      model: getAIModel(),
      system: SAFEMED_SYSTEM_PROMPT,
      messages: recentMessages,
      maxTokens: 500,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error: any) {
    console.error('[Chat API Error]', error?.message || error)

    if (error?.message?.includes('API key') || error?.message?.includes('401')) {
      return new Response(
        JSON.stringify({ error: 'O chat AI não está configurado. Contacte-nos diretamente.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } },
      )
    }

    return new Response(
      JSON.stringify({ error: 'Ocorreu um erro. Por favor tente novamente.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}

/**
 * Fallback when no AI API key is configured.
 * Returns a simple keyword-matched response.
 */
function fallbackResponse(messages: any[]) {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || ''

  let reply =
    'Obrigado pela sua mensagem! O Safemed é uma plataforma modular para gestão de Segurança e Saúde no Trabalho. Para informações detalhadas, contacte-nos em geral@safemed.solutions ou agende uma demonstração.'

  if (lastMessage.includes('módulo') || lastMessage.includes('modulo')) {
    reply =
      'O Safemed dispõe de 10 módulos: Saúde no Trabalho, Segurança no Trabalho, Acidentes de Trabalho, Gestão de EPI, Produtos Químicos, My Safemed, Easy Booking, Segurança Alimentar, Kube Analytics e Quizzer. Quer saber mais sobre algum?'
  } else if (lastMessage.includes('demonstração') || lastMessage.includes('demo')) {
    reply =
      'Teremos todo o gosto em mostrar-lhe o Safemed! Pode agendar uma demonstração gratuita na página de contacto.'
  } else if (lastMessage.includes('preço') || lastMessage.includes('custo') || lastMessage.includes('valor')) {
    reply =
      'O preço do Safemed depende dos módulos e número de trabalhadores. Contacte-nos para uma proposta personalizada: geral@safemed.solutions'
  } else if (lastMessage.includes('agendamento') || lastMessage.includes('aptidão') || lastMessage.includes('aptidao')) {
    reply =
      'Para gestão de agendamentos e fichas de aptidão, o módulo de Saúde no Trabalho é ideal. Inclui fichas clínicas digitais, agendamento inteligente, assinatura digital certificada e lembretes automáticos por SMS.'
  } else if (lastMessage.includes('saúde') || lastMessage.includes('saude') || lastMessage.includes('ocupacional')) {
    reply =
      'O módulo de Saúde no Trabalho inclui fichas clínicas parametrizáveis, fichas de aptidão digitais, agendamento inteligente, assinaturas digitais, mapeamento de riscos e notificações automáticas.'
  } else if (lastMessage.includes('segurança') || lastMessage.includes('seguranca') || lastMessage.includes('auditoria')) {
    reply =
      'O módulo de Segurança no Trabalho inclui gestão de auditorias, checklists parametrizáveis, mapa de visitas com geolocalização, relatórios personalizáveis e gestão de medidas de autoproteção.'
  }

  // Return as a streamed-like response for consistency with useChat
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      // Vercel AI SDK data stream format
      controller.enqueue(encoder.encode(`0:"${reply.replace(/"/g, '\\"')}"\n`))
      controller.enqueue(encoder.encode(`e:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}\n`))
      controller.enqueue(encoder.encode(`d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}\n`))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  })
}
