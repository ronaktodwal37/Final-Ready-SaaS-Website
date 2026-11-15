import { AtSign, Code2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Brand } from "./UI";

const groups = [
  {
    title: "Product",
    links: [
      ["Features", "/features"],
      ["Pricing", "/pricing"],
      ["FAQ", "/faq"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Careers", "/contact?intent=careers"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate">
            Built with care for better teamwork.
          </p>
          <p className="mt-3 text-xs text-slate/70">
            FlowPilot and all customer claims shown are illustrative sample content.
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-extrabold text-ink">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.links.map(([label, path]) => (
                <li key={label}>
                  <Link className="footer-link" to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-extrabold text-ink">Follow us</h3>
          <div className="mt-4 flex gap-3">
            {[
              [AtSign, "LinkedIn"],
              [Code2, "GitHub"],
              [Send, "X"],
            ].map(([Icon, label]) => (
              <Link
                key={label}
                to="/contact?intent=social"
                aria-label={`${label} placeholder`}
                className="social-link"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-violet-100 py-5 text-center text-xs text-slate">
        © 2026 FlowPilot. All rights reserved.
      </div>
    </footer>
  );
}
