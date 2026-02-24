import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";
import { WindowControls } from "#components/index.js";

/**
 * Your index.js provides techStack inside each txt file like:
 * techStack: ["Python", "FastAPI", "Pydantic", ...]
 * This component reads that and renders nice colored icon badges.
 */

const TECH_META = {
    // Frontend
    react: { label: "React", icon: "/icons/tech/react.png", bg: "#61DAFB", text: "#0B1F2A" },
    vite: { label: "Vite", icon: "/icons/tech/vite.png", bg: "#646CFF", text: "#ffffff" },
    tailwind: { label: "TailwindCSS", icon: "/icons/tech/TailwindCSS.png", bg: "#06B6D4", text: "#052027" },
    javascript: { label: "JavaScript", icon: "/icons/tech/javascript.png", bg: "#F7DF1E", text: "#111111" },
    typescript: { label: "TypeScript", icon: "/icons/tech/Typescript.png", bg: "#3178C6", text: "#ffffff" },
    angular: { label: "Angular", icon: "/icons/tech/angular.png", bg: "#DD0031", text: "#ffffff" },
    zustand: { label: "Zustand", icon: "/icons/tech/zustand.png", bg: "#111827", text: "#ffffff" },
    gsap: { label: "GSAP", icon: "/icons/tech/gsap.png", bg: "#22C55E", text: "#052027" },
    reactRouter: { label: "React Router", icon: "/icons/tech/react-router.png", bg: "#CA4245", text: "#ffffff" },

    // Backend / API
    python: { label: "Python", icon: "/icons/tech/Python.png", bg: "#3776AB", text: "#ffffff" },
    fastapi: { label: "FastAPI", icon: "/icons/tech/fast-api.png", bg: "#009688", text: "#ffffff" },
    pydantic: { label: "Pydantic", icon: "/icons/tech/pydantic.png", bg: "#E92063", text: "#ffffff" },
    uvicorn: { label: "Uvicorn", icon: "/icons/tech/uvicorn.png", bg: "#2E7D32", text: "#ffffff" },
    rest: { label: "REST API", icon: "/icons/tech/rest-api.png", bg: "#0F172A", text: "#ffffff" },
    websocket: { label: "WebSockets", icon: "/icons/tech/websocket.png", bg: "#0B5FFF", text: "#ffffff" },

    // .NET stack (Movie app)
    dotnet: { label: ".NET 8", icon: "/icons/tech/net-8.png", bg: "#512BD4", text: "#ffffff" },
    netcore: { label: "NET Core", icon: "/icons/tech/net-core.png", bg: "#6B4CE6", text: "#ffffff" },
    sqlserver: { label: "SQL Server", icon: "/icons/tech/sql-server.png", bg: "#CC2927", text: "#ffffff" },

    // Databases / Tools
    postgres: { label: "PostgreSQL", icon: "/icons/tech/postgre-sql.png", bg: "#336791", text: "#ffffff" },
    mysql: { label: "MySQL", icon: "/icons/tech/my-sql.png", bg: "#00758F", text: "#ffffff" },
    mongodb: { label: "MongoDB", icon: "/icons/tech/mongo-db.png", bg: "#47A248", text: "#ffffff" },
    redis: { label: "Redis", icon: "/icons/tech/redis.png", bg: "#DC382D", text: "#ffffff" },
    docker: { label: "Docker", icon: "/icons/tech/docker.png", bg: "#2496ED", text: "#ffffff" },
    git: { label: "Git", icon: "/icons/tech/git.png", bg: "#F05032", text: "#ffffff" },
    github: { label: "GitHub", icon: "/icons/tech/gitHub.png", bg: "#111111", text: "#ffffff" },
    postman: { label: "Postman", icon: "/icons/tech/postman.png", bg: "#FF6C37", text: "#ffffff" },
    vscode: { label: "VSCode", icon: "/icons/tech/vs-code.png", bg: "#007ACC", text: "#ffffff" },

    // AI / Voice (IntelliBot)
    openai: { label: "OpenAI", icon: "/icons/tech/openai.png", bg: "#111827", text: "#ffffff" },
    elevenlabs: { label: "ElevenLabs", icon: "/icons/tech/elevenLabs.png", bg: "#111111", text: "#ffffff" },
    tts: { label: "TTS", icon: "/icons/tech/tts.png", bg: "#000000", text: "#ffffff" },
    stt: { label: "Speech-to-Text", icon: "/icons/tech/stt.png", bg: "#FF7A00", text: "#ffffff" },
    ai: { label: "AI", icon: "/icons/tech/ai.png", bg: "#10B981", text: "#052027" },

    // Others from your constants
    puter: { label: "Puter.js", icon: "/icons/tech/puter-logo.png", bg: "#111827", text: "#ffffff" },
    laravel: { label: "Laravel", icon: "/icons/tech/laravel.png", bg: "#FF2D20", text: "#ffffff" },
    node: { label: "Node.js", icon: "/icons/tech/node-js.png", bg: "#3C873A", text: "#ffffff" },
    npm: { label: "NPM", icon: "/icons/tech/npm.png", bg: "#CB3837", text: "#ffffff" },
    composer: { label: "Composer", icon: "/icons/tech/composer.png", bg: "#885630", text: "#ffffff" },
    mvc: { label: "MVC", icon: "/icons/tech/mvc.png", bg: "#334155", text: "#ffffff" },
};

const normalizeTechKey = (t = "") => {
    const s = t.toLowerCase().trim();

    // Normalize common variations from your index.js techStack arrays
    if (s.includes("react router")) return "react-router";
    if (s.includes("react")) return "react";
    if (s === "vite") return "vite";
    if (s.includes("tailwind")) return "tailwind";
    if (s.includes("typescript")) return "typescript";
    if (s.includes("javascript")) return "javascript";
    if (s.includes("angular")) return "angular";
    if (s.includes("zustand")) return "zustand";
    if (s.includes("gsap")) return "gsap";

    if (s.includes("python")) return "python";
    if (s.includes("fast api") || s.includes("fastapi")) return "fastapi";
    if (s.includes("pydantic")) return "pydantic";
    if (s.includes("uvicorn")) return "uvicorn";
    if (s.includes("rest")) return "rest";
    if (s.includes("websocket")) return "websocket";

    if (s.includes(".net") || s.includes("dotnet")) return "dotnet";
    if (s.includes("entity framework")) return "efcore";
    if (s.includes("sql server")) return "sqlserver";

    if (s.includes("postgres")) return "postgres";
    if (s.includes("mysql")) return "mysql";
    if (s.includes("mongodb")) return "mongodb";
    if (s.includes("redis")) return "redis";

    if (s.includes("docker")) return "docker";
    if (s === "git") return "git";
    if (s.includes("github") || s.includes("hithub")) return "github"; // handles your typo "HitHub"
    if (s.includes("postman")) return "postman";
    if (s.includes("vscode")) return "vscode";

    if (s.includes("openai")) return "openai";
    if (s.includes("elevenlabs")) return "elevenlabs";
    if (s === "tts" || s.includes("tts")) return "tts";
    if (s.includes("speech-to-text") || s.includes("speech to text") || s === "stt") return "stt";
    if (s === "ai") return "ai";

    if (s.includes("puter")) return "puter";
    if (s.includes("laravel")) return "laravel";
    if (s.includes("node")) return "node";
    if (s === "npm" || s.includes("npm")) return "npm";
    if (s.includes("composer")) return "composer";
    if (s.includes("mvc")) return "mvc";

    return null;
};

const TechBadge = ({ tech }) => {
    const key = normalizeTechKey(tech);
    const meta = key ? TECH_META[key] : null;

    const bg = meta?.bg ?? "#EEF2FF";
    const color = meta?.text ?? "#111827";
    const icon = meta?.icon;

    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm"
            style={{ backgroundColor: bg, color }}
            title={tech}
        >
            {icon ? <img src={icon} alt={tech} className="w-4 h-4" /> : null}
            <span className="whitespace-nowrap">{meta?.label ?? tech}</span>
        </div>
    );
};

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    // techStack is present in your index.js .txt file objects
    const { name, image, subtitle, description, techStack } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-3 bg-white">
                {image ? (
                    <div className="w-full">
                        <img src={image} alt={name} className="w-full h-auto rounded" />
                    </div>
                ) : null}

                {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-2 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}

                {/* ✅ Tech Stack Badges (from index.js txt objects) */}
                {Array.isArray(techStack) && techStack.length > 0 ? (
                    <div className="pt-2">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((t, i) => (
                                <TechBadge key={`${t}-${i}`} tech={t} />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;