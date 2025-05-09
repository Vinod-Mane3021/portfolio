import { myImage2 } from "@/constants/images";
import Image from "next/image";
import React, { ReactNode } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WaveBackground } from "../wave-background";
import TechStack from "../tech-stack";

export const About = () => {
  return (
    <section id="about" className="mt-20 w-full flex flex-col items-center font-sans">
      <p className="text-blue-600 text-sm font-medium">About</p>
      <h1 className="text-center font-medium text-3xl max-w-lg">
        Here's what sets me apart and makes me unique
      </h1>

      <div className="flex w-full mt-10 gap-x-2 h-auto">
        <div className="w-[40%] gap-y-2">
          {/* about me */}
          
          <LinkWrapper href="/about">
            <>
              <div>
                <p className="font-medium ">Learn more about me</p>
                <p className="text-muted-foreground mt-5">Good afternoon!</p>
                <p className="text-muted-foreground max-w-[300px]">
                  {"I'am Vinod, a full stack web app developer."}
                </p>
              </div>
              <div className="h-32 ">
                <div className="h-full w-[150px] absolute border border-primary/20 p-2 rounded-xl group-hover:border-blue-500">
                  <div className="bg-primary/10 w-full h-full rounded-lg shadow-sm rotate-180"></div>
                </div>
                <Image
                  src={myImage2}
                  alt="my photo"
                  height={160}
                  width={160}
                  className="rounded-xl object-cover group absolute rotate-12 group-hover:rotate-6 duration-500 group-hover:scale-105"
                />
              </div>
            </>
          </LinkWrapper>

           
          {/* tools */}
          <LinkWrapper href="/tools" className="mt-2">
            <div className="w-full">
              <div className=" mb-5">
                <h2 className="text-base text-center font-semibold">Tools</h2>
                <p className="text-base text-center text-muted-foreground">Checkout my skills and tools</p>
              </div>
              <TechStack />
            </div>
          </LinkWrapper>

        </div>

        <div className="w-[120%]">
            <LinkWrapper href="/tools" className="w-full h-[456px]">
            <div className="w-full  ">
              <WaveBackground />
            </div>
              {/* <p>Vinod</p> */}
            </LinkWrapper>
        </div>


      </div>
    </section>
  );
};

const LinkWrapper = ({ children, className, href }: { children: ReactNode, className?: string, href: string }) => {
  return (
    <Link href={href} className="w-full">
        <div className={cn(
            "h-56 group w-full overflow-hidden hover:cursor-pointer relative flex border border-primary/20 rounded-2xl p-5 hover:bg-background hover:bg-gradient-to-tl from-blue-600/20 via-background to-background",
            className
        )}>
        {children}
        <RxArrowTopRight style={{zIndex: 999}} className="duration-200 absolute bottom-7 right-5 text-blue-600 bg-blue-200 p-1 size-8 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out" />
        </div>
    </Link>
  );
};





