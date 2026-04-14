"use client";

import { useState, useEffect } from "react";
import { Globe, FileText, ShoppingCart, Palette, Smartphone, Wind, Wrench, Code, Video, Film, Clapperboard, Sparkles, Pen, Share2, Play, TrendingUp, Search, BookOpen, Users, MousePointerClick, Mail, Megaphone, Star, BarChart2 } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import "./contact.css";

const allServices = [
  "Website Development", "Landing Pages", "eCommerce Solutions", "UI/UX Design",
  "Mobile App Development", "WordPress Development", "Website Maintenance", "Custom Web Applications",
  "Video Editing", "Corporate Videos", "Explainer Videos", "Motion Graphics",
  "Logo Animation", "Social Media Videos", "Brand Films", "Video Marketing",
  "SEO Optimization", "Content Marketing", "Social Media Management", "Pay Per Click (PPC)",
  "Email Marketing", "Online Branding", "Influencer Marketing", "Performance Marketing",
];

const serviceIcons: Record<string, React.ElementType> = {
  "Website Development": Globe,
  "Landing Pages": FileText,
  "eCommerce Solutions": ShoppingCart,
  "UI/UX Design": Palette,
  "Mobile App Development": Smartphone,
  "WordPress Development": Wind,
  "Website Maintenance": Wrench,
  "Custom Web Applications": Code,
  "Video Editing": Video,
  "Corporate Videos": Film,
  "Explainer Videos": Clapperboard,
  "Motion Graphics": Sparkles,
  "Logo Animation": Pen,
  "Social Media Videos": Share2,
  "Brand Films": Play,
  "Video Marketing": TrendingUp,
  "SEO Optimization": Search,
  "Content Marketing": BookOpen,
  "Social Media Management": Users,
  "Pay Per Click (PPC)": MousePointerClick,
  "Email Marketing": Mail,
  "Online Branding": Megaphone,
  "Influencer Marketing": Star,
  "Performance Marketing": BarChart2,
};

const rotatingServices = [
  "SEO Services",
  "PPC Advertising",
  "AI SEO Optimization",
  "Website Development",
  "Ecommerce Website Development",
  "Digital Marketing Services",
];

export default function ContactPage() {
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
    <div className="bg-black text-gray-100 min-h-screen">

      {/* HERO */}
      <section className="contact-hero">
        <h1>
          Let&apos;s Build Something Great Together
          <br />
          <span className="contact-hero-rotating" style={{ opacity: fade ? 1 : 0 }}>
            {rotatingServices[index]}
          </span>
        </h1>
        <p className="contact-hero-desc">
          Looking for professional SEO services, Google Ads PPC management,
          AI powered SEO, or modern website development? Fawarisone Technologies
          helps businesses grow with powerful digital solutions.
        </p>
        <a
          href="https://wa.me/919540003620"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-hero-btn"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* SERVICES SCROLLER */}
      <section className="contact-services-section">
        <div className="text-center">
          <h2 className="contact-services-heading">
            Our <span>Digital Services</span>
          </h2>
          <div className="contact-services-underline" />
        </div>
        <div className="overflow-hidden">
          <div className="scrolling-wrapper flex gap-4 w-max whitespace-nowrap px-4">
            <div className="flex gap-4">
              {allServices.map((s, i) => {
                const Icon = serviceIcons[s];
                return (
                  <div key={i} className="badge">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{s}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {allServices.map((s, i) => {
                const Icon = serviceIcons[s];
                return (
                  <div key={`dup-${i}`} className="badge">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{s}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0!2d77.3350072!3d28.5435736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5576023bdf7:0x24ead7f66b645053!2sfawarisone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="contact-map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* CONTACT FORM — shared component */}
      <ContactSection />

    </div>
  );
}
