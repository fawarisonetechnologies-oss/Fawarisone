"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Stethoscope,
  Banknote,
  GraduationCap,
  Cloud,
  Home as HomeIcon,
  ConciergeBell,
  Car,
  Code,
  Brush,
  Wind,
  Zap,
  Atom,
  Layers,
  Server,
  Database,
  Flame,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Search,
  BarChart2,
} from "lucide-react";
import "./home.css";
import "../components/contact.css";

// 🔹 Technology Icons
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

// 🔹 Industries Section
const industries = [
  { name: "E-Commerce", icon: ShoppingBag },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Finance", icon: Banknote },
  { name: "Education", icon: GraduationCap },
  { name: "Cloud & SaaS", icon: Cloud },
  { name: "Real Estate", icon: HomeIcon },
  { name: "Hospitality", icon: ConciergeBell },
  { name: "Automotive", icon: Car },
];

export default function Home() {
  // 🔹 Rotating text
  const services = [
    "AI Software Development",
    "SEO Services",
    "Social Media Marketing",
    "Web Design",
    "Branding",
    "AI Marketing",
    "Performance Ads",
  ];
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

  // 🔹 Form state
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  // Contact Us form state
  const [cName, setCName] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cWebsite, setCWebsite] = useState("");
  const [cService, setCService] = useState("");
  const [cBudget, setCBudget] = useState("");
  const [cMessage, setCMessage] = useState("");
  const [cSuccess, setCSuccess] = useState(false);
  const [cErrors, setCErrors] = useState<Record<string, string>>({});

  const validateContact = () => {
    const errs: Record<string, string> = {};
    if (!cName.trim()) errs.cName = "Full name is required";
    if (!cPhone.trim()) errs.cPhone = "Phone number is required";
    else if (!/^\+[1-9]\d{0,3}\d{10}$/.test(cPhone.replace(/\s/g, ""))) errs.cPhone = "Enter country code + 10 digits (e.g. +91 9876543210)";
    if (!cEmail.trim()) errs.cEmail = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cEmail)) errs.cEmail = "Enter a valid email";
    if (!cWebsite.trim()) errs.cWebsite = "Website URL is required";
    if (!cService) errs.cService = "Please select a service";
    if (!cBudget) errs.cBudget = "Please select a budget";
    if (!cMessage.trim()) errs.cMessage = "Message is required";
    return errs;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateContact();
    if (Object.keys(errs).length > 0) { setCErrors(errs); return; }
    setCErrors({});
    const params = new URLSearchParams(window.location.search);
    const leadData = {
      name: cName, phone: cPhone, email: cEmail, website: cWebsite,
      service: cService, budget: cBudget, message: cMessage,
      utm_source: params.get("utm_source") || "direct",
      utm_medium: params.get("utm_medium") || "none",
      utm_campaign: params.get("utm_campaign") || "none",
      landing_page: window.location.href,
      referrer: document.referrer || "direct",
    };
    console.log("Lead captured:", leadData);
    sessionStorage.setItem("last_lead", JSON.stringify(leadData));
    setCSuccess(true);
    setCName(""); setCPhone(""); setCEmail(""); setCWebsite(""); setCService(""); setCBudget(""); setCMessage("");
  };

  // 🔹 FAQ logic
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, UI/UX design, SEO, branding, and performance marketing.",
    },
    {
      question: "Do you redesign existing websites?",
      answer:
        "Yes, we transform outdated sites into modern, high-performing experiences.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Typically between 3–6 weeks depending on scope and requirements.",
    },
    {
      question: "Is my site mobile-friendly?",
      answer:
        "Absolutely. All our sites are responsive across all devices.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer maintenance, updates, and marketing support plans.",
    },
  ];

  // 🔹 JSX
  return (
    <main className="bg-black text-white">
      {/* 🌟 HERO SECTION */}
<section className="w-full bg-black py-20 px-6 mt-14 text-center space-y-6">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00bfff]">
  Grow Your Business With Our
  <br />

  <span
    className={`text-pink-500 inline-block mt-4 transition-opacity duration-500 ${
      fade ? "opacity-100" : "opacity-0"
    }`}
  >
    {services[index]}
  </span>
</h1>

  <p className="text-base md:text-lg leading-7 md:leading-8 tracking-normal text-gray-400 text-center">
    Empowering brands through creative strategy and digital innovation.
  </p>
  <Link
    href="https://wa.me/919540003620"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
  >
    Schedule a Call
  </Link>
</section>

      {/* About Section */}
      <section className="bg-white text-gray-900 w-full py-12 px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            FawarisOne <span className="text-sky-500">Technologies </span>
          </h2>
          <div className="w-16 h-1 bg-sky-400 mx-auto mt-3 mb-6 rounded"></div>
        </div>

        <div className="w-full">
          <p className="text-gray-800 text-base md:text-lg leading-7 md:leading-8 tracking-normal text-justify">
           Fawarisone Technologies is a digital agency specializing in website design, SEO, and paid marketing.
We help businesses build strong online visibility and achieve measurable growth.
Our team combines creativity, strategy, and technology to deliver impactful results.
From startups to enterprises, we craft tailored digital solutions that drive success.
Empowering brands to grow smarter in the digital world is at the heart of what we do.
          </p>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-rectangles-section" className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Full{" "}
              <span className="text-[#ff4081] hover:text-[#e73370]">
                Stack Digital
              </span>
              <br />
              <span className="text-[#ff4081] hover:text-[#e73370]">Marketing</span>{" "}
              Agency
            </h1>

            <p className="text-gray-300 text-sm lg:text-base">
              Specializing in Generating Leads and Sales for Startups & SMBs with
              Custom Digital Marketing Solutions.
            </p>

            <Link
              href="https://wa.me/919540003620"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4081] hover:bg-[#e73370] text-black px-6 py-2 rounded-[35px] font-semibold inline-block"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="/services"
              className="ml-3 border border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-black px-6 py-2 rounded-[35px] font-semibold inline-block transition"
            >
              Our Services →
            </Link>
          </div>

          {/* Right Rectangles (White Background) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-1.svg"
                className="h-10 w-10"
                alt="Digital Presence"
              />
              <span className="font-semibold">Smart Ways to Grow Your Business</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-2.svg"
                className="h-10 w-10"
                alt="Revenue Growth"
              />
              <span className="font-semibold">All-in-One Marketing Help</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-3.svg"
                className="h-10 w-10"
                alt="Growth Engine"
              />
              <span className="font-semibold">AI That Works for You</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-4.svg"
                className="h-10 w-10"
                alt="Data Insights"
              />
              <span className="font-semibold">Be Seen Everywhere Online</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-5.svg"
                className="h-10 w-10"
                alt="Tech Ecosystem"
              />
              <span className="font-semibold">Websites That Bring Customers</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="/fawarisone-homepage-icon-6.svg"
                className="h-10 w-10"
                alt="AI Automation"
              />
              <span className="font-semibold">Easy Plans for Every Business</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-black mt-12 py-6 text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-white">
          <div>
            <p className="text-2xl font-bold text-[#ff4081] hover:text-[#e73370]">
              22+
            </p>
            <p className="text-sm text-gray-300">Years of Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff4081] hover:text-[#e73370]">
              1000+
            </p>
            <p className="text-sm text-gray-300">Case Studies</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff4081] hover:text-[#e73370]">
              5M+
            </p>
            <p className="text-sm text-gray-300">Keywords Ranked</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff4081] hover:text-[#e73370]">
              6K+
            </p>
            <p className="text-sm text-gray-300">Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff4081] hover:text-[#e73370]">
              1M+
            </p>
            <p className="text-sm text-gray-300">Leads Generated</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
  {/* Heading with underline */}
  <h2
    className="relative text-center text-3xl md:text-4xl font-bold mb-12
      after:content-[''] after:block after:w-20 after:h-1 after:bg-[#00bfff] after:mt-3 after:rounded after:mx-auto"
  >
    <span className="text-black">India&apos;s Leading</span>{" "}
    <span className="text-[#00bfff]">AI-Powered Digital Agency</span>
  </h2>

  {/* Main Content Grid */}
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Text Section */}
    <div className="space-y-6">
      <p className="text-sm uppercase text-gray-500 font-semibold tracking-wider">
        About Us
      </p>

      <h3 className="text-2xl md:text-3xl leading-snug text-black">
        <span className="font-bold text-black">Empowering Businesses</span>{" "}
        <span className="font-bold text-[#00bfff]">with AI-Driven</span>{" "}
        <span className="font-bold text-black">Digital Growth</span>
          <span className="font-bold text-[#00bfff]"> - Since 2014</span>
      </h3>

      <p className="text-black leading-relaxed">
        Founded in 2014, we are one of India’s most trusted{" "}
        <span className="font-semibold text-[#00bfff]">
          AI-driven Digital Media Agencies,
        </span>{" "}
        helping brands enhance visibility, engagement, and ROI through the
        power of intelligent automation and creative strategy.
      </p>

      <a
        href="#"
        className="inline-block px-5 py-2 rounded-full border border-[#00bfff] text-sm font-medium text-[#00bfff] hover:bg-[#00bfff] hover:text-white transition"
      >
        &gt; Read More
      </a>
    </div>

    {/* Image Section */}
   <div className="flex justify-center">
  <Image
    src="/Fawarisone-marketing.png"
    alt="AI Digital Agency Office"
    width={400}
    height={400}
    priority
    className="w-[50%] animate-smoothPulse"
  />
</div>

  </div>
</section>

   

      {/* Services Section */}
      <section className="bg-black py-20 px-4 text-white">
        {/* Heading with underline */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
            Navigate The Digital Frontier With <br />
            <span className="text-[#ff4081]">Our Engineering Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff4081] mt-4 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 text-sm">
            Explore all our services —{" "}
            <Link href="/services" className="text-[#ff4081] underline hover:text-pink-400 transition">
              View Full Services Page
            </Link>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Service Card */}
          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Mobile App Development</div>
            <p className="text-sm text-gray-400">
              Responsive apps crafted to engage users and meet business goals.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Software Development</div>
            <p className="text-sm text-gray-400">
              Custom software for process efficiency and tech-driven innovation.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Digital Transformation</div>
            <p className="text-sm text-gray-400">
              Modernize systems and drive competitive growth through tech.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">UI/UX Strategy</div>
            <p className="text-sm text-gray-400">
              Design-led innovation for intuitive, functional experiences.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">IT Consulting</div>
            <p className="text-sm text-gray-400">
              Guidance on tech strategy, digital roadmaps, and system decisions.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">DevOps</div>
            <p className="text-sm text-gray-400">
              Boost delivery cycles, automate pipelines, and scale with quality.
            </p>
          </a>

          <a
            href="/services" target="_blank"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Cloud Services</div>
            <p className="text-sm text-gray-400">
              Manage cloud infra securely and efficiently across your stack.
            </p>
          </a>

          {/* CTA Card */}
          <a
            href="/services"
            target="_blank"
            className="cursor-pointer bg-gradient-to-br from-[#ff4081] to-[#c13584] p-6 rounded-xl flex items-center justify-center"
          >
            <span className="text-white font-semibold text-sm px-5 py-2 border border-white rounded-full hover:bg-white hover:text-[#ff4081] transition">
              Our Services →
            </span>
          </a>
        </div>
      </section>

      {/* Your Other Page Content */}
      {/* Free Marketing Plan Section */}
      <section className="w-full bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            Get Your Free <br />
            <span className="text-[#00bfff]">Performance Marketing Plan</span>
          </h2>
          <div className="w-24 h-1 bg-[#00bfff] mt-4 mx-auto rounded"></div>
        </div>

        <form
          action="#"
          method="POST"
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            defaultValue="you@example.com"  // ✅ prefilled value
            autoFocus
            required
            className="w-full sm:w-80 px-6 py-4 rounded-full border border-gray-300 text-base 
                       text-gray-400 focus:text-black 
                       focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-[#00bfff] text-white text-base font-medium hover:bg-blue-600 transition"
          >
            Get My Plan
          </button>
        </form>
      </section>
      <section className="w-full bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Industries We Empower with{" "}
            <span className="text-[#ff4081]">Web Solutions</span>
          </h2>

          <div className="w-24 h-1 bg-[#ff4081] mt-2 mb-10 mx-auto rounded"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            From custom websites to full-scale platforms, we build digital experiences tailored to
            your industry’s needs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <ShoppingBag className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">E-commerce</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <Stethoscope className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Healthcare</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <Banknote className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Finance</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <GraduationCap className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Education</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <Cloud className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Tech & SaaS</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <HomeIcon className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Real Estate</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <ConciergeBell className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Hospitality</p>
            </div>

            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-[#ff4081] transition">
              <Car className="w-8 h-8 text-[#ff4081] mb-2" />
              <p className="text-white font-medium">Automotive</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Technologies Section */}
      <section className="w-full bg-white py-16 overflow-hidden">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Technologies <span className="text-[#00bfff]">We Use</span>
          </h2>
          <div className="w-24 h-1 bg-[#00bfff] mx-auto mb-8 rounded"></div>
        </div>

        {/* Auto-scroll wrapper */}
        <div className="overflow-hidden">
          <div className="scrolling-wrapper flex gap-4 w-max whitespace-nowrap px-4">
            {/* First batch */}
            <div className="flex gap-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="badge">
                    <Icon className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="flex gap-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={`dup-${index}`} className="badge">
                    <Icon className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Trusted By Section */}
      <section className="bg-black py-20 px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Trusted By</span>{" "}
            <span className="text-[#ff4081]">Industry Leaders</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff4081] mx-auto mb-8 rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Review 1 */}
          <div className="group border-l-4 border-[#ff4081] pl-6 hover:bg-[#1a1a1a] transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                className="w-10 h-10 object-contain invert"
                alt="Microsoft"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-white">Microsoft</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              “They delivered with precision, speed, and unmatched UI polish.”
            </p>
          </div>

          {/* Review 2 */}
          <div className="group border-l-4 border-[#ff4081] pl-6 hover:bg-[#1a1a1a] transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="w-10 h-10 object-contain invert"
                alt="Apple"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-white">Apple</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              “Felt like working with an internal team — fast, focused, and sleek.”
            </p>
          </div>

          {/* Review 3 */}
          <div className="group border-l-4 border-[#ff4081] pl-6 hover:bg-[#1a1a1a] transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
                className="w-10 h-10 object-contain invert"
                alt="Google"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-white">Google</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              “From UX strategy to delivery — everything was top-tier.”
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="home-contact-section">
        <div className="home-contact-inner">
          <div className="home-contact-heading">
            <p className="home-contact-tag">Get In Touch</p>
            <h2 className="home-contact-title">Contact <span>Us</span></h2>
            <div className="home-contact-underline" />
          </div>
          <div className="home-contact-card">
            {/* LEFT PANEL */}
            <div className="home-contact-left">
              <div>
                <h3 className="home-contact-left-title">Let&apos;s Build Something Great</h3>
                <p className="home-contact-left-desc">Please share your project details and business requirements with us. We are a company that you can trust and we want to help you. We make sure that the solutions we create are really good and will help your business grow. We will get back to you within 24 hours.</p>
                <div className="home-contact-points">
                  {[
                    { icon: <Code className="home-contact-point-icon" />, label: "Build", tooltip: "We make websites and other digital things that work well and help you get more customers." },
                    { icon: <TrendingUp className="home-contact-point-icon" />, label: "Grow", tooltip: "We help your business get bigger by making plans and using data to make decisions." },
                    { icon: <Search className="home-contact-point-icon" />, label: "Rank", tooltip: "We get your brand to the top of search results with techniques that really work." },
                    { icon: <BarChart2 className="home-contact-point-icon" />, label: "Scale", tooltip: "We help you succeed for a time by creating systems that can grow with your business." },
                  ].map((item, i) => (
                    <div key={i} className="group relative home-contact-point">
                      <div className="home-contact-point-circle">{item.icon}</div>
                      <p className="home-contact-point-label">{item.label}</p>
                      <div className="absolute bottom-full left-0 mb-2 w-56 bg-[#1a1a1a] border border-[#00bfff]/30 rounded-xl p-3 text-xs text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                        {item.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="home-contact-info">
                <div className="home-contact-info-row">
                  <div className="home-contact-info-circle"><Phone className="home-contact-info-icon" /></div>
                  <div><p className="home-contact-info-label">Call Us</p><a href="tel:+919540003620" className="home-contact-info-value">+91 9540003620 / 9540003236</a></div>
                </div>
                <div className="home-contact-info-row">
                  <div className="home-contact-info-circle"><Mail className="home-contact-info-icon" /></div>
                  <div><p className="home-contact-info-label">Email Us</p><a href="mailto:FawarisOneTechnologies@gmail.com" className="home-contact-info-value">FawarisOneTechnologies@gmail.com</a></div>
                </div>
                <div className="home-contact-info-row">
                  <div className="home-contact-info-circle"><MapPin className="home-contact-info-icon" /></div>
                  <div><p className="home-contact-info-label">Office</p><p className="home-contact-info-value">5th Floor, Silicon Towers,<br />Sector 63, Noida, UP 201301</p></div>
                </div>
              </div>
              <a href="https://wa.me/919540003620" target="_blank" rel="noopener noreferrer" className="home-contact-wa">
                <svg className="home-contact-wa-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
            {/* RIGHT PANEL */}
            <div className="home-contact-right">
              <h3 className="home-contact-form-title">Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} noValidate className="home-contact-form">
                <div className="home-contact-form-row">
                  <div>
                    <label className="home-contact-label">Full Name <span>*</span></label>
                    <input type="text" placeholder="John Doe" value={cName} onChange={e => { setCName(e.target.value); setCErrors(p => ({...p, cName: ""})) }}
                      className={`home-contact-input ${cErrors.cName ? "home-contact-input-error" : ""}`} />
                    {cErrors.cName && <p className="home-contact-error">{cErrors.cName}</p>}
                  </div>
                  <div>
                    <label className="home-contact-label">Phone <span>*</span></label>
                    <input type="tel" placeholder="+91 9876543210" value={cPhone} onChange={e => { setCPhone(e.target.value); setCErrors(p => ({...p, cPhone: ""})) }}
                      className={`home-contact-input ${cErrors.cPhone ? "home-contact-input-error" : ""}`} />
                    {cErrors.cPhone && <p className="home-contact-error">{cErrors.cPhone}</p>}
                  </div>
                </div>
                <div>
                  <label className="home-contact-label">Email Address <span>*</span></label>
                  <input type="email" placeholder="you@company.com" value={cEmail} onChange={e => { setCEmail(e.target.value); setCErrors(p => ({...p, cEmail: ""})) }}
                    className={`home-contact-input ${cErrors.cEmail ? "home-contact-input-error" : ""}`} />
                  {cErrors.cEmail && <p className="home-contact-error">{cErrors.cEmail}</p>}
                </div>
                <div>
                  <label className="home-contact-label">Website URL <span>*</span></label>
                  <input type="text" placeholder="https://yourwebsite.com" value={cWebsite} onChange={e => { setCWebsite(e.target.value); setCErrors(p => ({...p, cWebsite: ""})) }}
                    className={`home-contact-input ${cErrors.cWebsite ? "home-contact-input-error" : ""}`} />
                  {cErrors.cWebsite && <p className="home-contact-error">{cErrors.cWebsite}</p>}
                </div>
                <div className="home-contact-form-row">
                  <div>
                    <label className="home-contact-label">Service Required <span>*</span></label>
                    <select value={cService} onChange={e => { setCService(e.target.value); setCErrors(p => ({...p, cService: ""})) }}
                      className={`home-contact-select ${cErrors.cService ? "home-contact-input-error" : ""}`}>
                      <option value="">Select Service</option>
                      <optgroup label="Web Development">
                        <option>Website Development</option>
                        <option>eCommerce Development</option>
                        <option>WordPress Development</option>
                        <option>Landing Page Design</option>
                        <option>UI/UX Design</option>
                        <option>Mobile App Development</option>
                      </optgroup>
                      <optgroup label="Digital Marketing">
                        <option>SEO Optimization</option>
                        <option>Pay Per Click (PPC)</option>
                        <option>Social Media Marketing</option>
                        <option>Content Marketing</option>
                        <option>Performance Marketing</option>
                        <option>Email Marketing</option>
                      </optgroup>
                      <optgroup label="Branding">
                        <option>Logo Design</option>
                        <option>Brand Identity</option>
                        <option>Online Branding</option>
                      </optgroup>
                    </select>
                    {cErrors.cService && <p className="home-contact-error">{cErrors.cService}</p>}
                  </div>
                  <div>
                    <label className="home-contact-label">Budget Range <span>*</span></label>
                    <select value={cBudget} onChange={e => { setCBudget(e.target.value); setCErrors(p => ({...p, cBudget: ""})) }}
                      className={`home-contact-select ${cErrors.cBudget ? "home-contact-input-error" : ""}`}>
                      <option value="">Select Budget</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                    </select>
                    {cErrors.cBudget && <p className="home-contact-error">{cErrors.cBudget}</p>}
                  </div>
                </div>
                <div>
                  <label className="home-contact-label">Your Message <span>*</span></label>
                  <textarea rows={4} placeholder="Tell us about your project..." value={cMessage} onChange={e => { setCMessage(e.target.value); setCErrors(p => ({...p, cMessage: ""})) }}
                    className={`home-contact-textarea ${cErrors.cMessage ? "home-contact-input-error" : ""}`} />
                  {cErrors.cMessage && <p className="home-contact-error">{cErrors.cMessage}</p>}
                </div>
                {cSuccess && <p className="home-contact-success">✅ Message sent! We will get back to you within 24 hours.</p>}
                <button type="submit" className="home-contact-btn">Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SCROLL BOX */}
      <section className="w-full bg-black py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="content-scroll-box">
            <div className="content-scroll-inner">
              <h1>Fawarisone Technologies: Digital Marketing &amp; Web Development Company in India</h1>
              <p>In today&apos;s digital-first world, your website is often the first impression of your business. But many companies struggle with slow loading websites, outdated design, no mobile optimization, low conversions, and weak online presence.</p>
              <p>In 2026, a website is not just an option &mdash; it&apos;s a necessity. A professional website builds trust, improves user experience, and directly impacts your sales and growth.</p>
              <p>Fawarisone Technologies, a leading web development company in Noida, helps businesses create powerful websites and digital strategies that drive real results.</p>

              <h3>Why a Professional Website Matters More Than Ever</h3>
              <p>A strong website is the backbone of your online success.</p>
              <ul>
                <li>Builds trust &ndash; A modern design makes your business look reliable and professional.</li>
                <li>Improves user experience &ndash; Easy navigation keeps visitors engaged longer.</li>
                <li>Boosts conversions &ndash; A well-structured site turns visitors into customers.</li>
                <li>Supports SEO &ndash; Optimized websites rank higher on Google.</li>
              </ul>
              <p>A weak website can cost you customers, while a strong one brings continuous growth.</p>

              <h3>Web Development Services</h3>
              <h4>1. Custom Website Development</h4>
              <p>Custom websites are built specifically for your business needs &ndash; unique design, scalable structure, and better performance optimized for speed and flexibility.</p>

              <h4>2. Types of Websites We Build</h4>
              <p><strong>Business Websites</strong> &ndash; Designed for companies that want to generate leads and build authority with service-focused pages and contact integration.</p>
              <p><strong>eCommerce Websites</strong> &ndash; Built for selling products online with secure payments and easy navigation.</p>
              <p><strong>Portfolio Websites</strong> &ndash; Perfect for showcasing work with visual presentation and professional identity.</p>

              <h4>3. Responsive Web Design</h4>
              <p>Responsive design ensures your website works on all devices &ndash; mobile-friendly layout, better SEO, and improved engagement.</p>

              <h4>4. Website Speed Optimization</h4>
              <p>Faster loading keeps users from leaving, improves conversions, and gives you an SEO advantage as speed is a key ranking factor on Google.</p>

              <h4>5. UI/UX Design Importance</h4>
              <p>Good design is not just about looks &mdash; simple navigation, clear CTAs, and better experience make browsing smooth and enjoyable.</p>

              <h4>6. SEO-Friendly Website Structure</h4>
              <p>Clean URLs, optimized content, and technical setup improve indexing and visibility on search engines.</p>

              <h4>7. Security and Performance</h4>
              <p>SSL protection, regular updates, and stable performance ensure your site runs smoothly and keeps user data safe.</p>

              <h4>8. Conversion-Focused Design</h4>
              <p>Strong headlines, lead forms, and trust signals like reviews and testimonials increase credibility and generate results.</p>

              <h3>Real-Life Use Cases</h3>
              <ul>
                <li>Local business growth &ndash; A redesigned website increased leads by improving UX and SEO.</li>
                <li>eCommerce success &ndash; Faster checkout and better design doubled sales.</li>
                <li>Startup branding &ndash; A professional website attracted investors and clients.</li>
              </ul>

              <h3>The Digital Growth Journey</h3>
              <p>Every successful online business follows this path:</p>
              <p>Website &rarr; User Experience &rarr; SEO &rarr; Traffic &rarr; Leads &rarr; Brand Growth</p>

              <h3>Digital Marketing Services (Supporting Growth)</h3>
              <h4>1. Search Engine Optimization (SEO)</h4>
              <p>Keyword targeting, on-page optimization, and technical SEO to rank higher on Google and bring relevant traffic.</p>

              <h4>2. Social Media Marketing</h4>
              <p>Brand awareness and engagement across platforms to build relationships with customers.</p>

              <h4>3. Content Marketing</h4>
              <p>Blogs, articles, and SEO content to improve rankings and organic traffic.</p>

              <h4>4. Lead Generation Strategies</h4>
              <p>Landing pages, paid ads, and email marketing to nurture potential customers into buyers.</p>

              <h3>Why Choose Fawarisone Technologies?</h3>
              <ul>
                <li><strong>Affordable Pricing</strong> &ndash; High-quality services at budget-friendly rates for all business sizes.</li>
                <li><strong>Result-Driven Approach</strong> &ndash; Focus on delivering measurable outcomes like leads and sales.</li>
                <li><strong>End-to-End Services</strong> &ndash; From website development to digital marketing, everything in one place.</li>
                <li><strong>Local Expertise in Noida</strong> &ndash; Deep understanding of the local market helps target the right audience.</li>
              </ul>

              <h3>Conclusion: Build, Grow, and Scale Your Business</h3>
              <p>Your website is the foundation of your digital success. Whether you need custom web development services, eCommerce solutions, or Shopify web development services, Fawarisone Technologies delivers high-quality, scalable solutions. Recognized as the best eCommerce website development company, we help businesses grow faster online.</p>
              <p>Visit: <a href="https://www.fawarisone.com" className="text-[#00bfff] hover:underline">www.fawarisone.com</a> &nbsp;|&nbsp; Call: 9540003620 / 9540003236</p>
              <p>Partner with a trusted web development company in Noida to transform your online presence into a powerful growth engine.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white w-full py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="text-black">Frequently</span>{" "}
            <span className="text-[#00bfff]">Asked Questions</span>
          </h2>
          <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#00bfff] transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96 block" : "max-h-0 hidden"
                  }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Your other sections */}
    </main>
  );
}





