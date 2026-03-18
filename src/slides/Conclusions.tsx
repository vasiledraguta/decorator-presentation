import { SlideLayout } from "../components/SlideLayout";
import { stagger } from "../components/stagger";

/* ── Slide 23 — Related Patterns ─────────────────────────────── */

const PATTERNS = [
  {
    name: "Adapter",
    desc: "A decorator is different from an adapter in that a decorator only changes an object's responsibilities, not its interface; an adapter will give an object a completely new interface.",
  },
  {
    name: "Composite",
    desc: "A decorator can be viewed as a degenerate composite with only one component. However, a decorator adds additional responsibilities—it isn't intended for object aggregation.",
  },
  {
    name: "Strategy",
    desc: "A decorator lets you change the skin of an object; a strategy lets you change the guts. These are two alternative ways of changing an object.",
  },
];

export function ComparisonSlide() {
  return (
    <SlideLayout slideNumber={23} sectionLabel="CONCLUSIONS">
      <div className="flex h-full flex-col gap-10">
        <h2 className="slide-enter text-accent text-5xl font-bold">
          Related Patterns
        </h2>
        <div className="grid flex-1 grid-cols-3 gap-8">
          {PATTERNS.map((p, idx) => (
            <div
              key={p.name}
              className={`flex flex-col gap-6 rounded-2xl border-2 border-border-card bg-bg-card p-10 shadow-lg transition-transform hover:-translate-y-2 ${stagger(idx, 1)}`}
            >
              <h3 className="text-4xl font-bold text-accent border-b border-border-card pb-4">
                {p.name}
              </h3>
              <p className="text-text-muted text-2xl leading-relaxed flex-1">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 24 — Summary ────────────────────────────────────────── */

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
    <SlideLayout slideNumber={24} sectionLabel="CONCLUSIONS">
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
      </div>
    </SlideLayout>
  );
}

/* ── Slide 25 — Thank You ──────────────────────────────────────── */

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
    <SlideLayout slideNumber={25}>
      <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <div className="slide-enter">
          <WrapSVG />
        </div>
        <h2 className="slide-enter-delay-1 text-text text-7xl font-extrabold">Thank You!</h2>
      </div>
    </SlideLayout>
  );
}
