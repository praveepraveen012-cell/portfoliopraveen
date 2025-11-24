import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-darker border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Praveen.A. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>by Praveen</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
