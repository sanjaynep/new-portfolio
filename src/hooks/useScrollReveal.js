import { useEffect, useRef } from 'react'

export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    const revealClasses = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale']
    if (revealClasses.some((c) => el.classList.contains(c))) {
      observer.observe(el)
    }
    el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((child) =>
      observer.observe(child)
    )

    return () => observer.disconnect()
  }, [threshold])

  return ref
}