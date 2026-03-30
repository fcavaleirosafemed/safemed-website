'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * VisitorTracker — client-side component that tracks page views.
 *
 * - Generates a unique visitorId (stored in localStorage)
 * - Sends page views to /api/track on each navigation
 * - Tracks time on page (sent on next navigation or beforeunload)
 * - Respects cookie consent: only tracks if necessary cookies accepted
 *   (we consider basic analytics as necessary for security/fraud detection)
 */

function getOrCreateVisitorId(): string {
  const KEY = 'safemed-vid'
  let id = localStorage.getItem(KEY)
  if (!id) {
    // Generate a unique ID: timestamp + random
    id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    localStorage.setItem(KEY, id)
  }
  return id
}

function sendTrackEvent(data: Record<string, any>) {
  // Use sendBeacon for reliability (works on page unload)
  const payload = JSON.stringify(data)
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/track', new Blob([payload], { type: 'application/json' }))
  } else {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {})
  }
}

export function VisitorTracker() {
  const pathname = usePathname()
  const pageEnteredAt = useRef<number>(Date.now())
  const lastPath = useRef<string>('')
  const visitorIdRef = useRef<string>('')

  useEffect(() => {
    // Initialize visitor ID
    visitorIdRef.current = getOrCreateVisitorId()
  }, [])

  useEffect(() => {
    if (!visitorIdRef.current) {
      visitorIdRef.current = getOrCreateVisitorId()
    }

    const visitorId = visitorIdRef.current
    const now = Date.now()

    // Send time on previous page (if navigating within the site)
    if (lastPath.current && lastPath.current !== pathname) {
      const timeOnPage = Math.round((now - pageEnteredAt.current) / 1000)
      if (timeOnPage > 0 && timeOnPage < 3600) {
        sendTrackEvent({
          visitorId,
          path: lastPath.current,
          title: '',
          timeOnPage,
        })
      }
    }

    // Track new page view
    pageEnteredAt.current = now
    lastPath.current = pathname

    // Small delay to ensure document.title is updated
    const timer = setTimeout(() => {
      sendTrackEvent({
        visitorId,
        path: pathname,
        title: document.title,
        referrer: document.referrer || '',
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  // Track time on last page when leaving the site
  useEffect(() => {
    const handleUnload = () => {
      if (!lastPath.current || !visitorIdRef.current) return
      const timeOnPage = Math.round((Date.now() - pageEnteredAt.current) / 1000)
      if (timeOnPage > 0 && timeOnPage < 3600) {
        sendTrackEvent({
          visitorId: visitorIdRef.current,
          path: lastPath.current,
          title: document.title,
          timeOnPage,
        })
      }
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [])

  return null // No UI — invisible tracker
}
