import {useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Link } from '@nextui-org/react';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface File {
  path : string;
}

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};


export default function PDFFileViewer(file: File) {
  const path = file.path;

  const [numPages, setNumPages] = useState<number>();
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    // Define a function to update the state based on the window's width
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    // Ensure window is defined (which it will be in the client-side environment)
    if (typeof window !== 'undefined') {
      // Add event listener for resize events
      window.addEventListener('resize', handleWindowResize);

      // Set initial width
      handleWindowResize();

      // Return a cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);


  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

 // Determine width based on window size
 const calculateWidth = () => {
  if (windowWidth > 1024) {
    return 800; // max width for larger screens
  } else if (windowWidth > 768) {
    return windowWidth - 200; // slightly smaller on medium screens
  } else {
    return windowWidth - 50; // use most of the screen on small screens
  }
};

return (
  <div className="bg-zinc-400 min-h-screen font-sans text-white">
    <header className="bg-gradient-to-r from-indigo-600  to-sky-600 via-blue-600 
    text-center md:text-2xl text-lg shadow-lg sm:p-2 p-3 sticky top-0 z-50">
      <Link href='#'>CPP Portfolio</Link>
    </header>
    <div className="flex my-2.5 p-2.5">
      <div className="w-full max-w-[calc(100%-2em)] my-2">
        <Document file={path} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={calculateWidth()}
              className="my-4 shadow-md"
            />
          ))}
        </Document>
      </div>
    </div>
  </div>
);
}