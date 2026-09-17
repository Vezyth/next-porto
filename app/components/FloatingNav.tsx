"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  User,
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { href: "#about", icon: User },
  { href: "#projects", icon: FolderGit2 },
  { href: "#experience", icon: BriefcaseBusiness },
  { href: "#education", icon: GraduationCap },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("#about");
  const sectionData = useRef(new Map<string, { top: number; bottom: number; isIntersecting: boolean }>()).current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionData.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            top: entry.boundingClientRect.top,
            bottom: entry.boundingClientRect.bottom,
          });
        });

        const viewportHeight = window.innerHeight;
        const readingLine = viewportHeight * 0.3; // 30% down the screen

        let maxCoverage = 0;
        let fallbackId = "";
        let readingLineId = "";

        // 1. Gather current data for all sections
        navItems.forEach((item) => {
          const id = item.href.substring(1);
          const data = sectionData.get(id);

          if (data && data.isIntersecting) {
            // Calculate fallback coverage
            const visibleTop = Math.max(0, data.top);
            const visibleBottom = Math.min(viewportHeight, data.bottom);
            const coverage = visibleBottom - visibleTop;

            if (coverage > maxCoverage) {
              maxCoverage = coverage;
              fallbackId = id;
            }

            // Check if crossing the 30% reading line
            if (data.top <= readingLine && data.bottom > readingLine) {
              if (!readingLineId) readingLineId = id; // Only grab the highest one on the page
            }
          }
        });

        let newActiveId = "";
        
        const firstId = navItems[0].href.substring(1);
        const firstData = sectionData.get(firstId);
        
        const lastId = navItems[navItems.length - 1].href.substring(1);
        const lastData = sectionData.get(lastId);

        // 2. Evaluate using a strict hierarchy
        if (firstData && firstData.isIntersecting && firstData.top >= -50) {
          // Rule 1: Absolute top of page -> Force First item
          newActiveId = firstId;
        } else if (lastData && lastData.isIntersecting && lastData.top < viewportHeight * 0.65) {
          // Rule 2: Near bottom of page -> Force Last item
          // (If the top of Education enters the upper 65% of the screen, it takes over)
          newActiveId = lastId;
        } else if (readingLineId) {
          // Rule 3: Normal reading line
          newActiveId = readingLineId;
        } else if (fallbackId) {
          // Rule 4: Fallback coverage math
          newActiveId = fallbackId;
        }

        if (newActiveId) {
          setActiveSection(`#${newActiveId}`);
        }
      },
      {
        root: null,
        // Fire consistently as the user scrolls
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], 
      }
    );

    navItems.forEach((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionData]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-8 left-[calc(50%+160px)] flex -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 p-2 backdrop-blur-md max-md:left-1/2 z-50"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.href;

        return (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-3 transition-colors ${
              isActive
                ? "bg-zinc-100 text-zinc-950" 
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </motion.nav>
  );
}