import { SectionDivider, SlideLayout } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { stagger } from "../components/stagger";

const EXPRESS_APPLICATION_URL =
  "https://github.com/expressjs/express/blob/master/lib/application.js";

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

/* ── Slide 15 — Middleware Explanation ──────────────────────────── */

const MIDDLEWARE_CODE = `// Each middleware wraps the next layer
app.use(logger);      // Layer 1: logs request
app.use(auth);        // Layer 2: checks credentials
app.use(rateLimit);   // Layer 3: throttles traffic

app.get("/api/data", (req, res) => {
  // Core handler — only reached after
  // all decorators (middleware) pass
  res.json({ data: req.processedData });
});`;

const MW_POINTS = [
  {
    label: "Wrapping",
    desc: "Each middleware wraps the request-response cycle \u2014 receives (req, res, next) and decorates the pipeline.",
  },
  {
    label: "Delegation",
    desc: "A middleware can modify req or res, then call next() to pass control to the next layer in the stack.",
  },
  {
    label: "Composition",
    desc: "Stacking middleware is composition of decorators: logging \u2192 auth \u2192 rate-limit \u2192 handler.",
  },
  {
    label: "Open/Closed",
    desc: "Add or remove middleware without touching the core route handler \u2014 true Open/Closed behavior.",
  },
];

export function MiddlewareSlide() {
  return (
    <SlideLayout slideNumber={15} sectionLabel="REAL-WORLD: EXPRESS">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent text-4xl font-bold">Express Middleware</h2>
        <div className="flex flex-1 gap-10">
          <div className="flex w-1/2 flex-col gap-5">
            {MW_POINTS.map((p, idx) => (
              <div
                key={p.label}
                className={`border-accent/20 bg-accent/5 flex flex-1 flex-col justify-center rounded-xl border px-10 py-6 ${stagger(idx)}`}
              >
                <h3 className="text-accent mb-2 text-2xl font-bold">{p.label}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{p.desc}</p>
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

/* ── Slide 16 — Express Code Deep Dive ─────────────────────────── */

const COMPOSE_CODE = `// Simplified Express-style middleware composition
function compose(...middlewares) {
  return function (req, res) {
    let index = -1;

    function dispatch(i) {
      if (i <= index) throw new Error("next() called multiple times");
      index = i;
      const fn = middlewares[i];
      if (!fn) return;
      fn(req, res, () => dispatch(i + 1));
    }

    dispatch(0);
  };
}

// Usage — chain of Decorator objects:
const handler = compose(
  logger,       // Decorator 1
  authenticate, // Decorator 2
  rateLimit,    // Decorator 3
  finalHandler  // Core component
);
handler(req, res);`;

export function ExpressCodeSlide() {
  return (
    <SlideLayout slideNumber={16} sectionLabel="REAL-WORLD: EXPRESS">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent text-4xl font-bold">
          express/lib/router — Decorator Chain
        </h2>
        <div className="slide-enter-delay-1 min-h-0 flex-1">
          <CodeBlock code={COMPOSE_CODE} fontSize="text-lg" className="h-full" />
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
      </div>
    </SlideLayout>
  );
}
