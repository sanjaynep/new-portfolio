import { FiCpu, FiDatabase, FiBarChart2, FiServer, FiLayout, FiCloud } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  { icon: FiCpu, title: 'AI & Machine Learning', tags: ['Scikit-learn', 'Predictive Modeling', 'Time Series', 'OpenCV'] },
  { icon: FiDatabase, title: 'Data Engineering', tags: ['PostgreSQL', 'Apache Airflow', 'PySpark', 'ETL Pipelines', 'Feature Scaling'] },
  { icon: FiBarChart2, title: 'Data Analysis & Viz', tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'] },
  { icon: FiServer, title: 'Backend Development', tags: ['Python (Django)', 'DRF', 'JWT Auth', 'Celery', 'Redis', 'REST APIs'] },
  { icon: FiLayout, title: 'Frontend Development', tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'] },
  { icon: FiCloud, title: 'Cloud, DevOps & Tools', tags: ['AWS (EC2, S3)', 'Docker', 'Linux', 'Git/GitHub', 'Selenium', 'Postman'] },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-20 md:py-32 bg-cream-dark/50" ref={ref}>
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="reveal mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-brand/40">02 — Skills</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-brand mt-3">
            Technologies I <span className="font-serif italic font-normal">work with</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={cat.title} className="reveal-scale bg-white/60 border border-brand/5 rounded-2xl p-6" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand/70" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-brand">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs font-medium bg-brand/5 text-brand/70 px-3 py-1.5 rounded-lg cursor-default">{tag}</span>
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