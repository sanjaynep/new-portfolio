import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

export default function AboutMe() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-4 reveal-left">
            <span className="text-xs font-medium uppercase tracking-widest text-brand/40">01 — About</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-brand mt-3 leading-tight">
              Building the<br /><span className="font-serif italic font-normal">full pipeline</span>
            </h2>
          </div>

          <div className="md:col-span-8 reveal-right">
            <div className="space-y-5 text-brand/65 leading-relaxed">
              <p className="text-base md:text-lg">
                I'm a final-year Computer Science and IT student at Butwal Multiple Campus, Nepal. My work spans the entire data-to-deployment pipeline — I clean and engineer data with SQL and Python, train and evaluate predictive models, and ship those models into production web applications.
              </p>
              <p className="text-base md:text-lg">
                On the full-stack side, I build end-to-end applications connecting React frontends to Django backends, with experience in JWT authentication, background task processing with Celery/Redis, and containerized deployments using Docker.
              </p>
              <p className="text-base md:text-lg">
                I'm comfortable on the Linux command line, working with AWS services (EC2, S3), and automating workflows. My final-year research focuses on intelligent, symptom-based diagnostic assistants using high-precision modeling — achieving 96% accuracy on the test set.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-brand/10">
              <div className="flex items-center gap-2 text-sm text-brand/50"><FiMapPin className="w-4 h-4" /> Butwal, Nepal</div>
              <a href="mailto:poudelsanjay93@gmail.com" className="flex items-center gap-2 text-sm text-brand/50 hover:text-brand transition-colors"><FiMail className="w-4 h-4" /> poudelsanjay93@gmail.com</a>
              <a href="tel:+9779742354671" className="flex items-center gap-2 text-sm text-brand/50 hover:text-brand transition-colors"><FiPhone className="w-4 h-4" /> +977 9742354671</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}