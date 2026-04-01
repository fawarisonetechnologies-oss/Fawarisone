"use client";

import { useState, useEffect } from "react";
import "./about.css";

const services = [
  "SEO Services",
  "PPC Advertising",
  "AI SEO Optimization",
  "Website Development",
  "Ecommerce Website Development",
  "Digital Marketing Services",
];

export default function AboutPage() {
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
      question: "What is Fawarisone Technologies?",
      answer: "Fawarisone Technologies is a leading AI-powered digital marketing agency in India, specializing in SEO, PPC, social media marketing, website development, and performance marketing to help businesses grow online.",
    },
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a full range of services including SEO optimization, Google Ads PPC, social media marketing, content marketing, website development, eCommerce SEO, local SEO, online branding, and performance marketing.",
    },
    {
      question: "How can SEO help my business grow?",
      answer: "SEO improves your website's visibility on Google, drives organic traffic, generates quality leads, and increases sales — all without paying for every click. Our data-driven SEO strategies deliver long-term, sustainable growth.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes! We specialize in helping startups, SMBs, and growing businesses with customized digital marketing solutions that fit their budget and goals, delivering maximum ROI.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "SEO typically shows results in 3–6 months, while PPC and paid advertising deliver instant traffic. Social media marketing builds engagement over time. We provide regular reports so you can track progress.",
    },
    {
      question: "Why choose Fawarisone Technologies over other agencies?",
      answer: "We combine AI-powered strategies, 10+ years of experience, data-driven decisions, and a dedicated team to deliver measurable results. With 16K+ clients served and proven case studies, we are India's trusted digital growth partner.",
    },
  ];

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
    <div className="bg-black text-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>
          AI Digital Marketing Agency in India
          <br />
          <span
            className="about-hero-rotating"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {services[index]}
          </span>
        </h1>

        <p className="about-hero-p">
          Serving 16K+ Clients Worldwide, Scaling Brands with Data-Driven Growth.
Fawarisone Technologies is a leading AI-powered digital marketing agency in India, delivering SEO, performance marketing, PPC, and social media strategies to drive measurable online growth.
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

      {/* RESULTS SECTION */}
      <section className="about-results">
        <h2 className="about-results-heading">
          AI-Powered Results That Drive <span>Real Business Growth</span>
        </h2>
        <div className="about-results-underline" />

        <div className="about-results-grid">
          <div className="about-results-card">
            <div className="about-results-stat">2X to 6X</div>
            <h3>Boosting Revenue</h3>
            <p>We help businesses increase revenue with AI-powered digital marketing strategies, performance marketing, and conversion-focused campaigns designed for maximum ROI.</p>
          </div>

          <div className="about-results-card">
            <div className="about-results-stat">3X to 8X</div>
            <h3>Improved Leads</h3>
            <p>Our data-driven SEO, PPC, and lead generation strategies deliver high-quality leads that convert into real customers.</p>
          </div>

          <div className="about-results-card">
            <div className="about-results-stat">4X to 8X</div>
            <h3>Social Media Engagement</h3>
            <p>We elevate your brand presence through targeted social media marketing, increasing engagement, audience interaction, and brand loyalty.</p>
          </div>

          <div className="about-results-card">
            <div className="about-results-stat">100% to 1000%</div>
            <h3>Brand Exposure Growth</h3>
            <p>With advanced AI marketing and digital advertising, we maximize your online visibility, reach the right audience, and create powerful brand awareness.</p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="about-content">
        <div className="about-content-inner">

          <div className="about-content-left">
            <h2 className="about-content-heading">
              Top Digital Marketing Agency in India
            </h2>
            <p className="about-content-desc">
              Fawarisone Technologies is India's leading digital marketing agency specializing in SEO, PPC, social media marketing, website development, and performance marketing. We help startups, SMBs, and enterprises grow online with data-driven strategies, AI-powered SEO, Google Ads, content marketing, and conversion rate optimization. Our expert team delivers measurable results — higher Google rankings, increased website traffic, quality lead generation, and maximum ROI. Whether you need local SEO, eCommerce SEO, paid advertising, or complete online branding, we build custom digital marketing solutions tailored to your business goals.
            </p>
            <a
              href="https://wa.me/919540003620"
              target="_blank"
              rel="noopener noreferrer"
              className="about-content-btn"
            >
              Get Free Consultation
            </a>
          </div>

          <div className="about-content-right">
            <div className="about-content-box">
              <p className="about-content-box-title">Who We Are</p>
              <p className="about-content-box-text">At Fawarisone Technologies, we are a results-driven digital marketing agency in India helping businesses grow with powerful SEO services, PPC advertising, social media marketing, and online branding strategies.</p>
            </div>
            <div className="about-content-box">
              <p className="about-content-box-title">What We Do</p>
              <p className="about-content-box-text">We specialize in SEO to improve Google rankings, PPC campaigns to drive instant traffic, and SMM to increase brand awareness. Our data-driven approach ensures higher traffic, lead generation, and CRO for your business.</p>
            </div>
            <div className="about-content-box">
              <p className="about-content-box-title">Our Approach</p>
              <p className="about-content-box-text">We perform in-depth digital marketing audits, competitor analysis, and keyword research to identify growth opportunities. Whether startup or enterprise, our strategies deliver better ROI and long-term online success.</p>
            </div>
            <div className="about-content-box">
              <p className="about-content-box-title">Our Expertise</p>
              <p className="about-content-box-text">With expertise in content marketing, local SEO, eCommerce SEO, Google Ads, and performance marketing, Fawarisone Technologies is your partner for scalable and sustainable digital growth.</p>
            </div>
          </div>

        </div>
      </section>
      {/* GET STARTED FORM SECTION */}
      <section className="about-form-section" aria-label="Contact Form - Get Started with Fawarisone Technologies">
        <h2 className="about-form-heading">
          <span className="about-form-heading-pink">Get Started</span> with Us
        </h2>
        <div className="about-form-underline" />
        <p className="about-form-subtext">
          Contact India's top digital marketing agency for SEO, PPC, website development & social media marketing services.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(`Thank you ${name}! We will contact you soon regarding ${service}.`);
            setName("");
            setNumber("");
            setService("");
          }}
          className="about-form"
          aria-label="Get Started Form"
        >
          <div>
            <label htmlFor="about-name" className="about-form-label">Your Name</label>
            <input
              id="about-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              autoComplete="name"
              className="about-form-input"
            />
          </div>
          <div>
            <label htmlFor="about-number" className="about-form-label">Your Number</label>
            <input
              id="about-number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your Phone Number"
              required
              autoComplete="tel"
              className="about-form-input"
            />
          </div>
          <div>
            <label htmlFor="about-service" className="about-form-label">Select a Service</label>
            <select
              id="about-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="about-form-select"
            >
              <option value="">-- Choose a Service --</option>
              <option value="seo">SEO Optimization</option>
              <option value="ppc">PPC Advertising</option>
              <option value="web-development">Website Development</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="content-marketing">Content Marketing</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ecommerce-seo">eCommerce SEO</option>
              <option value="performance-marketing">Performance Marketing</option>
            </select>
          </div>
          <button type="submit" className="about-form-btn">Submit</button>
          {status && <p className="about-form-status" role="alert">{status}</p>}
        </form>
      </section>
      {/* FAQ SECTION */}
      <section className="about-faq" aria-label="Frequently Asked Questions about Fawarisone Technologies">
        <div className="about-faq-inner">
          <div className="about-faq-header">
            <h2 className="about-faq-heading">
              <span>Frequently</span> Asked Questions
            </h2>
            <div className="about-faq-underline" />
            <p className="about-faq-subtext">
              Everything you need to know about our digital marketing services, SEO, PPC, and website development solutions.
            </p>
          </div>
          <div className="about-faq-list">
            {faqData.map((item, i) => (
              <div key={i} className="about-faq-item">
                <button
                  onClick={() => toggleFaq(i)}
                  className="about-faq-question"
                  aria-expanded={openIndex === i}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`about-faq-icon ${openIndex === i ? "about-faq-icon-open" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="about-faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
