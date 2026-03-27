/**
 * Seed script for Safemed Website - Payload CMS
 *
 * Populates Services, Industries, and Pages collections via the REST API.
 * Run with: npx tsx scripts/seed.ts
 */

const API_BASE = 'https://safemed-website-production.up.railway.app/api'
const EMAIL = process.env.SEED_EMAIL || 'admin@safemed.solutions'
const PASSWORD = process.env.SEED_PASSWORD || 'change-me'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let token = ''

async function login() {
  console.log('Logging in...')
  const res = await fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Login failed (${res.status}): ${text}`)
  }
  const data = await res.json()
  token = data.token
  console.log('Login successful.')
}

async function post(collection: string, body: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}/${collection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text()
    console.error(`  ERROR creating in ${collection}: ${res.status} - ${text}`)
    return null
  }
  const data = await res.json()
  console.log(`  Created ${collection}: ${data.doc?.title ?? data.doc?.slug ?? data.doc?.id}`)
  return data.doc
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---------------------------------------------------------------------------
// Services data (Modules)
// ---------------------------------------------------------------------------

const services: Record<string, unknown>[] = [
  // ─── Core modules ───
  {
    title: 'Saude no Trabalho',
    slug: 'saude-no-trabalho',
    category: 'core',
    order: 1,
    icon: 'Heart',
    subtitle:
      'Um software adaptado para responder a todas as necessidades de Saude do Trabalho e dos seus trabalhadores.',
    excerpt:
      'Fichas clinicas parametrizaveis, aptidoes digitais, agendamentos e assinatura digital certificada. Gestao integrada de saude ocupacional com o Safemed.',
    descriptionText:
      'A saude no trabalho tem como objetivo salvaguardar o bem-estar global dos trabalhadores, abordando fatores fisicos, mentais e sociais no ambiente laboral. Procura tambem identificar e mitigar riscos ocupacionais, promovendo praticas seguras.',
    heroImageUrl: '/images/modules/saude-trabalho-hero.jpg',
    featuresHeading: 'Tudo o que precisa para gerir a saude ocupacional',
    featuresSubheading:
      'Desde fichas clinicas ate assinatura digital, o Safemed cobre todas as areas da saude no trabalho.',
    features: [
      {
        icon: 'FileText',
        title: 'Ficha Clinica Parametrizavel',
        description:
          'Todo o processo clinico do trabalhador num unico local, de forma dinamica. O Safemed permite a parametrizacao da Ficha Clinica consoante as necessidades do corpo clinico.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Ficha de Aptidao Digital',
        description:
          'Acabe com o papel digitalizando na totalidade a ficha de aptidao para o trabalho. Todo o preenchimento e feito de forma digital, permitindo a recolha de assinatura dos diversos intervenientes.',
      },
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description:
          'Com o Safemed, as fichas de aptidao expiradas deixam de ser uma realidade. Alertas para agendamentos e convocatorias por e-mail ou SMS automatizado.',
      },
      {
        icon: 'CalendarDays',
        title: 'Gestao de Calendarios de Medicos e Enfermeiros',
        description:
          'Faca a gestao dos calendarios dos profissionais de saude, registando disponibilidades para otimizar a eficiencia dos agendamentos.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Riscos por Posto de Trabalho',
        description:
          'Visao imediata dos riscos a que o trabalhador esta exposto, transpondo-os automaticamente para a ficha de aptidao. Informacao disponivel para medico, tecnico e trabalhador.',
      },
      {
        icon: 'History',
        title: 'Historico de Consultas',
        description:
          'Perceba todas as consultas e exames executados num determinado periodo, por quem e qual o seu resultado. Acompanhamento rapido e direto.',
      },
      {
        icon: 'PenTool',
        title: 'Assinatura Digital Certificada',
        description:
          'Assinatura com cartao de cidadao, cartao da Ordem dos Medicos e mesas digitalizadoras. Acabe com as fichas de aptidao em papel.',
      },
      {
        icon: 'MessageSquare',
        title: 'Notificacao por SMS',
        description:
          'Envie, com apenas um clique, um SMS a todos os trabalhadores com consulta/exames agendados. Envio de lembretes de agendamentos ja efetuados.',
      },
      {
        icon: 'Clock',
        title: 'Declaracoes de Presenca',
        description:
          'Emissao de documento com formato editavel, contendo a hora de chegada e de saida do trabalhador no local da consulta ou exame.',
      },
    ],
    highlight: {
      heading:
        'A digitalizacao da ficha de aptidao reduz ate 80% o tempo administrativo?',
      text: 'Com o Safemed, o trabalhador pode aceder a sua ficha de aptidao de forma totalmente digital, sem intervencao de terceiros. Toda a assinatura e feita eletronicamente, eliminando o papel e acelerando o processo.',
      bullets: [
        { text: 'Assinatura com Cartao de Cidadao' },
        { text: 'Notificacao automatica por SMS e email' },
        { text: 'Acesso direto pelo trabalhador' },
      ],
    },
  },
  {
    title: 'Seguranca no Trabalho',
    slug: 'seguranca-no-trabalho',
    category: 'core',
    order: 2,
    icon: 'Shield',
    subtitle:
      'Um software dinamico para dar resposta as maiores necessidades de Seguranca do Trabalho na sua empresa.',
    excerpt:
      'Auditorias, relatorios parametrizaveis, gestao de EPI, acidentes e medidas de autoprotecao. Gestao completa da seguranca ocupacional com o Safemed.',
    descriptionText:
      'A seguranca no trabalho visa identificar, avaliar e controlar riscos que possam causar acidentes, lesoes ou danos a saude dos trabalhadores. Atraves de normas, procedimentos e formacao, cria ambientes de trabalho mais seguros.',
    heroImageUrl: '/images/modules/seguranca-trabalho-hero.jpg',
    featuresHeading: 'Gestao completa da seguranca ocupacional',
    featuresSubheading:
      'De auditorias a medidas de autoprotecao, todas as ferramentas de que precisa para garantir a seguranca.',
    features: [
      {
        icon: 'ClipboardList',
        title: 'Gestao de Auditorias',
        description:
          'Controlo de auditorias e do plano anual de atividades. Auditorias de avaliacao de risco, conformidades, avaliacao de maquinas e muitos outros tipos, sempre em dia.',
      },
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description:
          'Alerta para convocatorias a executar de acordo com as regras legais. Mecanismo inteligente de gestao de agendamentos por drag&drop, por medico, enfermeiro ou sala.',
      },
      {
        icon: 'MapPin',
        title: 'Mapa com Localizacao Geografica de Visitas',
        description:
          'Visualize facilmente todos os agendamentos para determinado dia e deixe que o Safemed lhe diga qual a rota mais eficaz, poupando tempo e dinheiro.',
      },
      {
        icon: 'FileBarChart',
        title: 'Relatorios Parametrizaveis',
        description:
          'Sistematize os relatorios de risco, conformidade e outros consoante os objetivos e necessidades da sua empresa. Visualize os dados em tempo real.',
      },
      {
        icon: 'Bell',
        title: 'Notificacao de Marcacao de Visitas e Auditorias',
        description:
          'Saiba que atividades desempenhar, quando e onde. Notificacoes automaticas para melhor gestao da agenda dos Tecnicos de Seguranca.',
      },
      {
        icon: 'Paperclip',
        title: 'Anexacao de Documentos',
        description:
          'Armazene e organize toda a documentacao de Seguranca da empresa de forma intuitiva. Anexe e disponibilize documentos diretamente no sistema.',
      },
      {
        icon: 'HardHat',
        title: 'Gestao de EPI',
        description:
          'Gestao de atribuicao de EPI pelos trabalhadores. Relacao entre EPI, Posto de Trabalho e Tarefa. Producao de documento de rececao com assinatura.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Gestao de Acidentes de Trabalho',
        description:
          'Caracterizacao e registo de acidentes e incidentes de trabalho. Fluxos de aprovacao, producao de relatorio e registo pelo trabalhador.',
      },
      {
        icon: 'Shield',
        title: 'Gestao de Medidas de Auto Protecao',
        description:
          'Criacao do plano de medidas de autoprotecao, registos dinamicos, acompanhamento de vistorias, formacoes e simulacros.',
      },
    ],
    highlight: {
      heading:
        'O planeamento inteligente de rotas pode poupar ate 30% em deslocacoes?',
      text: 'Com o mapa de visitas do Safemed, os tecnicos de seguranca podem visualizar todas as visitas agendadas e otimizar as rotas automaticamente, reduzindo custos e tempo de deslocacao.',
      bullets: [
        { text: 'Rotas otimizadas com geolocalizacao' },
        { text: 'Drag&drop para gestao de agendamentos' },
        { text: 'Notificacoes automaticas para todas as partes' },
      ],
    },
  },
  {
    title: 'Seguranca Alimentar',
    slug: 'seguranca-alimentar',
    category: 'core',
    order: 3,
    icon: 'UtensilsCrossed',
    subtitle:
      'Um software adaptado para responder a todas as necessidades de Seguranca Alimentar dos seus clientes.',
    excerpt:
      'Agendamentos, mapas de visitas, gestao de rotas, notificacoes e historico de visitas para seguranca alimentar. Gestao HACCP integrada com o Safemed.',
    descriptionText:
      'A seguranca alimentar abrange praticas desde a producao ate ao consumo, com enfase em controlos de higiene, analise de riscos e conformidade regulamentar. O Safemed oferece todas as ferramentas necessarias para uma gestao eficaz.',
    heroImageUrl: '/images/modules/modulos-hero-meeting.jpg',
    featuresHeading: 'Gestao integrada de seguranca alimentar',
    featuresSubheading:
      'De agendamentos a historico de visitas, todas as ferramentas para conformidade HACCP e normas alimentares.',
    features: [
      {
        icon: 'CalendarClock',
        title: 'Agendamentos',
        description:
          'Gestao de todos os agendamentos relacionados com seguranca alimentar, garantindo cumprimento dos prazos legais.',
      },
      {
        icon: 'MapPin',
        title: 'Mapa de Visitas',
        description:
          'Visualize facilmente todos os agendamentos para determinado dia e deixe que o Safemed lhe diga qual a rota mais eficaz, poupando tempo e dinheiro.',
      },
      {
        icon: 'Route',
        title: 'Gestao de Visitas Fora de Rota',
        description:
          'Mecanismo inteligente de auto-sugestao para visitas nao agendadas dentro de rotas existentes, maximizando eficiencia.',
      },
      {
        icon: 'Bell',
        title: 'Notificacao de Marcacao de Visitas',
        description:
          'Notificacoes automaticas de marcacao de visitas, para uma melhor gestao da agenda dos tecnicos.',
      },
      {
        icon: 'Paperclip',
        title: 'Anexacao de Documentos',
        description:
          'Aceda a todos os documentos do cliente de forma facil, intuitiva e preservando o ambiente. Tudo digital.',
      },
      {
        icon: 'History',
        title: 'Historico de Visitas',
        description:
          'Analise de dados de visitas anteriores, mostrando alteracoes de valores e acompanhamento de melhorias ao longo do tempo.',
      },
    ],
    highlight: {
      heading:
        'A otimizacao de rotas pode reduzir significativamente os custos de deslocacao?',
      text: 'O mapa de visitas do Safemed permite planear e otimizar as rotas dos tecnicos de seguranca alimentar, com sugestoes inteligentes para visitas fora de rota e notificacoes automaticas para todas as partes envolvidas.',
      bullets: [
        { text: 'Rotas otimizadas com geolocalizacao' },
        { text: 'Sugestoes inteligentes para visitas extra' },
        { text: 'Historico completo para analise de melhorias' },
      ],
    },
  },

  // ─── Addon modules ───
  {
    title: 'Acidentes de Trabalho',
    slug: 'acidentes-de-trabalho',
    category: 'addon',
    order: 4,
    icon: 'AlertTriangle',
    subtitle: 'Gestao dos acidentes de forma facil e eficaz.',
    excerpt:
      'Registo completo, investigacao, rastreabilidade e relatorios personalizados de acidentes de trabalho. Gestao eficaz com o Safemed.',
    descriptionText:
      'O modulo de acidentes de trabalho do Safemed e uma ferramenta robusta e intuitiva que permite a gestao eficaz de registos e analise de incidentes no local de trabalho. Inclui documentacao detalhada, edicao de dados, rastreabilidade de alteracoes e geracao de relatorios personalizados.',
    heroImageUrl: '/images/modules/modulos-hero-meeting.jpg',
    featuresHeading: 'Registo, analise e prevencao de acidentes',
    featuresSubheading:
      'Ferramentas completas para gerir todo o ciclo de vida de um acidente de trabalho.',
    features: [
      {
        icon: 'FileWarning',
        title: 'Registo Completo de Acidentes',
        description:
          'Documentacao detalhada de cada incidente, incluindo data, local e descricao, alem de campos adicionais para futuro tratamento estatistico.',
      },
      {
        icon: 'Pencil',
        title: 'Edicao e Atualizacoes',
        description:
          'Permite alteracoes a registos existentes e acompanhamento por diversos intervenientes, garantindo a precisao da informacao.',
      },
      {
        icon: 'FileSearch',
        title: 'Relatorios de Investigacao Personalizados',
        description:
          'Geracao de relatorios de investigacao de acidentes e documentacao relevante para acompanhamento de participacoes.',
      },
      {
        icon: 'Link2',
        title: 'Integracao com Outros Modulos',
        description:
          'Ligacao direta com ferramentas de seguranca e saude, garantindo uma gestao centralizada e eficiente de todos os processos.',
      },
    ],
    highlight: {
      heading:
        'A rastreabilidade completa de alteracoes garante total transparencia?',
      text: 'Cada alteracao a um registo de acidente e documentada automaticamente, permitindo saber quem fez o que e quando. Esta funcionalidade facilita o acompanhamento e a implementacao de medidas preventivas eficazes.',
      bullets: [],
    },
  },
  {
    title: 'Easy Booking',
    slug: 'easy-booking',
    category: 'addon',
    order: 5,
    icon: 'CalendarCheck',
    subtitle:
      'Uma solucao de auto-agendamento que revoluciona a gestao dos exames de saude no trabalho.',
    excerpt:
      'Auto-agendamento de consultas e exames de saude no trabalho. Interface intuitiva, notificacoes automaticas e gestao de disponibilidades com o Easy Booking.',
    descriptionText:
      'O Easy Booking do Safemed simplifica o processo de agendamento de consultas, exames e outros eventos. Com uma interface intuitiva, permite gerir marcacoes de forma rapida e eficiente, integrando horarios de profissionais, salas e recursos disponiveis.',
    heroImageUrl: '/images/about/about-office-2.jpg',
    featuresHeading: 'Agendamento inteligente e eficiente',
    featuresSubheading:
      'Da marcacao a confirmacao, todo o processo de agendamento e simplificado e automatizado.',
    features: [
      {
        icon: 'CalendarCheck',
        title: 'Agendamento Simplificado',
        description:
          'Interface intuitiva para marcar consultas e exames em poucos cliques, sem intervencao de terceiros.',
      },
      {
        icon: 'CalendarClock',
        title: 'Gestao de Disponibilidades',
        description:
          'Integracao com horarios de profissionais e salas para otimizar recursos e evitar conflitos de agenda.',
      },
      {
        icon: 'BellRing',
        title: 'Notificacoes Automatizadas',
        description:
          'Lembretes por email ou SMS para confirmar ou alterar agendamentos, relembrando a altura indicada para agendar exame.',
      },
      {
        icon: 'Activity',
        title: 'Acompanhamento em Tempo Real',
        description:
          'Atualizacoes instantaneas sobre marcacoes e estados de eventos, para total visibilidade do processo.',
      },
    ],
    highlight: {
      heading:
        'O auto-agendamento pode reduzir ate 60% o tempo de gestao administrativa?',
      text: 'Com o Easy Booking, os trabalhadores podem agendar os seus proprios exames de saude no trabalho de forma autonoma, respeitando as obrigatoriedades legais e libertando tempo a equipa administrativa.',
      bullets: [
        { text: 'Agendamento autonomo pelo trabalhador' },
        { text: 'Cumprimento automatico de prazos legais' },
        { text: 'Lembretes por SMS e email' },
      ],
    },
  },
  {
    title: 'Gestao de EPI',
    slug: 'gestao-epi',
    category: 'addon',
    order: 6,
    icon: 'HardHat',
    subtitle:
      'A gestao de atribuicoes mais facil e integrada para Equipamentos de Protecao Individual.',
    excerpt:
      'Rastreabilidade, alertas automaticos, integracao e otimizacao de recursos para equipamentos de protecao individual. Gestao completa de EPI com o Safemed.',
    descriptionText:
      'O modulo permite as organizacoes registar, monitorizar e controlar a distribuicao de EPIs, garantindo que os trabalhadores tenham o equipamento adequado. Oferece alertas para renovacao e substituicao, assegura conformidade legal e reduz desperdicios.',
    heroImageUrl: '/images/modules/modulos-people-leaning.jpg',
    featuresHeading: 'Controlo total dos equipamentos de protecao',
    featuresSubheading:
      'Da atribuicao a substituicao, gerencie todo o ciclo de vida dos EPIs de forma inteligente.',
    features: [
      {
        icon: 'ScanSearch',
        title: 'Rastreabilidade Completa',
        description:
          'Registo detalhado da distribuicao e uso de EPIs por trabalhador, garantindo total controlo sobre cada equipamento atribuido.',
      },
      {
        icon: 'BellRing',
        title: 'Alertas Automaticos',
        description:
          'Notificacoes para substituicao ou renovacao de EPIs vencidos, garantindo que nenhum equipamento fica fora de validade.',
      },
      {
        icon: 'Link2',
        title: 'Integracao com Restantes Processos',
        description:
          'Ligacao com os restantes processos do Safemed de seguranca e saude para uma gestao centralizada e eficiente.',
      },
      {
        icon: 'Recycle',
        title: 'Otimizacao de Recursos',
        description:
          'Gestao eficiente para evitar desperdicios e assegurar a disponibilidade de EPIs quando e onde sao necessarios.',
      },
    ],
    highlight: {
      heading:
        'A gestao eficiente de EPIs pode reduzir custos operacionais ate 25%?',
      text: 'Com o acompanhamento do ciclo de vida de cada EPI, e possivel antecipar substituicoes, evitar desperdicios e garantir que todos os trabalhadores estao devidamente protegidos, em total conformidade com a legislacao vigente.',
      bullets: [
        { text: 'Ciclo de vida completo de cada EPI' },
        { text: 'Conformidade legal garantida' },
        { text: 'Reducao de desperdicios comprovada' },
      ],
    },
  },
  {
    title: 'Produtos Quimicos',
    slug: 'produtos-quimicos',
    category: 'addon',
    order: 7,
    icon: 'FlaskConical',
    subtitle:
      'Gestao de produtos quimicos de forma integrada e dinamica.',
    excerpt:
      'Fichas de dados de seguranca, controlo de exposicao CMR, alertas automaticos e integracao centralizada. Gestao de produtos quimicos com o Safemed.',
    descriptionText:
      'Uma ferramenta essencial para garantir a seguranca e conformidade na manipulacao de substancias perigosas. Com funcionalidades avancadas para registo, catalogacao, gestao de fichas de seguranca e controlo de exposicao dos trabalhadores.',
    heroImageUrl: '',
    featuresHeading: 'Seguranca quimica sem compromissos',
    featuresSubheading:
      'Controle total sobre substancias perigosas, fichas de seguranca e exposicao dos trabalhadores.',
    features: [
      {
        icon: 'ClipboardList',
        title: 'Registo Detalhado',
        description:
          'Catalogacao completa de produtos quimicos com informacoes essenciais e respetivas fichas de seguranca (FDS).',
      },
      {
        icon: 'BellRing',
        title: 'Alertas Automaticos',
        description:
          'Notificacoes para revisoes de fichas, validade de produtos e requisitos legais, garantindo conformidade permanente.',
      },
      {
        icon: 'Users',
        title: 'Controlo de Exposicao',
        description:
          'Relacao entre produto quimico e substancias perigosas (como CMR) com o posto de trabalho, funcao e trabalhador.',
      },
      {
        icon: 'Link2',
        title: 'Integracao Centralizada',
        description:
          'Ligacao direta com outros modulos do Safemed para uma gestao global e eficiente de toda a seguranca quimica.',
      },
    ],
    highlight: {
      heading:
        'A correta gestao de substancias CMR e uma obrigacao legal?',
      text: 'Com o Safemed, pode relacionar automaticamente cada produto quimico com as substancias perigosas que contem, o posto de trabalho onde e utilizado e os trabalhadores expostos, garantindo total conformidade regulamentar.',
      bullets: [
        { text: 'Fichas de seguranca sempre atualizadas' },
        { text: 'Alertas de validade de produtos' },
        { text: 'Relacao produto-trabalhador-posto de trabalho' },
      ],
    },
  },
  {
    title: 'My Safemed',
    slug: 'my-safemed',
    category: 'addon',
    order: 8,
    icon: 'UserCircle',
    subtitle: 'Toda a informacao na mao dos trabalhadores.',
    excerpt:
      'Portal do trabalhador para consulta de fichas de aptidao, historico de exames, riscos ocupacionais e reporte de incidentes. Acesso self-service com o My Safemed.',
    descriptionText:
      'O portal My Safemed e uma plataforma intuitiva e acessivel, projetada para envolver diretamente os colaboradores na gestao da sua seguranca e saude no trabalho. Permite acesso a fichas de aptidao, agendamento de consultas, historico de exames e alertas personalizados.',
    heroImageUrl: '/images/about/about-office.jpg',
    featuresHeading: 'O trabalhador no centro da gestao',
    featuresSubheading:
      'Acesso direto a informacao de seguranca e saude, promovendo transparencia e responsabilidade.',
    features: [
      {
        icon: 'UserCircle',
        title: 'Acesso Personalizado',
        description:
          'Consulta de fichas de aptidao, historico de exames e pedidos de agendamento diretamente pelo trabalhador.',
      },
      {
        icon: 'MessageCircle',
        title: 'Comunicacao Simplificada',
        description:
          'Ferramentas para reportar incidentes e consultar documentos relevantes de forma pratica e imediata.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Consulta dos Riscos',
        description:
          'Visualizacao dos riscos associados ao posto de trabalho e medidas preventivas recomendadas.',
      },
      {
        icon: 'Eye',
        title: 'Capacitacao e Transparencia',
        description:
          'Promove maior envolvimento e responsabilidade dos trabalhadores na gestao da sua seguranca e saude.',
      },
    ],
    highlight: {
      heading:
        'O envolvimento direto dos trabalhadores melhora a cultura de seguranca?',
      text: 'Quando os trabalhadores tem acesso a sua informacao e podem reportar incidentes diretamente, a comunicacao com a empresa torna-se mais eficiente e a prevencao de riscos mais eficaz.',
      bullets: [
        { text: 'Fichas de aptidao acessiveis 24/7' },
        { text: 'Reporte de incidentes em tempo real' },
        { text: 'Consulta de riscos do posto de trabalho' },
      ],
    },
  },

  // ─── Tool modules ───
  {
    title: 'Kube Analytics',
    slug: 'kube',
    category: 'tool',
    order: 9,
    icon: 'BarChart3',
    subtitle: 'Recolha e tratamento dos dados dos trabalhadores.',
    excerpt:
      'Recolha e tratamento de dados dos trabalhadores. Estudos epidemiologicos, relatorios avancados, planeamento e sistema de filtros com o Kube Analytics.',
    descriptionText:
      'O KUBE e uma ferramenta cloud para recolha e tratamento de dados dos trabalhadores. Com dashboards avancados e relatorios personalizaveis, transforma dados em insights acionaveis para a gestao de seguranca e saude ocupacional.',
    heroImageUrl: '',
    featuresHeading: 'Dados que impulsionam decisoes',
    featuresSubheading:
      'De estudos epidemiologicos a relatorios de gestao, o Kube transforma dados em acoes.',
    features: [
      {
        icon: 'History',
        title: 'Historico Detalhado de Operacoes',
        description:
          'O que foi feito? Por quem? A execucao corresponde com o forecast? Todas as respostas num so lugar.',
      },
      {
        icon: 'CalendarRange',
        title: 'Planeamento Simples',
        description:
          'Onde esta o maior atraso na execucao de servicos? Quais os distritos/clientes/segmentos mais afetados?',
      },
      {
        icon: 'Microscope',
        title: 'Estudos Epidemiologicos',
        description:
          'Analise detalhada de comportamentos de risco por cliente, com dados cruzados para insights profundos.',
      },
      {
        icon: 'Users',
        title: 'Familia Safemed',
        description:
          'Mesmo login, mesma fonte de dados. Integracao total com o ecossistema Safemed.',
      },
      {
        icon: 'Plug',
        title: 'Integracao',
        description:
          'Possibilidade de integracao com outras ferramentas e sistemas de gestao existentes.',
      },
      {
        icon: 'FileBarChart',
        title: 'Relatorios',
        description:
          'Desenvolvimento rapido de novos reports, adaptados as necessidades especificas da sua organizacao.',
      },
      {
        icon: 'SlidersHorizontal',
        title: 'Sistema de Filtros',
        description:
          'Possibilidade de combinacao de inumeros filtros para analises detalhadas e personalizadas.',
      },
    ],
    highlight: {
      heading:
        'A analise de dados pode antecipar riscos antes de se tornarem acidentes?',
      text: 'Com o Kube, e possivel identificar padroes e comportamentos de risco atraves de estudos epidemiologicos, permitindo as organizacoes tomar medidas preventivas baseadas em dados concretos e nao apenas em intuicao.',
      bullets: [],
    },
  },
  {
    title: 'Quizzer',
    slug: 'quizzer',
    category: 'tool',
    order: 10,
    icon: 'ClipboardList',
    subtitle:
      'Ferramenta de questionarios para recolha e analise de dados.',
    excerpt:
      'Questionarios dinamicos em massa, tratamento estatistico de respostas e consulta anual aos trabalhadores. Envio automatizado com o Safemed Quizzer.',
    descriptionText:
      'O Quizzer e um addon do Safemed que permite o envio de questionarios em massa para os trabalhadores e efetuar o respetivo tratamento de respostas. Ideal para consultas anuais, avaliacoes de risco e inqueritos de satisfacao.',
    heroImageUrl: '',
    featuresHeading: 'Questionarios inteligentes e automatizados',
    featuresSubheading:
      'Da criacao ao envio e analise, tudo num unico fluxo integrado com o Safemed.',
    features: [
      {
        icon: 'FormInput',
        title: 'Questionarios Dinamicos',
        description:
          'Crie os questionarios a sua medida, com todos os tipos de campos criados de forma dinamica e adaptavel.',
      },
      {
        icon: 'BarChart3',
        title: 'Tratamento Estatistico de Respostas',
        description:
          'Faca o tratamento estatistico das respostas, obtendo dados organizados e elementos graficos para ajudar na analise.',
      },
      {
        icon: 'Users',
        title: 'Consulta aos Trabalhadores',
        description:
          'Crie anualmente formularios de consulta aos trabalhadores, disponibilizando-os automaticamente por email.',
      },
      {
        icon: 'Send',
        title: 'Envio Automatizado dos Questionarios',
        description:
          'Com a integracao direta com a base de dados Safemed, os questionarios podem ser disponibilizados de forma automatica.',
      },
    ],
    highlight: {
      heading:
        'A consulta regular aos trabalhadores e uma obrigacao legal?',
      text: 'Com o Quizzer, pode criar e enviar automaticamente os formularios de consulta anual aos trabalhadores, com tratamento estatistico das respostas e graficos de apoio a analise, cumprindo as obrigacoes legais de forma simples.',
      bullets: [
        { text: 'Campos dinamicos e personalizaveis' },
        { text: 'Envio automatico por email' },
        { text: 'Graficos e estatisticas em tempo real' },
      ],
    },
  },
]

// ---------------------------------------------------------------------------
// Industries data (Sectors)
// ---------------------------------------------------------------------------

const industries: Record<string, unknown>[] = [
  {
    title: 'Aviacao Civil',
    slug: 'aviacao-civil',
    order: 1,
    icon: 'Plane',
    subtitle:
      'Solucao especializada para o setor da aviacao civil. Medicina aeronautica, gestao de equipas de seguranca e conformidade regulamentar numa plataforma integrada.',
    excerpt:
      'SST especializada para aviacao civil: medicina aeronautica, gestao de equipas de seguranca, conformidade EASA/ANAC e implementacao Fast Delivery em 6 semanas.',
    descriptionText:
      'Solucao especializada para o setor da aviacao civil. Medicina aeronautica, gestao de equipas de seguranca e conformidade regulamentar numa plataforma integrada.',
    heroImageUrl: '/images/modules/modulos-hero-meeting.jpg',
    featuresHeading: 'SST especializada para aviacao',
    featuresSubheading:
      'Ferramentas desenvolvidas para responder as exigencias regulamentares e operacionais do setor da aviacao civil.',
    features: [
      {
        icon: 'Heart',
        title: 'Medicina Aeronautica',
        description:
          'Gestao especializada da medicina aeronautica: exames medicos especificos para tripulacoes e pessoal de terra, conformidade com regulamentacoes EASA e ANAC, e rastreabilidade completa de certificados medicos.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Gestao de Equipas de Seguranca',
        description:
          'Controlo rigoroso das equipas de seguranca aeroportuaria: formacoes obrigatorias, certificacoes ativas, escalas de servico e conformidade regulamentar de cada elemento.',
      },
      {
        icon: 'BarChart3',
        title: 'Estatisticas Avancadas com Kube',
        description:
          'O modulo Kube fornece estatisticas poderosas para o setor da aviacao: indicadores de saude ocupacional, taxas de aptidao, absentismo e tendencias por funcao e departamento.',
      },
      {
        icon: 'Clock',
        title: 'Fast Delivery - 6 Semanas',
        description:
          'Metodologia exclusiva de implementacao rapida. Em apenas 6 semanas, o Safemed esta totalmente operacional e adaptado a realidade da sua organizacao de aviacao civil.',
      },
      {
        icon: 'Users',
        title: 'Gestao Multi-base',
        description:
          'Gestao centralizada de SST para organizacoes com multiplas bases operacionais. Visao consolidada de todas as localizacoes com dados em tempo real.',
      },
      {
        icon: 'Layers',
        title: 'Conformidade Regulamentar',
        description:
          'Cumprimento integral das exigencias regulamentares da aviacao civil: normas EASA, regulamentos nacionais da ANAC e requisitos especificos de cada operador.',
      },
    ],
    highlight: {
      heading: 'Fast Delivery - Operacional em 6 Semanas',
      text: 'A nossa metodologia Fast Delivery garante que a plataforma esta implementada e a funcionar em apenas 6 semanas. Migracoes de dados, configuracoes personalizadas, formacao de utilizadores e go-live, tudo incluido num cronograma agressivo mas comprovado.',
      bullets: [],
    },
  },
  {
    title: 'Centros Hospitalares e Unidades Locais',
    slug: 'centros-hospitalares',
    order: 2,
    icon: 'Building2',
    subtitle:
      'Gestao integrada de saude e seguranca ocupacional para centros hospitalares, com segregacao de dados, integracao SNS e conformidade total com as exigencias do setor.',
    excerpt:
      'SST para centros hospitalares: segregacao de dados de saude, integracao SNS e Sclinic, prescricao de MCDTs e acesso multi-equipa com conformidade RGPD.',
    descriptionText:
      'Gestao integrada de saude e seguranca ocupacional para centros hospitalares, com segregacao de dados, integracao SNS e conformidade total com as exigencias do setor.',
    heroImageUrl: '/images/modules/saude-trabalho-hero.jpg',
    featuresHeading: 'Desenhado para a realidade hospitalar',
    featuresSubheading:
      'Cada funcionalidade foi pensada para responder as necessidades especificas dos centros hospitalares e unidades locais de saude.',
    features: [
      {
        icon: 'Lock',
        title: 'Segregacao de Dados de Saude',
        description:
          'Separacao rigorosa entre dados de saude ocupacional e dados clinicos assistenciais, garantindo total privacidade e conformidade com o RGPD e legislacao hospitalar.',
      },
      {
        icon: 'Network',
        title: 'Integracao com o SNS',
        description:
          'Integracao nativa com os sistemas do Servico Nacional de Saude, facilitando a troca de informacao e o cumprimento das obrigacoes legais dos centros hospitalares.',
      },
      {
        icon: 'Database',
        title: 'Integracao Sclinic',
        description:
          'Compatibilidade total com o sistema Sclinic utilizado nas unidades hospitalares. Fluxo de dados bidirecional sem necessidade de duplo registo.',
      },
      {
        icon: 'FileCheck',
        title: 'Prescricao de MCDTs',
        description:
          'Prescricao e gestao de Meios Complementares de Diagnostico e Terapeutica diretamente na plataforma, com rastreabilidade completa dos exames solicitados.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Avaliacoes de Risco Centralizadas',
        description:
          'Gestao centralizada de todas as avaliacoes de risco dos diferentes servicos e departamentos do centro hospitalar, com workflows de aprovacao definidos.',
      },
      {
        icon: 'Users',
        title: 'Acesso Multi-equipa',
        description:
          'Partilha controlada de dados entre equipas de saude ocupacional, seguranca, recursos humanos e administracao, com niveis de acesso diferenciados por perfil.',
      },
    ],
    highlight: {
      heading: 'Privacidade e Segregacao de Dados',
      text: 'Nos centros hospitalares, a separacao entre dados de saude ocupacional e dados clinicos assistenciais e fundamental. O Safemed garante esta segregacao a nivel de arquitetura, com controlos de acesso granulares que respeitam as normas de privacidade hospitalar e o RGPD.',
      bullets: [
        { text: 'Conformidade total com normas hospitalares de privacidade' },
        { text: 'Relatorio Unico automatizado para entidades publicas' },
        { text: 'Gestao de turnos e escalas com impacto na vigilancia medica' },
        { text: 'Dashboard executivo para administracao hospitalar' },
        { text: 'Suporte para auditorias internas e externas' },
        { text: 'Historico completo de toda a atividade de SST' },
      ],
    },
  },
  {
    title: 'Construcao',
    slug: 'construcao',
    order: 3,
    icon: 'HardHat',
    subtitle:
      'SST para ambientes dinamicos e desafiantes. Gestao de obras, EPIs, subempreiteiros e fichas de aptidao, tudo numa plataforma concebida para o setor da construcao.',
    excerpt:
      'SST para construcao: gestao de obras, EPIs por trabalhador e funcao, validacao de fichas de aptidao, acidentes em obra e controlo de subempreiteiros.',
    descriptionText:
      'SST para ambientes dinamicos e desafiantes. Gestao de obras, EPIs, subempreiteiros e fichas de aptidao, tudo numa plataforma concebida para o setor da construcao.',
    heroImageUrl: '/images/modules/seguranca-trabalho-aaa.jpg',
    featuresHeading: 'SST a medida da construcao',
    featuresSubheading:
      'Ferramentas especificas para gerir a seguranca em estaleiros, obras e ambientes de construcao.',
    features: [
      {
        icon: 'FolderOpen',
        title: 'Gestao de Obras',
        description:
          'Cada obra como um projeto independente com a sua propria equipa, riscos especificos, documentacao e cronograma. Visao consolidada de todas as obras em simultaneo.',
      },
      {
        icon: 'ShieldCheck',
        title: 'EPI por Trabalhador e Funcao',
        description:
          'Atribuicao automatica de equipamentos de protecao individual conforme a funcao e os riscos de cada obra. Controlo de entregas, validades e conformidade por trabalhador.',
      },
      {
        icon: 'FileCheck',
        title: 'Validacao de Fichas de Aptidao',
        description:
          'Verificacao automatica da validade das fichas de aptidao medica antes da entrada em obra. Alertas antecipados para renovacoes e bloqueio de acesso quando expiradas.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Gestao de Acidentes em Obra',
        description:
          'Registo imediato de acidentes e incidentes em contexto de obra, com geolocalizacao, investigacao de causas e plano de acoes corretivas. Comunicacao automatica as entidades competentes.',
      },
      {
        icon: 'Users',
        title: 'Controlo de Subempreiteiros',
        description:
          'Gestao da documentacao de SST de subempreiteiros: seguros, fichas de aptidao, formacoes obrigatorias e certificacoes. Validacao automatica antes do inicio dos trabalhos.',
      },
      {
        icon: 'MapPin',
        title: 'Multi-obra e Multi-local',
        description:
          'Gestao simultanea de multiplas obras em diferentes localizacoes. Dashboard centralizado com o estado de conformidade de cada estaleiro em tempo real.',
      },
    ],
    highlight: {
      heading: 'Ambientes Dinamicos e Desafiantes',
      text: 'O setor da construcao apresenta desafios unicos: obras temporarias, equipas rotativas, multiplos subempreiteiros e riscos que mudam diariamente. O Safemed foi concebido para acompanhar esta dinamica, garantindo que a seguranca nunca fica para segundo plano.',
      bullets: [],
    },
  },
  {
    title: 'Ensino',
    slug: 'ensino',
    order: 4,
    icon: 'GraduationCap',
    subtitle:
      'Gestao de saude e seguranca ocupacional para instituicoes de ensino. Universidades, politecnicos e escolas com uma plataforma pensada para a complexidade do setor educativo.',
    excerpt:
      'SST para ensino: saude ocupacional de docentes e funcionarios, seguranca em espacos educativos, gestao de laboratorios e conformidade multi-campus.',
    descriptionText:
      'Gestao de saude e seguranca ocupacional para instituicoes de ensino. Universidades, politecnicos e escolas com uma plataforma pensada para a complexidade do setor educativo.',
    heroImageUrl: '/images/about/about-office.jpg',
    featuresHeading: 'SST adaptada ao ensino',
    featuresSubheading:
      'Ferramentas especificas para a gestao de saude e seguranca em ambientes educativos, desde laboratorios a campus inteiros.',
    features: [
      {
        icon: 'Heart',
        title: 'Saude Ocupacional de Docentes e Funcionarios',
        description:
          'Vigilancia medica adaptada as funcoes especificas do ensino: docentes, assistentes operacionais, tecnicos de laboratorio e pessoal administrativo. Exames periodicos e aptidoes sempre em dia.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Seguranca em Espacos Educativos',
        description:
          'Avaliacoes de risco adaptadas a salas de aula, laboratorios, oficinas, bibliotecas, cantinas e espacos desportivos. Planos de emergencia e evacuacao para cada edificio.',
      },
      {
        icon: 'FlaskConical',
        title: 'Gestao de Laboratorios',
        description:
          'Controlo de produtos quimicos em laboratorios de ensino, fichas de dados de seguranca, EPIs especificos e procedimentos de seguranca para atividades praticas.',
      },
      {
        icon: 'Building',
        title: 'Multi-campus',
        description:
          'Gestao centralizada de SST para instituicoes com multiplos campus, polos ou escolas. Visao consolidada e relatorios por unidade organica.',
      },
      {
        icon: 'Users',
        title: 'Gestao de Grandes Populacoes',
        description:
          'Capacidade para gerir a saude e seguranca de milhares de colaboradores: corpo docente, investigadores, tecnicos, administrativos e pessoal auxiliar.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Conformidade e Relatorios',
        description:
          'Relatorio Unico automatizado, relatorios de atividade para tutelas e cumprimento das obrigacoes legais especificas das instituicoes de ensino publico e privado.',
      },
    ],
    highlight: {
      heading: 'Instituicoes que servimos',
      text: 'O Safemed serve universidades, politecnicos, agrupamentos escolares, escolas profissionais, centros de investigacao e escolas privadas em todo o pais.',
      bullets: [
        { text: 'Universidades' },
        { text: 'Politecnicos' },
        { text: 'Agrupamentos Escolares' },
        { text: 'Escolas Profissionais' },
        { text: 'Centros de Investigacao' },
        { text: 'Escolas Privadas' },
      ],
    },
  },
  {
    title: 'Industria',
    slug: 'industria',
    order: 5,
    icon: 'Factory',
    subtitle:
      'Solucoes de SST para o setor industrial: automovel, alimentar, producao e metalomecanica. Porque na industria, a prevencao e a palavra de ordem.',
    excerpt:
      'SST para industria: gestao de saude e seguranca, integracao com RH (SAP, Primavera, PHC), gestao de acidentes, EPIs e dashboards industriais.',
    descriptionText:
      'Solucoes de SST para o setor industrial: automovel, alimentar, producao e metalomecanica. Porque na industria, a prevencao e a palavra de ordem.',
    heroImageUrl: '/images/modules/seguranca-trabalho-hero.jpg',
    featuresHeading: 'Controlo total da SST industrial',
    featuresSubheading:
      'Gestao de saude, seguranca e integracao com RH, tudo adaptado as exigencias do ambiente fabril.',
    features: [
      {
        icon: 'Heart',
        title: 'Gestao de Processos de Saude',
        description:
          'Vigilancia medica completa dos colaboradores industriais: exames periodicos, aptidoes, exposicao a riscos especificos, fichas clinicas e historico medico integrado.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Gestao de Processos de Seguranca',
        description:
          'Avaliacoes de risco por posto de trabalho, gestao de EPIs, controlo de produtos quimicos, investigacao de acidentes e planos de emergencia adaptados ao ambiente industrial.',
      },
      {
        icon: 'RefreshCw',
        title: 'Integracao com Sistemas de RH',
        description:
          'Sincronizacao automatica com os principais sistemas de recursos humanos (SAP, Primavera, PHC e outros). Atualizacao de dados de colaboradores, admissoes e cessacoes sem intervencao manual.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Gestao de Acidentes de Trabalho',
        description:
          'Registo, investigacao e acompanhamento de acidentes e incidentes. Analise de causas, acoes corretivas e reporting estatistico para melhoria continua.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Gestao de EPI',
        description:
          'Controlo completo de equipamentos de protecao individual: atribuicao por funcao, validades, entregas, devolucoes e rastreabilidade total por colaborador.',
      },
      {
        icon: 'BarChart3',
        title: 'Dashboards Industriais',
        description:
          'Indicadores de desempenho em SST adaptados a realidade industrial: taxas de sinistralidade, conformidade por area, custos de absentismo e tendencias temporais.',
      },
    ],
    highlight: {
      heading: 'Ligacao direta com o seu sistema de RH',
      text: 'O Safemed integra-se com os principais sistemas de gestao de recursos humanos utilizados na industria portuguesa. Admissoes, cessacoes, mudancas de funcao e transferencias sao automaticamente refletidas nos processos de SST.',
      bullets: [
        { text: 'SAP SuccessFactors' },
        { text: 'Primavera' },
        { text: 'PHC' },
        { text: 'Meta4' },
        { text: 'APIs customizadas' },
      ],
    },
  },
  {
    title: 'Prestacao de Servicos',
    slug: 'prestadores-servicos',
    order: 6,
    icon: 'Briefcase',
    subtitle:
      'Solucao completa para empresas prestadoras de servicos de Seguranca e Saude no Trabalho. Gira toda a operacao, desde a gestao de clientes ate ao cumprimento legal, numa unica plataforma.',
    excerpt:
      'SST para prestadores de servicos: gestao de clientes e contratos, processos administrativos, controlo operacional, comunicacao e conformidade com a Lei 102/2009.',
    descriptionText:
      'Solucao completa para empresas prestadoras de servicos de Seguranca e Saude no Trabalho. Gira toda a operacao, desde a gestao de clientes ate ao cumprimento legal, numa unica plataforma.',
    heroImageUrl: '/images/modules/modulos-hero-meeting.jpg',
    featuresHeading: 'Tudo o que precisa para gerir a sua operacao',
    featuresSubheading:
      'Do planeamento a execucao, cada aspeto da prestacao de servicos de SST fica coberto.',
    features: [
      {
        icon: 'Users',
        title: 'Gestao de Clientes e Contratos',
        description:
          'Controle total sobre a carteira de clientes, contratos de prestacao de servicos e respetivos prazos. Visao centralizada de todos os servicos contratados por cada entidade.',
      },
      {
        icon: 'FileText',
        title: 'Processos Administrativos',
        description:
          'Automatizacao dos processos administrativos: faturacao, relatorios de atividade, comunicacoes obrigatorias e documentacao legal exigida pela Lei 102/2009.',
      },
      {
        icon: 'Settings',
        title: 'Controlo Operacional',
        description:
          'Planeamento e monitorizacao de todas as atividades de SST: visitas a clientes, consultas medicas, avaliacoes de risco e formacoes agendadas.',
      },
      {
        icon: 'MessageSquare',
        title: 'Comunicacao Direta',
        description:
          'Canal de comunicacao integrado entre o prestador e os seus clientes. Notificacoes automaticas, partilha de documentos e atualizacoes em tempo real.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Processos de Saude e Seguranca',
        description:
          'Gestao completa dos processos de saude ocupacional e seguranca no trabalho, desde a vigilancia medica ate as avaliacoes de risco, tudo numa unica plataforma.',
      },
      {
        icon: 'BarChart3',
        title: 'Analise Estatistica',
        description:
          'Dashboards e relatorios estatisticos avancados para analise de indicadores de SST. Dados em tempo real para tomada de decisoes informadas.',
      },
    ],
    highlight: {
      heading: 'Enquadramento Legal - Lei 102/2009',
      text: 'A legislacao portuguesa, nomeadamente a Lei 102/2009 (Regime juridico da promocao da seguranca e saude no trabalho), define as obrigacoes dos servicos externos de SST. O Safemed foi desenhado para garantir o cumprimento integral destas obrigacoes, desde o registo de atividades ate a emissao de relatorios obrigatorios, mantendo a sua empresa sempre em conformidade.',
      bullets: [],
    },
  },
]

// ---------------------------------------------------------------------------
// Pages data
// ---------------------------------------------------------------------------

const pages: Record<string, unknown>[] = [
  {
    title: 'Pagina Inicial',
    slug: 'home',
    excerpt:
      'Safemed - Software de Gestao de Seguranca e Saude no Trabalho. A plataforma lider em Portugal para SST.',
    layout: [
      {
        blockType: 'hero',
        heading: 'Safemed - Software de Gestao de SST',
        subheading:
          'A plataforma lider em Portugal para Seguranca e Saude no Trabalho. Digitalize, simplifique e otimize a gestao de SST da sua organizacao.',
        ctaText: 'Pedir Demonstracao',
        ctaLink: '/contacto',
      },
      {
        blockType: 'stats',
        items: [
          { value: '20+', label: 'Anos de experiencia' },
          { value: '500+', label: 'Clientes ativos' },
          { value: '500K+', label: 'Trabalhadores geridos' },
          { value: '99.9%', label: 'Uptime da plataforma' },
        ],
      },
    ],
  },
  {
    title: 'Sobre Nos',
    slug: 'sobre',
    excerpt:
      'Conheca a Safemed, a empresa lider em software de gestao de Seguranca e Saude no Trabalho em Portugal.',
    layout: [
      {
        blockType: 'hero',
        heading: 'Sobre a Safemed',
        subheading:
          'Mais de 20 anos a desenvolver tecnologia para a gestao de Seguranca e Saude no Trabalho.',
        ctaText: 'Fale Connosco',
        ctaLink: '/contacto',
      },
    ],
  },
  {
    title: 'Contacto',
    slug: 'contacto',
    excerpt:
      'Entre em contacto com a Safemed para saber mais sobre as nossas solucoes de SST.',
    layout: [
      {
        blockType: 'hero',
        heading: 'Fale Connosco',
        subheading:
          'Estamos disponiveis para ajudar. Preencha o formulario ou contacte-nos diretamente.',
        ctaText: 'Enviar Mensagem',
        ctaLink: '#form',
      },
    ],
  },
  {
    title: 'Modulos',
    slug: 'modulos',
    excerpt:
      'Descubra todos os modulos do Safemed: Saude no Trabalho, Seguranca, Seguranca Alimentar, EPI, Acidentes, Easy Booking, Kube e mais.',
    layout: [
      {
        blockType: 'hero',
        heading: 'Modulos Safemed',
        subheading:
          'Uma plataforma modular que se adapta as necessidades da sua organizacao. Escolha os modulos que precisa.',
        ctaText: 'Pedir Demonstracao',
        ctaLink: '/contacto',
      },
    ],
  },
  {
    title: 'Setores',
    slug: 'setores',
    excerpt:
      'O Safemed serve os principais setores em Portugal: aviacao civil, centros hospitalares, construcao, ensino, industria e prestadores de servicos.',
    layout: [
      {
        blockType: 'hero',
        heading: 'Setores',
        subheading:
          'Solucoes de SST adaptadas a cada setor de atividade. Conheca como o Safemed responde as exigencias do seu setor.',
        ctaText: 'Fale Connosco',
        ctaLink: '/contacto',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function seed() {
  console.log('=== Safemed CMS Seed Script ===\n')

  await login()

  // Seed services
  console.log('\n--- Seeding Services ---')
  for (const service of services) {
    await post('services', service)
    await sleep(300) // avoid rate limiting
  }

  // Seed industries
  console.log('\n--- Seeding Industries ---')
  for (const industry of industries) {
    await post('industries', industry)
    await sleep(300)
  }

  // Seed pages
  console.log('\n--- Seeding Pages ---')
  for (const page of pages) {
    await post('pages', page)
    await sleep(300)
  }

  console.log('\n=== Seeding complete! ===')
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
