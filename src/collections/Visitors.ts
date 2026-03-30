import type { CollectionConfig } from 'payload'

export const Visitors: CollectionConfig = {
  slug: 'visitors',
  labels: { singular: 'Visitante', plural: 'Visitantes' },
  admin: {
    group: 'Intelligence',
    defaultColumns: ['company', 'country', 'city', 'pagesViewed', 'lastSeenAt'],
    useAsTitle: 'company',
    description: 'Empresas e visitantes identificados no website',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true, // API tracking endpoint needs to create
    update: () => true,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    // ─── Identificação ────────────────────────────────────
    {
      type: 'row',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Empresa',
          admin: { width: '50%', description: 'Identificada via IP lookup' },
        },
        {
          name: 'domain',
          type: 'text',
          label: 'Domínio',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'visitorId',
      type: 'text',
      label: 'Visitor ID',
      unique: true,
      index: true,
      admin: { description: 'Identificador único do visitante (cookie)' },
    },
    {
      name: 'ip',
      type: 'text',
      label: 'IP',
      index: true,
      admin: { description: 'Último IP registado' },
    },

    // ─── Localização ──────────────────────────────────────
    {
      type: 'row',
      fields: [
        { name: 'country', type: 'text', label: 'País', admin: { width: '33%' } },
        { name: 'region', type: 'text', label: 'Região', admin: { width: '33%' } },
        { name: 'city', type: 'text', label: 'Cidade', admin: { width: '33%' } },
      ],
    },

    // ─── Métricas ─────────────────────────────────────────
    {
      type: 'row',
      fields: [
        {
          name: 'totalVisits',
          type: 'number',
          label: 'Total Visitas',
          defaultValue: 1,
          admin: { width: '33%' },
        },
        {
          name: 'pagesViewed',
          type: 'number',
          label: 'Páginas Vistas',
          defaultValue: 1,
          admin: { width: '33%' },
        },
        {
          name: 'totalTimeSeconds',
          type: 'number',
          label: 'Tempo Total (seg)',
          defaultValue: 0,
          admin: { width: '33%' },
        },
      ],
    },

    // ─── Timestamps ───────────────────────────────────────
    {
      type: 'row',
      fields: [
        {
          name: 'firstSeenAt',
          type: 'date',
          label: 'Primeira Visita',
          admin: { width: '50%', date: { pickerAppearance: 'dayAndTime' } },
        },
        {
          name: 'lastSeenAt',
          type: 'date',
          label: 'Última Visita',
          admin: { width: '50%', date: { pickerAppearance: 'dayAndTime' } },
        },
      ],
    },

    // ─── Device Info ──────────────────────────────────────
    {
      name: 'userAgent',
      type: 'text',
      label: 'User Agent',
      admin: { description: 'Último user agent registado' },
    },
    {
      name: 'device',
      type: 'select',
      label: 'Dispositivo',
      options: [
        { label: 'Desktop', value: 'desktop' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'Tablet', value: 'tablet' },
      ],
    },

    // ─── Referrer ─────────────────────────────────────────
    {
      name: 'referrer',
      type: 'text',
      label: 'Referrer',
      admin: { description: 'De onde veio o visitante na primeira visita' },
    },
    {
      name: 'utmSource',
      type: 'text',
      label: 'UTM Source',
    },
    {
      name: 'utmMedium',
      type: 'text',
      label: 'UTM Medium',
    },
    {
      name: 'utmCampaign',
      type: 'text',
      label: 'UTM Campaign',
    },

    // ─── Page Views (últimas 50) ──────────────────────────
    {
      name: 'pageViews',
      type: 'array',
      label: 'Páginas Visitadas',
      maxRows: 50,
      admin: { description: 'Últimas 50 páginas visitadas' },
      fields: [
        { name: 'path', type: 'text', label: 'Página' },
        { name: 'title', type: 'text', label: 'Título' },
        {
          name: 'viewedAt',
          type: 'date',
          label: 'Data',
          admin: { date: { pickerAppearance: 'dayAndTime' } },
        },
        { name: 'timeOnPage', type: 'number', label: 'Tempo (seg)' },
        { name: 'referrer', type: 'text', label: 'Referrer' },
      ],
    },

    // ─── IP Lookup raw data ───────────────────────────────
    {
      name: 'ipData',
      type: 'json',
      label: 'IP Lookup Data',
      admin: { description: 'Dados brutos do IP lookup (ipinfo.io)' },
    },

    // ─── Tags e notas (para equipa comercial) ─────────────
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notas',
      admin: { description: 'Notas internas sobre este visitante' },
    },
    {
      name: 'leadStatus',
      type: 'select',
      label: 'Estado do Lead',
      defaultValue: 'new',
      options: [
        { label: 'Novo', value: 'new' },
        { label: 'Interessante', value: 'interesting' },
        { label: 'Contactado', value: 'contacted' },
        { label: 'Qualificado', value: 'qualified' },
        { label: 'Descartado', value: 'discarded' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
