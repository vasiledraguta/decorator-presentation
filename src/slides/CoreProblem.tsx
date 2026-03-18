import { SlideLayout } from "../components/SlideLayout";
import { stagger } from "../components/stagger";
import { AlertTriangle, ArrowRight, LayoutTemplate } from "lucide-react";

const PROBLEMS = [
  {
    label: "Rigidity",
    desc: "Adding a new combination of features requires creating an entirely new subclass.",
  },
  {
    label: "Explosion",
    desc: "N features can produce up to 2ⁿ subclasses — an exponential blowup.",
  },
  {
    label: "Violation",
    desc: "Breaks the Open/Closed Principle — existing code must be modified for each new combo.",
  },
];

export function ProblemSlide() {
  return (
    <SlideLayout slideNumber={3} sectionLabel="CONTEXT AND CORE PROBLEM">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent flex items-center gap-3 text-4xl font-bold">
          <AlertTriangle className="h-9 w-9" />
          Context and Core Problem
        </h2>
        <div className="flex flex-1 items-center gap-4">
          <div className="flex w-[45%] flex-col gap-6">
            <div className={`bg-bg-card border-border-card flex flex-col gap-4 rounded-xl border p-8 ${stagger(0, 1)}`}>
              <h3 className="text-accent flex items-center gap-3 text-2xl font-bold">
                <LayoutTemplate className="h-7 w-7" />
                Graphical UI Toolkit
              </h3>
              <p className="text-text-muted text-xl leading-relaxed">
                Imagine building a UI toolkit (like the classic GoF example) where we want to modify a UI component to add traits like a <span className="text-text font-bold">Border</span> or <span className="text-text font-bold">Scrolling</span> to it.
              </p>
            </div>
            <div className={`border-red/20 bg-red/5 flex flex-col gap-4 rounded-xl border p-8 ${stagger(1, 1)}`}>
              <h3 className="text-red text-2xl font-bold">The Inheritance Trap</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                We quickly encounter the problem of not being able to combine these traits without statically implementing a rigid subclass (e.g., <code className="bg-red/10 text-red rounded px-2 py-1 font-mono text-base">BorderedScrollableComponent</code>).
              </p>
            </div>
          </div>
          
          <div className="slide-enter-delay-2 flex w-[10%] justify-center">
            <ArrowRight className="text-accent/50 h-16 w-16" />
          </div>
          
          <div className="flex w-[45%] flex-col gap-5">
            {PROBLEMS.map((p, idx) => {
              const isViolation = p.label === "Violation";
              return (
                <div
                  key={p.label}
                  className={`flex flex-col justify-center rounded-xl border px-8 py-5 transition-transform duration-500 ease-out ${stagger(idx, 3)} ${
                    isViolation
                      ? "border-red shadow-[0_0_40px_rgba(239,68,68,0.4)] bg-red/10 scale-105 z-10 animate-pulse"
                      : "border-red/20 bg-red/5 opacity-80"
                  }`}
                >
                  <h3 className={`mb-1 font-bold ${isViolation ? "text-red text-2xl flex items-center gap-2" : "text-red text-xl"}`}>
                    {isViolation && <AlertTriangle className="h-6 w-6" />}
                    {p.label}
                  </h3>
                  <p className={`leading-relaxed ${isViolation ? "text-text font-medium text-xl" : "text-text-muted text-lg"}`}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export function SolutionSlide() {
  return (
    <SlideLayout slideNumber={4} sectionLabel="THE CORE PROBLEM">
      <div className="flex h-full flex-col items-center justify-center gap-8 text-center pb-4">
        
        <div className="slide-enter flex h-72 w-full max-w-4xl items-center justify-center rounded-xl overflow-hidden shadow-xl border border-border-card/50 bg-bg-card/20 p-4 shrink-0">
          <img 
            src="/solution.png" 
            alt="Decorator Pattern Metaphor (Clothing)" 
            className="h-full w-full object-contain rounded-lg"
          />
        </div>

        <h2 className="slide-enter-delay-1 text-accent text-5xl font-bold">
          The Solution: Wrap, Don't Inherit
        </h2>
        
        <p className="slide-enter-delay-2 text-text-muted max-w-4xl text-2xl leading-relaxed">
          Wrap an object inside another object that adds behavior —{" "}
          <span className="text-text font-bold">at runtime</span>, without changing the original
          class or creating subclasses.
        </p>

        <div className="slide-enter-delay-3 flex items-center gap-8 shrink-0">
          {[
            { label: "Object", bg: "bg-bg-card border-border-card" },
            { label: "Wrapper", bg: "bg-accent-light border-accent/30" },
            { label: "Extended Object", bg: "bg-accent/10 border-accent/50" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-8">
              {i > 0 && <ArrowRight className="text-accent h-8 w-8" />}
              <div
                className={`text-text rounded-xl border-2 px-10 py-4 text-xl font-semibold ${item.bg}`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
