/**
 * Simple in-memory daily rate limiter for AI chat.
 *
 * Tracks the number of AI requests per day and blocks when the daily limit is reached.
 * The limit is configurable via AI_DAILY_LIMIT env var (default: 200 requests/day).
 *
 * Cost estimation (Claude Haiku):
 * - ~500 tokens per request (input + output)
 * - ~$0.001 per request
 * - 200 requests/day = ~$0.20/day = ~$6/month
 *
 * For production with multiple instances, replace with Redis or database counter.
 */

interface DailyCounter {
  date: string // YYYY-MM-DD
  count: number
}

let counter: DailyCounter = {
  date: '',
  count: 0,
}

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function resetIfNewDay(): void {
  const today = getTodayKey()
  if (counter.date !== today) {
    counter = { date: today, count: 0 }
  }
}

export function getDailyLimit(): number {
  return parseInt(process.env.AI_DAILY_LIMIT || '200', 10)
}

export function getDailyUsage(): { count: number; limit: number; remaining: number } {
  resetIfNewDay()
  const limit = getDailyLimit()
  return {
    count: counter.count,
    limit,
    remaining: Math.max(0, limit - counter.count),
  }
}

export function isWithinDailyLimit(): boolean {
  resetIfNewDay()
  return counter.count < getDailyLimit()
}

export function incrementDailyUsage(): void {
  resetIfNewDay()
  counter.count++
}
