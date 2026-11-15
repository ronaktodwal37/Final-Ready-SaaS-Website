import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCard({ plan, price, period, features, badge, cta, link, selected }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      className={`flex flex-col rounded-2xl border bg-white p-7 ${selected ? "border-brandViolet shadow-xl" : "border-gray-200 shadow-card"}`}
    >
      {badge && <span className="mb-3 self-start rounded-full bg-secondaryBg px-3 py-1 text-xs font-semibold text-brandViolet">{badge}</span>}
      <h3 className="mb-2 font-heading text-2xl font-bold text-deepNavy">{plan}</h3>
      <p className="mb-6 text-4xl font-bold text-deepNavy">
        ${price}<span className="text-base font-medium text-mutedSlate">/{period}</span>
      </p>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-mutedSlate">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brandViolet" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={link} className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brandViolet to-brandIndigo px-4 py-3 font-semibold text-white transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandViolet focus-visible:ring-offset-2">
        {cta}
      </Link>
    </motion.article>
  );
}
