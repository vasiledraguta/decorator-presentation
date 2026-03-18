import { SlideLayout, stagger } from "../components/SlideLayout";

/* ── Slide 21 — Pattern Comparison ─────────────────────────────── */

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
    mechanism: "Same interface, but different intent (lazy-load, cache, security)",
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
    <SlideLayout slideNumber={21} sectionLabel="CONCLUSIONS">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent text-4xl font-bold">
          Decorator vs Similar Patterns
        </h2>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {PATTERNS.map((p, idx) => (
            <div
              key={p.name}
              className={`flex flex-col gap-5 rounded-xl border-2 p-7 ${stagger(idx, 1)} ${
                p.highlight ? "border-accent bg-accent-light/60" : "border-border-card bg-bg-card"
              }`}
            >
              <h3 className={`text-3xl font-bold ${p.highlight ? "text-accent" : "text-text"}`}>
                {p.name}
              </h3>
              <div>
                <p className="text-text-muted mb-2 text-base font-bold tracking-wider uppercase">
                  Intent
                </p>
                <p className="text-text text-2xl">{p.intent}</p>
              </div>
              <div>
                <p className="text-text-muted mb-2 text-base font-bold tracking-wider uppercase">
                  Mechanism
                </p>
                <p className="text-text text-2xl leading-relaxed">{p.mechanism}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 22 — Summary ────────────────────────────────────────── */

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
    <SlideLayout slideNumber={22} sectionLabel="CONCLUSIONS">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent text-4xl font-bold">Summary</h2>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {TAKEAWAYS.map((t, idx) => (
            <div
              key={t.heading}
              className={`border-accent bg-accent-light/40 flex flex-col gap-4 rounded-xl border-l-4 p-7 ${stagger(idx, 1)}`}
            >
              <h3 className="text-accent text-3xl font-bold">{t.heading}</h3>
              <p className="text-text-muted text-2xl leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="slide-enter-delay-3 text-text-muted text-center text-base font-medium">
          Used in React (HOCs, memo), Express (middleware), Java I/O streams, Python decorators, and
          many more frameworks.
        </p>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 23 — Thank You ──────────────────────────────────────── */

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
      <circle cx="100" cy="100" r="50" fill="none" stroke="#d97706" strokeWidth="2" />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="rgba(245,158,11,0.4)"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
    </svg>
  );
}

export function ThankYouSlide() {
  return (
    <SlideLayout slideNumber={23}>
      <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <div className="slide-enter">
          <WrapSVG />
        </div>
        <h2 className="slide-enter-delay-1 text-text text-7xl font-extrabold">Thank You!</h2>
      </div>
    </SlideLayout>
  );
}
