import { useState, useEffect, useRef, type JSX } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { exportToPptx } from "./utils/exportToPptx";
import {
  TitleSlide,
  TOCSlide,
  ProblemSlide,
  SolutionSlide,
  DefinitionSlide,
  ComponentsSlide,
  ClassDiagramSlide,
  CodeExampleSlide,
  UseCasesSlide,
  AdvDisadvSlide,
  ReactDividerSlide,
  HOCSlide,
  ConnectSlide,
  ExpressDividerSlide,
  MiddlewareSlide,
  ExpressCodeSlide,
  ComparisonSlide,
  SummarySlide,
  ThankYouSlide,
} from "./slides";

const SLIDES: (() => JSX.Element)[] = [
  TitleSlide,
  TOCSlide,
  ProblemSlide,
  SolutionSlide,
  DefinitionSlide,
  ComponentsSlide,
  ClassDiagramSlide,
  CodeExampleSlide,
  UseCasesSlide,
  AdvDisadvSlide,
  ReactDividerSlide,
  HOCSlide,
  ConnectSlide,
  ExpressDividerSlide,
  MiddlewareSlide,
  ExpressCodeSlide,
  ComparisonSlide,
  SummarySlide,
  ThankYouSlide,
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [exporting, setExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  async function handleExport() {
    setExporting(true);
    try {
      await exportToPptx(containerRef, SLIDES, setCurrent, current);
    } finally {
      setExporting(false);
    }
  }

  const SlideComponent = SLIDES[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-bg">
      <div className="grain-overlay" />

      <button
        onClick={handleExport}
        disabled={exporting}
        className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-lg border border-border-card bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-200 ease hover:border-accent hover:text-accent disabled:opacity-50"
      >
        <Download className="h-4 w-4" />
        {exporting ? "Exporting\u2026" : "Export PPTX"}
      </button>

      <div ref={containerRef} key={current} className="h-full w-full">
        <SlideComponent />
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-card bg-bg-card text-text-muted transition-colors duration-200 ease hover:border-accent hover:text-accent disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="min-w-20 text-center text-sm font-medium tabular-nums text-text-muted">
          {current + 1} / {SLIDES.length}
        </span>
        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-card bg-bg-card text-text-muted transition-colors duration-200 ease hover:border-accent hover:text-accent disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
