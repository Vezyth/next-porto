"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="hidden max-md:block fixed top-4 left-4 z-40 rounded-lg p-2"
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          />

          {/* Sidebar */}
          <aside className="relative z-10 h-full w-80 max-w-[85vw] bg-background">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 rounded-lg p-2"
              aria-label="Close navigation"
            >
              <X size={24} />
            </button>

            <Sidebar />
          </aside>
        </div>
      )}
    </>
  );
}