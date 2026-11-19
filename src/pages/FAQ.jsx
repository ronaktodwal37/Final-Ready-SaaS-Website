import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CTASection, Eyebrow } from "../components/UI";
import { faqGroups } from "../data/content";

export default function FAQ() {
  // const [query, setQuery] = useState("");
  // const [open, setOpen] = useState("What is FlowPilot?");
  const groups = useMemo(
    () =>
      faqGroups
        .map((group) => ({
          ...group,
          items: group.items.filter(([q, a]) =>
            `${q} ${a}`.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter((group) => group.items.length),
    [query],
  );
  const count = groups.reduce((sum, group) => sum + group.items.length, 0);
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="section-shell text-center">
          <Eyebrow>FlowPilot help center</Eyebrow>
          <h1 className="page-title mt-6">
            Questions? We’ve got <span className="gradient-text">answers.</span>
          </h1>
          <p className="page-lead mx-auto mt-6">
            Explore common questions about the FlowPilot product concept, features, and pricing.
          </p>
          <label className="faq-search mx-auto mt-9">
            <Search size={19} />
            <span className="sr-only">Search frequently asked questions</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
            />
            {query && <span>{count} found</span>}
          </label>
        </div>
      </section>
      <section className="section-shell py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {groups.map((group) => (
            <section key={group.category}>
              <h2 className="mb-5 text-xl font-extrabold tracking-[-.03em]">{group.category}</h2>
              <div className="space-y-3">
                {group.items.map(([question, answer]) => {
                  const isOpen = open === question;
                  return (
                    <article className={`accordion ${isOpen ? "open" : ""}`} key={question}>
                      <h3>
                        <button
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? "" : question)}
                        >
                          <span>{question}</span>
                          <ChevronDown size={19} />
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p>{answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
          {count === 0 && (
            <div className="empty-state">
              <Search size={28} />
              <h2>No matching questions</h2>
              <p>Try a shorter search, or ask us directly.</p>
              <button onClick={() => setQuery("")}>Clear search</button>
            </div>
          )}
        </div>
      </section>
      <CTASection
        title="Still curious? Let’s talk."
        text="Tell us about your workflow and we’ll help you explore the right next step."
      />
    </>
  );
}
