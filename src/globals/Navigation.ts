import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navegação',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mainNav',
      type: 'array',
      label: 'Menu Principal',
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'link', type: 'text', required: true },
        {
          name: 'children',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true, localized: true },
            { name: 'link', type: 'text', required: true },
            { name: 'description', type: 'textarea', localized: true },
            { name: 'icon', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true, defaultValue: 'Fale Connosco' },
        { name: 'link', type: 'text', defaultValue: '/contacto' },
      ],
    },
  ],
}
