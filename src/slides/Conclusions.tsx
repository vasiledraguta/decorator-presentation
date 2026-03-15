import { SlideLayout, stagger } from "../components/SlideLayout";

/* ── Slide 17 — Pattern Comparison ─────────────────────────────── */

const PATTERNS = [
  {
    name: "Decorator",
    intent: "Add responsibilities dynamically",
    mechanism: "Wraps same interface, delegates + extends",
    highlight: true,
  },
  {
    name: "Proxy",
    intent: "Control access to an object",
    mechanism:
      "Same interface, but different intent (lazy-load, cache, security)",
    highlight: false,
  },
  {
    name: "Composite",
    intent: "Treat a group as a single object",
    mechanism: "Tree structure — uniform interface over hierarchy",
    highlight: false,
  },
];

export function ComparisonSlide() {
  return (
    <SlideLayout slideNumber={17} sectionLabel="CONCLUSIONS">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-4xl font-bold text-accent">
          Decorator vs Similar Patterns
        </h2>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {PATTERNS.map((p, idx) => (
            <div
              key={p.name}
              className={`flex flex-col gap-5 rounded-xl border-2 p-7 ${stagger(idx, 1)} ${
                p.highlight
                  ? "border-accent bg-accent-light/60"
                  : "border-border-card bg-bg-card"
              }`}
            >
              <h3
                className={`text-3xl font-bold ${
                  p.highlight ? "text-accent" : "text-text"
                }`}
              >
                {p.name}
              </h3>
              <div>
                <p className="mb-2 text-base font-bold uppercase tracking-wider text-text-muted">
                  Intent
                </p>
                <p className="text-2xl text-text">{p.intent}</p>
              </div>
              <div>
                <p className="mb-2 text-base font-bold uppercase tracking-wider text-text-muted">
                  Mechanism
                </p>
                <p className="text-2xl leading-relaxed text-text">
                  {p.mechanism}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 18 — Summary ────────────────────────────────────────── */

const TAKEAWAYS = [
  {
    heading: "Wrap, Don't Extend",
    body: "Prefer composition over inheritance — attach behavior by wrapping objects, not by creating subclasses.",
  },
  {
    heading: "Stack Freely",
    body: "Decorators compose naturally. You can layer them in any combination — but order matters.",
  },
  {
    heading: "Open/Closed Principle",
    body: "Add new behavior without modifying existing code. Each decorator is a self-contained unit of change.",
  },
];

export function SummarySlide() {
  return (
    <SlideLayout slideNumber={18} sectionLabel="CONCLUSIONS">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-4xl font-bold text-accent">Summary</h2>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {TAKEAWAYS.map((t, idx) => (
            <div
              key={t.heading}
              className={`flex flex-col gap-4 rounded-xl border-l-4 border-accent bg-accent-light/40 p-7 ${stagger(idx, 1)}`}
            >
              <h3 className="text-3xl font-bold text-accent">{t.heading}</h3>
              <p className="text-2xl leading-relaxed text-text-muted">
                {t.body}
              </p>
            </div>
          ))}
        </div>
        <p className="slide-enter-delay-3 text-center text-base font-medium text-text-muted">
          Used in React (HOCs, memo), Express (middleware), Java I/O streams,
          Python decorators, and many more frameworks.
        </p>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 19 — Thank You ──────────────────────────────────────── */

function WrapSVG() {
  return (
    <svg viewBox="0 0 200 200" className="h-56 w-56">
      <circle
        cx="100"
        cy="100"
        r="30"
        fill="rgba(245,158,11,0.15)"
        stroke="#f59e0b"
        strokeWidth="2.5"
      />
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="rgba(245,158,11,0.4)"
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="rgba(245,158,11,0.2)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function ThankYouSlide() {
  return (
    <SlideLayout slideNumber={19}>
      <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <div className="slide-enter">
          <WrapSVG />
        </div>
        <h2 className="slide-enter-delay-1 text-7xl font-extrabold text-text">
          Thank You!
        </h2>
      </div>
    </SlideLayout>
  );
}
