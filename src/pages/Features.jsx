import { ArrowRight, Check, GitBranch, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
// import DashboardPreview from "../components/DashboardPreview";
import { features } from "../data/content";
import { Button, CTASection, Eyebrow, Reveal, SectionHeading } from "../components/UI";

function FeatureVisual({ type }) {
  if (type === "chart")
    return (
      <div className="visual-chart">
        {[42, 68, 50, 86, 72, 100].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  if (type === "flow")
    return (
      <div className="visual-flow">
        <span>
          <Zap size={14} />
        </span>
        <i />
        <span>
          <GitBranch size={14} />
        </span>
        <i />
        <span>
          <Check size={14} />
        </span>
      </div>
    );
  if (type === "people")
    return (
      <div className="visual-people">
        {["MC", "JB", "AO"].map((x, i) => (
          <span className={`avatar avatar-${i}`} key={x}>
            {x}
          </span>
        ))}
        <b>+12</b>
      </div>
    );
  if (type === "tasks")
    return (
      <div className="visual-tasks">
        {["High priority", "In review", "Completed"].map((x, i) => (
          <span key={x}>
            <i className={`dot dot-${i}`} />
            {x}
            <b>{[3, 7, 12][i]}</b>
          </span>
        ))}
      </div>
    );
  if (type === "projects")
    return (
      <div className="visual-progress">
        <span>
          Website refresh <b>84%</b>
        </span>
        <i>
          <em style={{ width: "84%" }} />
        </i>
        <span>
          Spring launch <b>62%</b>
        </span>
        <i>
          <em style={{ width: "62%" }} />
        </i>
      </div>
    );
  return (
    <div className="visual-alerts">
      <span>
        <Sparkles size={16} /> Campaign approved <b>Now</b>
      </span>
      <span>
        <Check size={16} /> Sprint completed <b>2h</b>
      </span>
    </div>
  );
}

export default function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="page-spark" aria-hidden="true">
          ✦
        </div>
        <div className="section-shell relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Powerful features</Eyebrow>
            <h1 className="page-title mt-6">
              One Workspace.
              <br />
              Endless <span className="gradient-text">Possibilities.</span>
            </h1>
            <p className="page-lead mx-auto mt-6">
              Everything you need to plan, organize, automate, and grow — all in one place.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section-shell py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(index % 2) * 0.08}>
                <motion.article whileHover={{ y: -5 }} className="feature-card">
                  <div className="feature-card-copy">
                    <span className="feature-icon">
                      <Icon size={23} />
                    </span>
                    <h2 className="mt-5 text-xl font-extrabold tracking-[-.03em]">
                      {feature.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate">{feature.description}</p>
                    <ul className="mt-5 space-y-2">
                      {feature.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm font-semibold">
                          <Check size={15} className="text-violet-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="learn-link mt-6"
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      Learn more <ArrowRight size={15} />
                    </button>
                  </div>
                  <FeatureVisual type={feature.type} />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="soft-section py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="One clear command center"
            title="See the whole picture. Act on the right detail."
            description="FlowPilot brings planning, progress, and performance together without making your team learn another complicated system."
          />
          <Reveal className="mt-14">
            <div className="showcase-frame">
              <DashboardPreview compact />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-shell grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Automation that feels human</Eyebrow>
          <h2 className="section-title mt-5">
            Build a workflow once. Let FlowPilot keep it moving.
          </h2>
          <p className="section-copy mt-5">
            Connect triggers, conditions, and actions in a visual builder that makes every handoff
            easy to understand.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Fewer status meetings",
              "Consistent handoffs",
              "Faster response times",
              "More focused work",
            ].map((x) => (
              <span className="benefit-pill" key={x}>
                <Check size={15} />
                {x}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="automation-canvas">
            <span className="auto-node">Task created</span>
            <i />
            <span className="auto-node active">Assign owner</span>
            <i />
            <span className="auto-node mint">Notify team</span>
          </div>
        </Reveal>
      </section>
      <section className="soft-section py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="The FlowPilot advantage"
            title="Less tool switching. More real progress."
          />
          <div className="mt-12 overflow-hidden rounded-[28px] border border-violet-100 bg-white shadow-sm">
            {[
              ["Capability", "FlowPilot", "Disconnected tools"],
              ["Unified task and project context", "Included", "Scattered"],
              ["No-code workflow automation", "Included", "Add-on dependent"],
              ["Live analytics overview", "Included", "Manual reporting"],
              ["Focused collaboration", "Included", "Multiple channels"],
            ].map((row, i) => (
              <div key={row[0]} className={`comparison-row ${i === 0 ? "head" : ""}`}>
                {row.map((cell, j) => (
                  <span key={cell} className={j === 1 && i > 0 ? "good" : ""}>
                    {j === 1 && i > 0 ? <Check size={15} /> : null}
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Build your best workflow yet." />
    </>
  );
}
