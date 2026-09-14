import {
  User,
  BriefcaseBusiness,
  FolderGit2,
  Award,
  Mail,
} from "lucide-react";
const navItems = [
  {
    href: "#about",
    icon: User,
  },
  {
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    href: "#projects",
    icon: FolderGit2,
  },
  {
    href: "#certifications",
    icon: Award,
  },
  {
    href: "#contact",
    icon: Mail,
  },
];
export default function FloatingNav() {
  return (
    
    <nav className="fixed bottom-8 left-[calc(50%+160px)] flex -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 p-2 backdrop-blur-md max-md:left-1/2">
      {navItems.map((item) => {
  const Icon = item.icon;

  return (
    <a
      key={item.href}
      href={item.href}
      className="rounded-full p-3 transition hover:bg-zinc-800"
    >
      <Icon size={20} />
    </a>
  );
})}
    </nav>
  );
}