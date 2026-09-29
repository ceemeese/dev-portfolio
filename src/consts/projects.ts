import type { Project } from "../types/projectType";

export const PROJECTS: Project[] = [
    {
        title: "VoleApp",
        description: "Proyecto final de DAW. Plataforma full stack de reserva y gestión de pistas de pádel con Clean Architecture y DDD, dashboard de KPIs, precios dinámicos por climatología, Stripe, SendGrid y librería UI propia. Desplegado en Google Cloud.",
        images: ["voleapp-portada", "voleapp-buscador", "voleapp-calendario", "voleapp-ocupacion", "voleapp-simulador", "voleapp-analiticas", "voleapp-dashboard" ],
        technologies: ["Vue.js", "Typescript", ".NET", "MySQL", "Tailwind CSS", "Docker", "Vercel"],
        links: [
            { label: "Frontend", url: "https://github.com/ceemeese/voleapp-frontend" },
            { label: "Backend",  url: "https://github.com/ceemeese/voleapp-backend" },
            { label: "UI Lib",   url: "https://github.com/ceemeese/ui-library" },
            { label: "Demo", url: "https://www.vole-app.com/" },
            { label: "Wiki",     url: "https://github.com/ceemeese/voleapp-backend/wiki" },
        ]
    },
    {
        title: "PistaLibre App",
        description: "Aplicación web de asignatura Desarrollo Entorno Cliente para gestionar la reserva online de pistas de tenis y pádel. Permite a los usuarios consultar disponibilidad y realizar reservas fácilmente.",
        images: ["pistalibre"],
        technologies: ["Vue.js", "Node.js", "Pinia", "Vuetify"],
        links: [{ label: "Repo", url: "https://github.com/ceemeese/pistalibre" }]
    },
    {
        title: "RapidNotes",
        description: "Aplicación para crear y organizar notas rápidas tipo Post-it. Permite añadir, editar y eliminar notas fácilmente, ofreciendo una herramienta ligera y práctica para organizar información de manera rápida.",
        images: ["rapidnotes"],
        technologies: [".NET", "Javascript", "Swagger", "Docker"],
        links: [{ label: "Repo", url: "https://github.com/ceemeese/rapidnotes" }]
    },
    {
        title: "Portfolio personal",
        description: "Página web personal para mostrar proyectos, habilidades y experiencia. Incluye diseño minimalista y mobile first, con secciones claras de contacto y proyectos destacados. Una forma sencilla de presentarme y compartir mi trabajo.",
        images: ["portfolio"],
        technologies: ["Astro", "Tailwind CSS", "Vercel"],
        links: [{ label: "Repo", url: "https://github.com/ceemeese/dev-portfolio" }]
    },
    {
        title: "Gestor de juegos de mesa",
        description: "Aplicación de asignatura Entorno Desarrollo para administrar partidas de juegos de mesa con panel de control de administrador. Incluye testing, despliegue en AWS, CI/CD y Wiki del backend en Github.",
        images: ["boardgames"],
        technologies: ["Node.js", "Express.js", "MySQL", "Hoppscotch", "Jest", "AWS", "Docker", "Kubernetes"],
        links: [
            { label: "Repo", url: "https://github.com/ceemeese/boardgames" },
            { label: "Wiki", url: "https://github.com/ceemeese/boardgames/wiki" },
        ]
    },
    // {
    //     title: "Taqueria Landing Page",
    //     description: "Landing page responsive de una taquería ficticia, sencilla pero atractiva, con animaciones visuales y diseño cuidado para presentación del negocio. Proyecto de asignatura Lenguaje de Marcas.",
    //     images: ["taqueria"],
    //     technologies: ["HTML5", "CSS"],
    //     links: [
    //         { label: "Demo", url: "https://ceemeese.github.io/taqueria-landing/" },
    //         { label: "Repo", url: "https://github.com/ceemeese/taqueria-landing" },
    //     ]
    // },
    {
        title: "API cómics",
        description: "API RESTful para gestionar una colección de cómics, permitiendo realizar operaciones CRUD. Incluye autenticación JWT, colección en Hoppscotch y dockerizada. Proyecto para asignatura entorno desarrollo servidor.",
        images: ["comicmanagerapi"],
        technologies: [".NET", "Docker", "Hoppscotch", "MySQL"],
        links: [{ label: "Repo", url: "https://github.com/ceemeese/comic-manager-api" }]
    },
];
