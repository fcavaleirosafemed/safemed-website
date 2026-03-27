import type { CollectionConfig } from 'payload'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'title',
    group: 'Conteúdo',
    defaultColumns: ['title', 'slug', 'order'],
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
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Nome do ícone Lucide (ex: factory, hard-hat, plane)',
      },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Frase curta abaixo do título no hero',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
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
        description: 'Descrição longa que aparece na página do setor',
      },
    },
    {
      name: 'heroImageUrl',
      type: 'text',
      admin: {
        description: 'URL da imagem hero (path relativo, ex: /images/modules/seguranca-trabalho-hero.jpg)',
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
    // Relationships
    {
      name: 'relatedServices',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    // Rich text description (for CMS editor)
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
  ],
}
