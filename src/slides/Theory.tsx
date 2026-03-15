import { SlideLayout, stagger } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { CheckCircle, XCircle } from "lucide-react";

/* ── Slide 5 — Definition ─────────────────────────────────────── */

export function DefinitionSlide() {
  return (
    <SlideLayout slideNumber={5} sectionLabel="THEORY">
      <div className="flex h-full flex-col justify-center gap-10">
        <h2 className="slide-enter text-5xl font-bold text-accent">
          Decorator Pattern
        </h2>
        <div className="slide-enter-delay-1 rounded-xl border-l-4 border-accent bg-accent-light/50 px-10 py-8">
          <p className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Definition
          </p>
          <p className="text-2xl leading-relaxed text-text">
            The Decorator is a structural design pattern that attaches new
            behaviors to objects by placing them inside special wrapper objects
            that contain those behaviors.
          </p>
        </div>
        <ul className="slide-enter-delay-2 flex flex-col gap-6 text-2xl text-text-muted">
          {[
            "Decorators implement the same interface as the object they wrap",
            "You can stack multiple decorators on top of each other",
            "Behavior is added without modifying the original class",
          ].map((text) => (
            <li key={text} className="flex items-start gap-4">
              <span className="mt-2.5 h-3.5 w-3.5 shrink-0 rounded-full bg-accent" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 6 — Components ──────────────────────────────────────── */

const COMPONENTS = [
  {
    label: "Component Interface",
    desc: "Declares the common interface for both wrappers and wrapped objects.",
  },
  {
    label: "Concrete Component",
    desc: "The original object being decorated; defines the base behavior that can be altered.",
  },
  {
    label: "Base Decorator",
    desc: "Holds a reference to the wrapped component and delegates all work to it.",
  },
  {
    label: "Concrete Decorator",
    desc: "Adds extra behavior before or after delegating to the wrapped component's methods.",
  },
];

export function ComponentsSlide() {
  return (
    <SlideLayout slideNumber={6} sectionLabel="THEORY">
      <div className="flex h-full flex-col">
        <h2 className="slide-enter mb-10 text-4xl font-bold text-accent">
          Components
        </h2>
        <div className="grid flex-1 grid-cols-2 gap-6">
          {COMPONENTS.map((c, idx) => (
            <div
              key={c.label}
              className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-border-card bg-bg-card p-8 text-center ${stagger(idx)}`}
            >
              <h3 className="text-3xl font-bold text-accent">{c.label}</h3>
              <p className="text-xl leading-relaxed text-text-muted">
                {c.desc}
              </p>
            </div>
          ))}
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
    <SlideLayout slideNumber={7} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-4xl font-bold text-accent">
          Class Diagram
        </h2>
        <div className="slide-enter-delay-1 flex flex-1 items-center justify-center">
          <svg viewBox="0 0 700 340" className="h-full w-full">
            <UMLBox
              x={260}
              y={10}
              w={180}
              h={55}
              title="Notifier"
              stereotype="«interface»"
              fields={["+ send(msg: string): void"]}
            />
            <UMLBox
              x={80}
              y={140}
              w={170}
              h={55}
              title="BaseNotifier"
              fields={["+ send(msg: string): void"]}
            />
            <UMLBox
              x={440}
              y={140}
              w={180}
              h={70}
              title="BaseDecorator"
              fields={["- wrappee: Notifier", "+ send(msg: string): void"]}
            />
            <UMLBox
              x={370}
              y={270}
              w={150}
              h={50}
              title="SMSDecorator"
              fields={["+ send(msg: string)"]}
            />
            <UMLBox
              x={540}
              y={270}
              w={150}
              h={50}
              title="SlackDecorator"
              fields={["+ send(msg: string)"]}
            />

            <line
              x1={165}
              y1={140}
              x2={300}
              y2={65}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={195}
              y={96}
              fill="#9494a8"
              fontSize="9"
              fontWeight="600"
              fontFamily="DM Sans, system-ui"
            >
              implements
            </text>

            <line
              x1={530}
              y1={140}
              x2={400}
              y2={65}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={462}
              y={96}
              fill="#9494a8"
              fontSize="9"
              fontWeight="600"
              fontFamily="DM Sans, system-ui"
            >
              implements
            </text>

            <path
              d="M 620 155 C 660 155, 670 40, 440 35"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowOpen)"
            />
            <text
              x={618}
              y={78}
              fill="#f59e0b"
              fontSize="10"
              fontWeight="700"
              fontFamily="DM Sans, system-ui"
            >
              «wraps»
            </text>

            <line
              x1={445}
              y1={270}
              x2={500}
              y2={210}
              stroke="#f59e0b"
              strokeWidth="1.5"
              markerEnd="url(#arrowClosed)"
            />
            <line
              x1={615}
              y1={270}
              x2={560}
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
                <path
                  d="M0,0 L8,3 L0,6"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                />
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

/* ── Slide 8 — Code Example ────────────────────────────────────── */

const CODE_EXAMPLE = `interface Notifier {
  send(msg: string): void;
}
class EmailNotifier implements Notifier {
  send(msg: string) { console.log("Email:", msg); }
}
class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}
  send(msg: string) { this.wrappee.send(msg); }
}
class SMSDecorator extends NotifierDecorator {
  send(msg: string) { super.send(msg); console.log("SMS:", msg); }
}
class SlackDecorator extends NotifierDecorator {
  send(msg: string) { super.send(msg); console.log("Slack:", msg); }
}
// Stack decorators freely:
let notifier: Notifier = new EmailNotifier();
notifier = new SMSDecorator(notifier);
notifier = new SlackDecorator(notifier);
notifier.send("Server is down!");`;

export function CodeExampleSlide() {
  return (
    <SlideLayout slideNumber={8} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-4xl font-bold text-accent">
          Code Example
        </h2>
        <div className="slide-enter-delay-1 min-h-0 flex-1">
          <CodeBlock
            code={CODE_EXAMPLE}
            fontSize="text-base"
            className="h-full overflow-hidden"
          />
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 9 — Use Cases ───────────────────────────────────────── */

const USE_CASES = [
  { num: "01", title: "Runtime Behavior", desc: "Add behavior to individual objects at runtime without affecting other objects of the same class." },
  { num: "02", title: "Combinable Features", desc: "When features can be mixed and matched independently — each decorator is its own unit." },
  { num: "03", title: "Sealed / Legacy Code", desc: "When you cannot extend a class via inheritance because it is sealed, final, or from a third-party library." },
  { num: "04", title: "Single Responsibility", desc: "When you want to keep each concern in its own class rather than creating a monolithic subclass." },
];

export function UseCasesSlide() {
  return (
    <SlideLayout slideNumber={9} sectionLabel="THEORY">
      <div className="flex h-full flex-col">
        <h2 className="slide-enter mb-10 text-4xl font-bold text-accent">
          When to Use It
        </h2>
        <div className="grid flex-1 grid-cols-2 gap-6">
          {USE_CASES.map((uc, idx) => (
            <div
              key={uc.title}
              className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-border-card bg-bg-card p-8 text-center ${stagger(idx)}`}
            >
              <span className="text-5xl font-extrabold text-accent/25">{uc.num}</span>
              <h3 className="text-3xl font-bold text-text">{uc.title}</h3>
              <p className="text-xl leading-relaxed text-text-muted">{uc.desc}</p>
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
      "Extend behavior without modifying existing code (Open/Closed Principle)",
      "Each decorator handles one concern (Single Responsibility Principle)",
      "Compose behaviors freely at runtime — no subclass explosion",
      "Decorators can be added or removed independently",
    ],
  },
  {
    title: "Disadvantages",
    color: "red" as const,
    Icon: XCircle,
    items: [
      "Hard to remove a specific wrapper from the middle of the stack",
      "Many small objects can make debugging and stack traces harder to follow",
      "Order of decoration matters — changing it can alter behavior",
      "Initial configuration code can look complex with deep nesting",
    ],
  },
];

export function AdvDisadvSlide() {
  return (
    <SlideLayout slideNumber={10} sectionLabel="THEORY">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-4xl font-bold text-accent">
          Advantages & Disadvantages
        </h2>
        <div className="grid flex-1 grid-cols-2 gap-8">
          {ADV_DISADV.map(({ title, color, Icon, items }, colIdx) => (
            <div
              key={title}
              className={`${stagger(colIdx, 1)} flex flex-col gap-8 rounded-xl border border-${color}/20 bg-${color}/5 p-10`}
            >
              <h3 className={`text-3xl font-bold text-${color}`}>{title}</h3>
              {items.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-4 text-2xl leading-snug text-text-muted"
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
