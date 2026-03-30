import type { CollectionConfig } from 'payload'

export const JobPositions: CollectionConfig = {
  slug: 'job-positions',
  labels: { singular: 'Vaga', plural: 'Vagas' },
  admin: {
    useAsTitle: 'title',
    group: 'Conteúdo',
    defaultColumns: ['title', 'department', 'location', 'active', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título da Vaga',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'department',
          type: 'text',
          label: 'Departamento',
          admin: { width: '33%' },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Localização',
          defaultValue: 'Porto',
          admin: { width: '33%' },
        },
        {
          name: 'type',
          type: 'select',
          label: 'Tipo',
          defaultValue: 'full-time',
          options: [
            { label: 'Full-time', value: 'full-time' },
            { label: 'Part-time', value: 'part-time' },
            { label: 'Contrato', value: 'contract' },
            { label: 'Estágio', value: 'internship' },
          ],
          admin: { width: '33%' },
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
    },
    {
      name: 'responsibilities',
      type: 'array',
      label: 'Responsabilidades',
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Requisitos',
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Ativa',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordem',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
