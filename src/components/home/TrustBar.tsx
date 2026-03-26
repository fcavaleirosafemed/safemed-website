'use client'

import { motion } from 'framer-motion'

const clients = [
  'Hospital de Santo António',
  'Grupo Pestana',
  'Simoldes',
  'Salvador Caetano',
  'Sonae',
  'CTT',
  'CP',
  'TAP Air Portugal',
  'Galp',
  'EDP',
]

export function TrustBar() {
  return (
    <section className="py-16 border-y border-surface-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-surface-400 mb-10 tracking-wide"
        >
          Empresas que confiam no Safemed para a gestão de SST
        </motion.p>

        {/* Logo scroll - placeholder with text for now, replace with logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-16 items-center animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="shrink-0 text-surface-300 font-display font-bold text-lg whitespace-nowrap hover:text-surface-500 transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
