'use client'

import { useEffect, useCallback } from 'react'

/**
 * TrackingScripts — loads third-party tracking scripts based on cookie consent.
 *
 * Reads IDs from data attributes (injected server-side from CMS settings).
 * Listens for the custom 'cookie-consent-update' event dispatched by CookieConsent.
 * Scripts are loaded once and never removed (standard practice — they just stop
 * sending data when consent is revoked on next page load).
 */

type CookiePrefs = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

function getConsent(): CookiePrefs | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('safemed-cookies')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

// ─── Google Tag Manager ──────────────────────────────────────
function loadGTM(gtmId: string) {
  if (document.getElementById('gtm-script')) return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(script)
}

// ─── Google Analytics (gtag.js) ──────────────────────────────
function loadGA(gaId: string) {
  if (document.getElementById('ga-script')) return
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  const w = window as any
  w.dataLayer = w.dataLayer || []
  function gtag(...args: any[]) {
    w.dataLayer.push(args)
  }
  w.gtag = gtag
  gtag('js', new Date())
  gtag('config', gaId, { anonymize_ip: true })
}

// ─── HubSpot ─────────────────────────────────────────────────
function loadHubSpot(hubspotId: string) {
  if (document.getElementById('hs-script')) return
  const script = document.createElement('script')
  script.id = 'hs-script'
  script.async = true
  script.defer = true
  script.src = `//js.hs-scripts.com/${hubspotId}.js`
  document.head.appendChild(script)
}

export interface TrackingConfig {
  gtmId?: string | null
  gaId?: string | null
  hubspotId?: string | null
}

export function TrackingScripts({ gtmId, gaId, hubspotId }: TrackingConfig) {
  const initTracking = useCallback(
    (consent: CookiePrefs) => {
      // Analytics scripts — require analytics consent
      if (consent.analytics) {
        if (gtmId) loadGTM(gtmId)
        if (gaId) loadGA(gaId)
      }

      // Marketing scripts — require marketing consent
      if (consent.marketing) {
        if (hubspotId) loadHubSpot(hubspotId)
      }
    },
    [gtmId, gaId, hubspotId],
  )

  useEffect(() => {
    // Check existing consent on mount
    const consent = getConsent()
    if (consent) {
      initTracking(consent)
    }

    // Listen for consent updates from CookieConsent component
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail
      if (detail) initTracking(detail)
    }

    window.addEventListener('cookie-consent-update', handler)
    return () => window.removeEventListener('cookie-consent-update', handler)
  }, [initTracking])

  // GTM noscript fallback (for users with JS disabled)
  if (!gtmId) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
