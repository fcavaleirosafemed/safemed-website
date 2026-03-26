import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Conteúdo',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      blocks: [
        {
          slug: 'hero',
          labels: { singular: 'Hero', plural: 'Heroes' },
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'textarea' },
            { name: 'ctaText', type: 'text' },
            { name: 'ctaLink', type: 'text' },
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          slug: 'features',
          labels: { singular: 'Funcionalidades', plural: 'Funcionalidades' },
          fields: [
            { name: 'heading', type: 'text' },
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'icon', type: 'text' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
        {
          slug: 'cta',
          labels: { singular: 'Call to Action', plural: 'CTAs' },
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'buttonText', type: 'text' },
            { name: 'buttonLink', type: 'text' },
          ],
        },
        {
          slug: 'stats',
          labels: { singular: 'Estatísticas', plural: 'Estatísticas' },
          fields: [
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
                { name: 'suffix', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'richContent',
          labels: { singular: 'Conteúdo Rico', plural: 'Conteúdos Ricos' },
          fields: [
            { name: 'content', type: 'richText' },
          ],
        },
      ],
    },
  ],
}
