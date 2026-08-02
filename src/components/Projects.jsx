import { FiHeart, FiMonitor, FiGitBranch, FiMail, FiShield, FiZap } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  { icon: FiHeart, title: 'Hospital Management System', subtitle: 'ML-Integrated Full Stack', year: '2025 – 2026', points: ['Built a diagnostic assistant that predicts disease from patient symptoms with 96% accuracy.', 'Built a full-stack platform that recommends doctors based on the predicted diagnosis.', 'Connected the Python prediction engine to a React dashboard for real-time updates.'], tags: ['Python', 'Django', 'React', 'Scikit-learn'] },
  { icon: FiMonitor, title: 'Netflix Data Visualization', subtitle: 'Data Analysis & Insights', year: '2025', points: ['Analyzed content distribution trends across movies and TV shows to identify growth patterns.', 'Built visualizations showing regional content production and rating distribution worldwide.'], tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { icon: FiGitBranch, title: 'ETL Pipeline with Log Processing', subtitle: 'Data Engineering & LLMs', year: '2025', points: ['Built a reusable pipeline that cleans and prepares raw datasets for data mining on million-row datasets.', 'Implemented log processing with anomaly detection — anomalies are assessed by an LLM for suggestions.'], tags: ['Python', 'Scikit-learn', 'LLMs'] },
  { icon: FiMail, title: 'Email Scheduling System', subtitle: 'Backend & Task Queues', year: '2025 – 2026', points: ['Built a scheduling system that sends emails at user-defined intervals using Celery workers.', 'Containerized the application with Docker for consistent deployment across environments.'], tags: ['Django', 'Celery', 'Redis', 'Docker'] },
  { icon: FiShield, title: 'Secure JWT Authentication', subtitle: 'Security & Auth System', year: '2025 – 2026', points: ['Built authentication with account activation and JWT token rotation.', 'Added server-side validation in DRF to catch common input and auth vulnerabilities.', 'React UI gives real-time feedback during sign-up and login flows.'], tags: ['Python', 'Django', 'React', 'DRF'] },
  { icon: FiZap, title: 'RESTful API Service', subtitle: 'CRUD API Design', year: '2025', points: ['Built a modular CRUD API using Django function-based views.', 'Tested endpoints in Postman to verify response correctness and error handling.'], tags: ['Django', 'DRF', 'Postman'] },
]

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-20 md:py-32 bg-cream-dark/50" ref={ref}>
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="reveal mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-brand/40">04 — Projects</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-brand mt-3">
            Selected <span className="font-serif italic font-normal">work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="reveal-scale project-card bg-white/70 border border-brand/5 rounded-2xl p-6 md:p-8 flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center"><Icon className="w-6 h-6 text-brand/60" /></div>
                  <span className="text-xs font-medium text-brand/40">{p.year}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-brand mb-1">{p.title}</h3>
                <p className="text-xs font-medium text-brand/40 mb-4 uppercase tracking-wider">{p.subtitle}</p>
                <ul className="space-y-2.5 text-sm text-brand/60 leading-relaxed flex-1">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-2"><span className="text-brand/30 mt-1 shrink-0">•</span>{pt}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-brand/5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-brand/5 text-brand/50 px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}