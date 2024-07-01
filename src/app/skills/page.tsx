import { useMemo } from "react";
import { buttonVariants } from "~/components/ui/button";
import { skills } from "~/data/skills";
import FooterPage from "../footer/page";

export default function SkillsPage() {
  const listItems = useMemo(() => skills, []);

  return (
    <div className="container mt-20 sm:mt-60">
      <h1 className="text-center text-4xl font-bold mb-5">SKILLS</h1>
      <section className="flex flex-wrap justify-center gap-2 sm:mr-32 sm:ml-32 sm:mt-20">
        {listItems.map((skill) => (
          <ul
            key={skill}
            className={buttonVariants({
              className:
                "rounded-xl transition mt-1.5 ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-500",
            })}
          >
            <li>{skill}</li>
          </ul>
        ))}
      </section>
      <section className="p-10 mt-96 sm:mt-52">
        <FooterPage />
      </section>
    </div>
  );
}
