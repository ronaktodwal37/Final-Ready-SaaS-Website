import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles = {
      "/": "FlowPilot — Workflows, reimagined",
      "/features": "Features — FlowPilot",
      "/pricing": "Pricing — FlowPilot",
      "/about": "About — FlowPilot",
      "/faq": "FAQ — FlowPilot",
      "/contact": "Request a demo — FlowPilot",
    };
    const descriptions = {
      "/": "Bring projects, people, automation, and productivity analytics together with FlowPilot.",
      "/features":
        "Explore FlowPilot task management, automation, collaboration, analytics, projects, and smart notifications.",
      "/pricing": "Compare illustrative FlowPilot Starter and Professional plans.",
      "/about":
        "Learn about the illustrative mission, vision, values, and approach behind FlowPilot.",
      "/faq": "Find answers about FlowPilot features, pricing, support, and getting started.",
      "/contact": "Request an illustrative FlowPilot product demo through a frontend-only form.",
    };
    // document.title = titles[location.pathname] || "Page not found — FlowPilot";
    // let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      descriptions[location.pathname] || "The requested FlowPilot page could not be found.";
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
