import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { experiences } from "~/data/experiences";
import FooterPage from "../footer/page";

export default function ExperiencePage() {
  const memoizedItems = useMemo(() => experiences, []);

  return (
    <div className="container mt-20 md:mt-36 lg:mt-44 xl:mt-60 2xl:mt-60">
      <h1 className="text-center text-4xl font-bold mb-5">EXPERIENCE</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {memoizedItems.map((item, index) => (
          <Card key={item.title + index}>
            <CardHeader>
              <CardTitle className="flex flex-col">
                {item.icon} {item.title} | {item.year}
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-sm">{item.description}</CardContent>
          </Card>
        ))}
      </div>
      <section className="p-10 mt-20 sm:mt-44">
        <FooterPage />
      </section>
    </div>
  );
}
