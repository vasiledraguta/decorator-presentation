import { useState, useEffect, useRef, type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exportToPptx } from "./utils/exportToPptx";
import {
  TitleSlide,
  TOCSlide,
  ProblemSlide,
  SolutionSlide,
  DefinitionSlide,
  ClassDiagramSlide,
  AdvDisadvSlide,
  UseCasesSlide,
  JavaDividerSlide,
  FilterInputStreamSlide,
  BufferedInputStreamSlide,
  JavaUsageSlide,
  PythonDividerSlide,
  PythonSugarSlide,
  PythonImplementationSlide,
  PythonUsageSlide,
  ExpressDividerSlide,
  MiddlewarePipelineSlide,
  AuthDecoratorSlide,
  PipelineStackingSlide,
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
  ClassDiagramSlide,
  AdvDisadvSlide,
  UseCasesSlide,
  JavaDividerSlide,
  FilterInputStreamSlide,
  BufferedInputStreamSlide,
  JavaUsageSlide,
  PythonDividerSlide,
  PythonSugarSlide,
  PythonImplementationSlide,
  PythonUsageSlide,
  ExpressDividerSlide,
  MiddlewarePipelineSlide,
  AuthDecoratorSlide,
  PipelineStackingSlide,
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
      else if (
        (e.metaKey || e.ctrlKey) &&
        !e.shiftKey &&
        !e.altKey &&
        e.key.toLowerCase() === "e"
      ) {
        const target = e.target as HTMLElement | null;
        if (
          target?.tagName === "INPUT" ||
          target?.tagName === "TEXTAREA" ||
          target?.isContentEditable
        ) {
          return;
        }
        e.preventDefault();
        void handleExport();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  async function handleExport() {
    if (exporting) return;
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
