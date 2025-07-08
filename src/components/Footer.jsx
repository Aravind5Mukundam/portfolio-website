import { ArrowUp, LucideSmile, Smile, SmileIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground flex">
        {" "}
        &copy; {new Date().getFullYear()} Happy Coding &nbsp;<span className="h-3 w-3 text-primary">{" "} <LucideSmile className="mt-1.5" size={15} /></span>
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};