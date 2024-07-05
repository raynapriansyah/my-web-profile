import { Keyboard, Linkedin, Palette, Settings } from "lucide-react";

export const experiences = [
  {
    icon: <Keyboard size={50} />,
    title: "Frontend Developer",
    year: "2022 - Present",
    description: "Building modern web using Next.js and TailwindCSS",
    skills: [
      { name: "Next.js", ability: "Competent", experience: "3 years" },
      { name: "Tailwindcss", ability: "Competent", experience: "3 years" },
      { name: "Javascript", ability: "Competent", experience: "3 years" },
    ],
  },
  {
    icon: <Palette size={50} />,
    title: "Design Graphic",
    year: "2016 - Present",
    description:
      "Creating visual concepts that inspire, inform, and captivate consumers.",
    skills: [
      { name: "Adobe Photoshop", ability: "Expert", experience: "3 years" },
      { name: "Adobe Illustrator", ability: "Amateur", experience: "3 years" },
      { name: "CorelDraw", ability: "Expert", experience: "3 years" },
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
        name: "Hardware & Sofware Support",
        ability: "Expert",
        experience: "3 years",
      },
      { name: "", ability: "Amateur", experience: "3 years" },
      { name: "Javascript3", ability: "Expert", experience: "3 years" },
    ],
  },
];
