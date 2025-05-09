import { iconsList } from "@/constants/icons";
import { cn } from "@/lib/utils";

const TechStack = () => {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl h-24 ">
        <div className="absolute left-0 bottom-0 w-24 h-full z-10 bg-gradient-to-r from-background_soft  to-transparent pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-24 h-full z-10 bg-gradient-to-l from-background_soft  to-transparent  pointer-events-none" />
        <div className="marquee h-full">
          <div className="marquee-box flex gap-8 px-4">
            {iconsList.concat(iconsList).map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {iconsList.concat(iconsList).map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {iconsList.concat(iconsList).map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;


const TechIcon = ({ icon }: any) => {
  return (
    <div 
      className={cn(
        "flex-none p-4 bg-black-300 flex-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-700",
      )}>
      <img src={icon.image} alt={icon.name} className="md:size-10 size-10" />
    </div>
  );
};






