import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf} from "lucide-react";
import { myExperience } from "#constants/index.js";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />
                <PanelLeft className="ml-10 icon" />

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon" />
                        <input type="text" placeholder="Search or enter website name" className="flex-1" />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="blog">
                <h2>My Experience</h2>
                <div className="experience-scroll" data-no-drag
                     style={{
                         overflowY: "auto",
                         maxHeight: "60vh",          // ✅ hard limit = guaranteed scroll
                         paddingRight: "10px",
                         minHeight: 0,
                         WebkitOverflowScrolling: "touch",
                         overscrollBehavior: "contain",
                     }}>
                    {myExperience.map((exp) => (
                        <div key={exp.id} className="blog-post">
                            {/* Left column (optional image later) */}
                            <div className="col-span-2">
                                <div className="text-xs text-gray-500">
                                    {exp.from} — {exp.to}
                                </div>
                            </div>

                            {/* Right content */}
                            <div className="content">
                                <h3 className="font-semibold text-base text-gray-800">
                                    {exp.title}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    {exp.company} · {exp.location}
                                </p>

                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                    {exp.description.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>

                                {/* Tech pills like your image */}
                                <div className="flex flex-wrap gap-2 pt-3">
                                    {exp.techStack.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-[#d9d9d9] px-3 py-1 text-xs font-medium text-black"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
