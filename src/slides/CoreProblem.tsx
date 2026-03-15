import { SlideLayout, stagger } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { AlertTriangle, ArrowRight } from "lucide-react";

const PROBLEMS = [
  {
    label: "Rigidity",
    desc: "Adding a new combination of features requires creating an entirely new subclass.",
  },
  {
    label: "Explosion",
    desc: "N features can produce up to 2\u207F subclasses — an exponential blowup.",
  },
  {
    label: "Violation",
    desc: "Breaks the Open/Closed Principle — existing code must be modified for each new combo.",
  },
];

const INHERITANCE_CODE = `class Coffee {
  cost() { return 5; }
}

class MilkCoffee extends Coffee {
  cost() { return super.cost() + 2; }
}

class SugarMilkCoffee extends MilkCoffee {
  cost() { return super.cost() + 1; }
}

class WhipSugarMilkCoffee extends SugarMilkCoffee {
  cost() { return super.cost() + 3; }
}
// ... and so on for every combination`;

export function ProblemSlide() {
  return (
    <SlideLayout slideNumber={3} sectionLabel="THE CORE PROBLEM">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent flex items-center gap-3 text-4xl font-bold">
          <AlertTriangle className="h-9 w-9" />
          The Problem: Inheritance Explosion
        </h2>
        <div className="flex flex-1 gap-10">
          <div className="flex w-1/2 flex-col gap-5">
            {PROBLEMS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-red/20 bg-red/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-8 ${stagger(idx, 1)}`}
              >
                <h3 className="text-red mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-xl leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="slide-enter-delay-2 flex w-1/2 flex-col">
            <CodeBlock code={INHERITANCE_CODE} fontSize="text-sm" className="flex-1" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export function SolutionSlide() {
  return (
    <SlideLayout slideNumber={4} sectionLabel="THE CORE PROBLEM">
      <div className="flex h-full flex-col items-center justify-center gap-12 text-center">
        <h2 className="slide-enter text-accent text-5xl font-bold">
          The Solution: Wrap, Don't Inherit
        </h2>
        <p className="slide-enter-delay-1 text-text-muted max-w-3xl text-2xl leading-relaxed">
          Wrap an object inside another object that adds behavior —{" "}
          <span className="text-text font-bold">at runtime</span>, without changing the original
          class or creating subclasses.
        </p>
        <div className="slide-enter-delay-2 flex items-center gap-8">
          {[
            { label: "Object", bg: "bg-bg-card border-border-card" },
            { label: "Wrapper", bg: "bg-accent-light border-accent/30" },
            { label: "Extended Object", bg: "bg-accent/10 border-accent/50" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-8">
              {i > 0 && <ArrowRight className="text-accent h-8 w-8" />}
              <div
                className={`text-text rounded-xl border-2 px-10 py-5 text-2xl font-semibold ${item.bg}`}
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
