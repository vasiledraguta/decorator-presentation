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
    <div className={`bg-bg relative flex h-full w-full flex-col overflow-hidden ${className}`}>
      <div className="via-accent h-[2px] w-full shrink-0 bg-linear-to-r from-transparent to-transparent opacity-60" />

      <div className="slide-enter flex-1 overflow-hidden px-20 pt-12 pb-6" style={{ minHeight: 0 }}>
        {children}
      </div>

      <div className="slide-enter-delay-3 border-border-card text-text-muted mx-20 flex shrink-0 items-end justify-between border-t pt-4 pb-10 text-sm font-medium tracking-widest">
        <span className="uppercase">{sectionLabel ?? ""}</span>
        <span className="tabular-nums">{slideNumber}</span>
      </div>
    </div>
  );
}

interface SectionDividerProps {
  slideNumber: number;
  sectionNum: string;
  title: string;
  subtitle: string;
  tag: ReactNode;
}

export function SectionDivider({
  slideNumber,
  sectionNum,
  title,
  subtitle,
  tag,
}: SectionDividerProps) {
  return (
    <SlideLayout slideNumber={slideNumber}>
      <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
        <span className="slide-enter text-accent/10 text-9xl font-extrabold">{sectionNum}</span>
        <h2 className="slide-enter-delay-1 text-text text-5xl font-bold">{title}</h2>
        <p className="slide-enter-delay-2 text-text-muted mt-2 text-3xl">{subtitle}</p>
        <p className="slide-enter-delay-3 border-border-card bg-bg-card text-text-muted mt-6 rounded-full border px-6 py-2 text-base font-medium">
          {tag}
        </p>
      </div>
    </SlideLayout>
  );
}
