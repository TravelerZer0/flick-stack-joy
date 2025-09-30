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
    name: "El Día Que Todo Comenzó",
    age: 1,
    bio: "Recuerdo ese primer día como si fuera ayer. La forma en que nuestras miradas se encontraron, cómo el tiempo pareció detenerse por un instante. Desde ese momento supe que eras especial, que contigo todo sería diferente. Cada sonrisa tuya ilumina mi mundo, cada palabra tuya se queda grabada en mi corazón. Gracias por elegirme, por confiar en mí, por construir esto tan hermoso juntos. Este es solo el comienzo de una historia que quiero escribir contigo para siempre. Te amo con cada latido de mi corazón. 💕✨",
    image: profile1,
    distance: 30,
  },
  {
    id: 2,
    name: "Nuestros Pequeños Momentos",
    age: 2,
    bio: "Son las pequeñas cosas las que más atesoro. Tus mensajes de buenos días que hacen que despierte sonriendo, las conversaciones que se alargan hasta la madrugada, la forma en que me entiendes sin necesidad de palabras. Contigo he aprendido que el amor está en los detalles, en las risas compartidas, en el silencio cómodo, en saber que estás ahí incluso cuando estamos lejos. Cada momento a tu lado es un regalo que guardo en mi corazón. 🌟💖",
    image: profile2,
    distance: 60,
  },
  {
    id: 3,
    name: "Mi Refugio, Mi Paz",
    age: 3,
    bio: "En este mundo caótico, encontrarte fue como hallar un oasis en medio del desierto. Eres mi refugio cuando todo se vuelve difícil, mi luz cuando la oscuridad me rodea, mi calma cuando la tormenta arrecia. Tu abrazo es mi lugar favorito en el mundo, tu voz es la melodía más hermosa que conozco. Gracias por ser mi paz, mi hogar, mi todo. Contigo he descubierto lo que significa amar de verdad, sin condiciones, sin miedo, solo con el corazón abierto y lleno de esperanza. Te amo más de lo que jamás podré expresar con palabras. 💖🌙",
    image: profile3,
    distance: 90,
  },
  {
    id: 4,
    name: "Un Futuro Juntos",
    age: 4,
    bio: "Cuando pienso en el futuro, solo puedo verte a ti a mi lado. Sueño con todas las aventuras que viviremos, los lugares que conoceremos, las memorias que crearemos. Quiero despertar cada mañana sabiendo que eres mío y que yo soy tuyo. Quiero envejecer contigo, ver cómo nuestra historia se convierte en leyenda, cómo nuestro amor se fortalece con cada desafío superado. No importa qué nos depare el destino, mientras estemos juntos, todo estará bien. Porque tú eres mi hogar, mi familia, mi amor eterno. Gracias por existir, por amarme, por ser la persona más maravillosa que he conocido. Este es nuestro tiempo, y quiero vivirlo completamente contigo. Te amo hoy, mañana y siempre. 🏠💕✨🌹",
    image: profile4,
    distance: 120,
  },
];
