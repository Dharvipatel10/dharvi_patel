const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Experience", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const myExperience = [
    {
        id: 1,
        from: "Jan 2025",
        to: "Jan 2026",
        title: "Working Student – Full Stack Software Developer",
        company: "Technical University of Munich",
        location: "Remote, Germany",
        description: [
            "Developed and maintained REST APIs to enhance system functionality.",
            "Refactored legacy modules into MVC architecture to improve maintainability.",
            "Implemented new features using PHP and MySQL with clean database integration.",
            "Worked in Agile workflow using Git Flow, Docker, and CI/CD pipelines."
        ],
        techStack: ["HTML5", "CSS3" , "ReactJS", "TypeScript", "PHP", "REST APIs" , "MySQL", "Docker", "Git", "CI/CD" , "Agile Methodology"],
    },
    {
        id: 2,
        from: "Jul 2024",
        to: "Jun 2025",
        title: "Master Thesis – Carla Simulation for Non-Systematic Traffic Vehicles",
        company: "Technical University of Chemnitz",
        location: "Chemnitz, Germany",
        description: [
            "Designed a simulation model to identify whether vehicles are manually driven or autonomous using trajectory estimation algorithms.",
            "Applied AI, computer vision techniques, and machine learning for vehicle classification.",
            "Performed image preprocessing and trained models using NumPy, OpenCV, Torch, and Ultralytics.",
            "Used CARLA simulation to analyze complex traffic behavior in autonomous vehicle systems."
        ],
        techStack: ["Python",
            "NumPy",
            "OpenCV",
            "Torch",
            "Ultralytics",
            "CARLA Simulator",
            "Machine Learning",
            "Computer Vision"],
    },
    {
        id: 3,
        from: "Mar 2023",
        to: "Aug 2023",
        title: "Internship – Software Developer",
        company: "John Deere",
        location: "Zweibrücken, Germany",
        description: [
            "Built UI screens and integrated controls for mechatronic subsystems.",
            "Implemented actuator control logic via machine CAN bus using Vector tools.",
            "Wrote developer-friendly documentation for non-technical users."
        ],
        techStack: ["C++", "CAN Bus", "Vector Tools", "UI Development", "Documentation"],
    },
    {
        id: 4,
        from: "Jun 2019",
        to: "Sep 2021",
        title: "Software Developer",
        company: "Nexcode InfoTech",
        location: "Gujarat, India",
        description: [
            "Developed and maintained responsive web pages using HTML, CSS, TypeScript, Angular, and Tailwind CSS.",
            "Built backend systems using Python and MongoDB",
            "Implemented and maintained RESTful APIs using FAST API framework.",
            "Created dynamic Angular components to improve functionality and UI experience.",
            "Worked with Postman and Git for testing and version control."
        ],
        techStack: [
            "Angular",
            "TypeScript",
            "Python",
            "MongoDB",
            "FAST API",
            "Tailwind CSS",
            "REST API",
            "Git",
            "HitHub",
            "Docker"
        ]
    }
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML", "JavaScript (ES6+)", "React.js", "TypeScript", "Angular 2+", "GSAP"],
    },
    {
        category: "Frameworks",
        items: ["FAST API", "Laravel", "Django"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS", "vite"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Python", "PHP", "C#"],
    },
    {
        category: "Database",
        items: ["MySQL", "MongoDB", "PostgresSQL", "Redis"],
    },
    {
        category: "Libraries",
        items: ["Pydantic", "NumPy", "Torch", "openCV", "Uvicorn", "Celery", "WebSockets"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "CI/CD Pipeline", "Agile Methodology"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Dharvipatel10",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/dharvi-patel10/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpeg",
    },
    {
        id: 2,
        img: "/images/gal2.jpeg",
    },
    {
        id: 3,
        img: "/images/gal3.jpeg",
    },
    {
        id: 4,
        img: "/images/gal5.jpeg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    myExperience,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "IntelliBot",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[7vh] left-12", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "IntelliBot.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "IntelliBot is a full-stack AI voice assistant that turns conversations into a real-time interactive experience.",
                        "It captures speech, processes it using ChatGPT, and responds with natural voice synthesis powered by ElevenLabs.",
                        "Rather than a traditional chatbot, it feels like talking to a smart digital companion.",
                        "Built with FastAPI and React, it showcases modern AI integration, RESTful architecture, and seamless voice interaction pipelines."
                    ],
                },
                {
                    id: 2,
                    name: "intelliBot.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Dharvipatel10/IntelliBot",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "IntelliBot.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-IntelliBot.JPG",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-70",
            windowPosition: "top-[20vh] left-5",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with React and Tailwind, and Puter.js so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://resumeanalayzer-aichatboat.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-70",
                    imageUrl: "/images/project-2.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Python Background Job Engine",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-60",
            windowPosition: "top-[33vh] left-2",
            children: [
                {
                    id: 1,
                    name: "Python Background Job Engine.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The FastAPI Background Job Engine is a compact, production-style backend prototype designed to demonstrate how modern systems handle asynchronous workloads.",
                        "Instead of blocking API requests during heavy processing, it instantly validates structured data and offloads tasks to background workers using Redis and RQ.",
                        "Think of it as a simplified version of how real AI platforms and automation systems process jobs behind the scenes.",
                        "Built with FastAPI, Pydantic, Redis, and RQ, it showcases scalable backend architecture, clean data validation, and non-blocking execution patterns."
                    ],
                },
                {
                    id: 2,
                    name: "python-background-job-processing.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Dharvipatel10/python-background-job-processing",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "python-background-job-processing.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-70",
                    imageUrl: "/images/Postmann_api.JPG",
                },
                {
                    id: 9,
                    name: "python-background-terminal.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-20",
                    imageUrl: "/images/terminal_ss.JPG",
                },
            ],
        },

        // ▶ Project 4
        {
            id: 8,
            name: "HustleHub",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-57 left-65", // icon position inside Finder
            windowPosition: "top-[48vh] left-13", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "HustleHub.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-10",
                    description: [
                        "HustleHub is a modern Job Portal built using Laravel (PHP) and React, created to manage job listings, applications, and administrative workflows efficiently.",
                        "It features a clean RESTful API architecture that separates frontend and backend for better scalability and maintainability.",
                        "The UI is built with React, TailwindCSS, and Vite—delivering smooth performance, responsive design, and a developer-friendly workflow.",
                        "Laravel powers authentication, authorization, database operations, and business logic using structured MVC principles.",
                        "Designed like a real-world hiring system, HustleHub combines performance, security, and scalability into one seamless platform.",
                    ],
                },
                {
                    id: 2,
                    name: "HustleHub.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Dharvipatel10/HustleHub",
                    position: "top-15 right-20",
                },
                {
                    id: 4,
                    name: "HustleHub.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-70",
                    // imageUrl: "/images/project-IntelliBot.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-7",
            imageUrl: "/images/Dharvi.JPG",
        },
        {
            id: 2,
            name: "traveller-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-20 right-30",
            imageUrl: "/images/Dharvi-2.jpg",
        },
        {
            id: 3,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-70",
            imageUrl: "/images/Dharvi-3.JPG",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/Dharvi.JPG",
            description: [
                "Hey! I’m Dharvi 👋, a Full Stack Software Developer currently pursuing my Master’s in Automotive Software Engineering in Germany.",
                "I build scalable web applications using JavaScript, TypeScript, React, Angular, PHP, and Python — combining clean frontend experiences with solid backend architecture.",
                "I enjoy designing REST APIs, working with databases like MySQL, PostgresSQL and MongoDB, and building systems that are structured, maintainable, and actually pleasant to use.",
                "Outside of coding, you’ll probably find me traveling, cooking something experimental, dancing, or reorganizing my workspace like it’s a production deployment 😅!"
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            href: "/images/Resume.pdf"
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-60",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };