"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/9540003620" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
