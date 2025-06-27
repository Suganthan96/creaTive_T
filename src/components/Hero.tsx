import { ArrowRight, ArrowLeft, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      slideTo(current + 1, 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  const slideTo = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent((idx + heroImages.length) % heroImages.length);
  };
  const goTo = (idx: number) => slideTo(idx, idx > current ? 1 : -1);
  const goPrev = () => slideTo(current - 1, -1);
  const goNext = () => slideTo(current + 1, 1);

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
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            initial={{ x: direction === 1 ? '100%' : '-100%', opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? '-100%' : '100%', opacity: 1 }}
            transition={{ x: { type: 'spring', stiffness: 400, damping: 40 }, opacity: { duration: 0.2 } }}
            style={{ zIndex: 1 }}
          />
        </AnimatePresence>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10" />
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 flex items-center justify-center"
          onClick={goPrev}
          aria-label="Previous slide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <ArrowLeft className="w-7 h-7 text-gray-700" />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 flex items-center justify-center"
          onClick={goNext}
          aria-label="Next slide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <ArrowRight className="w-7 h-7 text-gray-700" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-gray-500 w-5' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            />
          ))}
        </div>
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
