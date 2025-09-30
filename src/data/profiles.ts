import profile1 from "@/assets/profile1.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";
import profile4 from "@/assets/profile4.jpg";

export interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  distance: number;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Nuestro Primer Mes",
    age: 1,
    bio: "Cada día contigo es una aventura nueva. Gracias por llenar mi vida de sonrisas y hacer que cada momento sea especial. Te amo más de lo que las palabras pueden expresar. 💕",
    image: profile1,
    distance: 30,
  },
  {
    id: 2,
    name: "Momentos Inolvidables",
    age: 2,
    bio: "Dos meses y cada recuerdo es un tesoro. Desde nuestras risas hasta nuestros silencios cómplices, todo contigo es perfecto. Eres mi persona favorita. 🌟",
    image: profile2,
    distance: 60,
  },
  {
    id: 3,
    name: "Mi Razón de Ser",
    age: 3,
    bio: "Tres meses amándote y cada día me enamoro más. Eres la luz que ilumina mis días y la calma en mis noches. Contigo, todo tiene sentido. 💖",
    image: profile3,
    distance: 90,
  },
  {
    id: 4,
    name: "Para Siempre",
    age: 4,
    bio: "Cuatro meses juntos y siento que apenas comienza nuestra historia. Quiero seguir escribiendo capítulos contigo, crear más memorias y amarte cada día más. Eres mi hogar. 🏠💕",
    image: profile4,
    distance: 120,
  },
];
