import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

const SEED_DATA = {
  sobreHeroLabel: 'Sobre Nós',
  sobreHeroTitle: 'A Safemed Solutions',
  sobreHeroDescription: 'A Safemed Solutions é uma empresa jovem e inovadora, especialista em soluções SaaS de gestão de saúde, segurança e bem-estar no trabalho. Desenvolvemos tecnologia que transforma a forma como as organizações protegem os seus colaboradores.',
  sobreMissionTitle: 'Tornar a SST simples, eficiente e acessível',
  sobreMissionText1: 'A nossa missão é simplificar a gestão da segurança e saúde no trabalho através de tecnologia de ponta. Acreditamos que cada organização, independentemente da sua dimensão ou setor, merece ferramentas profissionais para proteger os seus colaboradores.',
  sobreMissionText2: 'Desde prestadores de serviços externos até grandes grupos industriais, passando por centros hospitalares e instituições de ensino, o Safemed adapta-se à realidade de cada cliente.',
  sobreStats: [
    { value: '500+', label: 'Organizações' },
    { value: '300K+', label: 'Trabalhadores geridos' },
    { value: '15+', label: 'Anos de experiência' },
    { value: '99.9%', label: 'Uptime' },
  ],
  sobreValuesHeading: 'O que nos define',
  sobreValues: [
    { icon: 'Lightbulb', title: 'Inovação', description: 'Investimos continuamente em investigação e desenvolvimento para manter a plataforma na vanguarda da tecnologia aplicada à SST.' },
    { icon: 'Heart', title: 'Compromisso', description: 'Cada cliente é um parceiro. Trabalhamos lado a lado para garantir que a solução responde às necessidades reais da organização.' },
    { icon: 'Shield', title: 'Segurança', description: 'A segurança dos dados é a base de tudo. RGPD, encriptação e controlos de acesso rigorosos em toda a plataforma.' },
    { icon: 'Zap', title: 'Simplicidade', description: 'Tecnologia complexa com uma experiência simples. Interfaces intuitivas que qualquer utilizador consegue dominar rapidamente.' },
  ],
  sobreVersionsHeading: 'Uma solução para cada necessidade',
  sobreVersionsSubheading: 'Três versões pensadas para diferentes realidades organizacionais.',
  sobreVersions: [
    { name: 'Safemed Lite', description: 'Versão essencial para pequenas e médias empresas que necessitam de gerir os processos básicos de saúde e segurança no trabalho.', features: [{ text: 'Saúde no Trabalho' }, { text: 'Fichas de aptidão' }, { text: 'Relatório Único' }, { text: 'Gestão de colaboradores' }, { text: 'Portal MySafemed' }], highlight: false },
    { name: 'Safemed Pro', description: 'Solução completa para organizações que precisam de gestão integrada de todos os processos de SST com módulos avançados.', features: [{ text: 'Tudo do Lite' }, { text: 'Segurança no Trabalho' }, { text: 'Acidentes de Trabalho' }, { text: 'Gestão de EPI' }, { text: 'Produtos Químicos' }, { text: 'EasyBooking' }, { text: 'Kube Analytics' }], highlight: true },
    { name: 'Gestão Interna', description: 'Para organizações com serviços internos de SST que necessitam de autonomia total na gestão dos seus processos.', features: [{ text: 'Todos os módulos Pro' }, { text: 'Configuração autónoma' }, { text: 'Integração com RH' }, { text: 'Multi-estabelecimento' }, { text: 'Relatórios personalizados' }], highlight: false },
  ],
  sobreTeamTitle: 'Pessoas que fazem a diferença',
  sobreTeamText1: 'A equipa Safemed é composta por profissionais apaixonados por tecnologia e pela segurança no trabalho. Engenheiros, designers, especialistas em SST e gestores de projeto que trabalham juntos para criar a melhor plataforma do mercado.',
  sobreTeamText2: 'Sediados no Porto, servimos clientes em todo o território nacional e contamos com parceiro na Suíça para o mercado internacional.',
  sobreCtaTitle: 'Quer conhecer melhor o Safemed?',
  sobreCtaText: 'Agende uma demonstração e descubra como a nossa plataforma pode transformar a gestão de SST na sua organização.',
  carreirasHeroTitle: 'Junte-se à nossa equipa!',
  carreirasHeroDescription: 'Estamos a construir o futuro da segurança e saúde no trabalho. Se é curioso, inteligente e inovador, queremos conhecê-lo.',
  carreirasCultureHeading: 'O que nos move',
  carreirasCultureSubheading: 'Um ambiente de simplicidade, lealdade e abertura onde as boas ideias vêm de qualquer lugar.',
  carreirasCultureValues: [
    { icon: 'Lightbulb', title: 'Mentes Curiosas', description: 'Valorizamos a curiosidade e a vontade de aprender. Cada dia é uma oportunidade para explorar novas ideias e abordagens.' },
    { icon: 'Sparkles', title: 'Inovação Inteligente', description: 'Não inovamos por inovar. Cada feature, cada decisão técnica tem um propósito claro: resolver problemas reais dos nossos clientes.' },
    { icon: 'Heart', title: 'Lealdade e Abertura', description: 'Um ambiente de simplicidade, lealdade e abertura. Comunicamos de forma transparente e tratamo-nos como parceiros, não como números.' },
    { icon: 'Users', title: 'Equipa Unida', description: 'Trabalhamos juntos, crescemos juntos. O sucesso de um é o sucesso de todos. Celebramos as vitórias e aprendemos com os desafios.' },
  ],
  carreirasBenefitsTitle: 'Porque trabalhar na Safemed',
  carreirasBenefits: [
    { text: 'Equipa pequena com grande impacto' },
    { text: 'Tecnologia moderna (React, Next.js, TypeScript)' },
    { text: 'Flexibilidade e autonomia no trabalho' },
    { text: 'Escritório no centro do Porto' },
    { text: 'Ambiente informal e colaborativo' },
    { text: 'Formação contínua e crescimento profissional' },
    { text: 'Participação ativa nas decisões de produto' },
  ],
  carreirasPositionsHeading: 'Posições disponíveis',
  carreirasCtaTitle: 'Não encontrou a vaga ideal?',
  carreirasCtaText: 'Envie-nos a sua candidatura espontânea. Estamos sempre atentos a talento excecional.',
  carreirasCtaEmail: 'info@safemed.solutions',
  contactoHeroTitle: 'Fale connosco',
  contactoHeroDescription: 'Quer saber mais sobre o Safemed ou pedir uma demonstração? Estamos disponíveis para ajudar.',
  contactoPartnerName: 'BesTeam',
  contactoPartnerDescription: 'O nosso parceiro na Suíça para o mercado de SST europeu. A BesTeam complementa a nossa oferta com serviços de consultoria e implementação no mercado helvético.',
  contactoPartnerWebsite: 'https://www.besteam.ch',
  contactoPartnerEmail: 'mjanelas@besteam.ch',
  contactoPartnerPhone: '+41 79 276 67 04',
  contactoMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5!2d-8.6308!3d41.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e18b21e92b%3A0x0!2sRua+de+Azevedo+Coutinho+39%2C+Porto!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt',
  blogHeroTitle: 'Notícias e Artigos',
  blogHeroDescription: 'Acompanhe as novidades da Safemed, eventos do setor e artigos sobre segurança e saúde no trabalho.',
  blogCtaTitle: 'Fique a par das novidades',
  blogCtaText: 'Acompanhe-nos nas redes sociais para receber as últimas notícias sobre SST e as atualizações da plataforma Safemed.',
}

const JOB_POSITIONS = [
  {
    title: 'Junior Project & Support Manager',
    department: 'Operações',
    location: 'Porto',
    type: 'full-time' as const,
    description: 'Procuramos alguém com gosto pelo contacto com o cliente e pela gestão de projetos.',
    responsibilities: [
      { text: 'Acompanhamento de projetos de implementação de novas contas' },
      { text: 'Suporte técnico e funcional a clientes existentes' },
      { text: 'Formação de utilizadores na plataforma Safemed' },
      { text: 'Recolha de feedback e comunicação com a equipa de desenvolvimento' },
      { text: 'Gestão de documentação de projeto' },
    ],
    requirements: [
      { text: 'Licenciatura em Gestão, Engenharia ou área relevante' },
      { text: 'Boa capacidade de comunicação e relacionamento interpessoal' },
      { text: 'Organização e atenção ao detalhe' },
      { text: 'Conhecimentos de informática na ótica do utilizador' },
      { text: 'Valorizamos conhecimento em SST (não obrigatório)' },
    ],
    active: true,
    order: 1,
  },
  {
    title: 'Junior Developer',
    department: 'Engenharia',
    location: 'Porto',
    type: 'full-time' as const,
    description: 'Junta-te à equipa de engenharia e ajuda-nos a construir a próxima geração da plataforma Safemed.',
    responsibilities: [
      { text: 'Desenvolvimento de novas funcionalidades na plataforma' },
      { text: 'Correção de bugs e melhoria contínua do código' },
      { text: 'Participação em code reviews e sessões de design técnico' },
      { text: 'Colaboração com a equipa de produto e design' },
      { text: 'Escrita de testes e documentação técnica' },
    ],
    requirements: [
      { text: 'Licenciatura em Engenharia Informática ou similar' },
      { text: 'Conhecimentos de JavaScript/TypeScript' },
      { text: 'Familiaridade com React ou frameworks similares' },
      { text: 'Vontade de aprender e evoluir tecnicamente' },
      { text: 'Valorizamos experiência com Node.js e bases de dados' },
    ],
    active: true,
    order: 2,
  },
]

// SQL to create the enum type for job_positions.type select field
const CREATE_ENUM_SQL = `
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_job_positions_type') THEN
    CREATE TYPE "enum_job_positions_type" AS ENUM ('full-time', 'part-time', 'contract', 'internship');
  END IF;
END $$;
`

// SQL to alter job_positions.type column from varchar to enum (if needed)
const ALTER_TYPE_COLUMN_SQL = `
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'job_positions' AND column_name = 'type' AND data_type = 'character varying'
  ) THEN
    ALTER TABLE "job_positions" ALTER COLUMN "type" TYPE "enum_job_positions_type" USING "type"::"enum_job_positions_type";
  END IF;
END $$;
`

// SQL to create missing tables matching Payload's Drizzle schema
const CREATE_PAGE_CONTENT_SQL = `
CREATE TABLE IF NOT EXISTS "page_content" (
  "id" serial PRIMARY KEY NOT NULL,
  "sobre_hero_label" varchar,
  "sobre_hero_title" varchar,
  "sobre_hero_description" varchar,
  "sobre_hero_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
  "sobre_mission_title" varchar,
  "sobre_mission_text1" varchar,
  "sobre_mission_text2" varchar,
  "sobre_mission_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
  "sobre_stats" jsonb,
  "sobre_values_heading" varchar,
  "sobre_values" jsonb,
  "sobre_versions_heading" varchar,
  "sobre_versions_subheading" varchar,
  "sobre_versions" jsonb,
  "sobre_team_title" varchar,
  "sobre_team_text1" varchar,
  "sobre_team_text2" varchar,
  "sobre_team_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
  "sobre_cta_title" varchar,
  "sobre_cta_text" varchar,
  "carreiras_hero_title" varchar,
  "carreiras_hero_description" varchar,
  "carreiras_hero_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
  "carreiras_culture_heading" varchar,
  "carreiras_culture_subheading" varchar,
  "carreiras_culture_values" jsonb,
  "carreiras_benefits_title" varchar,
  "carreiras_benefits_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
  "carreiras_benefits" jsonb,
  "carreiras_positions_heading" varchar,
  "carreiras_cta_title" varchar,
  "carreiras_cta_text" varchar,
  "carreiras_cta_email" varchar,
  "contacto_hero_title" varchar,
  "contacto_hero_description" varchar,
  "contacto_partner_name" varchar,
  "contacto_partner_description" varchar,
  "contacto_partner_website" varchar,
  "contacto_partner_email" varchar,
  "contacto_partner_phone" varchar,
  "contacto_map_embed" varchar,
  "blog_hero_title" varchar,
  "blog_hero_description" varchar,
  "blog_cta_title" varchar,
  "blog_cta_text" varchar,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
`

const CREATE_JOB_POSITIONS_SQL = `
CREATE TABLE IF NOT EXISTS "job_positions" (
  "id" serial PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "department" varchar,
  "location" varchar DEFAULT 'Porto',
  "type" "enum_job_positions_type" DEFAULT 'full-time',
  "description" varchar,
  "responsibilities" jsonb,
  "requirements" jsonb,
  "active" boolean DEFAULT true,
  "order" numeric DEFAULT 0,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
`

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== 'Bearer seed-safemed-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config })
    const pool = (payload.db as any).pool

    // List all tables
    const tablesRes = await pool.query(
      `SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`
    )
    const tables = tablesRes.rows.map((r: any) => r.tablename)

    // Check page_content schema if it exists
    let pageContentSchema: any = 'table does not exist'
    try {
      const res = await pool.query(
        `SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'page_content' ORDER BY ordinal_position`
      )
      pageContentSchema = res.rows
    } catch { /* table doesn't exist */ }

    // Check job_positions schema if it exists
    let jobPositionsSchema: any = 'table does not exist'
    try {
      const res = await pool.query(
        `SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'job_positions' ORDER BY ordinal_position`
      )
      jobPositionsSchema = res.rows
    } catch { /* table doesn't exist */ }

    // Check site_settings for reference
    let siteSettingsSchema: any = null
    try {
      const res = await pool.query(
        `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'site_settings' ORDER BY ordinal_position`
      )
      siteSettingsSchema = res.rows
    } catch { /* */ }

    return NextResponse.json({
      tables,
      pageContentSchema,
      jobPositionsSchema,
      siteSettingsSchema,
    })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== 'Bearer seed-safemed-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const results: string[] = []

  try {
    const payload = await getPayload({ config })
    const pool = (payload.db as any).pool

    // Step 0: Create enum types
    try {
      await pool.query(CREATE_ENUM_SQL)
      results.push('enum_job_positions_type: created or already exists')
    } catch (e: any) {
      results.push(`enum ERROR: ${e.message}`)
    }

    // Step 1: Create tables if they don't exist
    try {
      await pool.query(CREATE_PAGE_CONTENT_SQL)
      results.push('page_content table: created or already exists')
    } catch (e: any) {
      results.push(`page_content table ERROR: ${e.message}`)
    }

    try {
      await pool.query(CREATE_JOB_POSITIONS_SQL)
      results.push('job_positions table: created or already exists')
    } catch (e: any) {
      results.push(`job_positions table ERROR: ${e.message}`)
    }

    // Step 1.5: Fix type column if it's varchar instead of enum
    try {
      await pool.query(ALTER_TYPE_COLUMN_SQL)
      results.push('job_positions.type column: verified/fixed')
    } catch (e: any) {
      results.push(`type column fix ERROR: ${e.message}`)
    }

    // Step 2: Seed PageContent — only fill empty fields
    try {
      // Check if any row exists in page_content
      const countRes = await pool.query('SELECT count(*) as cnt FROM page_content')
      const rowCount = parseInt(countRes.rows[0].cnt)

      if (rowCount === 0) {
        // Insert a new row with all seed data
        const columns: string[] = []
        const values: any[] = []
        const placeholders: string[] = []
        let idx = 1

        const fieldMap: Record<string, { col: string; type: 'text' | 'json' }> = {
          sobreHeroLabel: { col: 'sobre_hero_label', type: 'text' },
          sobreHeroTitle: { col: 'sobre_hero_title', type: 'text' },
          sobreHeroDescription: { col: 'sobre_hero_description', type: 'text' },
          sobreMissionTitle: { col: 'sobre_mission_title', type: 'text' },
          sobreMissionText1: { col: 'sobre_mission_text1', type: 'text' },
          sobreMissionText2: { col: 'sobre_mission_text2', type: 'text' },
          sobreStats: { col: 'sobre_stats', type: 'json' },
          sobreValuesHeading: { col: 'sobre_values_heading', type: 'text' },
          sobreValues: { col: 'sobre_values', type: 'json' },
          sobreVersionsHeading: { col: 'sobre_versions_heading', type: 'text' },
          sobreVersionsSubheading: { col: 'sobre_versions_subheading', type: 'text' },
          sobreVersions: { col: 'sobre_versions', type: 'json' },
          sobreTeamTitle: { col: 'sobre_team_title', type: 'text' },
          sobreTeamText1: { col: 'sobre_team_text1', type: 'text' },
          sobreTeamText2: { col: 'sobre_team_text2', type: 'text' },
          sobreCtaTitle: { col: 'sobre_cta_title', type: 'text' },
          sobreCtaText: { col: 'sobre_cta_text', type: 'text' },
          carreirasHeroTitle: { col: 'carreiras_hero_title', type: 'text' },
          carreirasHeroDescription: { col: 'carreiras_hero_description', type: 'text' },
          carreirasCultureHeading: { col: 'carreiras_culture_heading', type: 'text' },
          carreirasCultureSubheading: { col: 'carreiras_culture_subheading', type: 'text' },
          carreirasCultureValues: { col: 'carreiras_culture_values', type: 'json' },
          carreirasBenefitsTitle: { col: 'carreiras_benefits_title', type: 'text' },
          carreirasBenefits: { col: 'carreiras_benefits', type: 'json' },
          carreirasPositionsHeading: { col: 'carreiras_positions_heading', type: 'text' },
          carreirasCtaTitle: { col: 'carreiras_cta_title', type: 'text' },
          carreirasCtaText: { col: 'carreiras_cta_text', type: 'text' },
          carreirasCtaEmail: { col: 'carreiras_cta_email', type: 'text' },
          contactoHeroTitle: { col: 'contacto_hero_title', type: 'text' },
          contactoHeroDescription: { col: 'contacto_hero_description', type: 'text' },
          contactoPartnerName: { col: 'contacto_partner_name', type: 'text' },
          contactoPartnerDescription: { col: 'contacto_partner_description', type: 'text' },
          contactoPartnerWebsite: { col: 'contacto_partner_website', type: 'text' },
          contactoPartnerEmail: { col: 'contacto_partner_email', type: 'text' },
          contactoPartnerPhone: { col: 'contacto_partner_phone', type: 'text' },
          contactoMapEmbed: { col: 'contacto_map_embed', type: 'text' },
          blogHeroTitle: { col: 'blog_hero_title', type: 'text' },
          blogHeroDescription: { col: 'blog_hero_description', type: 'text' },
          blogCtaTitle: { col: 'blog_cta_title', type: 'text' },
          blogCtaText: { col: 'blog_cta_text', type: 'text' },
        }

        for (const [key, { col, type }] of Object.entries(fieldMap)) {
          const val = (SEED_DATA as any)[key]
          if (val !== undefined && val !== null) {
            columns.push(`"${col}"`)
            if (type === 'json') {
              values.push(JSON.stringify(val))
              placeholders.push(`$${idx}::jsonb`)
            } else {
              values.push(val)
              placeholders.push(`$${idx}`)
            }
            idx++
          }
        }

        await pool.query(
          `INSERT INTO page_content (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`,
          values
        )
        results.push('PageContent: seeded from scratch')
      } else {
        // Update only NULL/empty fields
        results.push(`PageContent: ${rowCount} row(s) exist, updating empty fields only`)
        const currentRes = await pool.query('SELECT * FROM page_content LIMIT 1')
        const current = currentRes.rows[0]

        const fieldMap: Record<string, { col: string; type: 'text' | 'json' }> = {
          sobreHeroLabel: { col: 'sobre_hero_label', type: 'text' },
          sobreHeroTitle: { col: 'sobre_hero_title', type: 'text' },
          sobreHeroDescription: { col: 'sobre_hero_description', type: 'text' },
          sobreMissionTitle: { col: 'sobre_mission_title', type: 'text' },
          sobreMissionText1: { col: 'sobre_mission_text1', type: 'text' },
          sobreMissionText2: { col: 'sobre_mission_text2', type: 'text' },
          sobreStats: { col: 'sobre_stats', type: 'json' },
          sobreValuesHeading: { col: 'sobre_values_heading', type: 'text' },
          sobreValues: { col: 'sobre_values', type: 'json' },
          sobreVersionsHeading: { col: 'sobre_versions_heading', type: 'text' },
          sobreVersionsSubheading: { col: 'sobre_versions_subheading', type: 'text' },
          sobreVersions: { col: 'sobre_versions', type: 'json' },
          sobreTeamTitle: { col: 'sobre_team_title', type: 'text' },
          sobreTeamText1: { col: 'sobre_team_text1', type: 'text' },
          sobreTeamText2: { col: 'sobre_team_text2', type: 'text' },
          sobreCtaTitle: { col: 'sobre_cta_title', type: 'text' },
          sobreCtaText: { col: 'sobre_cta_text', type: 'text' },
          carreirasHeroTitle: { col: 'carreiras_hero_title', type: 'text' },
          carreirasHeroDescription: { col: 'carreiras_hero_description', type: 'text' },
          carreirasCultureHeading: { col: 'carreiras_culture_heading', type: 'text' },
          carreirasCultureSubheading: { col: 'carreiras_culture_subheading', type: 'text' },
          carreirasCultureValues: { col: 'carreiras_culture_values', type: 'json' },
          carreirasBenefitsTitle: { col: 'carreiras_benefits_title', type: 'text' },
          carreirasBenefits: { col: 'carreiras_benefits', type: 'json' },
          carreirasPositionsHeading: { col: 'carreiras_positions_heading', type: 'text' },
          carreirasCtaTitle: { col: 'carreiras_cta_title', type: 'text' },
          carreirasCtaText: { col: 'carreiras_cta_text', type: 'text' },
          carreirasCtaEmail: { col: 'carreiras_cta_email', type: 'text' },
          contactoHeroTitle: { col: 'contacto_hero_title', type: 'text' },
          contactoHeroDescription: { col: 'contacto_hero_description', type: 'text' },
          contactoPartnerName: { col: 'contacto_partner_name', type: 'text' },
          contactoPartnerDescription: { col: 'contacto_partner_description', type: 'text' },
          contactoPartnerWebsite: { col: 'contacto_partner_website', type: 'text' },
          contactoPartnerEmail: { col: 'contacto_partner_email', type: 'text' },
          contactoPartnerPhone: { col: 'contacto_partner_phone', type: 'text' },
          contactoMapEmbed: { col: 'contacto_map_embed', type: 'text' },
          blogHeroTitle: { col: 'blog_hero_title', type: 'text' },
          blogHeroDescription: { col: 'blog_hero_description', type: 'text' },
          blogCtaTitle: { col: 'blog_cta_title', type: 'text' },
          blogCtaText: { col: 'blog_cta_text', type: 'text' },
        }

        const updates: string[] = []
        const vals: any[] = []
        let idx = 1

        for (const [key, { col, type }] of Object.entries(fieldMap)) {
          const currentVal = current[col]
          const isEmpty = currentVal === null || currentVal === undefined || currentVal === ''
          if (isEmpty) {
            const seedVal = (SEED_DATA as any)[key]
            if (seedVal !== undefined && seedVal !== null) {
              if (type === 'json') {
                updates.push(`"${col}" = $${idx}::jsonb`)
                vals.push(JSON.stringify(seedVal))
              } else {
                updates.push(`"${col}" = $${idx}`)
                vals.push(seedVal)
              }
              idx++
            }
          }
        }

        if (updates.length > 0) {
          vals.push(current.id)
          await pool.query(
            `UPDATE page_content SET ${updates.join(', ')} WHERE id = $${idx}`,
            vals
          )
          results.push(`PageContent: updated ${updates.length} empty fields`)
        } else {
          results.push('PageContent: all fields already have values, nothing to update')
        }
      }
    } catch (e: any) {
      results.push(`PageContent seed ERROR: ${e.message}`)
    }

    // Step 3: Seed JobPositions
    try {
      const countRes = await pool.query('SELECT count(*) as cnt FROM job_positions')
      const jobCount = parseInt(countRes.rows[0].cnt)

      if (jobCount === 0) {
        for (const pos of JOB_POSITIONS) {
          await pool.query(
            `INSERT INTO job_positions (title, department, location, type, description, responsibilities, requirements, active, "order")
             VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7::jsonb, $8, $9)`,
            [
              pos.title,
              pos.department,
              pos.location,
              pos.type,
              pos.description,
              JSON.stringify(pos.responsibilities),
              JSON.stringify(pos.requirements),
              pos.active,
              pos.order,
            ]
          )
          results.push(`JobPosition created: ${pos.title}`)
        }
      } else {
        results.push(`JobPositions: ${jobCount} already exist, skipping`)
      }
    } catch (e: any) {
      results.push(`JobPositions seed ERROR: ${e.message}`)
    }

    return NextResponse.json({ ok: true, results })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message, results }, { status: 500 })
  }
}
