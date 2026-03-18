import { SectionDivider, SlideLayout } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";
import { ArrowLeft } from "lucide-react";
import { stagger } from "../components/stagger";

export function JavaDividerSlide() {
  return (
    <SectionDivider
      slideNumber={17}
      sectionNum="05"
      title="Standard Library"
      subtitle="Java I/O Streams"
      tag="java.io — the classic example"
    />
  );
}

/* ── Slide 18 — FilterInputStream ───────────────────────────── */

const FILTER_INPUT_STREAM_CODE = `// Simplified from OpenJDK java.io.FilterInputStream
public class FilterInputStream extends InputStream {
    // The "Wrapped" object (The Component)
    protected volatile InputStream in;

    protected FilterInputStream(InputStream in) {
        this.in = in; // Composition at work
    }

    public int read() throws IOException {
        return in.read(); // Standard delegation
    }
}`;

const FILTER_POINTS = [
  {
    label: "Base Decorator",
    desc: "FilterInputStream is the abstract base for all decorators in the java.io ecosystem.",
  },
  {
    label: "The Reference",
    desc: "It maintains a 'protected' reference to the wrapped InputStream (the Component).",
  },
  {
    label: "Pure Delegation",
    desc: "The default read() method simply delegates to the inner stream without changes.",
  },
];

export function FilterInputStreamSlide() {
  return (
    <SlideLayout slideNumber={18} sectionLabel="JAVA I/O: FILTER">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">The Decorator Base</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            FilterInputStream: The "Middleman" that holds the magic reference.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={FILTER_INPUT_STREAM_CODE} fontSize="text-lg" className="h-full" />
            {/* Arrow pointing to 'protected volatile InputStream in;' which is line 4 */}
            <div className="absolute top-[115px] left-[550px] flex items-center gap-2">
              <ArrowLeft className="text-accent h-8 w-8 animate-pulse" />
              <span className="bg-accent/10 border-accent/20 text-accent rounded-md border px-3 py-1 text-sm font-bold whitespace-nowrap">
                The Wrapped Component
              </span>
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {FILTER_POINTS.map((p, idx) => (
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

/* ── Slide 19 — BufferedInputStream ──────────────────────────── */

const BUFFERED_INPUT_STREAM_CODE = `// Simplified from OpenJDK java.io.BufferedInputStream
public class BufferedInputStream extends FilterInputStream {
    protected byte buf[]; // The "Added Behavior" (The Buffer)

    public BufferedInputStream(InputStream in) {
        super(in); // Passing the stream to parent
    }

    @Override
    public synchronized int read() throws IOException {
        // Logic to check buffer, fill it if empty, 
        // and then call the underlying 'in.read()'
        fill(); 
        return getBuf()[pos++] & 0xff;
    }
}`;

const BUFFERED_POINTS = [
  {
    label: "Concrete Decorator",
    desc: "Adds buffering behavior to any InputStream without modifying its source code.",
  },
  {
    label: "Behavior Injection",
    desc: "It overrides read() to provide data from an internal buffer instead of a direct disk/network read.",
  },
  {
    label: "Constructor Injection",
    desc: "It receives the original stream and passes it up to FilterInputStream via super(in).",
  },
];

export function BufferedInputStreamSlide() {
  return (
    <SlideLayout slideNumber={19} sectionLabel="JAVA I/O: CONCRETE">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">The Concrete Decorator</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            BufferedInputStream: Adding a buffer without changing the source stream's code.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={BUFFERED_INPUT_STREAM_CODE} fontSize="text-lg" className="h-full" />
            {/* Arrow pointing to 'super(in);' which is line 6 */}
            <div className="absolute top-[175px] left-[620px] flex items-center gap-2">
              <ArrowLeft className="text-accent h-8 w-8 animate-pulse" />
              <span className="bg-accent/10 border-accent/20 text-accent rounded-md border px-3 py-1 text-sm font-bold whitespace-nowrap">
                Passing up the Chain
              </span>
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {BUFFERED_POINTS.map((p, idx) => (
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

/* ── Slide 20 — Real World Usage ─────────────────────────────── */

const REAL_USAGE_CODE = `// How we actually use it in Java
InputStream file = new FileInputStream("data.zip");
InputStream buffered = new BufferedInputStream(file);
InputStream decompressor = new GZIPInputStream(buffered);

// All three are still technically an "InputStream"
// The call cascades down the stack
int data = decompressor.read();`;

const USAGE_POINTS = [
  {
    label: "Recursive Stacking",
    desc: "Decorators can be stacked indefinitely. Each layer adds a specific capability (File → Buffer → GZIP).",
  },
  {
    label: "Runtime Choice",
    desc: "The client chooses which decorators to apply at runtime, avoiding a static class explosion.",
  },
  {
    label: "Uniform Interface",
    desc: "Despite the complexity inside, the client only sees an 'InputStream' and calls '.read()'.",
  },
];

export function JavaUsageSlide() {
  return (
    <SlideLayout slideNumber={20} sectionLabel="JAVA I/O: USAGE">
      <div className="flex h-full flex-col gap-8">
        <div>
          <h2 className="slide-enter text-accent text-4xl font-bold">Real-World Usage</h2>
          <p className="slide-enter-delay-1 text-text-muted mt-2 text-xl italic">
            Stacking decorators like Lego bricks.
          </p>
        </div>
        <div className="flex flex-1 gap-10 overflow-hidden">
          <div className="slide-enter-delay-2 relative flex w-[60%] flex-col">
            <CodeBlock code={REAL_USAGE_CODE} fontSize="text-lg" className="h-full" />
          </div>
          <div className="flex w-[40%] flex-col gap-6">
            {USAGE_POINTS.map((p, idx) => (
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
