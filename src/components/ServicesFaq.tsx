"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What kind of web development services does Fawarisone Technologies offer to people like me?",
    answer: "Fawarisone Technologies offers web development services in India. They do business website development, eCommerce website development, custom web application development and WordPress website development. The websites they make are fast, secure and good for search engines.",
    link: "/services",
    linkText: "👉 Explore Web Development Services",
  },
  {
    question: "How money does it cost to develop a website in India?",
    answer: "The cost of website development in India depends on what the website looks like what features it has and what it can do. Fawarisone Technologies offers web development services that're affordable for startups and also good for businesses that are growing.",
    link: "/contact",
    linkText: "👉 Get Website Development Pricing",
  },
  {
    question: "How long does it take to build a website from start to finish?",
    answer: "If you want a business website it can take around 7 to 15 days. If you want a custom web development or an eCommerce website it can take around 3 to 6 weeks. This is because these websites are more complex.",
    link: "/services",
    linkText: "👉 View Website Development Timeline",
  },
  {
    question: "Will my website be good for search engines. Work well on mobile phones?",
    answer: "Yes Fawarisone Technologies builds websites that're good for search engines and work well on mobile phones. They make sure the website loads fast and has a structure so it can rank higher on Google.",
    link: "/services",
    linkText: "👉 Learn About SEO- Web Design",
  },
  {
    question: "Do you offer custom web development or template-based websites?",
    answer: "Fawarisone Technologies offers both custom website development services for business needs and template-based website design for people who want to save money.",
    link: "/services",
    linkText: "👉 View Website Design Options",
  },
  {
    question: "Do you offer eCommerce website development services to people who want to sell things",
    answer: "Yes Fawarisone Technologies specializes in eCommerce website development in India. They create stores that are secure can handle a lot of traffic and are designed to sell things. They also help with payment gateway integration.",
    link: "/services",
    linkText: "👉 Explore eCommerce Development",
  },
  {
    question: "Which is better: WordPress or custom web development?",
    answer: "WordPress website development is good for businesses. If you need advanced features custom web development services are better. Custom web development is also good for businesses that need solutions and want to grow.",
    link: "/services",
    linkText: "👉 Compare Website Development Solutions",
  },
  {
    question: "What kind of marketing services do you offer to help businesses grow?",
    answer: "Fawarisone Technologies offers marketing services in India including SEO services Google Ads, social media marketing and content marketing. These services help increase traffic and generate leads.",
    link: "/services",
    linkText: "👉 Explore Digital Marketing Services",
  },
  {
    question: "How does SEO help improve website ranking and traffic?",
    answer: "Fawarisone Technologies SEO services help websites rank higher on Google. They do this by optimizing content, keywords, technical SEO and backlinks. This results in organic traffic and leads.",
    link: "/services",
    linkText: "👉 Learn About SEO Services",
  },
  {
    question: "Why should I choose Fawarisone Technologies for web development and digital marketing?",
    answer: "Fawarisone Technologies is a trusted web development company in India with, over 16 years of experience. They deliver custom websites SEO-optimized solutions and digital marketing strategies that help businesses grow online.",
    link: "/contact",
    linkText: "👉 Contact Us Today",
  },
];

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
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
                <div className="services-faq-answer">
                  {item.answer}
                  <a href={item.link} className="services-faq-link">{item.linkText}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
