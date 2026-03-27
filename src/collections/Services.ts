import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: 'Conteúdo',
    defaultColumns: ['title', 'slug', 'category', 'order'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Módulo Principal', value: 'core' },
        { label: 'Módulo Adicional', value: 'addon' },
        { label: 'Ferramenta', value: 'tool' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Nome do ícone Lucide (ex: shield, heart, hard-hat)',
      },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Frase curta abaixo do título no hero (ex: "Um software adaptado para...")',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Descrição curta para SEO e listagens',
      },
    },
    {
      name: 'descriptionText',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Descrição longa que aparece na página do módulo',
      },
    },
    {
      name: 'heroImageUrl',
      type: 'text',
      admin: {
        description: 'URL da imagem hero (path relativo, ex: /images/modules/saude-trabalho-hero.jpg)',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    // Features section
    {
      name: 'featuresHeading',
      type: 'text',
      localized: true,
      admin: {
        description: 'Título da secção de funcionalidades',
      },
    },
    {
      name: 'featuresSubheading',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Subtítulo da secção de funcionalidades',
      },
    },
    {
      name: 'features',
      type: 'array',
      localized: true,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'icon', type: 'text', admin: { description: 'Nome do ícone Lucide' } },
      ],
    },
    // Highlight/callout section
    {
      name: 'highlight',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', localized: true },
        { name: 'text', type: 'textarea', localized: true },
        {
          name: 'bullets',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
          ],
        },
      ],
    },
    // Rich text description (for CMS editor)
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
  ],
}
