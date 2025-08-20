import type { Project } from "../types/projectType";

export const PROJECTS: Project[] = [
    {
        title: "PistaLibre App",
        description: "Aplicación web de asignatura Desarrollo Entorno Cliente para gestionar la reserva online de pistas de tenis y pádel. Permite a los usuarios consultar disponibilidad y realizar reservas fácilmente.",
        image: "/images/pistalibre.png",
        technologies: ["Vue.js", "Node.js", "Pinia", "Vuetify"],
        url: "https://github.com/ceemeese/pistalibre"
    },
    {
        title: "RapidNotes",
        description: "Aplicación para crear y organizar notas rápidas tipo Post-it. Permite añadir, editar y eliminar notas fácilmente, ofreciendo una herramienta ligera y práctica para organizar información de manera rápida.",
        image: "/images/rapidnotes.png",
        technologies: ["C#", "Javascript", "Swagger", "Docker"],
        url: "https://github.com/ceemeese/rapidnotes"
    },
    {
        title: "Portfolio personal",
        description: "Página web personal para mostrar proyectos, habilidades y experiencia. Incluye diseño minimalista y mobile first, con secciones claras de contacto y proyectos destacados. Una forma sencilla de presentarme y compartir mi trabajo.",
        image: "/images/portfolio.png",
        technologies: ["Astro", "Tailwind CSS", "Vercel"],
        url: "https://github.com/ceemeese/portfolio-dev"
    },
    {
        title: "Gestor de juegos de mesa",
        description: "Aplicación de asignatura Entorno Desarrollo para administrar partidas de juegos de mesa con panel de control de administrador. Incluye testing, despliegue en AWS, CI/CD y Wiki del backend en Github.",
        image: "/images/boardgames.png",
        technologies: ["Node.js", "Express.js", "MySQL", "Hoppscotch", "Jest", "AWS", "Docker", "Grafana"],
        url: "https://github.com/ceemeese/boardgames"
    },
    {
        title: "Taqueria Landing Page",
        description: "Landing page responsive de una taquería ficticia, sencilla pero atractiva, con animaciones visuales y diseño cuidado para presentación del negocio. Proyecto de asignatura Lenguaje de Marcas.",
        image: "/images/taqueria.png",
        technologies: ["HTML5", "CSS"],
        url: "https://github.com/ceemeese/taqueria-landing"
    },
        {
        title: "API cómics",
        description: "API RESTful para gestionar una colección de cómics, permitiendo realizar operaciones CRUD. Incluye autenticación JWT, colección en Hoppscotch y dockerizada. Proyecto para asignatura entorno desarrollo servidor.",
        image: "/images/comicmanagerapi.png",
        technologies: ["C#", "Docker", "Hoppscotch", "MySQL"],
        url: "https://github.com/ceemeese/comic-manager-api"
    }
];
