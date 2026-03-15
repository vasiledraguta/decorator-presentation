import { SlideLayout, stagger, SectionDivider } from "../components/SlideLayout";
import { CodeBlock } from "../components/CodeBlock";

export function ReactDividerSlide() {
  return (
    <SectionDivider
      slideNumber={11}
      sectionNum="03"
      title="Real-World Example"
      subtitle="Higher-Order Components in React"
      tag="facebook/react — open source"
    />
  );
}

/* ── Slide 12 — HOC Explanation ────────────────────────────────── */

const HOC_CODE = `function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const user = useAuth();

    if (!user) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} user={user} />;
  };
}

// Usage — wraps ProfilePage without modifying it:
const ProtectedProfile = withAuth(ProfilePage);`;

const HOC_POINTS = [
  {
    label: "What",
    desc: "A function that takes a component and returns a new, enhanced component.",
  },
  {
    label: "Decorator",
    desc: "It wraps the original component — this is exactly the Decorator pattern applied to React.",
  },
  {
    label: "Everywhere",
    desc: "Used extensively in React Router, Redux connect(), and React's own memo() and forwardRef().",
  },
  {
    label: "Cross-Cutting",
    desc: "Adds authentication, logging, or data fetching — without modifying the wrapped component.",
  },
];

export function HOCSlide() {
  return (
    <SlideLayout slideNumber={12} sectionLabel="REAL-WORLD: REACT">
      <div className="flex h-full flex-col gap-8">
        <h2 className="slide-enter text-accent text-4xl font-bold">Higher-Order Components</h2>
        <div className="flex flex-1 gap-10">
          <div className="flex w-1/2 flex-col gap-5">
            {HOC_POINTS.map((p, idx) => (
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
            <CodeBlock code={HOC_CODE} fontSize="text-base" className="flex-1" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ── Slide 13 — connect() Deep Dive ────────────────────────────── */

const CONNECT_CODE = `// Simplified react-redux connect() as a Decorator
function connect(mapStateToProps) {
  return function decorator(WrappedComponent) {
    return function ConnectedComponent(props) {
      const store = useContext(StoreContext);
      const storeState = mapStateToProps(store.getState());

      return (
        <WrappedComponent
          {...props}
          {...storeState}
        />
      );
    };
  };
}

// Usage:
const mapState = (state) => ({ todos: state.todos });
export default connect(mapState)(TodoList);
// ConnectedComponent wraps TodoList and injects
// store state — a textbook Decorator.`;

export function ConnectSlide() {
  return (
    <SlideLayout slideNumber={13} sectionLabel="REAL-WORLD: REACT">
      <div className="flex h-full flex-col gap-6">
        <h2 className="slide-enter text-accent text-4xl font-bold">react-redux: connect()</h2>
        <div className="slide-enter-delay-1 flex-1">
          <CodeBlock code={CONNECT_CODE} fontSize="text-base" className="h-full" />
        </div>
        <p className="slide-enter-delay-2 text-text-muted text-center text-base font-medium">
          Source: reduxjs/react-redux on GitHub
        </p>
      </div>
    </SlideLayout>
  );
}
