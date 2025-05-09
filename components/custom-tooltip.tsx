import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const CustomTooltip = ({
  children,
  label,
  variant = "default",
}: {
  children: ReactNode;
  label: string;
  variant?: "default" | "outline"
}) => {

  const variantClassName = variant == "outline" ? "border border-border bg-background text-foreground" : "bg-primary text-background "

  return (
    <TooltipProvider   >
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={cn("max-w-[100vw] z-50 opacity-80", variantClassName)}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};



