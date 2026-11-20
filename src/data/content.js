import {
  // BellRing,
  // Bot,
  // ChartNoAxesCombined,
  // FolderKanban,
  // ListChecks,
  MessagesSquare,
} from "lucide-react";

export const features = [
  {
    icon: ListChecks,
    title: "Smart Task Management",
    short: "Turn complex work into clear, achievable next steps.",
    description:
      "Create and assign tasks, set deadlines and priorities, organize projects, and see progress without chasing updates.",
    points: ["Flexible priorities", "Clear ownership", "Progress tracking"],
    type: "tasks",
  },
  {
    icon: Bot,
    title: "Workflow Automation",
    short: "Let routine work move forward on its own.",
    description:
      "Build no-code rules that trigger actions when work changes status, reducing manual effort and keeping every process consistent.",
    points: ["Status triggers", "Reusable rules", "Smart handoffs"],
    type: "flow",
  },
  {
    icon: MessagesSquare,
    title: "Team Collaboration",
    short: "Keep decisions next to the work they shape.",
    description:
      "Share updates, assign responsibilities, and comment on tasks in a focused demonstration workspace built for momentum.",
    points: ["Contextual comments", "Shared updates", "Live presence"],
    type: "people",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Performance Analytics",
    short: "See what is working and where to improve.",
    description:
      "Explore productivity trends, project progress, task completion rates, and a practical performance overview.",
    points: ["Trend reports", "Completion rates", "Team insights"],
    type: "chart",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    short: "Give every initiative a dependable home.",
    description:
      "Plan timelines, organize tasks, monitor project status, and balance team workload from one calm command center.",
    points: ["Visual timelines", "Workload balance", "Portfolio view"],
    type: "projects",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    short: "Stay informed without adding more noise.",
    description:
      "Receive useful reminders, deadline alerts, activity updates, and high-priority notifications at the right moment.",
    points: ["Deadline alerts", "Quiet hours", "Priority inbox"],
    type: "alerts",
  },
];

export const faqGroups = [
  {
    category: "Getting Started",
    items: [
      [
        "What is FlowPilot?",
        "FlowPilot is an illustrative all-in-one workspace for planning projects, coordinating tasks, automating routine steps, and understanding team progress.",
      ],
      [
        "Who can use FlowPilot?",
        "It is designed for freelancers, agencies, startups, small businesses, and growing teams that want a calmer way to manage work.",
      ],
      [
        "How do I get started?",
        "Choose the free Starter plan or request a demo. This portfolio experience is frontend-only, so no real account is created.",
      ],
    ],
  },
  {
    category: "Features",
    items: [
      [
        "Can I manage multiple projects?",
        "Yes. The Starter concept includes up to three projects, while Professional demonstrates an unlimited project workspace.",
      ],
      [
        "Does FlowPilot support workflow automation?",
        "Yes. The product concept includes status-based rules, automated handoffs, reminders, and repeatable workflow templates.",
      ],
      [
        "Can teams collaborate?",
        "Yes. FlowPilot brings task comments, ownership, project updates, and shared visibility into one workspace.",
      ],
    ],
  },
  {
    category: "Pricing",
    items: [
      [
        "Is there a free plan?",
        "Yes. The illustrative Starter plan is free and includes basic task management, three projects, and essential analytics.",
      ],
      [
        "Can I change my plan?",
        "In a production service, workspace owners could change plans at any time. No real billing is performed in this demo.",
      ],
      [
        "Is yearly billing available?",
        "Yes. The pricing interface demonstrates yearly billing with a 20% savings compared with monthly billing.",
      ],
    ],
  },
  {
    category: "Account and Support",
    items: [
      [
        "How can I contact support?",
        "Use the contact form or the listed email and phone details. They are illustrative and do not send to a live support system.",
      ],
      [
        "Can I request a product demo?",
        "Absolutely. Complete the demo form to explore its validation and success flow; the submission remains in your browser.",
      ],
    ],
  },
];
