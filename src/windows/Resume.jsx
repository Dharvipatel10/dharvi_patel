import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {useState} from "react";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(0);
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="/files/resume.pdf" download className="cursor-pointer" title="Download Resume">
                    <Download className="icon" />
                </a>
            </div>

            {/*<Document file="/files/resume.pdf" >*/}
            {/*    <Page pageNumber={1} renderTextLayer renderAnnotationLayer />*/}
            {/*</Document>*/}

            <div className="resume-scroll" data-no-drag
                 style={{
                     overflowY: "auto",
                     maxHeight: "90vh",   // guarantees scroll
                     paddingRight: "10px",
                     minHeight: 0,
                     WebkitOverflowScrolling: "touch",
                     overscrollBehavior: "contain",
                 }}>
                <Document file="/files/resume.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <div key={i} className="resume-page">
                            <Page
                                pageNumber={i + 1}
                                renderTextLayer
                                renderAnnotationLayer
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;
