"use client";

import { useState, useEffect } from "react";
import { TrendingUp, MousePointerClick, Code, Megaphone, ArrowUpRight, ShoppingBag, Stethoscope, Banknote, GraduationCap, Cloud, Home as HomeIcon, ConciergeBell, Car, Brush, Wind, Zap, Atom, Layers, Server, Database, Flame } from "lucide-react";
import "./services.css";

const rotatingServices = [
  "SEO Optimization",
  "PPC Advertising",
  "Website Development",
  "Social Media Marketing",
  "eCommerce Solutions",
  "Performance Marketing",
];

const services = [
  {
    category: "Marketing",
    color: "#00bfff",
    icon: TrendingUp,
    items: [
      { label: "Best SEO Company", slug: "seo-company" },
      { label: "SEO Services", slug: "seo-services" },
      { label: "Local SEO", slug: "local-seo" },
      { label: "Ecommerce SEO", slug: "ecommerce-seo" },
      { label: "Amazon SEO", slug: "amazon-seo" },
      { label: "Apps Marketing", slug: "app-marketing" },
      { label: "Organic Social", slug: "organic-social-media" },
      { label: "Social Media Marketing", slug: "social-media-marketing" },
      { label: "UI/UX Design", slug: "ui-ux-design" },
      { label: "Website Design", slug: "website-design" },
      { label: "Responsive Design", slug: "responsive-design" },
      { label: "Website Redesign", slug: "website-redesign" },
      { label: "Mobile Apps", slug: "mobile-apps" },
      { label: "Android Apps", slug: "android-app-development" },
    ],
    subCategory: null,
  },
  {
    category: "Paid Advertising",
    color: "#f59e0b",
    icon: MousePointerClick,
    items: [
      { label: "PPC Ads", slug: "ppc-ads" },
      { label: "Meta Ads", slug: "meta-ads" },
      { label: "Instagram Ads", slug: "instagram-ads" },
      { label: "Ecommerce PPC", slug: "ecommerce-ppc" },
      { label: "Bing Ads", slug: "bing-ads" },
      { label: "Conversion Optimization", slug: "conversion-optimization" },
      { label: "Marketplace", slug: "marketplace-services" },
      { label: "Amazon Marketing", slug: "amazon-marketing" },
    ],
    subCategory: null,
  },
  {
    category: "Development",
    color: "#8b5cf6",
    icon: Code,
    items: [
      { label: "Web Development", slug: "web-development" },
      { label: "WordPress", slug: "wordpress-development" },
      { label: "PHP", slug: "php-development" },
      { label: "CMS", slug: "cms-development" },
      { label: "Shopify", slug: "shopify-development" },
      { label: "Magento", slug: "magento-development" },
      { label: "Asp .Net", slug: "aspnet-development" },
      { label: "Laravel", slug: "laravel-development" },
    ],
    subCategory: null,
  },
  {
    category: "Branding",
    color: "#f97316",
    icon: Megaphone,
    items: [
      { label: "Brand Management", slug: "brand-management" },
      { label: "Logo Design", slug: "logo-design" },
      { label: "Packaging Design", slug: "packaging-design" },
      { label: "Brand Identity", slug: "brand-identity" },
      { label: "Graphic Design", slug: "graphic-design" },
      { label: "Brand Guidelines", slug: "brand-guidelines" },
    ],
    subCategory: {
      name: "Content Writing",
      items: [
        { label: "SEO Content Writing", slug: "seo-content-writing" },
        { label: "Blog Writing", slug: "blog-writing" },
        { label: "Website Copywriting", slug: "website-copywriting" },
        { label: "Product Descriptions", slug: "product-descriptions" },
        { label: "Social Media Content", slug: "social-media-content" },
        { label: "Press Release", slug: "press-release" },
      ],
    },
  },
];

const technologies = [
  { name: "HTML5", icon: Code },
  { name: "CSS3", icon: Brush },
  { name: "Tailwind", icon: Wind },
  { name: "JavaScript", icon: Zap },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Flame },
];

const whyUs = [
  {
    stat: "16K+",
    title: "Clients Served",
    description: "Trusted by startups, SMBs, and enterprises across India and worldwide.",
  },
  {
    stat: "10+",
    title: "Years Experience",
    description: "A decade of expertise in digital marketing, SEO, and web development.",
  },
  {
    stat: "5M+",
    title: "Keywords Ranked",
    description: "Proven track record of ranking keywords on Google's first page.",
  },
  {
    stat: "98%",
    title: "Client Satisfaction",
    description: "We deliver results that exceed expectations every single time.",
  },
];

export default function ServicesPage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const faqData = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a full range of services including SEO, PPC advertising, social media marketing, website development, eCommerce development, content marketing, performance marketing, UI/UX design, and branding.",
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO typically shows measurable results within 3–6 months. However, this depends on your industry, competition, and current website status. We provide monthly reports to track progress.",
    },
    {
      question: "Do you build mobile-friendly websites?",
      answer: "Absolutely. All websites we build are fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience across all screen sizes.",
    },
    {
      question: "How much does website development cost?",
      answer: "Website development costs vary based on complexity, features, and design requirements. We offer customized packages for startups, SMBs, and enterprises. Contact us for a free quote.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer ongoing maintenance, updates, SEO monitoring, and marketing support plans to ensure your website and campaigns continue to perform at their best.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialize in website redesigns. We transform outdated websites into modern, fast, SEO-friendly, and high-converting digital experiences.",
    },
  ];

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

      {/* HERO SECTION */}
      <section className="services-hero" aria-label="Services Hero">
        <h1>
          Digital Marketing & Web Development Services
          <br />
          <span
            className="services-hero-rotating"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {rotatingServices[index]}
          </span>
        </h1>
        <p>
          Fawarisone Technologies offers end-to-end digital marketing and web development
          services to help businesses grow online. From SEO and PPC to website development
          and social media marketing — we deliver measurable results.
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

      {/* SERVICES GRID SECTION */}
      <section className="services-grid-section" aria-label="Our Digital Services">
        <div className="services-grid-header">
          <h2>Our <span style={{ color: '#00bfff' }}>Digital Services</span></h2>
          <div className="services-grid-underline" />
          <p>
            We provide a complete suite of digital marketing and web development services
            designed to grow your business, increase visibility, and maximize ROI.
          </p>
        </div>
        <div className="services-grid">
          {services.map((cat, i) => (
            <div
              key={i}
              className="services-card"
              style={{ ['--accent' as string]: cat.color }}
            >
              <h2 className="services-card-category" style={{ color: cat.color }}>
                <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                  <cat.icon size={16} style={{ color: cat.color }} />
                </span>
                {cat.category}
              </h2>
              <div className="services-card-tags">
                {cat.items.map((item, j) => (
                  <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                    <h3 className="services-card-tag-text">{item.label}</h3>
                    <ArrowUpRight size={11} className="services-card-tag-icon" />
                  </a>
                ))}
              </div>
              {cat.subCategory && (
                <>
                  <div className="services-card-sub-divider" />
                  <h2 className="services-card-sub-title" style={{ color: cat.color }}>
                    <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                      <Megaphone size={16} style={{ color: cat.color }} />
                    </span>
                    {cat.subCategory.name}
                  </h2>
                  <div className="services-card-tags">
                    {cat.subCategory.items.map((item, j) => (
                      <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                        <h3 className="services-card-tag-text">{item.label}</h3>
                        <ArrowUpRight size={11} className="services-card-tag-icon" />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="services-industries">
        <div className="services-industries-inner">
          <h2 className="services-industries-heading">
            Industries We Empower with{" "}
            <span>Web Solutions</span>
          </h2>
          <div className="services-industries-underline" />
          <p className="services-industries-desc">
            From custom websites to full-scale platforms, we build digital experiences tailored to your industry&apos;s needs.
          </p>
          <div className="services-industries-grid">
            <div className="services-industry-card">
              <ShoppingBag className="services-industry-icon" />
              <p>E-commerce</p>
            </div>
            <div className="services-industry-card">
              <Stethoscope className="services-industry-icon" />
              <p>Healthcare</p>
            </div>
            <div className="services-industry-card">
              <Banknote className="services-industry-icon" />
              <p>Finance</p>
            </div>
            <div className="services-industry-card">
              <GraduationCap className="services-industry-icon" />
              <p>Education</p>
            </div>
            <div className="services-industry-card">
              <Cloud className="services-industry-icon" />
              <p>Tech &amp; SaaS</p>
            </div>
            <div className="services-industry-card">
              <HomeIcon className="services-industry-icon" />
              <p>Real Estate</p>
            </div>
            <div className="services-industry-card">
              <ConciergeBell className="services-industry-icon" />
              <p>Hospitality</p>
            </div>
            <div className="services-industry-card">
              <Car className="services-industry-icon" />
              <p>Automotive</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="services-tech">
        <div className="text-center">
          <h2 className="services-tech-heading">
            Technologies <span>We Use</span>
          </h2>
          <div className="services-tech-underline" />
        </div>
        <div className="overflow-hidden">
          <div className="scrolling-wrapper flex gap-4 w-max whitespace-nowrap px-4">
            <div className="flex gap-4">
              {technologies.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={i} className="badge">
                    <Icon className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {technologies.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={`dup-${i}`} className="badge">
                    <Icon className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="services-why" aria-label="Why Choose Fawarisone Technologies">
        <div className="services-why-inner">
          <div className="services-why-header">
            <h2>Why Choose <span>Fawarisone Technologies</span></h2>
            <div className="services-why-underline" />
          </div>
          <div className="services-why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="services-why-card">
                <div className="services-why-stat">{item.stat}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET STARTED SECTION */}
      <section className="services-form-section">
        <h2 className="services-form-heading">
          <span>Get Started</span> with Us
        </h2>
        <div className="services-form-underline" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(`Thank you ${name}! We will contact you soon regarding ${service}.`);
            setName("");
            setNumber("");
            setService("");
          }}
          className="services-form"
        >
          <div>
            <label htmlFor="svc-name" className="services-form-label">Your Name</label>
            <input
              id="svc-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              autoComplete="name"
              className="services-form-input"
            />
          </div>
          <div>
            <label htmlFor="svc-number" className="services-form-label">Your Number</label>
            <input
              id="svc-number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your Number"
              required
              autoComplete="tel"
              className="services-form-input"
            />
          </div>
          <div>
            <label htmlFor="svc-service" className="services-form-label">Select a Service</label>
            <select
              id="svc-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="services-form-select"
            >
              <option value="">-- Choose a Service --</option>
              <option value="seo">SEO Optimization</option>
              <option value="ppc">PPC Advertising</option>
              <option value="web-development">Website Development</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="ecommerce">eCommerce Development</option>
              <option value="branding">Branding & Design</option>
              <option value="performance-marketing">Performance Marketing</option>
            </select>
          </div>
          <button type="submit" className="services-form-btn">Submit</button>
          {status && <p className="services-form-status">{status}</p>}
        </form>
      </section>

      {/* FAQ SECTION */}
      <section className="services-faq">
        <div className="services-faq-inner">
          <div className="services-faq-header">
            <h2 className="services-faq-heading">
              <span>Frequently</span> Asked Questions
            </h2>
            <div className="services-faq-underline" />
            <p className="services-faq-subtext">
              Answers to the most common questions about our services and process.
            </p>
          </div>
          <div className="services-faq-list">
            {faqData.map((item, i) => (
              <div key={i} className="services-faq-item">
                <button
                  onClick={() => toggleFaq(i)}
                  className="services-faq-question"
                  aria-expanded={openIndex === i}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`services-faq-icon ${openIndex === i ? "services-faq-icon-open" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="services-faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="services-cta" aria-label="Get Started with Fawarisone Technologies">
        <div className="services-cta-inner">
          <h2>Ready to <span>Grow Your Business</span> Online?</h2>
          <p>
            Partner with India's leading digital marketing agency for SEO, PPC, website
            development, and social media marketing. Get a free consultation today.
          </p>
          <a
            href="https://wa.me/919540003620"
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
