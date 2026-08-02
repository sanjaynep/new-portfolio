import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  { title: 'Data Pipelines', desc: 'Built data preprocessing pipelines handling missing values, outliers, and feature scaling ahead of model training — preparing clean datasets for downstream ML workflows.' },
  { title: 'Model Deployment', desc: 'Connected trained machine learning models to production web applications built with Django and React, enabling real-time predictions for end users.' },
  { title: 'Full-Stack Development', desc: 'Built end-to-end web applications connecting React frontends to Django backends. Designed database schemas, JWT-based auth, and handled the full data flow between client and server.' },
  { title: 'Performance Optimization', desc: 'Moved slow, heavy tasks off the main request cycle into Celery and Redis background workers, keeping applications responsive under load.' },
  { title: 'Automation', desc: 'Wrote Python and Selenium scripts to automate data extraction, replacing manual collection work and significantly reducing processing time.' },
  { title: 'DevOps & Deployment', desc: 'Used Docker to containerize applications, keeping development and deployment environments consistent. Managed AWS EC2 instances and S3 storage for production workloads.' },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="reveal mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-brand/40">03 — Experience</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-brand mt-3">
            What I've <span className="font-serif italic font-normal">done</span>
          </h2>
        </div>

        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brand/10" />
          {items.map((item, i) => (
            <div key={item.title} className="reveal relative pl-10 pb-12" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="timeline-dot absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-brand border-2 border-cream z-10" />
              <div>
                <h3 className="font-display font-semibold text-base text-brand mb-2">{item.title}</h3>
                <p className="text-sm text-brand/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}