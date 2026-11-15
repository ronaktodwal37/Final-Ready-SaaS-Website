import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Brand, Button } from "./UI";

const links = [
  ["Home", "/"],
  ["Features", "/features"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["FAQ", "/faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/80 backdrop-blur-xl">
      <nav
        className="section-shell flex h-[74px] items-center justify-between"
        aria-label="Primary navigation"
      >
        <Brand />
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <NavLink
            to="/contact?intent=access"
            className="text-sm font-bold text-slate transition hover:text-violet-600"
          >
            Login
          </NavLink>
          <Button to="/pricing" className="!min-h-10 !px-5 !py-2.5">
            Get started
          </Button>
        </div>
        <button
          className="grid size-11 place-items-center rounded-xl border border-violet-100 text-ink lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-violet-100 bg-white lg:hidden"
          >
            <div className="section-shell flex flex-col gap-2 py-5">
              {links.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={close}
                  className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </NavLink>
              ))}
              <NavLink to="/contact?intent=access" onClick={close} className="mobile-link">
                Login / product access
              </NavLink>
              <Button to="/pricing" onClick={close} className="mt-2 w-full">
                Get started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
