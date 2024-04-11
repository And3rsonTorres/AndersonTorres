"use client";
import PdfViewer from "@/app/ui/components/PdfViewer";

export default function CPP() {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <PdfViewer path="../CPP_Portfolio.pdf" />
      </div>
    </>
  );
}
