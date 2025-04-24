'use client'

import React from "react";
import { ModeToggle } from "./mode-toggle";

import { ImGithub, ImTwitter } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { LINK } from "@/constants/links";
import { cn } from "@/lib/utils";

export const Actions = ({className}: {className?: string}) => {

  return (
    <div className={cn("flex items-center space-x-3 border py-[4px] pl-4 rounded-full w-fit", className)}>
      <Link target="_blank" href={LINK.linkedin}>
        <ImLinkedin className="size-5 text-foreground/70 hover:text-blue-700 dark:hover:text-blue-500 hover:cursor-pointer" />
      </Link>

      <Link target="_blank" href={LINK.github}>
        <ImGithub className="size-5 text-foreground/70 hover:text-blue-700 dark:hover:text-blue-500 hover:cursor-pointer" />
      </Link>

      <Link target="_blank" href={LINK.twitter}>
        <ImTwitter className="size-5 text-foreground/70 hover:text-blue-700 dark:hover:text-blue-500 hover:cursor-pointer" />
      </Link>

      <ModeToggle />
    </div>
  );
};
