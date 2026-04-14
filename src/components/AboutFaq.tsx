"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is Fawarisone Technologies?",
    answer: "Fawarisone Technologies is a leading AI-powered digital marketing company in India, specializing in SEO, PPC, social media marketing, website development, and performance marketing to help businesses grow online.",
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

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
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
  );
}
