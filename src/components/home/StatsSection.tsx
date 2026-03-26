'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Empresas Clientes' },
  { value: 200, suffix: 'K+', label: 'Trabalhadores Geridos' },
  { value: 15, suffix: '+', label: 'Anos de Experiência' },
  { value: 99.9, suffix: '%', label: 'Uptime da Plataforma' },
]

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const startTime = Date.now()
          const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setDisplayValue(Number((value * eased).toFixed(value % 1 !== 0 ? 1 : 0)))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight gradient-text">
        {displayValue}{suffix}
      </div>
      <div className="mt-2 text-sm text-surface-500 font-medium">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-surface-50/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
