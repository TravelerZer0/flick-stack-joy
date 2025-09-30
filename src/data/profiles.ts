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
    name: "Sofia",
    age: 24,
    bio: "Amante del café y las aventuras. Buscando alguien con quien explorar la ciudad 🌆",
    image: profile1,
    distance: 2,
  },
  {
    id: 2,
    name: "Carlos",
    age: 27,
    bio: "Fotógrafo freelance. Me encanta viajar y capturar momentos únicos 📸",
    image: profile2,
    distance: 5,
  },
  {
    id: 3,
    name: "Marina",
    age: 26,
    bio: "Arquitecta por día, bailarina por noche. La música es mi vida 🎵",
    image: profile3,
    distance: 3,
  },
  {
    id: 4,
    name: "Diego",
    age: 25,
    bio: "Chef aficionado. Si cocinar juntos suena bien, desliza a la derecha 👨‍🍳",
    image: profile4,
    distance: 4,
  },
];
