import type { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  sectionLabel?: string;
  className?: string;
}

export function SlideLayout({
  children,
  slideNumber,
  sectionLabel,
  className = "",
}: SlideLayoutProps) {
  return (
    <div className={`relative flex h-full w-full flex-col overflow-hidden bg-bg ${className}`}>
      <div className="h-[2px] w-full shrink-0 bg-linear-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="slide-enter flex-1 overflow-hidden px-20 pt-12 pb-6" style={{ minHeight: 0 }}>
        {children}
      </div>

      <div className="slide-enter-delay-3 mx-20 flex shrink-0 items-end justify-between border-t border-border-card pb-10 pt-4 text-sm font-medium tracking-widest text-text-muted">
        <span className="uppercase">{sectionLabel ?? ""}</span>
        <span className="tabular-nums">{slideNumber}</span>
      </div>
    </div>
  );
}

export function stagger(idx: number, perGroup = 2): string {
  const delay = Math.min(Math.floor(idx / perGroup) + 1, 3);
  return `slide-enter-delay-${delay}`;
}

interface SectionDividerProps {
  slideNumber: number;
  sectionNum: string;
  title: string;
  subtitle: string;
  tag: string;
}

export function SectionDivider({ slideNumber, sectionNum, title, subtitle, tag }: SectionDividerProps) {
  return (
    <SlideLayout slideNumber={slideNumber}>
      <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
        <span className="slide-enter text-9xl font-extrabold text-accent/10">{sectionNum}</span>
        <h2 className="slide-enter-delay-1 text-5xl font-bold text-text">{title}</h2>
        <p className="slide-enter-delay-2 mt-2 text-3xl text-text-muted">{subtitle}</p>
        <p className="slide-enter-delay-3 mt-6 rounded-full border border-border-card bg-bg-card px-6 py-2 text-base font-medium text-text-muted">
          {tag}
        </p>
      </div>
    </SlideLayout>
  );
}
