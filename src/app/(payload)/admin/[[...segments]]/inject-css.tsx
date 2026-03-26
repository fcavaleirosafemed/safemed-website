'use client'

import { useEffect } from 'react'

/**
 * Workaround for Next.js 15 loading Payload's page.css as preload instead of stylesheet.
 * This component finds the preloaded CSS and promotes it to an active stylesheet.
 */
export function InjectPayloadCSS() {
  useEffect(() => {
    // Find preloaded Payload CSS that hasn't been applied
    const preloads = document.querySelectorAll('link[rel="preload"][as="style"]')
    preloads.forEach((link) => {
      const href = link.getAttribute('href')
      if (href && href.includes('payload') && href.endsWith('.css')) {
        // Check if there's already an active stylesheet for this href
        const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`)
        if (!existing) {
          const stylesheet = document.createElement('link')
          stylesheet.rel = 'stylesheet'
          stylesheet.href = href
          document.head.appendChild(stylesheet)
        }
      }
    })

    // Also handle the specific page.css pattern
    const allPreloads = document.querySelectorAll('link[rel="preload"][as="style"]')
    allPreloads.forEach((link) => {
      const href = link.getAttribute('href')
      if (href && href.includes('page.css')) {
        const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`)
        if (!existing) {
          const stylesheet = document.createElement('link')
          stylesheet.rel = 'stylesheet'
          stylesheet.href = href
          document.head.appendChild(stylesheet)
        }
      }
    })
  }, [])

  return null
}
