import { NextRequest, NextResponse } from 'next/server'

const SAFEMED_KNOWLEDGE = `
Safemed é uma empresa portuguesa líder em software de segurança e saúde no trabalho (SST).
A plataforma é 100% cloud e modular, composta por 10 módulos:

1. Saúde no Trabalho - Fichas clínicas digitais, aptidões, agendamento inteligente, assinaturas digitais
2. Segurança no Trabalho - Auditorias, mapeamento geográfico, relatórios personalizáveis
3. Acidentes de Trabalho - Registo de incidentes, investigação, rastreabilidade
4. Gestão de EPI - Distribuição, alertas de validade, ciclo de vida
5. Produtos Químicos - FDS, controlo de exposição, classificações CMR
6. My Safemed - Portal self-service para trabalhadores
7. Easy Booking - Agendamento autónomo de consultas com lembretes
8. Segurança Alimentar - Visitas, rotas, gestão documental
9. Kube - Analytics e business intelligence
10. Quizzer - Inquéritos em massa com análise estatística

Três edições: Lite, Pro e Gestão Interna.
Setores: Prestadores de Serviços, Centros Hospitalares, Indústria, Construção, Aviação Civil, Ensino.

Contacto: info@safemed.solutions | +351 22 093 00 55 | Porto, Portugal
Website: safemed.solutions
`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // If Mivo API is configured, proxy to it
    const mivoUrl = process.env.MIVO_API_URL
    const mivoKey = process.env.MIVO_API_KEY

    if (mivoUrl && mivoKey) {
      const response = await fetch(`${mivoUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${mivoKey}`,
        },
        body: JSON.stringify({
          messages,
          systemPrompt: `Sou o assistente virtual do Safemed. Respondo a perguntas sobre a plataforma de SST de forma útil e profissional, em português.\n\n${SAFEMED_KNOWLEDGE}`,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({ reply: data.reply || data.content })
      }
    }

    // Fallback: simple knowledge-based response
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || ''

    let reply = 'Obrigado pela sua mensagem! Para obter informações mais detalhadas ou pedir uma demonstração, pode contactar-nos em info@safemed.solutions ou pelo +351 22 093 00 55.'

    if (lastMessage.includes('módulo') || lastMessage.includes('modulo')) {
      reply = 'O Safemed dispõe de 10 módulos: Saúde no Trabalho, Segurança no Trabalho, Acidentes de Trabalho, Gestão de EPI, Produtos Químicos, My Safemed, Easy Booking, Segurança Alimentar, Kube Analytics e Quizzer. Cada módulo funciona de forma independente mas integra-se com os restantes. Quer saber mais sobre algum em particular?'
    } else if (lastMessage.includes('demonstração') || lastMessage.includes('demo')) {
      reply = 'Ótimo! Teremos todo o gosto em mostrar-lhe o Safemed em ação. Pode agendar uma demonstração gratuita em safemed.solutions/contacto ou contactar-nos pelo +351 22 093 00 55.'
    } else if (lastMessage.includes('preço') || lastMessage.includes('custo') || lastMessage.includes('valor')) {
      reply = 'O Safemed tem três edições — Lite, Pro e Gestão Interna — adaptadas a diferentes necessidades. O preço depende dos módulos e número de utilizadores. Contacte-nos para uma proposta personalizada: info@safemed.solutions'
    } else if (lastMessage.includes('setor') || lastMessage.includes('indústria') || lastMessage.includes('industria')) {
      reply = 'Trabalhamos com diversos setores: Prestadores de Serviços, Centros Hospitalares, Indústria, Construção, Aviação Civil e Ensino. A plataforma adapta-se às necessidades específicas de cada setor.'
    } else if (lastMessage.includes('saúde') || lastMessage.includes('saude') || lastMessage.includes('ocupacional')) {
      reply = 'O módulo de Saúde no Trabalho inclui fichas clínicas digitais, gestão de aptidões, agendamento inteligente, assinaturas digitais, mapeamento de riscos e lembretes automáticos por SMS. É o nosso módulo mais utilizado!'
    }

    return NextResponse.json({ reply })
  } catch (error) {
    return NextResponse.json(
      { reply: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
