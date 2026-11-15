import { Check, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button, CTASection, Eyebrow, Reveal, SectionHeading } from "../components/UI";

const plans = [
  {
    name: "Starter",
    note: "For individuals and small teams",
    monthly: 0,
    yearly: 0,
    features: [
      "Basic Task Management",
      "Up to 3 Projects",
      "Essential Analytics",
      "Community Support",
      "Basic Collaboration",
    ],
  },
  {
    name: "Professional",
    note: "For growing teams and businesses",
    monthly: 19,
    yearly: 15,
    popular: true,
    features: [
      "Unlimited Projects",
      "Advanced Workflows",
      "Team Collaboration",
      "Priority Support",
      "Advanced Analytics",
      "Smart Notifications",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="section-shell text-center">
          <Eyebrow>Simple pricing</Eyebrow>
          <h1 className="page-title mt-6">
            Simple plans.
            <br />
            Serious <span className="gradient-text">productivity.</span>
          </h1>
          <p className="page-lead mx-auto mt-6">
            Choose the perfect plan for your team and start building better workflows today.
          </p>
          <div className="billing-toggle mt-8" role="group" aria-label="Billing period">
            <button className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button className={yearly ? "active" : ""} onClick={() => setYearly(true)}>
              Yearly <span>Save 20%</span>
            </button>
          </div>
        </div>
      </section>
      <section className="section-shell -mt-10 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -5 }}
                className={`price-card ${plan.popular ? "popular" : ""} ${selected === plan.name ? "selected" : ""}`}
              >
                {plan.popular && <span className="popular-badge">Most popular</span>}
                <h2 className="text-2xl font-extrabold">{plan.name}</h2>
                <p className="mt-2 text-sm text-slate">{plan.note}</p>
                <div className="mt-7 flex items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.strong
                      key={`${plan.name}-${yearly}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-5xl font-extrabold tracking-[-.05em]"
                    >
                      {plan.monthly === 0 ? "Free" : `$${yearly ? plan.yearly : plan.monthly}`}
                    </motion.strong>
                  </AnimatePresence>
                  <span className="pb-1 text-sm text-slate">/ month</span>
                </div>
                {yearly && plan.monthly > 0 && (
                  <p className="mt-2 text-sm font-bold text-emerald-600">
                    Billed yearly — save $48
                  </p>
                )}
                <ul className="my-8 space-y-4">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="check">
                        <Check size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  secondary={!plan.popular}
                  onClick={() => setSelected(plan.name)}
                >
                  {plan.name === "Starter" ? "Start free trial" : "Choose Professional"}
                </Button>
                {selected === plan.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-xs font-bold text-violet-600"
                  >
                    <Check size={13} className="inline" /> {plan.name} selected — continue via
                    contact
                  </motion.p>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 text-center text-xs text-slate">
          Illustrative prices only. No payment gateway or real subscription is connected.
        </p>
      </section>
      <section className="soft-section py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Compare plans" title="The right foundation at every stage." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Projects", "3", "Unlimited"],
              ["Automation rules", "—", "Advanced"],
              ["Support", "Community", "Priority"],
            ].map((row) => (
              <div className="compare-card" key={row[0]}>
                <strong>{row[0]}</strong>
                <span>
                  Starter <b>{row[1]}</b>
                </span>
                <span>
                  Professional <b>{row[2]}</b>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-24">
        <SectionHeading eyebrow="Pricing questions" title="Clear answers before you choose." />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {[
            [
              "Can I switch plans later?",
              "Yes. The production concept is designed for flexible upgrades or downgrades.",
            ],
            [
              "What happens after a trial?",
              "This frontend demonstration does not create an account or start a real trial.",
            ],
            [
              "Is yearly billing discounted?",
              "Yes. The yearly UI shows an illustrative 20% savings.",
            ],
            [
              "Is payment information required?",
              "No payment information is collected anywhere in this demonstration.",
            ],
          ].map(([q, a]) => (
            <article className="faq-mini" key={q}>
              <ShieldCheck size={20} />
              <div>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Choose clarity over busywork." />
    </>
  );
}
