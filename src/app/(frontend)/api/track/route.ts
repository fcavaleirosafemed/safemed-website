import { NextResponse } from 'next/server'

/**
 * Visitor tracking API — temporarily returning no-op responses
 * until Visitors collection DB migration is complete.
 */

export async function POST() {
  return NextResponse.json({ ok: true, action: 'disabled' })
}

export async function GET() {
  return NextResponse.json({ status: 'disabled', service: 'safemed-tracker' })
}
