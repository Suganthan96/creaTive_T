import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const heroImages = [
  "/uploads/4187f423-ba69-4043-be76-c43098488348.png",
  "/uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png",
  "/uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
];

const Hero = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding background images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionProperty: 'opacity' }}
            draggable={false}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
          <motion.h1 className="banner-title text-white" variants={itemVariants}>The Future of Smart Textile Technology is here.</motion.h1>
          <motion.p className="banner-subtitle text-white/80 mt-6 mb-10" variants={itemVariants}>
            We integrate AI-powered textile sensors into clothing, footwear, and wearables.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="px-8 py-4 text-lg font-semibold" onClick={() => window.scrollTo(0, document.getElementById('projects')?.offsetTop || 0)}>
              Explore Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="px-8 py-4 text-lg font-semibold bg-gray-700 hover:bg-gray-800" onClick={() => window.location.href = '/contact'}>
              Contact Us <MessageSquare className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default Hero;
