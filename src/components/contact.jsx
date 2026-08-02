import { useState, useRef } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiGlobe, FiSend, FiLoader } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com'
import useScrollReveal from '../hooks/useScrollReveal'

const contactLinks = [
  { icon: FiMail, label: 'poudelsanjay93@gmail.com', href: 'mailto:poudelsanjay93@gmail.com' },
  { icon: FiPhone, label: '+977 9742354671', href: 'tel:+9779742354671' },
  { icon: FiLinkedin, label: 'linkedin.com/in/sanjaychudali01', href: 'https://linkedin.com/in/sanjaychudali01' },
  { icon: FiGithub, label: 'github.com/sanjaynep', href: 'https://github.com/sanjaynep' },
  { icon: FiGlobe, label: 'sanjayp.me', href: 'https://sanjayp.me' },
]

// ─── Fill these from emailjs.com dashboard ───
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const USER_ID = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────

export default function Contact() {
  const ref = useScrollReveal()
  const formRef = useRef(null)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ email: '', username: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        position: 'bottom-right',
        autoClose: 4000,
        hideProgressBar: false,
        theme: 'dark',
      })
      setForm({ email: '', username: '', subject: '', message: '' })
    } catch (err) {
      toast.error('Failed to send message. Please try again or email me directly.', {
        position: 'bottom-right',
        autoClose: 4000,
        theme: 'dark',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <ToastContainer />

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
        <div className="reveal mb-12 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-white/40">06 — Contact</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mt-3 leading-tight">
            Let's work<br /><span className="font-serif italic font-normal text-white/70">together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div className="reveal-left">
            <p className="text-base text-white/50 leading-relaxed mb-10 max-w-md">
              I'm open to full-time roles, internships, and freelance projects in AI/ML, data engineering, or full-stack development.
            </p>
            <div className="space-y-1">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link-item flex items-center gap-4 py-3.5 px-4 -mx-4 rounded-xl hover:bg-white/5 text-white/60 transition-all"
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal-right">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="form-input w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Your_name"
                  required
                  className="form-input w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject title"
                  required
                  className="form-input w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="form-input w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2.5 bg-white text-brand font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><FiLoader className="w-4 h-4 animate-spin" /> Sending Message</>
                  ) : (
                    <><FiSend className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}