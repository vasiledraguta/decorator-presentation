import { SlideLayout } from "../components/SlideLayout";

import { stagger } from "../components/stagger";
import { CheckCircle, XCircle } from "lucide-react";

/* ── Slide 5 — Definition ─────────────────────────────────────── */

export function DefinitionSlide() {
  return (
    <SlideLayout slideNumber={5} sectionLabel="THEORY">
      <div className="flex h-full flex-col">
        <h2 className="slide-enter text-accent mb-8 text-5xl font-bold">Decorator Pattern</h2>
        <div className="slide-enter-delay-1 border-accent bg-accent-light/50 mb-4 rounded-xl border-l-4 px-10 py-8">
          <p className="text-accent mb-3 text-base font-bold tracking-wider uppercase">
            Definition
          </p>
          <p className="text-text text-2xl leading-relaxed">
            The Decorator is a structural design pattern that attaches new behaviors to objects by
            placing them inside special wrapper objects that contain those behaviors.
          </p>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.3fr] items-stretch gap-10">
          <div className="slide-enter-delay-2 flex items-center">
            <ul className="text-text-muted flex h-full flex-col justify-evenly text-2xl leading-relaxed">
              {[
                "Decorators implement the same interface as the object they wrap",
                "You can stack multiple decorators on top of each other",
                "Behavior is added without modifying the original class",
              ].map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="bg-accent mt-2.5 h-3.5 w-3.5 shrink-0 rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="slide-enter-delay-3 flex items-center justify-center">
            <img
              src="/meme.jpg"
              alt="Decorator Pattern Meme"
              className="max-h-full w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 7 — Class Diagram ───────────────────────────────────── */

function UMLBox({
  x,
  y,
  w,
  h,
  title,
  stereotype,
  fields,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  stereotype?: string;
  fields: string[];
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill="#16161e"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <line
        x1={x}
        y1={y + (stereotype ? 34 : 24)}
        x2={x + w}
        y2={y + (stereotype ? 34 : 24)}
        stroke="#2a2a38"
        strokeWidth="1"
      />
      {stereotype && (
        <text
          x={x + w / 2}
          y={y + 15}
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="10"
          fontFamily="DM Sans, system-ui"
          fontStyle="italic"
        >
          {stereotype}
        </text>
      )}
      <text
        x={x + w / 2}
        y={y + (stereotype ? 29 : 18)}
        textAnchor="middle"
        fill="#f0eff4"
        fontSize="12"
        fontWeight="700"
        fontFamily="DM Sans, system-ui"
      >
        {title}
      </text>
      {fields.map((f, i) => (
        <text
          key={i}
          x={x + 10}
          y={y + (stereotype ? 50 : 40) + i * 17}
          fill="#9494a8"
          fontSize="10"
          fontFamily="Space Mono, ui-monospace, monospace"
        >
          {f}
        </text>
      ))}
    </g>
  );
}

export function ClassDiagramSlide() {
  return (
    <SlideLayout slideNumber={6} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent text-4xl font-bold">Class Diagram</h2>
        <div className="slide-enter-delay-1 flex min-h-0 flex-1 items-center justify-center">
          <svg viewBox="0 0 660 340" className="max-h-full max-w-full object-contain">
            <UMLBox
              x={250}
              y={10}
              w={160}
              h={55}
              title="Component"
              stereotype="«interface»"
              fields={["+ draw(): void"]}
            />
            <UMLBox x={60} y={140} w={150} h={55} title="TextView" fields={["+ draw(): void"]} />
            <UMLBox
              x={400}
              y={140}
              w={200}
              h={70}
              title="Decorator"
              fields={["- wrappee: Component", "+ draw(): void"]}
            />
            <UMLBox
              x={310}
              y={270}
              w={160}
              h={50}
              title="BorderDecorator"
              fields={["+ draw(): void"]}
            />
            <UMLBox
              x={490}
              y={270}
              w={160}
              h={50}
              title="ScrollDecorator"
              fields={["+ draw(): void"]}
            />

            <line
              x1={135}
              y1={140}
              x2={290}
              y2={65}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={190}
              y={96}
              fill="#9494a8"
              fontSize="9"
              fontWeight="600"
              fontFamily="DM Sans, system-ui"
            >
              implements
            </text>

            <line
              x1={500}
              y1={140}
              x2={370}
              y2={65}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={440}
              y={96}
              fill="#9494a8"
              fontSize="9"
              fontWeight="600"
              fontFamily="DM Sans, system-ui"
            >
              implements
            </text>

            <path
              d="M 600 175 C 650 175, 650 35, 410 35"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={615}
              y={85}
              fill="#f59e0b"
              fontSize="10"
              fontWeight="700"
              fontFamily="DM Sans, system-ui"
            >
              «wraps»
            </text>

            <line
              x1={390}
              y1={270}
              x2={460}
              y2={210}
              stroke="#f59e0b"
              strokeWidth="1.5"
              markerEnd="url(#arrowClosed)"
            />
            <line
              x1={570}
              y1={270}
              x2={540}
              y2={210}
              stroke="#f59e0b"
              strokeWidth="1.5"
              markerEnd="url(#arrowClosed)"
            />

            <defs>
              <marker
                id="arrowOpen"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L8,3 L0,6" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
              </marker>
              <marker
                id="arrowClosed"
                markerWidth="10"
                markerHeight="8"
                refX="10"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L10,4 L0,8 Z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 9 — Use Cases ───────────────────────────────────────── */

const USE_CASES = [
  {
    num: "01",
    title: "Runtime Behavior",
    desc: "Add or change responsibilities for one object at runtime without affecting other instances.",
  },
  {
    num: "02",
    title: "Composable Features",
    desc: "Mix independent concerns like logging, caching, retry, or validation as reusable wrappers.",
  },
  {
    num: "03",
    title: "Closed Classes",
    desc: "Wrap sealed, final, legacy, or third-party classes when subclassing is not possible.",
  },
  {
    num: "04",
    title: "Avoid Subclass Explosion",
    desc: "Replace a large inheritance tree with small decorators that can be combined as needed.",
  },
  {
    num: "05",
    title: "Stable Interface",
    desc: "Keep the same component API while adding responsibilities around streams, widgets, or services.",
  },
  {
    num: "06",
    title: "Separate Concerns",
    desc: "Preserve single responsibility by moving each cross-cutting concern into its own decorator.",
  },
];

export function UseCasesSlide() {
  return (
    <SlideLayout slideNumber={8} sectionLabel="THEORY">
      <div className="flex h-full flex-col">
        <h2 className="slide-enter text-accent mb-6 text-4xl font-bold">When to Use It</h2>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => (
            <div
              key={uc.title}
              className={`border-border-card bg-bg-card flex flex-col items-center justify-center gap-4 rounded-xl border p-8 text-center ${stagger(idx, 1)}`}
            >
              <span className="text-accent/25 text-5xl font-extrabold">{uc.num}</span>
              <h3 className="text-text text-2xl font-bold">{uc.title}</h3>
              <p className="text-text-muted text-lg">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 10 — Key Benefits and Liabilities ─────────────────────── */

const BENEFITS_LIABILITIES = [
  {
    type: "Benefit",
    title: "More flexibility than static inheritance",
    bg: "bg-green/5",
    border: "border-green/20",
    text: "text-green",
    items: [
      "Responsibilities can be dynamically added, removed, or mixed at runtime.",
      "Prevents the rigid explosion of subclasses (e.g. BorderedScrollableTextView).",
      "Easily allows mixing, matching, and even adding the same property twice.",
    ],
  },
  {
    type: "Benefit",
    title: "Avoids feature-laden classes",
    bg: "bg-green/5",
    border: "border-green/20",
    text: "text-green",
    items: [
      "Offers a 'pay-as-you-go' approach for adding extensions.",
      "Keeps core components simple instead of bloating them with every foreseeable feature.",
      "Ensures each component focuses on exactly one concern (SRP).",
    ],
  },
  {
    type: "Liability",
    title: "Object identity isn't identical",
    bg: "bg-red/5",
    border: "border-red/20",
    text: "text-red",
    items: [
      "Decorators act as completely transparent enclosures.",
      "From an identity viewpoint, the decorator is not the underlying component.",
      "Code expecting strict object identity will inherently fail.",
    ],
  },
  {
    type: "Liability",
    title: "Lots of little objects",
    bg: "bg-red/5",
    border: "border-red/20",
    text: "text-red",
    items: [
      "Results in systems of many small, similar-looking objects.",
      "The objects differ only in how they interconnect, not necessarily in structure.",
      "Deep nesting of wrappers makes tracing and debugging significantly harder.",
    ],
  },
];

export function AdvDisadvSlide() {
  return (
    <SlideLayout slideNumber={7} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent text-4xl font-bold">Key Benefits and Liabilities</h2>
        <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-6">
          {BENEFITS_LIABILITIES.map((item, idx) => (
            <div
              key={item.title}
              className={`${stagger(idx, 1)} flex flex-col rounded-xl border-2 ${item.border} ${item.bg} p-6 shadow-lg transition-transform hover:scale-[1.02]`}
            >
              <div className="mb-5 flex items-center gap-3">
                {item.type === "Benefit" ? (
                  <CheckCircle className={`h-8 w-8 shrink-0 ${item.text}`} />
                ) : (
                  <XCircle className={`h-8 w-8 shrink-0 ${item.text}`} />
                )}
                <h3 className={`text-3xl font-bold ${item.text} leading-tight`}>{item.title}</h3>
              </div>
              <ul className="text-text-muted flex-1 space-y-4 pl-1 text-xl leading-relaxed">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-2.5 h-2 w-2 shrink-0 rounded-full bg-current ${item.text} opacity-60`}
                    />
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
