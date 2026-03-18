import { SectionDivider, SlideLayout } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { ArrowLeft } from "lucide-react";

export function ExpressDividerSlide() {
  return (
    <SectionDivider
      slideNumber={14}
      sectionNum="04"
      title="Real-World Example"
      subtitle="Middleware in Express.js"
      tag={
        <a
          href={EXPRESS_APPLICATION_URL}
          target="_blank"
          rel="noreferrer"
          className="ease hover:text-accent transition-colors duration-200"
        >
          expressjs/express - open source
        </a>
      }
    />
  );
}

/* ── Slide 15 — The Middleware Pipeline ────────────────────────── */

const PIPELINE_CODE = `// The Middleware Signature
const middleware = (req, res, next) => {
  // 1. Logic before delegation
  console.log("Request received");

  // 2. The Delegation mechanism
  next(); 

  // 3. Optional: Logic after delegation
};

// The Component (Final Handler)
app.get("/api", (req, res) => {
  res.send("Core Behavior");
});`;

const PIPELINE_POINTS = [
  {
    label: "Functional Stacking",
    desc: "In Express, the Component is your final Route Handler. Decorators are Middleware functions that wrap it.",
  },
  {
    label: "The Signature",
    desc: "Each decorator receives req, res, and a next callback — the primary 'connection' point.",
  },
  {
    label: "The Decoration",
    desc: "Logic is added before calling next(). If next() isn't called, the chain breaks (acting as a Guard).",
  },
  {
    label: "Dynamic Composition",
    desc: "Compose complex pipelines from simple, single-responsibility functions at runtime.",
  },
];

export function MiddlewarePipelineSlide() {
  return (
    <SlideLayout slideNumber={15} sectionLabel="WEB MIDDLEWARE: PIPELINE">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Express.js: Functional Stacking</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            The Request-Response "Onion"
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={PIPELINE_CODE} fontSize="text-lg" className="h-full" />
          </div>
          <div className="flex w-[40%] flex-col gap-5">
            {PIPELINE_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-4 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-1 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 16 — Auth Decorator ─────────────────────────────── */

const AUTH_CODE = `// A standard Express Middleware (The Decorator)
const protectRoute = (req, res, next) => {
    // 1. Added Behavior: Check for a token
    const token = req.headers['authorization'];

    if (token === "valid-secret") {
        // 2. Delegation: Pass control to the next 
        // wrapped component in the stack
        return next(); 
    }

    // 3. Alternative Behavior: Terminate the chain
    res.status(401).send("Unauthorized Access");
};`;

const AUTH_POINTS = [
  {
    label: "The Guard Decorator",
    desc: "Controls access via delegation. If validation fails, it short-circuits the pipeline.",
  },
  {
    label: "Delegation Mechanism",
    desc: "The next() function is the mechanism of Delegation — conceptually identical to super.read().",
  },
  {
    label: "Transparent Wrapping",
    desc: "The wrapped component doesn't know it's being protected; it just waits for next() to be called.",
  },
];

export function AuthDecoratorSlide() {
  return (
    <SlideLayout slideNumber={16} sectionLabel="WEB MIDDLEWARE: LOGIC">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Concrete Logic (Auth Decorator)</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Controlling access via delegation.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={AUTH_CODE} fontSize="text-lg" className="h-full" />
            
            {/* Number Labels for Execution Order */}
            <div className="absolute top-[85px] left-[40px] flex h-8 w-8 items-center justify-center rounded-full bg-accent font-bold text-bg shadow-lg">1</div>
            <div className="absolute top-[205px] left-[150px] flex h-8 w-8 items-center justify-center rounded-full bg-accent font-bold text-bg shadow-lg">2</div>
            <div className="absolute top-[305px] left-[40px] flex h-8 w-8 items-center justify-center rounded-full bg-accent font-bold text-bg shadow-lg">3</div>

            <div className="absolute top-[200px] left-[250px] flex items-center gap-2">
              <ArrowLeft className="text-accent h-8 w-8 animate-pulse" />
              <span className="bg-accent/10 border-accent/20 rounded-md border px-3 py-1 text-sm font-bold text-accent whitespace-nowrap">
                Mechanism of Delegation
              </span>
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {AUTH_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-6 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-xl leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="slide-enter-delay-2 flex w-1/2 flex-col">
            <CodeBlock code={MIDDLEWARE_CODE} fontSize="text-lg" className="flex-1" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 17 — Stacking ────────────────────────────────────── */

const STACKING_CODE = `const app = express();

// Base Component: The raw profile data logic
const getProfile = (req, res) => {
    res.json({ name: "Jane Doe", role: "Admin" });
};

// Wrapping the component with multiple decorators
app.get('/admin/profile', 
    loggingDecorator, // Layer 1: Logs the request
    protectRoute,     // Layer 2: Checks Auth
    getProfile        // The Core Component
);`;

const STACKING_POINTS = [
  {
    label: "Composing the Pipeline",
    desc: "Attaching decorators to specific routes. Each layer is a 'Russian Doll' wrapping the core logic.",
  },
  {
    label: "Clean Abstraction",
    desc: "To reach getProfile, the request must successfully pass through logging and auth.",
  },
  {
    label: "Open/Closed",
    desc: "Add logging, auth, or caching without changing a single line of the getProfile logic.",
  },
];

export function PipelineStackingSlide() {
  return (
    <SlideLayout slideNumber={16} sectionLabel="REAL-WORLD: EXPRESS">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent text-4xl font-bold">
          express/lib/router — Decorator Chain
        </h2>
        <div className="slide-enter-delay-1 min-h-0 flex-1">
          <CodeBlock code={COMPOSE_CODE} fontSize="text-lg" className="h-full" />
    <SlideLayout slideNumber={17} sectionLabel="WEB MIDDLEWARE: STACKING">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Real-World Usage (Stacking)</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Attaching decorators to specific routes.
          </p>
        </div>
        <p className="slide-enter-delay-2 text-text-muted text-center text-base font-medium">
          <a
            href={EXPRESS_APPLICATION_URL}
            target="_blank"
            rel="noreferrer"
            className="ease hover:text-accent transition-colors duration-200"
          >
            Source: expressjs/express on GitHub
          </a>
        </p>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={STACKING_CODE} fontSize="text-lg" className="h-full" />
            
            {/* Comparison Box */}
            <div className="absolute right-6 bottom-6 slide-enter-delay-3 max-w-[280px]">
              <div className="bg-bg-card border-accent/40 rounded-lg border-2 p-4 shadow-2xl">
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-1">Architecture Note</p>
                <p className="text-text-muted text-sm leading-relaxed italic">
                  "Conceptually identical to Java's new BufferedInputStream(new FileInputStream())"
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {STACKING_POINTS.map((p, idx) => (
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
