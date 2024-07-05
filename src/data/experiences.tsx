import { Keyboard, Linkedin, Palette, Settings } from "lucide-react";

export const experiences = [
  {
    icon: <Keyboard size={50} />,
    title: "Web Developer",
    year: "2022 - Present",
    description: "Building modern web using Next.js and TailwindCSS",
    skills: [
      {
        name: "Next.js",
        ability: "Competent",
        experience: "2 years",
      },
      { name: "Tailwindcss", ability: "Competent", experience: "2 years" },
      { name: "Node.js", ability: "Novice", experience: "1 years" },
      { name: "SQL", ability: "Novice", experience: "1 years" },
    ],
  },
  {
    icon: <Palette size={50} />,
    title: "Design Graphic",
    year: "2016 - Present",
    description:
      "Creating visual concepts that inspire, inform, and captivate consumers.",
    skills: [
      { name: "Adobe Photoshop", ability: "Expert", experience: "+5 years" },
      { name: "CorelDraw", ability: "Expert", experience: "4 years" },
      { name: "Adobe Illustrator", ability: "Expert", experience: "3 years" },
      { name: "Figma", ability: "Competent", experience: "1 years" },
      { name: "Adobe XD", ability: "Competent", experience: "1 years" },
    ],
  },
  {
    icon: <Settings size={50} />,
    title: "IT Support",
    year: "2014 - Present",
    description:
      "Installing, maintaining, and repairing various types of equipment and technical systems.",
    skills: [
      {
        name: "Instalation and Configuration",
        ability: "Expert",
        experience: "+5 years",
      },
      { name: "Data Recovery", ability: "Expert", experience: "+5 years" },
      { name: "Maintenance", ability: "Expert", experience: "+5 years" },
      { name: "Network Management", ability: "Expert", experience: "3 years" },
    ],
  },
];
