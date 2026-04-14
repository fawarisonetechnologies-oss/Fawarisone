"use client";

import { useState, useEffect } from "react";

const services = [
  "SEO Services",
  "PPC Advertising",
  "AI SEO Optimization",
  "Website Development",
  "Ecommerce Website Development",
  "Digital Marketing Services",
];

export default function AboutHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-hero">
      <h1>
        AI Digital Marketing Company in India
        <br />
        <span className="about-hero-rotating" style={{ opacity: fade ? 1 : 0 }}>
          {services[index]}
        </span>
      </h1>
      <p className="about-hero-p">
        Serving 16K+ Clients Worldwide, Scaling Brands with Data-Driven Growth.
        Fawarisone Technologies is a leading AI-powered digital marketing company in India, delivering SEO, performance marketing, PPC, and social media strategies to drive measurable online growth.
      </p>
      <a
        href="https://wa.me/919540003620"
        target="_blank"
        rel="noopener noreferrer"
        className="about-hero-btn"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}
