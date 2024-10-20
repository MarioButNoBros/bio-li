import { Instagram, Linkedin, MessageCircleMore, Rocket, Telescope } from 'lucide-react';
import magc from "../assets/profile-pictures/magc.jpg";
import lmvg from "../assets/profile-pictures/lmvg.jpg";
import lrg from "../assets/profile-pictures/lrg.jpg";
import ccyg from "../assets/profile-pictures/ccyg.jpg";
import audio from "../assets/testimonio.mp4";

export const navItems = [
  { label: "Inicio", targetId: "init" },
  { label: "Historia", targetId: "history" },
  { label: "Misión", targetId: "mision" },
  { label: "Nosotros", targetId: "aboutUs" },
  { label: "Contacto", targetId: "contact" },
];

export const myv = [
  {
    label: "Misión",
    icon: <Rocket />,
    description: "Crear una moda que no solo sea estéticamente agradable, sino también consciente y responsable. Utilizamos el bagazo de caña de azúcar, un subproducto agrícola, para producir fibras textiles que disminuyen el impacto ambiental de la industria de la moda."
  },
  {
    label: "Visión",
    icon: <Telescope />,
    description: "Nuestra visión en BIO-LI es liderar una revolución en la industria de la moda mediante la creación de prendas sostenibles y de alta calidad, utilizando el bagazo de caña de azúcar como materia prima innovadora."
  },
];

export const aboutUs = [
  { name: "Lidia Villegas", profile: "Co-Founder & CEO", image: lmvg, description: "Estudiantes de Trabajo Social, líder con experiencias administrativas y coordinadora de grupos" },
  { name: "Liliana Ramos", profile: "Co-Founder & CEO", image: lrg, description: "Estudiante de Trabajo Social con conocimiento de trabajo en equipo y resolución de conflicto" },
  { name: "Mario Giraldo", profile: "Co-Founder & CTO", image: magc, description: "Estudiante de ingeniería de sistemas con conocimiento en desarrollo web y móvil" },

];

export const resourcesLinks = [
  { href: "https://www.instagram.com/biolitextil/", icon: <Instagram />, id: "instagram" },
  { href: "https://www.linkedin.com/in/bio-li-textil-a3b268321/", icon: <Linkedin />, id: "linkedin" },
  { href: "#", icon: <MessageCircleMore />, id: "whatsapp" }
];

export const tracks = [
  {
    url: audio,
    title: 'Testimonio Bio-Li',
    tags: ['']
  }
]