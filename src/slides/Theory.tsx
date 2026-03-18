import { SlideLayout } from "../components/SlideLayout";

import { stagger } from "../components/stagger";
import { CheckCircle, XCircle } from "lucide-react";

/* ── Slide 5 — Definition ─────────────────────────────────────── */

export function DefinitionSlide() {
  return (
    <SlideLayout slideNumber={5} sectionLabel="THEORY">
      <div className="flex h-full flex-col justify-center gap-10">
        <h2 className="slide-enter text-accent text-5xl font-bold">Decorator Pattern</h2>
        <div className="slide-enter-delay-1 border-accent bg-accent-light/50 rounded-xl border-l-4 px-10 py-8">
          <p className="text-accent mb-3 text-base font-bold tracking-wider uppercase">
            Definition
          </p>
          <p className="text-text text-2xl leading-relaxed">
            The Decorator is a structural design pattern that attaches new behaviors to objects by
            placing them inside special wrapper objects that contain those behaviors.
          </p>
        </div>
        <ul className="slide-enter-delay-2 text-text-muted flex flex-col gap-6 text-2xl">
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
    <SlideLayout slideNumber={7} sectionLabel="THEORY">
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
            <UMLBox
              x={60}
              y={140}
              w={150}
              h={55}
              title="TextView"
              fields={["+ draw(): void"]}
            />
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
    <SlideLayout slideNumber={9} sectionLabel="THEORY">
      <div className="flex h-full flex-col">
        <h2 className="slide-enter text-accent mb-8 text-4xl font-bold">When to Use It</h2>
        <div className="grid flex-1 grid-cols-2 gap-5">
          {USE_CASES.map((uc, idx) => (
            <div
              key={uc.title}
              className={`border-border-card bg-bg-card flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center ${stagger(idx)}`}
            >
              <span className="text-accent/25 text-4xl font-extrabold">{uc.num}</span>
              <h3 className="text-text text-2xl font-bold">{uc.title}</h3>
              <p className="text-text-muted text-lg leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 10 — Advantages & Disadvantages ─────────────────────── */

const ADV_DISADV = [
  {
    title: "Advantages",
    color: "green" as const,
    Icon: CheckCircle,
    items: [
      "Add behavior without modifying existing code (Open/Closed Principle)",
      "Each decorator focuses on one concern, which improves modularity and testability",
      "Compose, reorder, or omit features at runtime as needed",
      "Reduce code duplication and avoid large inheritance hierarchies",
      "Client code still works through the same component interface",
    ],
  },
  {
    title: "Disadvantages",
    color: "red" as const,
    Icon: XCircle,
    items: [
      "Debugging can be harder because calls travel through multiple wrapper layers",
      "Order matters, so changing the decorator sequence can alter behavior",
      "Removing one decorator from the middle of a chain is awkward",
      "Extra objects and indirection may add overhead in hot paths",
      "Deep nesting can make setup code harder to read",
    ],
  },
];

export function AdvDisadvSlide() {
  return (
    <SlideLayout slideNumber={10} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent text-4xl font-bold">Advantages & Disadvantages</h2>
        <div className="grid flex-1 grid-cols-2 gap-8">
          {ADV_DISADV.map(({ title, color, Icon, items }, colIdx) => (
            <div
              key={title}
              className={`${stagger(colIdx, 1)} flex flex-col gap-6 rounded-xl border border-${color}/20 bg-${color}/5 p-8`}
            >
              <h3 className={`text-3xl font-bold text-${color}`}>{title}</h3>
              {items.map((text) => (
                <div
                  key={text}
                  className="text-text-muted flex items-start gap-4 text-xl leading-snug"
                >
                  <Icon className={`mt-0.5 h-7 w-7 shrink-0 text-${color}`} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
