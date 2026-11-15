import { motion } from "framer-motion";
import { Bell, Check, CircleCheck, Clock3, Folder, Home, Sparkles, Users } from "lucide-react";

const projects = [
  ["Website redesign", "On track", "mint"],
  ["Marketing campaign", "In progress", "peach"],
  ["Mobile app launch", "Done", "lavender"],
];

export default function DashboardPreview({ compact = false }) {
  return (
    <motion.div
      className={`dashboard-wrap ${compact ? "compact" : ""}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="dashboard">
        <aside className="dash-sidebar">
          <div className="flex items-center gap-2 font-display text-[11px] font-extrabold">
            <span className="mini-logo">↗</span>FlowPilot
          </div>
          <div className="mt-7 space-y-2">
            {[Home, Folder, CircleCheck, Users, Bell].map((Icon, index) => (
              <span key={index} className={index === 0 ? "dash-nav active" : "dash-nav"}>
                <Icon size={12} />
              </span>
            ))}
          </div>
          <div className="mt-auto size-7 rounded-full bg-gradient-to-br from-violet-300 to-orange-200" />
        </aside>
        <div className="dash-main">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-bold text-slate">OVERVIEW</p>
              <h3 className="mt-1 text-[15px] font-extrabold">Project dashboard</h3>
            </div>
            <span className="grid size-7 place-items-center rounded-lg bg-violet-50 text-violet-600">
              <Bell size={12} />
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["Total projects", "24", "+12%"],
              ["Completed tasks", "158", "+10%"],
              ["Productivity", "92%", "+8%"],
            ].map((item) => (
              <div className="metric" key={item[0]}>
                <p>{item[0]}</p>
                <strong>{item[1]}</strong>
                <span>{item[2]}</span>
              </div>
            ))}
          </div>
          <div className="chart-card mt-3">
            <div className="flex items-center justify-between">
              <strong>Weekly activity</strong>
              <span>Last 7 days</span>
            </div>
            <svg viewBox="0 0 400 110" role="img" aria-label="Rising weekly activity chart">
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#6c4df6" stopOpacity=".28" />
                  <stop offset="1" stopColor="#6c4df6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 93 C35 84 44 45 77 66 S123 80 153 42 S205 77 238 48 S274 20 304 36 S349 14 400 19 V110 H0Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0 93 C35 84 44 45 77 66 S123 80 153 42 S205 77 238 48 S274 20 304 36 S349 14 400 19"
                fill="none"
                stroke="#6847f5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mt-3">
            <div className="mb-2 flex items-center justify-between text-[8px]">
              <strong>Recent projects</strong>
              <span className="text-violet-600">View all</span>
            </div>
            {projects.map(([name, status, color], index) => (
              <div className="project-row" key={name}>
                <span className={`project-icon ${color}`}>
                  <Folder size={10} />
                </span>
                <span className="flex-1 font-semibold">{name}</span>
                <span className={`status ${color}`}>{status}</span>
                <span className="text-slate">{80 - index * 13}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="float-note note-top"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <span className="note-icon mint">
          <Check size={14} />
        </span>
        <span>
          <strong>Task completed!</strong>
          <small>Website redesign</small>
        </span>
      </motion.div>
      <motion.div
        className="float-note note-bottom"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="note-icon lavender">
          <Sparkles size={14} />
        </span>
        <span>
          <strong>Productivity is up</strong>
          <small>8% this week</small>
        </span>
      </motion.div>
      <span className="floating-clock">
        <Clock3 size={16} />
      </span>
    </motion.div>
  );
}
