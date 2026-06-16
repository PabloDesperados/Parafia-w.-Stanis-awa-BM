import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface PdfViewerProps {
  fileUrl: string;
}

export function PdfViewer({ fileUrl }: PdfViewerProps) {
  return (
    <div style={{ height: "800px" }}>
      <Worker workerUrl="/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
}

export default PdfViewer;

// import { Worker, Viewer } from '@react-pdf-viewer/core';
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// interface PdfViewerProps {
//     fileUrl: string;
// }

// export default function PdfViewer({ fileUrl }: PdfViewerProps) {
//     // const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <div style={{ height: '800px' }}>
//             <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//                 <Viewer
//                     fileUrl={fileUrl}
//                     // plugins={[defaultLayoutPluginInstance]}
//                 />
//             </Worker>
//         </div>
//     );
// }

// export default PdfViewer;