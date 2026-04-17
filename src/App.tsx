/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Instagram, Linkedin, Maximize2, X } from "lucide-react";
import { useState } from "react";

// --- Types ---

type View = "HERO" | "PANELS" | "ADOBE" | "LOGO" | "PHOTOGRAPHY";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: "ADOBE" | "LOGO" | "PHOTOGRAPHY";
}

// --- Constants ---

const PROJECTS: GalleryItem[] = [
  // Adobe Creations (6 items)
  { id: "a1", title: "Visual Branding", description: "Comprehensive brand identity system using Adobe Illustrator and Photoshop.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/1.png?raw=true", category: "ADOBE" },
  { id: "a2", title: "Digital Collage", description: "Experimental surrealism created through intricate layer masking in Photoshop.", image: "https://github.com/aethmeaavnee-del/y/blob/main/4.png?raw=true", category: "ADOBE" },
  { id: "a3", title: "Marketing Campaign", description: "Social media kit designed for a modern lifestyle brand.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/6.png?raw=true", category: "ADOBE" },
  { id: "a4", title: "UI Mockup", description: "High-fidelity interface design for a travel app concept.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/8.png?raw=true", category: "ADOBE" },
  { id: "a5", title: "Print Media", description: "Poster design emphasizing typographic hierarchy and white space.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/5.png?raw=true", category: "ADOBE" },
  { id: "a6", title: "Motion Graphics", description: "Still frames from a conceptual motion design project.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/3.png?raw=true", category: "ADOBE" },

  // Logo Design (4 items)
  { id: "l1", title: "Minimalist Apex", description: "Geometric abstraction for a tech startup.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/1.jpg?raw=true", category: "LOGO" },
  { id: "l2", title: "Eco Leaf", description: "Organic mark for a sustainable fashion brand.", image: "https://github.com/aethmeaavnee-del/juuu/blob/main/2.jpg?raw=true", category: "LOGO" },
  { id: "l3", title: "Modern Slate", description: "Monochrome wordmark for an architecture firm.", image: "https://github.com/aethmeaavnee-del/myself/blob/main/5.jpeg?raw=true", category: "LOGO" },
  { id: "l4", title: "Modern Slate", description: "Monochrome wordmark for an architecture firm.", image: "https://github.com/aethmeaavnee-del/juuu/blob/main/4.png?raw=true", category: "LOGO" },

  // Photography (9 items)
  { id: "p1", title: "Golden Hour", image: "https://github.com/aethmeaavnee-del/myself/blob/main/1.JPG?raw=true", category: "PHOTOGRAPHY" },
  { id: "p2", title: "Urban Monologue", image: "https://github.com/aethmeaavnee-del/myself/blob/main/5.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p3", title: "Vibrant Shadows", image: "https://github.com/aethmeaavnee-del/myself/blob/main/10.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p4", title: "Minimal Horizon", image: "https://github.com/aethmeaavnee-del/myself/blob/main/12.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p5", title: "Textures of Time", image: "https://github.com/aethmeaavnee-del/myself/blob/main/6.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p6", title: "Ethereal Light", image: "https://github.com/aethmeaavnee-del/myself/blob/main/7.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p7", title: "Ethereal Light", image: "https://github.com/aethmeaavnee-del/bfd/blob/main/2.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p8", title: "Ethereal Light", image: "https://github.com/aethmeaavnee-del/bfd/blob/main/8.jpg?raw=true", category: "PHOTOGRAPHY" },
  { id: "p9", title: "Ethereal Light", image: "https://github.com/aethmeaavnee-del/rtgbh/blob/main/11.jpg?raw=true", category: "PHOTOGRAPHY" },
];

// --- Components ---

const Navbar = ({ onViewChange }: { onViewChange: (v: View) => void }) => (
  <nav className="fixed top-0 left-0 w-full z-40 px-6 md:px-[60px] h-[80px] flex items-center justify-between border-b border-brand-border bg-brand-bg pointer-events-none">
    <div 
      className="logo text-xl font-serif tracking-widest cursor-pointer pointer-events-auto hover:text-brand-accent transition-colors"
      onClick={() => onViewChange("HERO")}
    >
      PORTFOLIO
    </div>
    
    <div className="flex items-center gap-8 pointer-events-auto">
      <div className="nav-links hidden md:flex gap-[30px] items-center text-sm tracking-widest">
        <button onClick={() => onViewChange("HERO")} className="cursor-pointer hover:text-brand-accent transition-colors">About</button>
        <button onClick={() => onViewChange("ADOBE")} className="cursor-pointer hover:text-brand-accent transition-colors">Adobe Work</button>
        <button onClick={() => onViewChange("LOGO")} className="cursor-pointer hover:text-brand-accent transition-colors">Logo Design</button>
        <button onClick={() => onViewChange("PHOTOGRAPHY")} className="cursor-pointer hover:text-brand-accent transition-colors">Photography</button>
      </div>
      <button 
        className="theme-btn-contact"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      >
        Contact Me
      </button>
    </div>
  </nav>
);

const FullscreenImage = ({ src, onClose }: { src: string | null, onClose: () => void }) => (
  <AnimatePresence>
    {src && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
        onClick={onClose}
      >
        <button className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors">
          <X size={32} />
        </button>
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={src} 
          alt="Fullscreen"
          className="max-w-full max-h-full object-contain shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

const Foot = () => (
  <footer className="w-full py-10 px-6 md:px-[60px] border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] uppercase tracking-widest opacity-70 mt-auto">
    <div className="flex gap-6">
      <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
        Instagram
      </a>
      <span className="opacity-30">/</span>
      <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
        LinkedIn
      </a>
    </div>
    <p>&copy; 2026 Avnee Aethmea. All rights reserved.</p>
  </footer>
);

export default function App() {
  const [view, setView] = useState<View>("HERO");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  const renderView = () => {
    switch (view) {
      case "HERO":
        return (
          <motion.section 
            key="hero"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-[140px] pb-[60px] px-6 md:px-[60px] max-w-7xl mx-auto gap-[60px]"
          >
            <div className="hero-image w-full md:w-1/2 h-[550px] relative overflow-hidden bg-[#EBD9DB] border border-brand-border flex items-center justify-center">
              <img 
                src="https://github.com/aethmeaavnee-del/myself/blob/main/mmeeeeeeeeeeee.jpeg?raw=true" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="hero-text w-full md:w-1.2 flex flex-col items-start">
              <h1 className="text-[64px] leading-[1.1] mb-[10px] font-normal">
                Avnee Aethmea
              </h1>
              <h2 className="text-[18px] font-medium text-brand-muted mb-6 tracking-[0.5px]">
                BA in Graphic Design and Digital Media Marketing
              </h2>
              
              <p className="text-[16px] leading-[1.6] mb-10 max-w-[480px]">
                Hey! I am Avnee Aethmea, currently pursuing my studies from Manipal Institute of Communication, MAHE. My Skills are working with Adobe tools and photography, etc.
              </p>
              
              <button 
                onClick={() => setView("PANELS")}
                className="theme-btn-primary"
              >
                View My Work
              </button>
            </div>
          </motion.section>
        );

      case "PANELS":
        return (
          <motion.section 
            key="panels"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-[140px] pb-[60px] px-6 md:px-[60px] max-w-7xl mx-auto flex flex-col justify-center gap-[30px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { title: "Adobe Creations", target: "ADOBE" },
                { title: "Logo Design", target: "LOGO" },
                { title: "Photography", target: "PHOTOGRAPHY" },
              ].map((item) => (
                <div 
                  key={item.target}
                  className="theme-panel h-[500px] flex flex-col items-center justify-center p-10 text-center cursor-pointer group"
                  onClick={() => setView(item.target as View)}
                >
                  <h3 className="text-[28px] font-serif mb-5 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[1px] bg-brand-primary mb-10"></div>
                  <div className="text-[12px] uppercase tracking-[2px] border-b border-brand-primary pb-1 group-hover:bg-brand-primary group-hover:text-brand-bg transition-all">
                    View More
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setView("HERO")}
              className="back-arrow flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold opacity-70 hover:opacity-100 transition-opacity mt-8"
            >
              <ArrowLeft size={16} /> BACK TO INTRO
            </button>
          </motion.section>
        );

      default:
        const currentCategory = PROJECTS.filter(p => p.category === view);
        return (
          <motion.section 
            key={view}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-[140px] pb-[60px] px-6 md:px-[60px] max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 mb-10">
              <h2 className="text-[32px] font-serif">
                {view.charAt(0) + view.slice(1).toLowerCase().replace("_", " ")}
              </h2>
              <button 
                onClick={() => setView("PANELS")}
                className="text-[13px] uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                Close Grid [x]
              </button>
            </div>

            <div className={`grid gap-[30px] w-full ${view === 'LOGO' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
              {currentCategory.map((item) => (
                <motion.div 
                  key={item.id}
                  className="theme-grid-item group"
                >
                  <div 
                    className="relative overflow-hidden cursor-zoom-in aspect-[4/3] bg-[#f3f3f3] mb-[15px]"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[18px] font-serif">{item.title}</h4>
                    {item.description && (
                      <p className="text-[13px] text-brand-muted leading-relaxed font-light">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 py-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-[24px] font-serif max-w-md text-center md:text-left">
                Let’s create something meaningful together.
              </div>
              <button 
                className="theme-btn-contact"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                Contact Me
              </button>
            </div>
          </motion.section>
        );
    }
  };

  return (
    <div className="page-container relative selection:bg-brand-accent selection:text-white">
      <Navbar onViewChange={setView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      <Foot />
      
      <FullscreenImage 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
