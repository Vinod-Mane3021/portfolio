import { myImage1 } from "@/constants/images";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CustomTooltip } from "../custom-tooltip";

export const Hero = () => {
  
  return (
    <section className="w-full flex flex-col items-center mt-10">
      {/* profile */}
      <div className="border w-fit rounded-full p-4">
        <div className="border w-fit rounded-full p-2 shadow shadow-muted-foreground">
          <CustomTooltip label="Vinod Mane">
            <Image
              src={myImage1}
              alt="my photo"
              height={100}
              width={100}
              className="rounded-full"
            />
          </CustomTooltip>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-8 text-center max-w-2xl space-y-5 flex flex-col items-center ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="wave">👋</span> {"Hey, I'm "}
          <span className="">Vinod</span> !
        </h1>

        <p className="flex-col items-center text-xl md:text-xl font-semibold text-muted-foreground">
          <span className="flex items-center">
            Frontend <Dot /> MERN <Dot />
            Full-Stack
          </span>
          <span className="text-center">Developer</span>
        </p>

        <p className="text-lg md:text-lg text-muted-foreground/80 leading-relaxed">
          Crafting{" "}
          <span className="font-medium text-foreground/60">
            scalable, user-centric applications
          </span>{" "}
          with modern web technologies and
          <span className="font-medium text-foreground/60">
            {" "}
            clean architecture.
          </span>
        </p>
      </div>
    </section>
  );
};
