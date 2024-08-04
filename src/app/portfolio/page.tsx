import { useMemo } from "react";
import { portfolio } from "~/data/portfolio";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function PortfolioPage() {
  const portfolioItems = useMemo(() => portfolio, []);

  return (
    <div className="container mt-20 md:mt-36 lg:mt-44 xl:mt-60 2xl:mt-60">
      <h1 className="text-center text-4xl font-bold mb-5">MY PORTFOLIO</h1>
      <section className="flex flex-wrap justify-center gap-5 animate-fadeinup">
        {portfolioItems.map((item, index) => (
          <Card
            key={item.title + index}
            className="border-violet-400 max-w-[300px]"
          >
            <CardHeader>{item.image}</CardHeader>
            <div className="container">
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <CardFooter className="flex justify-center items-center gap-12 py-4">
              <section className="hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200">
                {item.code}
              </section>
              <section className="hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200">
                {item.demo}
              </section>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
