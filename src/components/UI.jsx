import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function Brand({ light = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="FlowPilot home">
      <span
        className={`grid size-9 place-items-center rounded-xl ${light ? "bg-white text-violet-600" : "brand-mark"}`}
      >
        <Send size={18} strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span
        className={`font-display text-xl font-extrabold tracking-[-0.04em] ${light ? "text-white" : "text-ink"}`}
      >
        FlowPilot
      </span>
    </Link>
  );
}

export function Reveal({ children, className = "", delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="section-title mt-5">{title}</h2>
      {description && <p className="section-copy mt-5">{description}</p>}
    </Reveal>
  );
}

export function Button({ to, children, secondary = false, className = "", ...props }) {
  const classes = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`;
  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {children}
    </motion.button>
  );
}

export function CTASection({
  title = "Ready to make work flow?",
  text = "Bring clarity to your workday and give your team the tools to do its best work.",
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Reveal className="cta-panel">
        <div className="relative z-10 max-w-2xl">
          <Eyebrow>Make momentum your default</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">{text}</p>
          <Button to="/contact" secondary className="mt-8 !border-white !bg-white !text-violet-700">
            Get started <ArrowRight size={17} />
          </Button>
        </div>
        <div className="cta-orbit" aria-hidden="true">
          <Send size={70} />
        </div>
      </Reveal>
    </section>
  );
}
