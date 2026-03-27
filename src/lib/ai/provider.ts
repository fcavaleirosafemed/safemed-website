import { createAnthropic } from '@ai-sdk/anthropic'
import { createOpenAI } from '@ai-sdk/openai'
import type { LanguageModel } from 'ai'

/**
 * AI Provider Configuration
 *
 * Supports multiple providers and models via environment variables:
 *
 * AI_PROVIDER=anthropic|openai  (default: anthropic)
 * AI_MODEL=claude-sonnet-4-20250514|gpt-4o|etc  (default depends on provider)
 *
 * API Keys:
 * ANTHROPIC_API_KEY=sk-ant-...
 * OPENAI_API_KEY=sk-...
 */

type ProviderName = 'anthropic' | 'openai'

const PROVIDER_DEFAULTS: Record<ProviderName, string> = {
  anthropic: 'claude-haiku-4-5-20251001',
  openai: 'gpt-4o-mini',
}

export function getAIModel(): LanguageModel {
  const providerName = (process.env.AI_PROVIDER || 'anthropic') as ProviderName
  const modelId = process.env.AI_MODEL || PROVIDER_DEFAULTS[providerName] || PROVIDER_DEFAULTS.anthropic

  switch (providerName) {
    case 'anthropic': {
      const anthropic = createAnthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      })
      return anthropic(modelId)
    }

    case 'openai': {
      const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      })
      return openai(modelId)
    }

    default: {
      // Fallback to anthropic
      const anthropic = createAnthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      })
      return anthropic(PROVIDER_DEFAULTS.anthropic)
    }
  }
}

export function getProviderInfo() {
  const providerName = (process.env.AI_PROVIDER || 'anthropic') as ProviderName
  const modelId = process.env.AI_MODEL || PROVIDER_DEFAULTS[providerName]
  return { provider: providerName, model: modelId }
}
