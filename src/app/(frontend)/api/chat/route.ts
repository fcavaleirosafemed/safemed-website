import { streamText } from 'ai'
import { getAIModel } from '@/lib/ai/provider'
import { SAFEMED_SYSTEM_PROMPT } from '@/lib/ai/system-prompt'
import { isWithinDailyLimit, incrementDailyUsage, getDailyUsage } from '@/lib/ai/rate-limiter'

export const maxDuration = 30

/**
 * GET /api/chat — Check if chat is available (rate limit status)
 */
export async function GET() {
  const usage = getDailyUsage()
  const provider = process.env.AI_PROVIDER || 'anthropic'
  const hasKey =
    (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY) ||
    (provider === 'openai' && process.env.OPENAI_API_KEY)

  return Response.json({
    available: hasKey ? usage.remaining > 0 : true, // fallback is always available
    aiEnabled: !!hasKey,
    remaining: usage.remaining,
    limit: usage.limit,
  })
}

/**
 * POST /api/chat — Send a message and get a response
 */
export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Check if AI is configured
    const provider = process.env.AI_PROVIDER || 'anthropic'
    const hasKey =
      (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY) ||
      (provider === 'openai' && process.env.OPENAI_API_KEY)

    if (!hasKey) {
      return fallbackResponse(messages)
    }

    // Check daily rate limit
    if (!isWithinDailyLimit()) {
      return Response.json(
        { error: 'limit_reached', message: 'O limite diário do chat foi atingido. Contacte-nos diretamente.' },
        { status: 429 },
      )
    }

    // Increment usage counter
    incrementDailyUsage()

    // Limit conversation length
    const recentMessages = messages.slice(-10)

    const result = streamText({
      model: getAIModel(),
      system: SAFEMED_SYSTEM_PROMPT,
      messages: recentMessages,
      maxTokens: 300, // Keep responses concise and cheap
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error: any) {
    console.error('[Chat API Error]', error?.message || error)

    if (error?.message?.includes('API key') || error?.message?.includes('401')) {
      return Response.json(
        { error: 'O chat AI não está configurado. Contacte-nos diretamente.' },
        { status: 503 },
      )
    }

    return Response.json(
      { error: 'Ocorreu um erro. Por favor tente novamente.' },
      { status: 500 },
    )
  }
}

/**
 * Fallback when no AI API key is configured.
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
  } else if (lastMessage.includes('implementa') || lastMessage.includes('tempo') || lastMessage.includes('demora')) {
    reply =
      'A implementação do Safemed é modular e pode ser faseada. Tipicamente, a configuração inicial demora entre 2 a 4 semanas, dependendo dos módulos selecionados. A equipa Safemed acompanha todo o processo, incluindo migração de dados e formação.'
  } else if (lastMessage.includes('saúde') || lastMessage.includes('saude') || lastMessage.includes('ocupacional')) {
    reply =
      'O módulo de Saúde no Trabalho inclui fichas clínicas parametrizáveis, fichas de aptidão digitais, agendamento inteligente, assinaturas digitais, mapeamento de riscos e notificações automáticas.'
  } else if (lastMessage.includes('segurança') || lastMessage.includes('seguranca') || lastMessage.includes('auditoria')) {
    reply =
      'O módulo de Segurança no Trabalho inclui gestão de auditorias, checklists parametrizáveis, mapa de visitas com geolocalização, relatórios personalizáveis e gestão de medidas de autoproteção.'
  } else if (lastMessage.includes('alimentar') || lastMessage.includes('haccp')) {
    reply =
      'O módulo de Segurança Alimentar inclui agendamentos HACCP, mapa de visitas com otimização de rotas, gestão de visitas fora de rota, notificações e histórico de visitas completo.'
  } else if (lastMessage.includes('epi') || lastMessage.includes('equipamento') || lastMessage.includes('proteção')) {
    reply =
      'O módulo de Gestão de EPI permite rastreabilidade completa dos equipamentos de proteção individual, alertas automáticos de validade, controlo do ciclo de vida e integração com os restantes processos.'
  } else if (lastMessage.includes('acidente') || lastMessage.includes('incidente')) {
    reply =
      'O módulo de Acidentes de Trabalho permite o registo completo de incidentes, investigação com rastreabilidade, relatórios personalizados e integração com outros módulos de segurança.'
  } else if (lastMessage.includes('químico') || lastMessage.includes('quimico') || lastMessage.includes('substância')) {
    reply =
      'O módulo de Produtos Químicos permite a catalogação com fichas de dados de segurança (FDS), alertas de validade, controlo de exposição a substâncias CMR e relação produto-trabalhador-posto de trabalho.'
  } else if (lastMessage.includes('questionário') || lastMessage.includes('questionario') || lastMessage.includes('quizzer')) {
    reply =
      'O Quizzer permite criar questionários dinâmicos, enviar em massa por email e fazer tratamento estatístico das respostas. Ideal para a consulta anual obrigatória aos trabalhadores.'
  } else if (lastMessage.includes('kube') || lastMessage.includes('analytics') || lastMessage.includes('relatório')) {
    reply =
      'O Kube Analytics é a plataforma cloud de business intelligence do Safemed. Oferece dashboards avançados, estudos epidemiológicos, relatórios personalizáveis e sistema de filtros avançados.'
  }

  // Return as Vercel AI SDK stream format
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`0:${JSON.stringify(reply)}\n`))
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
