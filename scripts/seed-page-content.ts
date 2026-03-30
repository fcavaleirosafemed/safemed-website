/**
 * Seed script — populates the PageContent global with the hardcoded content
 * that was previously embedded in the static page components.
 *
 * Usage:
 *   npx tsx scripts/seed-page-content.ts
 *
 * Environment variables:
 *   PAYLOAD_API — base URL of the running Payload instance
 *                 (default: http://localhost:3000)
 *   PAYLOAD_EMAIL / PAYLOAD_PASSWORD — admin credentials
 */

const API = process.env.PAYLOAD_API || 'http://localhost:3000'
const EMAIL = process.env.PAYLOAD_EMAIL || 'info@safemed.solutions'
const PASSWORD = process.env.PAYLOAD_PASSWORD || '|GVt@S&8cT70'

async function login(): Promise<string> {
  const res = await fetch(`${API}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  if (!res.ok) throw new Error(`Login failed: ${res.status}`)
  const data = await res.json()
  return data.token
}

async function seedPageContent(token: string) {
  const body = {
    // ── Sobre Nós ──
    sobreHeroLabel: 'Sobre Nós',
    sobreHeroTitle: 'A Safemed Solutions',
    sobreHeroDescription:
      'A Safemed Solutions é uma empresa jovem e inovadora, especialista em soluções SaaS de gestão de saúde, segurança e bem-estar no trabalho. Desenvolvemos tecnologia que transforma a forma como as organizações protegem os seus colaboradores.',
    sobreMissionTitle: 'Tornar a SST simples, eficiente e acessível',
    sobreMissionText1:
      'A nossa missão é simplificar a gestão da segurança e saúde no trabalho através de tecnologia de ponta. Acreditamos que cada organização, independentemente da sua dimensão ou setor, merece ferramentas profissionais para proteger os seus colaboradores.',
    sobreMissionText2:
      'Desde prestadores de serviços externos até grandes grupos industriais, passando por centros hospitalares e instituições de ensino, o Safemed adapta-se à realidade de cada cliente.',
    sobreStats: [
      { value: '500+', label: 'Organizações' },
      { value: '300K+', label: 'Trabalhadores geridos' },
      { value: '15+', label: 'Anos de experiência' },
      { value: '99.9%', label: 'Uptime' },
    ],
    sobreValuesHeading: 'O que nos define',
    sobreValues: [
      {
        icon: 'Lightbulb',
        title: 'Inovação',
        description:
          'Investimos continuamente em investigação e desenvolvimento para manter a plataforma na vanguarda da tecnologia aplicada à SST.',
      },
      {
        icon: 'Heart',
        title: 'Compromisso',
        description:
          'Cada cliente é um parceiro. Trabalhamos lado a lado para garantir que a solução responde às necessidades reais da organização.',
      },
      {
        icon: 'Shield',
        title: 'Segurança',
        description:
          'A segurança dos dados é a base de tudo. RGPD, encriptação e controlos de acesso rigorosos em toda a plataforma.',
      },
      {
        icon: 'Zap',
        title: 'Simplicidade',
        description:
          'Tecnologia complexa com uma experiência simples. Interfaces intuitivas que qualquer utilizador consegue dominar rapidamente.',
      },
    ],
    sobreVersionsHeading: 'Uma solução para cada necessidade',
    sobreVersionsSubheading: 'Três versões pensadas para diferentes realidades organizacionais.',
    sobreVersions: [
      {
        name: 'Safemed Lite',
        description:
          'Versão essencial para pequenas e médias empresas que necessitam de gerir os processos básicos de saúde e segurança no trabalho.',
        features: [
          { text: 'Saúde no Trabalho' },
          { text: 'Fichas de aptidão' },
          { text: 'Relatório Único' },
          { text: 'Gestão de colaboradores' },
          { text: 'Portal MySafemed' },
        ],
        highlight: false,
      },
      {
        name: 'Safemed Pro',
        description:
          'Solução completa para organizações que precisam de gestão integrada de todos os processos de SST com módulos avançados.',
        features: [
          { text: 'Tudo do Lite' },
          { text: 'Segurança no Trabalho' },
          { text: 'Acidentes de Trabalho' },
          { text: 'Gestão de EPI' },
          { text: 'Produtos Químicos' },
          { text: 'EasyBooking' },
          { text: 'Kube Analytics' },
        ],
        highlight: true,
      },
      {
        name: 'Gestão Interna',
        description:
          'Para organizações com serviços internos de SST que necessitam de autonomia total na gestão dos seus processos.',
        features: [
          { text: 'Todos os módulos Pro' },
          { text: 'Configuração autónoma' },
          { text: 'Integração com RH' },
          { text: 'Multi-estabelecimento' },
          { text: 'Relatórios personalizados' },
        ],
        highlight: false,
      },
    ],
    sobreTeamTitle: 'Pessoas que fazem a diferença',
    sobreTeamText1:
      'A equipa Safemed é composta por profissionais apaixonados por tecnologia e pela segurança no trabalho. Engenheiros, designers, especialistas em SST e gestores de projeto que trabalham juntos para criar a melhor plataforma do mercado.',
    sobreTeamText2:
      'Sediados no Porto, servimos clientes em todo o território nacional e contamos com parceiro na Suíça para o mercado internacional.',
    sobreCtaTitle: 'Quer conhecer melhor o Safemed?',
    sobreCtaText:
      'Agende uma demonstração e descubra como a nossa plataforma pode transformar a gestão de SST na sua organização.',

    // ── Carreiras ──
    carreirasHeroTitle: 'Junte-se à nossa equipa!',
    carreirasHeroDescription:
      'Estamos a construir o futuro da segurança e saúde no trabalho. Se é curioso, inteligente e inovador, queremos conhecê-lo.',
    carreirasCultureHeading: 'O que nos move',
    carreirasCultureSubheading:
      'Um ambiente de simplicidade, lealdade e abertura onde as boas ideias vêm de qualquer lugar.',
    carreirasCultureValues: [
      {
        icon: 'Lightbulb',
        title: 'Mentes Curiosas',
        description:
          'Valorizamos a curiosidade e a vontade de aprender. Cada dia é uma oportunidade para explorar novas ideias e abordagens.',
      },
      {
        icon: 'Sparkles',
        title: 'Inovação Inteligente',
        description:
          'Não inovamos por inovar. Cada feature, cada decisão técnica tem um propósito claro: resolver problemas reais dos nossos clientes.',
      },
      {
        icon: 'Heart',
        title: 'Lealdade e Abertura',
        description:
          'Um ambiente de simplicidade, lealdade e abertura. Comunicamos de forma transparente e tratamo-nos como parceiros, não como números.',
      },
      {
        icon: 'Users',
        title: 'Equipa Unida',
        description:
          'Trabalhamos juntos, crescemos juntos. O sucesso de um é o sucesso de todos. Celebramos as vitórias e aprendemos com os desafios.',
      },
    ],
    carreirasBenefitsTitle: 'Porque trabalhar na Safemed',
    carreirasBenefits: [
      { text: 'Equipa pequena com grande impacto' },
      { text: 'Tecnologia moderna (React, Next.js, TypeScript)' },
      { text: 'Flexibilidade e autonomia no trabalho' },
      { text: 'Escritório no centro do Porto' },
      { text: 'Ambiente informal e colaborativo' },
      { text: 'Formação contínua e crescimento profissional' },
      { text: 'Participação ativa nas decisões de produto' },
    ],
    carreirasPositionsHeading: 'Posições disponíveis',
    carreirasCtaTitle: 'Não encontrou a vaga ideal?',
    carreirasCtaText:
      'Envie-nos a sua candidatura espontânea. Estamos sempre atentos a talento excecional.',
    carreirasCtaEmail: 'info@safemed.solutions',

    // ── Contacto ──
    contactoHeroTitle: 'Fale connosco',
    contactoHeroDescription:
      'Quer saber mais sobre o Safemed ou pedir uma demonstração? Estamos disponíveis para ajudar.',
    contactoPartnerName: 'BesTeam',
    contactoPartnerDescription:
      'O nosso parceiro na Suíça para o mercado de SST europeu. A BesTeam complementa a nossa oferta com serviços de consultoria e implementação no mercado helvético.',
    contactoPartnerWebsite: 'https://www.besteam.ch',
    contactoPartnerEmail: 'mjanelas@besteam.ch',
    contactoPartnerPhone: '+41 79 276 67 04',
    contactoMapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5!2d-8.6308!3d41.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e18b21e92b%3A0x0!2sRua+de+Azevedo+Coutinho+39%2C+Porto!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt',

    // ── Blog ──
    blogHeroTitle: 'Notícias e Artigos',
    blogHeroDescription:
      'Acompanhe as novidades da Safemed, eventos do setor e artigos sobre segurança e saúde no trabalho.',
    blogCtaTitle: 'Fique a par das novidades',
    blogCtaText:
      'Acompanhe-nos nas redes sociais para receber as últimas notícias sobre SST e as atualizações da plataforma Safemed.',
  }

  const res = await fetch(`${API}/api/globals/page-content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to seed page-content: ${res.status} — ${text}`)
  }

  console.log('✅ PageContent global seeded successfully')
}

async function seedJobPositions(token: string) {
  const positions = [
    {
      title: 'Junior Project & Support Manager',
      department: 'Operações',
      location: 'Porto',
      type: 'full-time',
      description:
        'Procuramos alguém com gosto pelo contacto com o cliente e pela gestão de projetos. Irás acompanhar implementações, dar suporte a clientes e garantir que cada projeto é entregue com excelência.',
      responsibilities: [
        { text: 'Acompanhamento de projetos de implementação de novas contas' },
        { text: 'Suporte técnico e funcional a clientes existentes' },
        { text: 'Formação de utilizadores na plataforma Safemed' },
        { text: 'Recolha de feedback e comunicação com a equipa de desenvolvimento' },
        { text: 'Gestão de documentação de projeto' },
      ],
      requirements: [
        { text: 'Licenciatura em Gestão, Engenharia ou área relevante' },
        { text: 'Boa capacidade de comunicação e relacionamento interpessoal' },
        { text: 'Organização e atenção ao detalhe' },
        { text: 'Conhecimentos de informática na ótica do utilizador' },
        { text: 'Valorizamos conhecimento em SST (não obrigatório)' },
      ],
      active: true,
      order: 1,
    },
    {
      title: 'Junior Developer',
      department: 'Engenharia',
      location: 'Porto',
      type: 'full-time',
      description:
        'Junta-te à equipa de engenharia e ajuda-nos a construir a próxima geração da plataforma Safemed. Trabalharás com tecnologias modernas num ambiente ágil e colaborativo.',
      responsibilities: [
        { text: 'Desenvolvimento de novas funcionalidades na plataforma' },
        { text: 'Correção de bugs e melhoria contínua do código' },
        { text: 'Participação em code reviews e sessões de design técnico' },
        { text: 'Colaboração com a equipa de produto e design' },
        { text: 'Escrita de testes e documentação técnica' },
      ],
      requirements: [
        { text: 'Licenciatura em Engenharia Informática ou similar' },
        { text: 'Conhecimentos de JavaScript/TypeScript' },
        { text: 'Familiaridade com React ou frameworks similares' },
        { text: 'Vontade de aprender e evoluir tecnicamente' },
        { text: 'Valorizamos experiência com Node.js e bases de dados' },
      ],
      active: true,
      order: 2,
    },
  ]

  for (const position of positions) {
    const res = await fetch(`${API}/api/job-positions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(position),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error(`❌ Failed to create position "${position.title}": ${res.status} — ${text}`)
    } else {
      console.log(`✅ Created position: ${position.title}`)
    }
  }
}

async function main() {
  console.log('🌱 Seeding PageContent global and JobPositions...')
  console.log(`   API: ${API}`)

  const token = await login()
  console.log('🔑 Authenticated')

  await seedPageContent(token)
  await seedJobPositions(token)

  console.log('\n🎉 Done!')
}

main().catch((err) => {
  console.error('💥 Error:', err.message)
  process.exit(1)
})
