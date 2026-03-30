import type { GlobalConfig } from 'payload'

export const PageContent: GlobalConfig = {
  slug: 'page-content',
  label: 'Conteúdo das Páginas',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Sobre Nós',
          fields: [
            // Hero
            { name: 'sobreHeroLabel', type: 'text', label: 'Label', defaultValue: 'Sobre Nós' },
            { name: 'sobreHeroTitle', type: 'text', label: 'Título', defaultValue: 'A Safemed Solutions' },
            { name: 'sobreHeroDescription', type: 'textarea', label: 'Descrição' },
            { name: 'sobreHeroImage', type: 'upload', relationTo: 'media', label: 'Imagem Hero' },
            // Mission
            { name: 'sobreMissionTitle', type: 'text', label: 'Título Missão', defaultValue: 'Tornar a SST simples, eficiente e acessível' },
            { name: 'sobreMissionText1', type: 'textarea', label: 'Missão - Parágrafo 1' },
            { name: 'sobreMissionText2', type: 'textarea', label: 'Missão - Parágrafo 2' },
            { name: 'sobreMissionImage', type: 'upload', relationTo: 'media', label: 'Imagem Missão' },
            // Stats
            {
              name: 'sobreStats',
              type: 'array',
              label: 'Estatísticas',
              maxRows: 6,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
            // Values
            { name: 'sobreValuesHeading', type: 'text', label: 'Título Valores', defaultValue: 'O que nos define' },
            {
              name: 'sobreValues',
              type: 'array',
              label: 'Valores',
              maxRows: 8,
              fields: [
                { name: 'icon', type: 'text', label: 'Ícone (Lucide)' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
              ],
            },
            // Versions
            { name: 'sobreVersionsHeading', type: 'text', label: 'Título Versões', defaultValue: 'Uma solução para cada necessidade' },
            { name: 'sobreVersionsSubheading', type: 'text', label: 'Subtítulo Versões' },
            {
              name: 'sobreVersions',
              type: 'array',
              label: 'Versões do Produto',
              maxRows: 5,
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
                {
                  name: 'features',
                  type: 'array',
                  fields: [{ name: 'text', type: 'text' }],
                },
                { name: 'highlight', type: 'checkbox', defaultValue: false },
              ],
            },
            // Team section
            { name: 'sobreTeamTitle', type: 'text', label: 'Título Equipa', defaultValue: 'Pessoas que fazem a diferença' },
            { name: 'sobreTeamText1', type: 'textarea', label: 'Equipa - Parágrafo 1' },
            { name: 'sobreTeamText2', type: 'textarea', label: 'Equipa - Parágrafo 2' },
            { name: 'sobreTeamImage', type: 'upload', relationTo: 'media', label: 'Imagem Equipa' },
            // CTA
            { name: 'sobreCtaTitle', type: 'text', label: 'Título CTA', defaultValue: 'Quer conhecer melhor o Safemed?' },
            { name: 'sobreCtaText', type: 'textarea', label: 'Texto CTA' },
          ],
        },
        {
          label: 'Carreiras',
          fields: [
            // Hero
            { name: 'carreirasHeroTitle', type: 'text', label: 'Título', defaultValue: 'Junte-se à nossa equipa!' },
            { name: 'carreirasHeroDescription', type: 'textarea', label: 'Descrição' },
            { name: 'carreirasHeroImage', type: 'upload', relationTo: 'media', label: 'Imagem Hero' },
            // Culture
            { name: 'carreirasCultureHeading', type: 'text', label: 'Título Cultura', defaultValue: 'O que nos move' },
            { name: 'carreirasCultureSubheading', type: 'textarea', label: 'Subtítulo Cultura' },
            {
              name: 'carreirasCultureValues',
              type: 'array',
              label: 'Valores da Cultura',
              maxRows: 8,
              fields: [
                { name: 'icon', type: 'text', label: 'Ícone (Lucide)' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
              ],
            },
            // Benefits
            { name: 'carreirasBenefitsTitle', type: 'text', label: 'Título Benefícios', defaultValue: 'Porque trabalhar na Safemed' },
            { name: 'carreirasBenefitsImage', type: 'upload', relationTo: 'media', label: 'Imagem Benefícios' },
            {
              name: 'carreirasBenefits',
              type: 'array',
              label: 'Lista de Benefícios',
              fields: [{ name: 'text', type: 'text' }],
            },
            // Positions section headings
            { name: 'carreirasPositionsHeading', type: 'text', label: 'Título Vagas', defaultValue: 'Posições disponíveis' },
            // Positions are managed in a separate collection
            // Spontaneous CTA
            { name: 'carreirasCtaTitle', type: 'text', label: 'Título CTA', defaultValue: 'Não encontrou a vaga ideal?' },
            { name: 'carreirasCtaText', type: 'textarea', label: 'Texto CTA' },
            { name: 'carreirasCtaEmail', type: 'email', label: 'Email para candidaturas', defaultValue: 'info@safemed.solutions' },
          ],
        },
        {
          label: 'Contacto',
          fields: [
            { name: 'contactoHeroTitle', type: 'text', label: 'Título', defaultValue: 'Fale connosco' },
            { name: 'contactoHeroDescription', type: 'textarea', label: 'Descrição' },
            // Partner section
            { name: 'contactoPartnerName', type: 'text', label: 'Nome Parceiro', defaultValue: 'BesTeam' },
            { name: 'contactoPartnerDescription', type: 'textarea', label: 'Descrição Parceiro' },
            { name: 'contactoPartnerWebsite', type: 'text', label: 'Website Parceiro', defaultValue: 'https://www.besteam.ch' },
            { name: 'contactoPartnerEmail', type: 'email', label: 'Email Parceiro', defaultValue: 'mjanelas@besteam.ch' },
            { name: 'contactoPartnerPhone', type: 'text', label: 'Telefone Parceiro', defaultValue: '+41 79 276 67 04' },
            // Map
            { name: 'contactoMapEmbed', type: 'textarea', label: 'URL do Mapa (Google Maps embed)' },
          ],
        },
        {
          label: 'Blog',
          fields: [
            { name: 'blogHeroTitle', type: 'text', label: 'Título', defaultValue: 'Notícias e Artigos' },
            { name: 'blogHeroDescription', type: 'textarea', label: 'Descrição' },
            { name: 'blogCtaTitle', type: 'text', label: 'Título CTA', defaultValue: 'Fique a par das novidades' },
            { name: 'blogCtaText', type: 'textarea', label: 'Texto CTA' },
          ],
        },
      ],
    },
  ],
}
