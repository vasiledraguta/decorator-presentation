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
  ExpressDividerSlide,
  MiddlewareSlide,
  ExpressCodeSlide,
  JavaDividerSlide,
  FilterInputStreamSlide,
  BufferedInputStreamSlide,
  JavaUsageSlide,
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
  ExpressDividerSlide,
  MiddlewareSlide,
  ExpressCodeSlide,
  JavaDividerSlide,
  FilterInputStreamSlide,
  BufferedInputStreamSlide,
  JavaUsageSlide,
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
    <div className="bg-bg relative h-screen w-screen overflow-hidden">
      <div className="grain-overlay" />

      <button
        onClick={handleExport}
        disabled={exporting}
        className="border-border-card bg-bg-card text-text-muted ease hover:border-accent hover:text-accent absolute top-5 right-5 z-20 flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:opacity-50"
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
          className="border-border-card bg-bg-card text-text-muted ease hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-text-muted min-w-20 text-center text-sm font-medium tabular-nums">
          {current + 1} / {SLIDES.length}
        </span>
        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="border-border-card bg-bg-card text-text-muted ease hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
