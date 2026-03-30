/**
 * Fix all Portuguese accents across CMS content.
 * Run: npx tsx scripts/fix-accents.ts
 */

const API = 'https://safemed-website-production.up.railway.app/api'
const EMAIL = 'info@safemed.solutions'
const PASSWORD = '|GVt@S&8cT70'

async function login(): Promise<string> {
  const res = await fetch(`${API}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  const data = await res.json()
  return data.token
}

async function updateService(token: string, id: number, data: any) {
  const res = await fetch(`${API}/services/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (result.errors) {
    console.error(`  ❌ Service ${id}:`, result.errors)
  } else {
    console.log(`  ✅ Service ${id}: ${result.doc?.title}`)
  }
}

async function updateIndustry(token: string, id: number, data: any) {
  const res = await fetch(`${API}/industries/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (result.errors) {
    console.error(`  ❌ Industry ${id}:`, result.errors)
  } else {
    console.log(`  ✅ Industry ${id}: ${result.doc?.title}`)
  }
}

async function main() {
  console.log('🔐 A autenticar...')
  const token = await login()
  if (!token) {
    console.error('Falha na autenticação')
    process.exit(1)
  }
  console.log('✅ Autenticado\n')

  // ══════════════════════════════════════════════════════════
  // SERVICES — Fix accents
  // ══════════════════════════════════════════════════════════
  console.log('📝 A corrigir Serviços...\n')

  // ID:1 — Saúde no Trabalho (mostly correct, fix slug + minor issues)
  await updateService(token, 1, {
    slug: 'saude-no-trabalho',
    features: [
      {
        icon: 'FileText',
        title: 'Ficha Clínica Parametrizável',
        description: 'Todo o processo clínico do trabalhador num único local, de forma dinâmica. O Safemed permite a parametrização da Ficha Clínica consoante as necessidades do corpo clínico.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Ficha de Aptidão Digital',
        description: 'Acabe com o papel digitalizando na totalidade a ficha de aptidão para o trabalho. Todo o preenchimento é feito de forma digital, permitindo a recolha de assinatura dos diversos intervenientes.',
      },
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description: 'Com o Safemed, as fichas de aptidão expiradas deixam de ser uma realidade. Alertas para agendamentos e convocatórias por e-mail ou SMS automatizado.',
      },
      {
        icon: 'CalendarDays',
        title: 'Gestão de Calendários de Médicos e Enfermeiros',
        description: 'Faça a gestão dos calendários dos profissionais de saúde, registando disponibilidades para otimizar a eficiência dos agendamentos.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Riscos por Posto de Trabalho',
        description: 'Visão imediata dos riscos a que o trabalhador está exposto, transpondo-os automaticamente para a ficha de aptidão. Informação disponível para médico, técnico e trabalhador.',
      },
      {
        icon: 'History',
        title: 'Histórico de Consultas',
        description: 'Perceba todas as consultas e exames executados num determinado período, por quem e qual o seu resultado. Acompanhamento rápido e direto.',
      },
      {
        icon: 'PenTool',
        title: 'Assinatura Digital Certificada',
        description: 'Assinatura com cartão de cidadão, cartão da Ordem dos Médicos e mesas digitalizadoras. Acabe com as fichas de aptidão em papel.',
      },
      {
        icon: 'MessageSquare',
        title: 'Notificação por SMS',
        description: 'Envie, com apenas um clique, um SMS a todos os trabalhadores com consulta/exames agendados. Envio de lembretes de agendamentos já efetuados.',
      },
      {
        icon: 'Clock',
        title: 'Declarações de Presença',
        description: 'Emissão de documento com formato editável, contendo a hora de chegada e de saída do trabalhador no local da consulta ou exame.',
      },
    ],
    highlight: {
      heading: 'A digitalização da ficha de aptidão reduz até 80% o tempo administrativo?',
      text: 'Com o Safemed, o trabalhador pode aceder à sua ficha de aptidão de forma totalmente digital, sem intervenção de terceiros. Toda a assinatura é feita eletronicamente, eliminando o papel e acelerando o processo.',
      bullets: [
        { text: 'Assinatura com Cartão de Cidadão' },
        { text: 'Notificação automática por SMS e email' },
        { text: 'Acesso direto pelo trabalhador' },
      ],
    },
  })

  // ID:2 — Segurança no Trabalho
  await updateService(token, 2, {
    title: 'Segurança no Trabalho',
    subtitle: 'Um software dinâmico para dar resposta às maiores necessidades de Segurança do Trabalho.',
    excerpt: 'Auditorias, relatórios parametrizáveis, gestão de EPI, acidentes e medidas de autoproteção. Gestão integrada de segurança ocupacional.',
    descriptionText: 'A segurança no trabalho visa identificar, avaliar e controlar riscos que possam afetar a integridade física dos trabalhadores. Envolve a implementação de medidas preventivas, a monitorização contínua do ambiente laboral e a promoção de práticas seguras.',
    featuresHeading: 'Gestão completa da segurança ocupacional',
    featuresSubheading: 'De auditorias a medidas de autoproteção, todas as ferramentas de que precisa para cumprir a legislação.',
    features: [
      {
        icon: 'ClipboardList',
        title: 'Gestão de Auditorias',
        description: 'Controlo de auditorias e do plano anual de atividades. Auditorias agendadas e pontuais com gestão de não conformidades.',
      },
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description: 'Alerta para convocatórias a executar de acordo com as regras definidas para cada cliente, ou caso ainda não exista agendamento.',
      },
      {
        icon: 'MapPin',
        title: 'Mapa com Localização Geográfica de Visitas',
        description: 'Visualize facilmente todos os agendamentos para determinado dia, semana ou mês, num mapa interativo de fácil gestão.',
      },
      {
        icon: 'FileBarChart',
        title: 'Relatórios Parametrizáveis',
        description: 'Sistematize os relatórios de risco, conformidade e outros conforme a sua necessidade. Parametrizáveis por tipo de atividade e formatação personalizada.',
      },
      {
        icon: 'Bell',
        title: 'Notificação de Marcação de Visitas e Auditorias',
        description: 'Saiba que atividades desempenhar, quando e onde. Notificações automatizadas para técnicos e clientes.',
      },
      {
        icon: 'Paperclip',
        title: 'Anexação de Documentos',
        description: 'Armazene e organize toda a documentação de Segurança da empresa. Consulta rápida e acesso imediato a todos os ficheiros.',
      },
      {
        icon: 'HardHat',
        title: 'Gestão de EPI',
        description: 'Gestão de atribuição de EPI pelos trabalhadores. Relação entre EPI e posto de trabalho para rastreabilidade total.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Gestão de Acidentes de Trabalho',
        description: 'Caracterização e registo de acidentes e incidentes de trabalho. Investigação e rastreabilidade completa.',
      },
      {
        icon: 'Shield',
        title: 'Gestão de Medidas de Autoproteção',
        description: 'Criação do plano de medidas de autoproteção, registos dinâmicos de simulacros e formações associadas.',
      },
    ],
    highlight: {
      heading: 'O planeamento inteligente de rotas pode poupar até 30% em deslocações?',
      text: 'Com o mapa de visitas do Safemed, os técnicos de segurança podem visualizar todas as visitas agendadas num mapa interativo, permitindo otimizar rotas e reduzir custos de deslocação.',
      bullets: [
        { text: 'Rotas otimizadas com geolocalização' },
        { text: 'Drag&drop para gestão de agendamentos' },
        { text: 'Notificações automáticas para todas as partes' },
      ],
    },
  })

  // ID:3 — Segurança Alimentar
  await updateService(token, 3, {
    title: 'Segurança Alimentar',
    subtitle: 'Um software adaptado para responder a todas as necessidades de Segurança Alimentar e HACCP.',
    excerpt: 'Agendamentos, mapas de visitas, gestão de rotas, notificações e histórico de visitas. Conformidade HACCP integrada.',
    descriptionText: 'A segurança alimentar abrange práticas desde a produção até ao consumo, com ênfase na prevenção de contaminações e na conformidade com normas HACCP e regulamentações vigentes.',
    featuresHeading: 'Gestão integrada de segurança alimentar',
    featuresSubheading: 'De agendamentos a histórico de visitas, todas as ferramentas para conformidade HACCP.',
    features: [
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description: 'Gestão de todos os agendamentos relacionados com segurança alimentar e HACCP, com alertas automáticos.',
      },
      {
        icon: 'MapPin',
        title: 'Mapa de Visitas',
        description: 'Visualize facilmente todos os agendamentos para determinado dia, semana ou mês, num mapa interativo de fácil gestão.',
      },
      {
        icon: 'Route',
        title: 'Gestão de Visitas Fora de Rota',
        description: 'Mecanismo inteligente de auto-sugestão para visitas não agendadas, otimizando o tempo dos técnicos em campo.',
      },
      {
        icon: 'Bell',
        title: 'Notificação de Marcação de Visitas',
        description: 'Notificações automáticas de marcação de visitas, para uma melhor organização e cumprimento de prazos.',
      },
      {
        icon: 'Paperclip',
        title: 'Anexação de Documentos',
        description: 'Aceda a todos os documentos do cliente de forma fácil, intuitiva e centralizada num único local.',
      },
      {
        icon: 'History',
        title: 'Histórico de Visitas',
        description: 'Análise de dados de visitas anteriores, mostrando alterações e evolução ao longo do tempo para cada cliente.',
      },
    ],
    highlight: {
      heading: 'A otimização de rotas pode reduzir significativamente os custos de deslocação?',
      text: 'O mapa de visitas do Safemed permite planear e otimizar as rotas dos técnicos de segurança alimentar, reduzindo quilómetros percorridos e maximizando a eficiência.',
      bullets: [
        { text: 'Rotas otimizadas com geolocalização' },
        { text: 'Sugestões inteligentes para visitas extra' },
        { text: 'Histórico completo para análise de melhorias' },
      ],
    },
  })

  // ID:4 — Acidentes de Trabalho
  await updateService(token, 4, {
    subtitle: 'Gestão dos acidentes de forma fácil e eficaz.',
    excerpt: 'Registo completo, investigação, rastreabilidade e relatórios personalizados de acidentes de trabalho.',
    descriptionText: 'O módulo de acidentes de trabalho do Safemed é uma ferramenta robusta e intuitiva para registo, investigação e análise de acidentes e incidentes, garantindo rastreabilidade completa.',
    featuresHeading: 'Registo, análise e prevenção de acidentes',
    featuresSubheading: 'Ferramentas completas para gerir todo o ciclo de vida de um acidente de trabalho.',
    features: [
      {
        icon: 'FileText',
        title: 'Registo Completo de Acidentes',
        description: 'Documentação detalhada de cada incidente, incluindo data, local, causas, consequências e medidas corretivas implementadas.',
      },
      {
        icon: 'Pencil',
        title: 'Edição e Atualizações',
        description: 'Permite alterações a registos existentes e acompanhamento posterior, com rastreabilidade total de cada modificação.',
      },
      {
        icon: 'FileBarChart',
        title: 'Relatórios de Investigação Personalizados',
        description: 'Geração de relatórios de investigação de acidentes e documentação de suporte para análise e prevenção.',
      },
      {
        icon: 'Link2',
        title: 'Integração com Outros Módulos',
        description: 'Ligação direta com ferramentas de segurança e saúde, garantindo uma visão holística de cada evento.',
      },
    ],
    highlight: {
      heading: 'A rastreabilidade completa de alterações garante total transparência?',
      text: 'Cada alteração a um registo de acidente é documentada automaticamente, permitindo auditar todo o histórico e garantir conformidade legal.',
    },
  })

  // ID:5 — Easy Booking
  await updateService(token, 5, {
    subtitle: 'Uma solução de auto-agendamento que revoluciona a gestão dos exames de saúde no trabalho.',
    excerpt: 'Auto-agendamento de consultas e exames de saúde no trabalho. Interface intuitiva para trabalhadores e gestores.',
    descriptionText: 'O Easy Booking do Safemed simplifica o processo de agendamento de consultas, exames e atividades de saúde no trabalho, oferecendo uma experiência intuitiva tanto para trabalhadores como para gestores.',
    featuresHeading: 'Agendamento inteligente e eficiente',
    featuresSubheading: 'Da marcação à confirmação, todo o processo de agendamento é simplificado e automatizado.',
    features: [
      {
        icon: 'CalendarCheck',
        title: 'Agendamento Simplificado',
        description: 'Interface intuitiva para marcar consultas e exames em poucos cliques. O trabalhador escolhe a data e hora que lhe convém.',
      },
      {
        icon: 'CalendarDays',
        title: 'Gestão de Disponibilidades',
        description: 'Integração com horários de profissionais e salas para otimizar a ocupação e evitar conflitos de agenda.',
      },
      {
        icon: 'Bell',
        title: 'Notificações Automatizadas',
        description: 'Lembretes por email ou SMS para confirmar ou alterar agendamentos, reduzindo faltas e otimizando recursos.',
      },
      {
        icon: 'Activity',
        title: 'Acompanhamento em Tempo Real',
        description: 'Atualizações instantâneas sobre marcações e estados de eventos, visíveis para gestores e trabalhadores.',
      },
    ],
    highlight: {
      heading: 'O auto-agendamento pode reduzir até 60% o tempo de gestão administrativa?',
      text: 'Com o Easy Booking, os trabalhadores podem agendar os seus próprios exames de saúde, libertando as equipas administrativas para tarefas de maior valor.',
      bullets: [
        { text: 'Agendamento autónomo pelo trabalhador' },
        { text: 'Cumprimento automático de prazos legais' },
        { text: 'Lembretes por SMS e email' },
      ],
    },
  })

  // ID:6 — Gestão de EPI
  await updateService(token, 6, {
    title: 'Gestão de EPI',
    subtitle: 'A gestão de atribuições mais fácil e integrada para Equipamentos de Proteção Individual.',
    excerpt: 'Rastreabilidade, alertas automáticos, integração e otimização de recursos para equipamentos de proteção.',
    descriptionText: 'O módulo permite às organizações registar, monitorizar e controlar a distribuição e utilização de Equipamentos de Proteção Individual de forma eficiente e centralizada.',
    featuresHeading: 'Controlo total dos equipamentos de proteção',
    featuresSubheading: 'Da atribuição à substituição, gerencie todo o ciclo de vida dos EPIs de forma integrada.',
    features: [
      {
        icon: 'ScanSearch',
        title: 'Rastreabilidade Completa',
        description: 'Registo detalhado da distribuição e uso de EPIs por trabalhador, garantindo conformidade e responsabilização.',
      },
      {
        icon: 'BellRing',
        title: 'Alertas Automáticos',
        description: 'Notificações para substituição ou renovação de EPIs vencidos ou danificados, evitando incumprimentos.',
      },
      {
        icon: 'Link2',
        title: 'Integração com Restantes Processos',
        description: 'Ligação com os restantes processos do Safemed de segurança e saúde para uma visão completa da conformidade.',
      },
      {
        icon: 'Recycle',
        title: 'Otimização de Recursos',
        description: 'Gestão eficiente para evitar desperdícios e assegurar a disponibilidade dos equipamentos necessários.',
      },
    ],
    highlight: {
      heading: 'A gestão eficiente de EPIs pode reduzir custos operacionais até 25%?',
      text: 'Com o acompanhamento do ciclo de vida de cada EPI, é possível antecipar substituições, evitar compras desnecessárias e garantir a conformidade legal.',
      bullets: [
        { text: 'Ciclo de vida completo de cada EPI' },
        { text: 'Conformidade legal garantida' },
        { text: 'Redução de desperdícios comprovada' },
      ],
    },
  })

  // ID:7 — Produtos Químicos
  await updateService(token, 7, {
    title: 'Produtos Químicos',
    subtitle: 'Gestão de produtos químicos de forma integrada e dinâmica.',
    excerpt: 'Fichas de dados de segurança, controlo de exposição CMR, alertas automáticos e integração centralizada.',
    descriptionText: 'Uma ferramenta essencial para garantir a segurança e conformidade na manipulação de substâncias perigosas. Com funcionalidades avançadas para registo, catalogação, gestão de fichas de segurança e controlo de exposição dos trabalhadores.',
    featuresHeading: 'Segurança química sem compromissos',
    featuresSubheading: 'Controle total sobre substâncias perigosas, fichas de segurança e exposição dos trabalhadores.',
    features: [
      {
        icon: 'FlaskConical',
        title: 'Registo Detalhado',
        description: 'Catalogação completa de produtos químicos com informações essenciais: composição, classificação e fichas de dados de segurança.',
      },
      {
        icon: 'BellRing',
        title: 'Alertas Automáticos',
        description: 'Notificações para revisões de fichas, validade de produtos e limites de exposição atingidos.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Controlo de Exposição',
        description: 'Relação entre produto químico e substâncias perigosas (como CMR), com análise de exposição por trabalhador e posto de trabalho.',
      },
      {
        icon: 'Link2',
        title: 'Integração Centralizada',
        description: 'Ligação direta com outros módulos do Safemed para uma gestão holística de segurança e saúde.',
      },
    ],
    highlight: {
      heading: 'A correta gestão de substâncias CMR é uma obrigação legal?',
      text: 'Com o Safemed, pode relacionar automaticamente cada produto químico com as substâncias perigosas que contém, controlando a exposição dos trabalhadores e garantindo o cumprimento da legislação.',
      bullets: [
        { text: 'Fichas de segurança sempre atualizadas' },
        { text: 'Alertas de validade de produtos' },
        { text: 'Relação produto-trabalhador-posto de trabalho' },
      ],
    },
  })

  // ID:8 — My Safemed
  await updateService(token, 8, {
    subtitle: 'Toda a informação na mão dos trabalhadores.',
    excerpt: 'Portal do trabalhador para consulta de fichas de aptidão, histórico de exames, reporte de incidentes e acesso a documentação.',
    descriptionText: 'O portal My Safemed é uma plataforma intuitiva e acessível, projetada para envolver os trabalhadores na gestão da sua própria segurança e saúde ocupacional.',
    featuresHeading: 'O trabalhador no centro da gestão',
    featuresSubheading: 'Acesso direto à informação de segurança e saúde, promovendo transparência e responsabilização.',
    features: [
      {
        icon: 'UserCircle',
        title: 'Acesso Personalizado',
        description: 'Consulta de fichas de aptidão, histórico de exames e pedidos diretamente pela plataforma, 24 horas por dia.',
      },
      {
        icon: 'MessageCircle',
        title: 'Comunicação Simplificada',
        description: 'Ferramentas para reportar incidentes e consultar documentos de segurança e saúde de forma direta.',
      },
      {
        icon: 'Eye',
        title: 'Consulta dos Riscos',
        description: 'Visualização dos riscos associados ao posto de trabalho e medidas preventivas aplicáveis.',
      },
      {
        icon: 'Users',
        title: 'Capacitação e Transparência',
        description: 'Promove maior envolvimento e responsabilidade dos trabalhadores na cultura de segurança da organização.',
      },
    ],
    highlight: {
      heading: 'O envolvimento direto dos trabalhadores melhora a cultura de segurança?',
      text: 'Quando os trabalhadores têm acesso à sua informação e podem reportar incidentes diretamente, a cultura de segurança da organização fortalece-se naturalmente.',
      bullets: [
        { text: 'Fichas de aptidão acessíveis 24/7' },
        { text: 'Reporte de incidentes em tempo real' },
        { text: 'Consulta de riscos do posto de trabalho' },
      ],
    },
  })

  // ID:9 — Kube Analytics
  await updateService(token, 9, {
    subtitle: 'Recolha e tratamento dos dados dos trabalhadores.',
    excerpt: 'Recolha e tratamento de dados dos trabalhadores. Estudos epidemiológicos, relatórios de gestão e análise avançada.',
    descriptionText: 'O KUBE é uma ferramenta cloud para recolha e tratamento de dados dos trabalhadores, permitindo análises avançadas, estudos epidemiológicos e relatórios de gestão personalizados.',
    featuresHeading: 'Dados que impulsionam decisões',
    featuresSubheading: 'De estudos epidemiológicos a relatórios de gestão, o Kube transforma dados em ações concretas.',
    features: [
      {
        icon: 'History',
        title: 'Histórico Detalhado de Operações',
        description: 'O que foi feito? Por quem? A execução corresponde com o forecast? Tenha visibilidade total sobre todas as operações.',
      },
      {
        icon: 'CalendarRange',
        title: 'Planeamento Simples',
        description: 'Onde está o maior atraso na execução de serviços? Quais os desvios ao planeamento? Identifique e corrija rapidamente.',
      },
      {
        icon: 'Microscope',
        title: 'Estudos Epidemiológicos',
        description: 'Análise detalhada de comportamentos de risco por cliente, com dados agregados e filtráveis para investigação.',
      },
      {
        icon: 'Plug',
        title: 'Família Safemed',
        description: 'Mesmo login, mesma fonte de dados. Integração total com o ecossistema Safemed para consistência de informação.',
      },
      {
        icon: 'Link2',
        title: 'Integração',
        description: 'Possibilidade de integração com outras ferramentas e sistemas externos para enriquecer a análise de dados.',
      },
      {
        icon: 'FileBarChart',
        title: 'Relatórios',
        description: 'Desenvolvimento rápido de novos reports, adaptados às necessidades específicas de cada organização.',
      },
      {
        icon: 'SlidersHorizontal',
        title: 'Sistema de Filtros',
        description: 'Possibilidade de combinação de inúmeros filtros para análise detalhada e segmentação de dados.',
      },
    ],
    highlight: {
      heading: 'A análise de dados pode antecipar riscos antes de se tornarem acidentes?',
      text: 'Com o Kube, é possível identificar padrões e comportamentos de risco através de estudos epidemiológicos e análises avançadas, permitindo intervenção preventiva.',
    },
  })

  // ID:10 — Quizzer
  await updateService(token, 10, {
    subtitle: 'Ferramenta de questionários para recolha e análise de dados.',
    excerpt: 'Questionários dinâmicos em massa, tratamento estatístico de respostas e consulta anual aos trabalhadores.',
    descriptionText: 'O Quizzer é um addon do Safemed que permite o envio de questionários em massa para trabalhadores, com tratamento estatístico automático das respostas.',
    featuresHeading: 'Questionários inteligentes e automatizados',
    featuresSubheading: 'Da criação ao envio e análise, tudo num único fluxo integrado com o Safemed.',
    features: [
      {
        icon: 'FormInput',
        title: 'Questionários Dinâmicos',
        description: 'Crie os questionários à sua medida, com todos os tipos de campos necessários para recolher informação relevante.',
      },
      {
        icon: 'BarChart3',
        title: 'Tratamento Estatístico de Respostas',
        description: 'Faça o tratamento estatístico das respostas, obtendo dados objetivos para fundamentar decisões e intervenções.',
      },
      {
        icon: 'Users',
        title: 'Consulta aos Trabalhadores',
        description: 'Crie anualmente formulários de consulta aos trabalhadores, dando cumprimento às obrigações legais de forma simples.',
      },
      {
        icon: 'Send',
        title: 'Envio Automatizado dos Questionários',
        description: 'Com a integração direta com a base de dados Safemed, os questionários são enviados automaticamente para os destinatários corretos.',
      },
    ],
    highlight: {
      heading: 'A consulta regular aos trabalhadores é uma obrigação legal?',
      text: 'Com o Quizzer, pode criar e enviar automaticamente os formulários de consulta anual aos trabalhadores, garantindo conformidade legal e recolhendo feedback valioso.',
      bullets: [
        { text: 'Campos dinâmicos e personalizáveis' },
        { text: 'Envio automático por email' },
        { text: 'Gráficos e estatísticas em tempo real' },
      ],
    },
  })

  // ══════════════════════════════════════════════════════════
  // INDUSTRIES — Fix accents
  // ══════════════════════════════════════════════════════════
  console.log('\n📝 A corrigir Setores...\n')

  // Get industry IDs
  const indRes = await fetch(`${API}/industries?limit=20`)
  const indData = await indRes.json()
  const industries = indData.docs as any[]

  const industryFixes: Record<string, any> = {
    'prestadores-servicos': {
      title: 'Prestação de Serviços',
      subtitle: 'Solução completa para empresas prestadoras de serviços de Segurança e Saúde no Trabalho.',
      excerpt: 'SST para prestadores de serviços: gestão de clientes e contratos, processos administrativos, faturação e conformidade legal.',
      descriptionText: 'Solução completa para empresas prestadoras de serviços de Segurança e Saúde no Trabalho. Gestão de clientes, contratos, processos administrativos e faturação numa única plataforma.',
    },
    'industria': {
      title: 'Indústria',
      subtitle: 'Soluções de SST para o setor industrial: automóvel, alimentar, produção e metalomecânica.',
      excerpt: 'SST para indústria: gestão de saúde e segurança, integração com RH (SAP, Primavera), e conformidade para ambientes industriais.',
      descriptionText: 'Soluções de SST para o setor industrial: automóvel, alimentar, produção e metalomecânica. Integração com sistemas de RH e gestão de riscos específicos do setor.',
    },
    'ensino': {
      title: 'Ensino',
      subtitle: 'Gestão de saúde e segurança ocupacional para instituições de ensino. Universidades, politécnicos e escolas.',
      excerpt: 'SST para ensino: saúde ocupacional de docentes e funcionários, segurança em espaços educativos e conformidade regulamentar.',
      descriptionText: 'Gestão de saúde e segurança ocupacional para instituições de ensino. Universidades, politécnicos e escolas com funcionalidades adaptadas às necessidades do setor educativo.',
    },
    'construcao': {
      title: 'Construção',
      subtitle: 'SST para ambientes dinâmicos e desafiantes. Gestão de obras, EPIs, subempreiteiros e segurança em estaleiro.',
      excerpt: 'SST para construção: gestão de obras, EPIs por trabalhador e função, validação de subempreiteiros e conformidade em estaleiro.',
      descriptionText: 'SST para ambientes dinâmicos e desafiantes. Gestão de obras, EPIs, subempreiteiros e segurança em estaleiro com ferramentas adaptadas ao setor da construção.',
    },
    'centros-hospitalares': {
      title: 'Centros Hospitalares e Unidades Locais',
      subtitle: 'Gestão integrada de saúde e segurança ocupacional para centros hospitalares, com segregação de dados e integração SNS.',
      excerpt: 'SST para centros hospitalares: segregação de dados de saúde, integração SNS e Sclinico, e gestão de riscos específicos do setor hospitalar.',
      descriptionText: 'Gestão integrada de saúde e segurança ocupacional para centros hospitalares, com segregação de dados clínicos, integração com sistemas nacionais de saúde e gestão de riscos biológicos.',
    },
    'aviacao-civil': {
      title: 'Aviação Civil',
      subtitle: 'Solução especializada para o setor da aviação civil. Medicina aeronáutica, gestão de equipas e conformidade ANAC/EASA.',
      excerpt: 'SST especializada para aviação civil: medicina aeronáutica, gestão de equipas de voo e conformidade com regulamentação ANAC e EASA.',
      descriptionText: 'Solução especializada para o setor da aviação civil. Medicina aeronáutica, gestão de equipas de voo e terra, e conformidade com regulamentação ANAC e EASA.',
    },
  }

  for (const ind of industries) {
    const fix = industryFixes[ind.slug]
    if (fix) {
      await updateIndustry(token, ind.id, fix)
    }
  }

  console.log('\n✅ Todas as correções aplicadas!')
}

main().catch(console.error)
