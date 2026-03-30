'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Settings2 } from 'lucide-react'

type CookiePrefs = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem('safemed-cookies')
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const savePreferences = (accepted: CookiePrefs) => {
    localStorage.setItem('safemed-cookies', JSON.stringify(accepted))
    setVisible(false)

    // Dispatch event so TrackingScripts can react
    window.dispatchEvent(
      new CustomEvent('cookie-consent-update', { detail: accepted }),
    )
  }

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true })
  }

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false })
  }

  const saveCustom = () => {
    savePreferences(prefs)
  }

  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-md transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-surface-200/60 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-safemed-600" />
              <h3 className="font-semibold text-surface-900">Cookies</h3>
            </div>
            <button
              onClick={rejectAll}
              className="p-1 rounded-lg hover:bg-surface-50 text-surface-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-surface-600 leading-relaxed mb-4">
            Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e
            identificar empresas que visitam o nosso site.{' '}
            <Link href="/cookies" className="text-safemed-600 hover:underline">
              Saber mais
            </Link>
          </p>

          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{
              maxHeight: showDetails ? '300px' : '0',
              opacity: showDetails ? 1 : 0,
            }}
          >
            <div className="space-y-3 mb-4">
              <label className="flex items-center justify-between p-3 bg-surface-50 rounded-xl">
                <div>
                  <div className="text-sm font-medium text-surface-900">Necessários</div>
                  <div className="text-xs text-surface-500">
                    Essenciais para o site funcionar
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 accent-safemed-600"
                />
              </label>
              <label className="flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer">
                <div>
                  <div className="text-sm font-medium text-surface-900">Analytics</div>
                  <div className="text-xs text-surface-500">
                    Google Analytics e Tag Manager
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="w-4 h-4 accent-safemed-600"
                />
              </label>
              <label className="flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer">
                <div>
                  <div className="text-sm font-medium text-surface-900">Marketing</div>
                  <div className="text-xs text-surface-500">
                    Snitcher, HubSpot e conteúdo personalizado
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="w-4 h-4 accent-safemed-600"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 px-4 py-2.5 bg-surface-900 text-white text-sm font-semibold rounded-xl hover:bg-surface-800 transition-colors"
            >
              Aceitar Todos
            </button>
            {showDetails ? (
              <button
                onClick={saveCustom}
                className="flex-1 px-4 py-2.5 bg-surface-100 text-surface-700 text-sm font-semibold rounded-xl hover:bg-surface-200 transition-colors"
              >
                Guardar Preferências
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-surface-100 text-surface-700 text-sm font-medium rounded-xl hover:bg-surface-200 transition-colors"
              >
                <Settings2 className="w-3.5 h-3.5" />
                Personalizar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
