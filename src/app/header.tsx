import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Header() {
  return (
    <header className="flex justify-between container py-6">
      <nav className="gap-x-6 font-bold flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col *:hover:scale-100 h-10"
          >
            {item.name}
            <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-primary" />
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
