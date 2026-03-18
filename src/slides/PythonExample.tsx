import { SectionDivider, SlideLayout } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { ArrowRight } from "lucide-react";
import { stagger } from "../components/stagger";

const PYTHON_SOURCE_URL = "https://github.com/python/cpython/blob/main/Python/codegen.c";

export function PythonDividerSlide() {
  return (
    <SectionDivider
      slideNumber={17}
      sectionNum="05"
      title="Syntactic Sugar"
      subtitle="Python Decorators"
      tag={
        <a
          href={PYTHON_SOURCE_URL}
          target="_blank"
          rel="noreferrer"
          className="ease hover:text-accent transition-colors duration-200"
        >
          decorators syntax - python/cpython
        </a>
      }
    />
  );
}

/* ── Slide 20 — The @ Syntactic Sugar ─────────────────────────── */

const MANUAL_CODE = `def view():
    return "Core Logic"

# Manual Decoration
view = decorator(view)`;

const SUGAR_CODE = `@decorator
def view():
    return "Core Logic"`;

const SUGAR_POINTS = [
  {
    label: "Higher-Order Functions",
    desc: "Python decorators are functions that take a function and return a new one.",
  },
  {
    label: "The @ Transformation",
    desc: "The @ symbol is 'sugar'—a shorthand that tells the interpreter to wrap the function automatically.",
  },
  {
    label: "Better Visibility",
    desc: "Decoration is moved to the top, making added behavior visible before reading the core logic.",
  },
];

export function PythonSugarSlide() {
  return (
    <SlideLayout slideNumber={18} sectionLabel="PYTHON: SYNTACTIC SUGAR">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Python’s "Pie" Syntax</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Turning a Pattern into a Language Feature.
          </p>
        </div>
        <div className="flex flex-1 gap-10">
          <div className="flex w-1/2 flex-col gap-6">
            <div className="slide-enter-delay-2 grid h-full flex-1 grid-rows-[1fr_auto_1fr] gap-5">
              <div className="flex min-h-0 flex-col">
                <p className="text-text-muted mb-2 text-sm font-bold tracking-wider uppercase">
                  Manual Assignment
                </p>
                <CodeBlock code={MANUAL_CODE} fontSize="text-lg" className="h-full" />
              </div>

              <div className="flex items-center justify-center gap-3 py-1">
                <ArrowRight className="text-accent h-8 w-8 rotate-90" />
                <span className="bg-accent/10 border-accent/20 text-accent rounded-md border px-3 py-1 text-sm font-bold">
                  Identical Result
                </span>
              </div>

              <div className="flex min-h-0 flex-col">
                <p className="text-text-muted mb-2 text-sm font-bold tracking-wider uppercase">
                  Pie Syntax (@)
                </p>
                <CodeBlock code={SUGAR_CODE} fontSize="text-lg" className="h-full" />
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-6 pt-7">
            {SUGAR_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-6 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-xl leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 21 — Timing Decorator ─────────────────────────────── */

const TIMING_CODE = `from functools import wraps
import time

def time_logger(func):
    @wraps(func) # Keeps metadata (name, docstring)
    def wrapper(*args, **kwargs):
        # 1. Pre-processing
        start = time.perf_counter()
        
        # 2. Delegation (The Component)
        result = func(*args, **kwargs)
        
        # 3. Post-processing
        end = time.perf_counter()
        print(f"Executed {func.__name__} in {end - start:.4f}s")
        return result
    
    return wrapper`;

const TIMING_POINTS = [
  {
    label: "Maintaining Identity",
    desc: "Without @wraps(func), the decorated function loses its original name and docstring.",
  },
  {
    label: "Generic Wrapper",
    desc: "Using *args and **kwargs allows the decorator to wrap any function regardless of arguments.",
  },
  {
    label: "Execution Order",
    desc: "The wrapper follows the pattern: Check/Setup → Delegate → Teardown/Process.",
  },
];

export function PythonImplementationSlide() {
  return (
    <SlideLayout slideNumber={19} sectionLabel="PYTHON: IMPLEMENTATION">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Anatomy of a Decorator</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Using functools.wraps to maintain identity.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={TIMING_CODE} fontSize="text-lg" className="h-full" />
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {TIMING_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-6 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-xl leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 22 — Real-World Usage ─────────────────────────────── */

const PY_USAGE_CODE = `@app.route("/api/data")  # Decorator 1: Routing
@login_required          # Decorator 2: Auth Guard
@cache(seconds=60)       # Decorator 3: State
def get_private_data():
    return {"status": "Top Secret Data"}

# Conceptually:
# route(login_required(cache(get_private_data)))`;

const PY_USAGE_POINTS = [
  {
    label: "Decoration as Config",
    desc: "Define routing, permissions, and behavior at a glance through declarative stacking.",
  },
  {
    label: "Stacking Order",
    desc: "Execution goes from top to bottom; the top decorator wraps the one immediately below it.",
  },
  {
    label: "Clean Core Logic",
    desc: "The function body remains purely focused on its primary responsibility (the 'Component').",
  },
];

export function PythonUsageSlide() {
  return (
    <SlideLayout slideNumber={20} sectionLabel="PYTHON: USAGE">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">
            Real-World Usage (Flask/FastAPI)
          </h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Defining routes and permissions at a glance.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={PY_USAGE_CODE} fontSize="text-lg" className="h-full" />

            {/* Stacking Highlight */}
            <div className="slide-enter-delay-3 bg-accent/20 border-accent absolute top-[35px] left-[-20px] h-[140px] w-4 rounded-full border-l-4" />
            <div className="slide-enter-delay-3 text-accent absolute top-[75px] left-[15px] origin-left rotate-90 text-xs font-bold tracking-tighter uppercase">
              Stacking
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {PY_USAGE_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-6 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-xl leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
