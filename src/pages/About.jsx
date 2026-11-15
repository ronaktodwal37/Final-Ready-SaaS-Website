import { ArrowRight, Eye, Heart, Lightbulb, RefreshCw, Target, Users } from "lucide-react";
import { Button, CTASection, Eyebrow, Reveal, SectionHeading } from "../components/UI";

const values = [
  [Lightbulb, "Innovation", "Always question the complicated path."],
  [Users, "People First", "Build around real human needs."],
  [RefreshCw, "Continuous Improvement", "Learn, refine, and keep moving."],
  [Eye, "Transparency", "Make context and decisions visible."],
  [Target, "Impact Driven", "Measure what meaningfully changes."],
];

export default function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>About FlowPilot</Eyebrow>
            <h1 className="page-title mt-6">
              Building a more <span className="gradient-text">productive</span> tomorrow.
            </h1>
            <p className="page-lead mt-6">
              At FlowPilot, we believe in the power of focused work, smart tools, and great teams.
              Our mission is to help individuals and organizations achieve more with less effort.
            </p>
            <Button to="/contact" className="mt-8">
              Meet the product <ArrowRight size={17} />
            </Button>
          </div>
          <Reveal delay={0.1}>
            <WorkspaceVisual />
          </Reveal>
        </div>
      </section>
      <section className="section-shell grid gap-12 py-24 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="section-title mt-5">Work was getting louder, not better.</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-base leading-8 text-slate">
          <p>
            FlowPilot began as an idea for teams overwhelmed by scattered tasks, status meetings,
            and repetitive handoffs. Useful work was buried across too many places.
          </p>
          <p>
            We imagined one calm workspace where priorities stay visible, routine steps move
            automatically, and progress is easy to understand. This website presents that product
            vision as illustrative portfolio content.
          </p>
        </Reveal>
      </section>
      <section className="soft-section py-24">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="mission-card">
              <span>
                <Heart />
              </span>
              <p className="eyebrow !bg-white">Our mission</p>
              <h2>Make work simpler, smarter, and more organized.</h2>
              <p>Give every person the context and tools to move meaningful work forward.</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="mission-card vision">
              <span>
                <Eye />
              </span>
              <p className="eyebrow !bg-white">Our vision</p>
              <h2>A world where teams focus on work that matters.</h2>
              <p>Remove repetitive friction so energy can go toward ideas, craft, and impact.</p>
            </article>
          </Reveal>
        </div>
      </section>
      <section className="section-shell py-24">
        <SectionHeading eyebrow="What guides us" title="Values that show up in the product." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(([Icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="value-card">
                <span>
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="stats-band">
        <div className="section-shell py-16">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[.14em] text-white/60">
            Illustrative sample metrics — not verified performance
          </p>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              ["10K+", "Active teams"],
              ["99.9%", "Platform uptime"],
              ["4.8/5", "User rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-24">
        <SectionHeading eyebrow="Our approach" title="A practical path from chaos to clarity." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {[
            [
              "01",
              "Organize the work",
              "Turn goals into visible projects, owners, and next steps.",
            ],
            [
              "02",
              "Automate repetition",
              "Create dependable rules for routine handoffs and updates.",
            ],
            [
              "03",
              "Collaborate in context",
              "Keep decisions beside the work instead of across scattered threads.",
            ],
            [
              "04",
              "Measure productivity",
              "Use clear trends to improve the system, not monitor people.",
            ],
          ].map(([n, t, d]) => (
            <article className="approach-card" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Build a calmer way to work." />
    </>
  );
}

function WorkspaceVisual() {
  return (
    <div className="workspace-visual">
      <div className="workspace-window">
        <div className="window-top">
          <i />
          <i />
          <i />
        </div>
        <div className="workspace-body">
          <aside>
            <span />
            <span />
            <span />
            <span />
          </aside>
          <main>
            <div className="workspace-heading" />
            <div className="workspace-grid">
              <span />
              <span />
              <span />
            </div>
            <div className="workspace-list">
              <i />
              <i />
              <i />
            </div>
          </main>
        </div>
      </div>
      <div className="desk-plant">♧</div>
      <div className="coffee">◯</div>
    </div>
  );
}
