import { Projector } from "lucide-react";

const PROJECTS = [
  {
    id: "PRJ_01",
    title: "QGEN AI",
    category: "ARTIFICIAL INTELLIGENCE",
    tech: "MERN // OPENAI // TAILWIND",
    desc: "An autonomous agent transforming natural language prompts into executable SQL queries.",
    features: [
      "Natural Language Processing (NLP) integration.",
      "Real-time database schema mapping.",
      "Automated query optimization engine.",
      "Export results to CSV/JSON.",
    ],
    link:"https://qgen-frontend1.onrender.com/"
  },
  {
    id: "PRJ_02",
    title: "MIND'SCOOL",
    category: "RESOURCE MANAGEMENT",
    tech: "REACT // NODE // MONGODB",
    desc: "A dedicated non-profit platform empowering mental health awareness, providing users with self-assessment tools and seamless connections to certified professionals.",
    features: [
      "Interactive self-assessment modules with personalized mental health tracking.",
      "Secure appointment scheduling and real-time chat system with therapists.",
      "Dynamic resource library for mental health education and awareness content.",
      "Anonymous user profiles with strict data encryption to ensure complete privacy."
    ],
    link:"https://minor-front.onrender.com/"
  },
  {
    id: "PRJ_03",
    title: "CRYPTOSIGHT",
    category: "FINANCIAL TELEMETRY",
    tech: "WEBSOCKETS // D3.JS",
    desc: "High-frequency trading dashboard visualizing crypto assets in real-time.",
    features: [
      "Sub-millisecond WebSocket data streams.",
      "Interactive candlestick charts via D3.js.",
      "Live order book visualization.",
      "Price alert notifications."
    ]
  }
];
export default PROJECTS