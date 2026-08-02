import { FiAward, FiCode } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-5 reveal-left">
            <span className="text-xs font-medium uppercase tracking-widest text-brand/40">05 — Education</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-brand mt-3 leading-tight">
              Academic <span className="font-serif italic font-normal">background</span>
            </h2>
          </div>

          <div className="md:col-span-7 reveal-right">
            <div className="bg-white/60 border border-brand/5 rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-semibold text-lg text-brand">B.Sc. in Computer Science & IT (CSIT)</h3>
                  <p className="text-sm text-brand/50 mt-1">Butwal Multiple Campus, Nepal</p>
                </div>
                <span className="text-xs font-medium bg-brand/5 text-brand/50 px-3 py-1.5 rounded-full whitespace-nowrap">2079 B.S. – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-brand/60 leading-relaxed">
                <li className="flex gap-2"><span className="text-brand/30 mt-0.5 shrink-0">•</span>Currently in 7th semester, focused on AI/ML development and scalable application design.</li>
                <li className="flex gap-2"><span className="text-brand/30 mt-0.5 shrink-0">•</span>Final-year research: intelligent, symptom-based diagnostic assistants using high-precision modeling — reaching 96% accuracy.</li>
              </ul>
            </div>

            <h3 className="font-display font-semibold text-sm text-brand/40 uppercase tracking-wider mb-4 mt-10">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/40 border border-brand/5 rounded-xl p-5">
                <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center shrink-0 mt-0.5"><FiAward className="w-5 h-5 text-brand/50" /></div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-brand">Data Engineering Track</h4>
                  <p className="text-xs text-brand/50 mt-1">DataCamp — Coursework in ETL pipeline design, pipeline automation, and database management for analytics workloads.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/40 border border-brand/5 rounded-xl p-5">
                <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center shrink-0 mt-0.5"><FiCode className="w-5 h-5 text-brand/50" /></div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-brand">HTML & CSS Training</h4>
                  <p className="text-xs text-brand/50 mt-1">Hub IT Training (2079 B.S.) — Built responsive, accessible layouts using semantic HTML5 and CSS3 (Flexbox/Grid).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}