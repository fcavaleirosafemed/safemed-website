import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Definições do Site',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Geral',
          fields: [
            { name: 'siteName', type: 'text', defaultValue: 'Safemed' },
            { name: 'tagline', type: 'text', localized: true },
            { name: 'logo', type: 'upload', relationTo: 'media' },
            { name: 'logoDark', type: 'upload', relationTo: 'media' },
            { name: 'favicon', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'Contactos',
          fields: [
            { name: 'email', type: 'email', defaultValue: 'info@safemed.solutions' },
            { name: 'phone', type: 'text', defaultValue: '+351 22 093 00 55' },
            { name: 'address', type: 'textarea', defaultValue: 'Rua de Azevedo Coutinho 39\n4100-100 Porto, Portugal' },
          ],
        },
        {
          label: 'Redes Sociais',
          fields: [
            { name: 'linkedin', type: 'text' },
            { name: 'facebook', type: 'text' },
            { name: 'instagram', type: 'text' },
            { name: 'youtube', type: 'text' },
          ],
        },
        {
          label: 'Integrações',
          fields: [
            {
              type: 'group',
              name: 'tracking',
              label: 'Tracking & Analytics',
              fields: [
                {
                  name: 'snitcherId',
                  type: 'text',
                  label: 'Snitcher ID',
                  admin: {
                    description: 'ID do Snitcher para identificação de visitantes B2B (ex: abc123def456)',
                  },
                },
                {
                  name: 'gtmId',
                  type: 'text',
                  label: 'Google Tag Manager ID',
                  admin: { description: 'Ex: GTM-XXXXXXX' },
                },
                {
                  name: 'gaId',
                  type: 'text',
                  label: 'Google Analytics ID',
                  admin: { description: 'Ex: G-XXXXXXXXXX' },
                },
                {
                  name: 'hubspotId',
                  type: 'text',
                  label: 'HubSpot Tracking Code',
                  admin: { description: 'ID do portal HubSpot' },
                },
              ],
            },
            {
              type: 'group',
              name: 'mivo',
              label: 'Mivo Chat',
              fields: [
                { name: 'enabled', type: 'checkbox', label: 'Ativar Chat Mivo', defaultValue: true },
                { name: 'apiUrl', type: 'text', label: 'Mivo API URL' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
