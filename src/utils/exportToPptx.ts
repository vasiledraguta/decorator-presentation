import html2canvas from "html2canvas-pro";
import PptxGenJS from "pptxgenjs";
import type { RefObject, JSX } from "react";

export async function exportToPptx(
  containerRef: RefObject<HTMLDivElement | null>,
  slides: (() => JSX.Element)[],
  setCurrent: (index: number) => void,
  currentIndex: number,
) {
  document.documentElement.classList.add("exporting");

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Decorator Pattern Presentation";
  pptx.title = "Decorator Design Pattern";

  try {
    for (let i = 0; i < slides.length; i++) {
      setCurrent(i);
      await waitForRender();

      const el = containerRef.current;
      if (!el) continue;

      const canvas = await html2canvas(el, {
        scale: 2,
        backgroundColor: "#0c0c10",
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      const slide = pptx.addSlide();
      slide.background = { color: "0C0C10" };
      slide.addImage({
        data: imgData,
        x: 0,
        y: 0,
        w: "100%",
        h: "100%",
      });
    }

    setCurrent(currentIndex);
    await pptx.writeFile({ fileName: "Decorator-Pattern.pptx" });
  } finally {
    document.documentElement.classList.remove("exporting");
  }
}

function waitForRender(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(resolve, 400);
      });
    });
  });
}
