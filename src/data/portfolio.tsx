import Image from "next/image";
import Link from "next/link";
import Thumbnail_1 from "/public/image/thumbnail-01.png";
import Thumbnail_2 from "/public/image/thumbnail-02.png";
import Thumbnail_3 from "/public/image/thumbnail-03.png";
import { Eye, Github } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export const portfolio = [
  {
    title: "Luke Skywalker",
    image: (
      <Image className="w-full rounded-sm" src={Thumbnail_1} alt="thumbnail" />
    ),

    description:
      "Front-End Dev Technical Test || Using Nextjs, TailwindCSS, Shadcn/ui",
    code: (
      <Link
        href="https://github.com/raynapriansyah/luke-skywalker"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Github /> Code
        </section>
      </Link>
    ),
    demo: (
      <Link
        href="luke-skywalker.vercel.app"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Eye /> Preview
        </section>
      </Link>
    ),
  },

  {
    title: "MT. AT-TA'AWUN",
    image: (
      <Image className="w-full rounded-sm" src={Thumbnail_2} alt="thumbnail" />
    ),

    description: "Project Majelis Ta'lim at-ta'awun web profile #onprogress",
    code: (
      <Link
        href="https://github.com/raynapriansyah/web-mt-attaawun"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Github /> Code
        </section>
      </Link>
    ),
    demo: (
      <Link
        href="https://mt-attaawun.vercel.app"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Eye /> Preview
        </section>
      </Link>
    ),
  },
  {
    title: "Coffee Section",
    image: (
      <Image className="w-full rounded-sm" src={Thumbnail_3} alt="thumbnail" />
    ),

    description:
      "Template Website Coffee Shop || Nextjs, TailwindCSS, Shadcn/ui",
    code: (
      <Link
        href="https://github.com/raynapriansyah/coffee-shop"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Github /> Code
        </section>
      </Link>
    ),
    demo: (
      <Link
        href="https://coffee-section.vercel.app"
        className={buttonVariants({ className: "rounded-2xl" })}
      >
        <section className="flex items-center gap-2">
          <Eye /> Preview
        </section>
      </Link>
    ),
  },
];
