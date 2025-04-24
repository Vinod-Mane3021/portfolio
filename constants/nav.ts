import {
  Home,
  User,
  NotebookText,
  FolderGit2,
  Mail,
  CodeXml,
} from "lucide-react";

export const navRoutes = [
  {
    id: "1",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "2",
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    id: "3",
    label: "Blog",
    href: "/blog",
    icon: NotebookText,
  },
  {
    id: "4",
    label: "Projects",
    href: "/projects",
    icon: FolderGit2,
  },
  {
    id: "5",
    label: "Tools",
    href: "/tools",
    icon: CodeXml,
  },
  {
    id: "6",
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];
