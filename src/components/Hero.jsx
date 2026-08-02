import { FiArrowDown, FiGithub } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

// Replace this with your actual photo:
import profileImg from '/sanjay3.png'


export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-cream-darker rounded-full blur-3xl opacity-40 float" />
      <div
        className="absolute bottom-20 -right-32 w-80 h-80 bg-cream-darker rounded-full blur-3xl opacity-30 float"
        style={{ animationDelay: '-3s' }}
      />

      <div className="max-w-site mx-auto px-6 lg:px-12 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Tag */}
            <div className="reveal mb-6">
              <span className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand/70 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="reveal font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand leading-[1.08] mb-6"
              style={{ transitionDelay: '0.1s' }}
            >
              Sanjay
              <br />
              <span className="font-serif italic font-normal text-brand/80">Chudali</span>
            </h1>

            {/* Roles */}
            <div
              className="reveal flex flex-wrap gap-2 mb-8"
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-sm font-medium bg-brand text-white px-4 py-1.5 rounded-full">
                AI/ML Developer
              </span>
              <span className="text-sm font-medium border border-brand/20 text-brand/70 px-4 py-1.5 rounded-full">
                Full Stack Developer
              </span>
              <span className="text-sm font-medium border border-brand/20 text-brand/70 px-4 py-1.5 rounded-full">
                Data Engineer
              </span>
            </div>

            {/* Summary */}
            <p
              className="reveal text-base md:text-lg text-brand/60 leading-relaxed max-w-xl mb-10"
              style={{ transitionDelay: '0.3s' }}
            >
              Final-year CSIT student building across the full stack — from data
              pipelines and ML models to production web apps with Django & React.
            </p>

            {/* CTAs */}
            <div
              className="reveal flex flex-wrap gap-4"
              style={{ transitionDelay: '0.4s' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-brand text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-brand/90 transition-colors"
              >
                View Projects <FiArrowDown className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sanjaynep"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-brand/20 text-brand/80 font-medium text-sm px-7 py-3.5 rounded-full hover:border-brand/40 hover:text-brand transition-all"
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
            </div>

            {/* Stats */}
            <div
              className="reveal flex flex-wrap gap-8 mt-14 pt-8 border-t border-brand/10"
              style={{ transitionDelay: '0.5s' }}
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '2', label: 'Certifications' },
                { value: '7th', label: 'Semester' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-bold text-brand">{s.value}</div>
                  <div className="text-xs text-brand/50 font-medium uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Picture */}
          <div
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end reveal-scale"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Spinning decorative ring */}
              <div className="absolute -inset-4 rounded-full profile-ring opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="none"
                    stroke="#0a0f26"
                    strokeWidth="0.5"
                    strokeDasharray="8 6"
                  />
                </svg>
              </div>

              {/* Second ring */}
              <div
                className="absolute -inset-8 rounded-full opacity-10"
                style={{ animation: 'spin-slow 30s linear infinite reverse' }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="none"
                    stroke="#0a0f26"
                    strokeWidth="0.3"
                    strokeDasharray="4 12"
                  />
                </svg>
              </div>

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cream shadow-xl">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Sanjay Chudali"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder — replace with your actual photo */
                  <div className="w-full h-full bg-brand/5 flex items-center justify-center">
                    <span className="font-display font-bold text-6xl sm:text-7xl md:text-8xl text-brand/20">
                      SC
                    </span>
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white border border-brand/10 rounded-2xl px-4 py-2.5 shadow-lg float">
                <div className="text-xs font-medium text-brand/50">Location</div>
                <div className="text-sm font-display font-semibold text-brand flex items-center gap-1.5">
                  🇳🇵 Butwal, Nepal
                </div>
              </div>

              {/* Top badge */}
              <div
                className="absolute -top-2 -left-2 bg-white border border-brand/10 rounded-2xl px-4 py-2.5 shadow-lg float"
                style={{ animationDelay: '-2s' }}
              >
                <div className="text-xs font-medium text-brand/50">Focus</div>
                <div className="text-sm font-display font-semibold text-brand">AI / ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-widest font-medium text-brand/60">Scroll</span>
        <div className="w-5 h-8 border border-brand/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-brand/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}