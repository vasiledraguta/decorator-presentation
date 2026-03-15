import { SlideLayout, stagger } from "../components/SlideLayout";
import { Layers, BookOpen, Lightbulb, Code2, Server } from "lucide-react";

function DecoratorSVG() {
  return (
    <svg viewBox="0 0 200 200" className="h-72 w-72">
      <rect
        x="60"
        y="60"
        width="80"
        height="80"
        rx="8"
        fill="rgba(245,158,11,0.15)"
        stroke="#f59e0b"
        strokeWidth="2.5"
      />
      <rect
        x="40"
        y="40"
        width="120"
        height="120"
        rx="12"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="20"
        width="160"
        height="160"
        rx="16"
        fill="none"
        stroke="rgba(245,158,11,0.4)"
        strokeWidth="1.5"
      />
      <rect
        x="4"
        y="4"
        width="192"
        height="192"
        rx="20"
        fill="none"
        stroke="rgba(245,158,11,0.2)"
        strokeWidth="1"
      />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="18"
        fontFamily="DM Sans, system-ui"
        fontWeight="700"
      >
        obj
      </text>
    </svg>
  );
}

export function TitleSlide() {
  return (
    <SlideLayout slideNumber={1}>
      <div className="flex h-full items-center justify-between gap-16">
        <div className="flex flex-col gap-5">
          <span className="slide-enter w-fit rounded-full border border-accent/30 bg-accent-light px-5 py-2 text-base font-semibold tracking-wide text-accent">
            Structural Patterns
          </span>
          <h1 className="slide-enter-delay-1 text-7xl font-extrabold leading-tight text-text">
            Decorator
          </h1>
          <p className="slide-enter-delay-1 text-4xl font-light text-accent">
            Design Pattern
          </p>
          <p className="slide-enter-delay-2 mt-6 text-xl text-text-muted">
            Presented by Șerban-George Foica, Goșa Bogdan, Draguța Vasile
          </p>
        </div>
        <div className="slide-enter-delay-2 flex items-center justify-center">
          <DecoratorSVG />
        </div>
      </div>
    </SlideLayout>
  );
}

const TOC_ITEMS = [
  {
    num: "01",
    title: "The Core Problem",
    icon: Lightbulb,
    desc: "Why inheritance falls short",
  },
  {
    num: "02",
    title: "Pattern Theory",
    icon: BookOpen,
    desc: "Definition, components & diagrams",
  },
  {
    num: "03",
    title: "React (HOCs)",
    icon: Code2,
    desc: "Higher-Order Components in open-source React",
  },
  {
    num: "04",
    title: "Express Middleware",
    icon: Server,
    desc: "Middleware chain in Express.js",
  },
];

export function TOCSlide() {
  return (
    <SlideLayout slideNumber={2}>
      <div className="flex h-full flex-col">
        <h2 className="slide-enter mb-10 text-4xl font-bold text-accent">
          <Layers className="mr-3 inline-block h-9 w-9" />
          Table of Contents
        </h2>
        <div className="grid flex-1 grid-cols-2 gap-6">
          {TOC_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-border-card bg-bg-card p-8 text-center ${stagger(idx)}`}
              >
                <span className="text-5xl font-extrabold text-accent/25">
                  {item.num}
                </span>
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 text-accent" />
                  <span className="text-3xl font-bold text-text">
                    {item.title}
                  </span>
                </div>
                <span className="text-xl text-text-muted">{item.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
