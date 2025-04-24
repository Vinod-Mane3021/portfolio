import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenuAltRight } from "react-icons/bi";
import { Logo } from "./logo";
import { Actions } from "./actions";
import { navRoutes } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const NavMobile = () => {
  const pathname = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger className="border border-muted-foreground/30 rounded-full p-1">
          <BiMenuAltRight className="size-6" />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader className="m-0 px-4">
            <SheetTitle className="text-muted-foreground">Explore</SheetTitle>
            <SheetDescription className="sr-only">
              This is nav side bar
            </SheetDescription>
          </SheetHeader>
          <div className="w-full px-2">
            {/* links */}
            <div className="flex w-full flex-col mt-10 space-y-5">
              {navRoutes.map((route) => (
                <Link key={route.id} href={route.href} className="w-full">
                  <Button
                    variant="link"
                    className={cn(
                      "w-full flex justify-start text-lg font-semibold text-muted-foreground hover:text-primary hover:cursor-pointer",
                      pathname == route.href && "text-primary"
                    )}
                  >
                    <route.icon className="mr-5 size-5" />
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <SheetFooter>
            {/* actions */}
            <div className="w-full flex items-center justify-between ">
              <Logo className="border" />
              <Actions className="py-[1px]" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
