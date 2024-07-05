import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { experiences } from "~/data/experiences";
import FooterPage from "../footer/page";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";

export default function ExperiencePage() {
  const memoizedItems = useMemo(() => experiences, []);

  return (
    <div className="container mt-20 md:mt-36 lg:mt-44 xl:mt-60 2xl:mt-60">
      <h1 className="text-center text-4xl font-bold mb-5">EXPERIENCE</h1>
      <div className="flex flex-wrap justify-center gap-5 animate-fadeinup">
        {memoizedItems.map((item, index) => (
          <Card key={item.title + index} className="border-violet-400">
            <CardHeader>
              <CardTitle className="flex flex-col">
                {item.icon} {item.title} | {item.year}
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-sm">{item.description}</CardContent>
            <section className="flex justify-center p-1 transition ease-in-out delay-50 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-200">
              <Dialog>
                <DialogTrigger>
                  <Button>Readmore</Button>
                </DialogTrigger>
                <DialogContent>
                  <Command>
                    <CommandList>
                      <CommandGroup heading="SKILLS">
                        {item.skills.map((skill, index) => (
                          <CommandItem key={index}>
                            <div className="flex w-full items-center justify-between">
                              <div>{skill.name}</div>
                              <div>{skill.ability}</div>
                              <div>{skill.experience}</div>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>
            </section>
          </Card>
        ))}
      </div>
      <FooterPage />
    </div>
  );
}
