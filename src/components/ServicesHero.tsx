"use client";

import { useState, useEffect } from "react";

const rotatingServices = [
  "SEO Optimization",
  "PPC Advertising",
  "Website Development",
  "Social Media Marketing",
  "eCommerce Solutions",
  "Performance Marketing",
];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingServices.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-hero" aria-label="Services Hero">
      <h1>
        Web Development & Digital Marketing Services
        <br />
        <span className="services-hero-rotating" style={{ opacity: fade ? 1 : 0 }}>
          {rotatingServices[index]}
        </span>
      </h1>
      <p>
        Fawarisone Technologies helps businesses grow online by doing marketing and making websites. They do lots of things like SEO and PPC. They also make websites and do social media marketing for businesses. Fawarisone Technologies gives businesses results that they can actually measure, which is really helpful, for Fawarisone Technologies clients. This is what Fawarisone Technologies does.
      </p>
      <a
        href="https://wa.me/919540003620"
        target="_blank"
        rel="noopener noreferrer"
        className="services-hero-btn"
      >
        Get Free Consultation
      </a>
    </section>
  );
}
