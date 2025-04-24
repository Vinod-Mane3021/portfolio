import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";


export const Logo = ({size = 35, className}: {size?: number, className?: string}) => {
  const myImage = "/images/logo.png";
  return (
      <Image
        src={myImage}
        alt="my photo"
        height={size}
        width={size}
        className={cn("rounded-full bg-background dark:bg-foreground/70", className)}
      />
  );
};
