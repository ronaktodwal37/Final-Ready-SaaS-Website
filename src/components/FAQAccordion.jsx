import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const panelId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `${panelId}-answer-${index}`;
        return (
          <div key={`${item.q}-${index}`} className="rounded-xl border border-gray-200 bg-white px-5 py-4">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left font-semibold text-deepNavy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandViolet"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 leading-relaxed text-mutedSlate">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
