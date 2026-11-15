import { ArrowRight, BarChart3, Bot, CheckCircle2, ListTodo, Play, Users } from "lucide-react";
import { motion } from "framer-motion";
import DashboardPreview from "../components/DashboardPreview";
import { Button, CTASection, Eyebrow, Reveal, SectionHeading } from "../components/UI";

const highlights = [
  [ListTodo, "Smart Tasks", "Organize your work with clarity."],
  [Bot, "Automations", "Save time on repeatable steps."],
  [Users, "Collaboration", "Move forward together."],
  [BarChart3, "Analytics", "Track the progress that matters."],
];

const testimonials = [
  [
    "“FlowPilot turns a busy week into a plan our whole team can understand.”",
    "Maya Chen",
    "Product lead",
    "MC",
  ],
  [
    "“The automation view makes every handoff feel intentional, not reactive.”",
    "Jon Bell",
    "Agency founder",
    "JB",
  ],
  [
    "“We spend less time reporting on work and more time improving it.”",
    "Amara Okafor",
    "Operations director",
    "AO",
  ],
];

export default function Home() {
  return (
    <>
      <section className="hero-grid-bg relative min-h-[720px] overflow-hidden border-b border-violet-100">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="section-shell grid items-center gap-16 py-20 lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr] lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <Eyebrow>The future of work management</Eyebrow>
            <h1 className="hero-title mt-7">
              Your Workflows.
              <br />
              <span className="gradient-text">Reimagined.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate sm:text-xl">
              Stop juggling tasks and scattered tools. Bring your projects, people, and productivity
              together with FlowPilot.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/pricing">
                Start free trial <ArrowRight size={17} />
              </Button>
              <Button to="/features?demo=true" secondary>
                <Play size={17} fill="currentColor" /> Watch demo
              </Button>
            </div>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["MC", "JB", "AO", "+"].map((name, i) => (
                  <span key={name} className={`avatar avatar-${i}`}>
                    {name}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400" aria-label="5 stars">
                  ★★★★★
                </div>
                <p className="text-sm font-bold text-ink">
                  Trusted by 10K+ teams <sup>*</sup>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      <section className="section-shell relative z-20 -mt-7 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article whileHover={{ y: -6 }} className="mini-feature">
                <span className="feature-icon">
                  <Icon size={21} />
                </span>
                <div>
                  <h2 className="font-display font-extrabold">{title}</h2>
                  <p className="mt-1 text-sm leading-5 text-slate">{text}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Illustrative customer stories"
            title="Trusted by ambitious teams"
            description="A workspace designed for people who want their best work to feel easier to deliver."
          />
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-slate">
            All company names, testimonials, and metrics below are illustrative sample content.
          </p>
          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-lg font-extrabold tracking-[-.03em] text-slate/60">
            {["Northstar", "Arc & Co.", "Summit", "Monogram", "LumaLabs"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map(([quote, name, role, initials], index) => (
              <Reveal key={name} delay={index * 0.08}>
                <article className="testimonial-card">
                  <p className="text-lg font-semibold leading-8 text-ink">{quote}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className={`avatar avatar-${index}`}>{initials}</span>
                    <div>
                      <h3 className="text-sm font-extrabold">{name}</h3>
                      <p className="text-xs text-slate">{role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex items-center justify-center gap-2 text-xs text-slate">
            <CheckCircle2 size={14} /> Sample content for product demonstration.
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
