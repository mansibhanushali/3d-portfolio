import React from 'react'
import { motion } from 'framer-motion'
import { profile } from './data/resume'
import ThreeHero from './components/ThreeHero'

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{children}</h2>
  )
}

function Chip({ children }) {
  return <span className="px-3 py-1 rounded-full bg-pastel-lilac/60 text-slate-700 text-xs sm:text-sm">{children}</span>
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-peach via-pastel-lavender to-pastel-sky text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-white/40 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-bold text-lg sm:text-xl">Mansi • Portfolio</a>
          <nav className="hidden sm:flex gap-5 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#edu" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 sm:pt-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {profile.name}
            </motion.h1>
            <p className="mt-3 text-lg sm:text-xl">{profile.role} — MERN • UI/UX</p>
            <p className="mt-4 text-slate-700">{profile.objective}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" className="glass px-4 py-2">LinkedIn</a>
              <a href={profile.github} target="_blank" className="glass px-4 py-2">GitHub</a>
              <a href="#contact" className="glass px-4 py-2">Hire Me</a>
            </div>
          </div>
          <div className="glass">
            <ThreeHero />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-5">
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">{profile.skills.frontend.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">{profile.skills.backend.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold mb-3">Database</h3>
            <div className="flex flex-wrap gap-2">{profile.skills.db.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold mb-3">Design Tools</h3>
            <div className="flex flex-wrap gap-2">{profile.skills.tools.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 pb-12">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((p, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass p-5"
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm mt-1 text-slate-600">{p.tech}</p>
              <p className="mt-2">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="bg-white/40 border-t border-white/50">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle>About</SectionTitle>
            <p className="leading-relaxed">{profile.objective}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.languages.map(l => <Chip key={l}>{l}</Chip>)}
            </div>
          </div>
          <div id="edu">
            <SectionTitle>Education & Certifications</SectionTitle>
            <div className="space-y-4">
              {profile.education.map((e, i) => (
                <div key={i} className="glass p-4">
                  <div className="font-semibold">{e.degree}</div>
                  <div className="text-sm text-slate-600">{e.place} • {e.years}</div>
                  {e.note && <div className="text-sm mt-1">{e.note}</div>}
                </div>
              ))}
              <div className="glass p-4">
                <div className="font-semibold mb-2">Certifications</div>
                <ul className="list-disc ml-5 space-y-1">
                  {profile.certifications.map((c, i) => (
                    <li key={i} className="text-sm">{c.name} — {c.org} ({c.date})</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle>Contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6">
            <h3 className="font-semibold">Let’s work together</h3>
            <p className="mt-2 text-slate-700">I’m open to internships and projects in MERN stack and UI/UX.</p>
            <div className="mt-5 space-y-2 text-sm">
              <div><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div><strong>Phone:</strong> <a className="underline" href="tel:+919978317084">+91 99783 17084</a></div>
              <div><strong>Location:</strong> {profile.location}</div>
            </div>
          </div>
          <form className="glass p-6 space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input className="w-full p-3 rounded-xl border border-white/60" placeholder="Your name" />
            <input className="w-full p-3 rounded-xl border border-white/60" placeholder="Your email" type="email" />
            <textarea className="w-full p-3 rounded-xl border border-white/60 min-h-[120px]" placeholder="Message"></textarea>
            <button className="px-5 py-3 rounded-xl bg-pastel-mint hover:bg-pastel-sky transition font-medium">Send (demo)</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-sm py-8 text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Mansi Bhanushali.
      </footer>
    </div>
  )
}
