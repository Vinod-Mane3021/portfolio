"use client"

import { useIsMobile } from "@/hooks/use-is-mobile";
import { Actions } from "./actions";
import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
  const isMobile = useIsMobile(750)
  return (
    <div className="flex w-full items-end justify-between py-3 sticky top-0 backdrop-blur-xl">
      <span className="w-32"><Logo /></span>
      <Nav />
      {!isMobile && <Actions />}
    </div>
  );
};
