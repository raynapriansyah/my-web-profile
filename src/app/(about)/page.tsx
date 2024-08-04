import { Tooltip } from "@nextui-org/tooltip";
import { Download, Github, Instagram, Linkedin, Music2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col mt-20 justify-center gap-y-10 sm:mt-48 md:mt-48 lg:mt-48 xl:mt-48 2xl:mt-60">
      <section className="text-5xl font-bold flex items-center flex-col tracking-tight sm:text-6xl">
        <h1 className="text-center text-wrap">Hi! I&apos;m Ryan Apriansyah</h1>
        <h1 className="text-center text-wrap animate-fadeinup">
          This is My Web Profile
        </h1>
      </section>
      <section className="text-center text-xl animate-fadeinup">
        <h1>
          Frontend developer committed to crafting responsive and user friendly
          web applications.
        </h1>
      </section>
      <div className="gap-x-8 flex items-center justify-center animate-fadeinup">
        <Link
          href="https://drive.google.com/uc?export=download&id=1waly2ePpWQilSCilBl0iTJ3sEFkGxB_d"
          className={buttonVariants({ className: "rounded-2xl" })}
        >
          <Download size={20} className="mr-2" /> <b>Resume</b>
        </Link>
        <div className="flex gap-x-4">
          <Link
            href="https://github.com/raynapriansyah"
            className="transition mt-1.5 ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200"
          >
            <Tooltip showArrow={true} content="Github">
              <Github size={30} />
            </Tooltip>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ryan-apriansyah46/"
            className="transition mt-1.5 ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200"
          >
            <Tooltip showArrow={true} content="Linkedin">
              <Linkedin size={30} />
            </Tooltip>
          </Link>
          <Link
            href="https://www.instagram.com/ryanapriansyah_/"
            className="transition mt-1.5 ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200"
          >
            <Tooltip showArrow={true} content="Instagram">
              <Instagram size={30} />
            </Tooltip>
          </Link>
          <Link
            href="https://www.tiktok.com/@haysnairpanayr"
            className="transition mt-1.5 ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200"
          >
            <Tooltip showArrow={true} content="Tiktok">
              <Music2 size={28} strokeWidth={3} />
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
}
