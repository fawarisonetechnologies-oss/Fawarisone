"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Stethoscope, Banknote, GraduationCap, Cloud, Home as HomeIcon, ConciergeBell, Car } from "lucide-react";
import { Code, Brush, Wind, Zap, Atom, Layers, Server, Database, Flame } from "lucide-react";

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

export default function Home() {
  // Form state
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !number || !service) {
      setStatus("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, number, service }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Lead submitted successfully!");
        setName("");
        setNumber("");
        setService("");
      } else {
        setStatus("Failed to submit lead.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error submitting lead.");
    }
  };

  // FAQ state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer full-stack web development, UI/UX design, performance marketing, branding, and ongoing support.",
    },
    {
      question: "Do you redesign existing websites?",
      answer:
        "Yes, we revamp outdated websites into modern, responsive, and high-performing digital experiences.",
    },
    {
      question: "How long does a project typically take?",
      answer:
        "Depending on the complexity, projects usually take between 3 to 6 weeks from start to launch.",
    },
    {
      question: "Will my site be mobile-friendly?",
      answer:
        "Absolutely! All websites we build are fully responsive and optimized for all screen sizes.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer support plans for updates, performance monitoring, and technical assistance post-launch.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="w-full bg-black py-20 px-6 mt-14">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00bfff]">
            Grow Your Business With Our
            <span
              id="rotatingText"
              className="text-white ml-2 transition-opacity duration-500 ease-in-out"
            ></span>
          </h1>

          <p className="text-lg text-gray-400">
            Your success is our mission. We build brands, drive traffic, and boost conversions.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#ff4081] text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition-all"
          >
            Schedule a Call
          </Link>
        </div>
      </section>


      {/* About Section */}
      <section className="bg-white text-gray-900 w-full py-12 px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Infinity Tech <span className="text-sky-500">Vision</span>
          </h2>
          <div className="w-16 h-1 bg-sky-400 mx-auto mt-3 mb-6 rounded"></div>
        </div>

        <div className="w-full">
          <p className="text-gray-800 text-base md:text-lg leading-7 md:leading-8 tracking-normal text-justify">
            Infinity Tech Vision is a forward-thinking technology company focused on digital
            innovation. We empower businesses through cutting-edge software, AI, and cloud
            solutions. Our mission is to bridge the gap between ideas and execution with smart
            technology. With a team of passionate engineers and designers, we craft scalable
            digital experiences. From startups to enterprises, we offer tailored strategies for
            sustainable growth. Innovation, integrity, and impact are at the core of everything we
            build. Join us on a journey to transform ideas into intelligent solutions.
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
              href="/contact"
              className="bg-[#ff4081] hover:bg-[#e73370] text-black px-6 py-2 rounded-[35px] font-semibold inline-block"
            >
              Schedule a Meeting
            </Link>
          </div>

          {/* Right Rectangles (White Background) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/ff7f50/bell.png"
                className="h-6 w-6"
                alt="Digital Presence"
              />
              <span className="font-semibold">Digital Presence Boost</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/ff4081/combo-chart.png"
                className="h-6 w-6"
                alt="Revenue Growth"
              />
              <span className="font-semibold">Strategic Revenue Growth</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/f06292/increase.png"
                className="h-6 w-6"
                alt="Growth Engine"
              />
              <span className="font-semibold">Growth Engine Strategy</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/9c27b0/line-chart.png"
                className="h-6 w-6"
                alt="Data Insights"
              />
              <span className="font-semibold">Smart Data Insights</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/ec407a/settings.png"
                className="h-6 w-6"
                alt="Tech Ecosystem"
              />
              <span className="font-semibold">Unified Tech Ecosystem</span>
            </div>

            <div className="feature-box bg-white text-black flex items-center gap-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/50/4caf50/robot-2.png"
                className="h-6 w-6"
                alt="AI Automation"
              />
              <span className="font-semibold">AI-Powered Automation</span>
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
          <span className="text-black">India&apos;s Leading Digital</span>{" "}
          <span className="text-[#00bfff]">Marketing Agency</span>
        </h2>



        {/* Main Content Grid */}
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-sm uppercase text-gray-500 font-semibold tracking-wider">
              About Us
            </p>

            <h3 className="text-2xl md:text-3xl leading-snug text-black">
              <span className="font-bold text-black">Helping Clients</span>{" "}
              <span className="font-bold text-[#00bfff]">Build Digital Media</span>{" "}
              <span className="font-bold text-black">Presence</span>
              <br />
              <span className="font-bold text-[#00bfff]">Since 2014</span>
            </h3>

            <p className="text-black leading-relaxed">
              Founded in 2014, we are one of the leading{" "}
              <span className="font-semibold text-[#00bfff]">
                Digital Media Agencies In India.
              </span>
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
            <img
              src="/images/modern-office.jpg"
              alt="Office Image"
              className="w-full max-w-md rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* Your Other Page Content */}

      {/* Services Section */}
      <section className="bg-black py-20 px-4 text-white">
        {/* Heading with underline */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Navigate The Digital Frontier With <br />
            <span className="text-[#ff4081]">Our Engineering Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff4081] mt-4 mx-auto rounded"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Service Card */}
          <a
            href="#mobile-app"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Mobile App Development</div>
            <p className="text-sm text-gray-400">
              Responsive apps crafted to engage users and meet business goals.
            </p>
          </a>

          <a
            href="#software"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Software Development</div>
            <p className="text-sm text-gray-400">
              Custom software for process efficiency and tech-driven innovation.
            </p>
          </a>

          <a
            href="#digital"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Digital Transformation</div>
            <p className="text-sm text-gray-400">
              Modernize systems and drive competitive growth through tech.
            </p>
          </a>

          <a
            href="#uiux"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">UI/UX Strategy</div>
            <p className="text-sm text-gray-400">
              Design-led innovation for intuitive, functional experiences.
            </p>
          </a>

          <a
            href="#consulting"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">IT Consulting</div>
            <p className="text-sm text-gray-400">
              Guidance on tech strategy, digital roadmaps, and system decisions.
            </p>
          </a>

          <a
            href="#devops"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">DevOps</div>
            <p className="text-sm text-gray-400">
              Boost delivery cycles, automate pipelines, and scale with quality.
            </p>
          </a>

          <a
            href="#cloud"
            className="cursor-pointer bg-[#111] p-6 rounded-xl border border-[#1f1f1f] hover:shadow-xl hover:border-[#ff4081] transition block"
          >
            <div className="text-xl font-medium mb-2">Cloud Services</div>
            <p className="text-sm text-gray-400">
              Manage cloud infra securely and efficiently across your stack.
            </p>
          </a>

          {/* CTA Card */}
          <a
            href="#services"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                className="w-10 h-10 object-contain invert"
                alt="Microsoft"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="w-10 h-10 object-contain invert"
                alt="Apple"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
                className="w-10 h-10 object-contain invert"
                alt="Google"
              />
              <h3 className="text-lg font-semibold text-white">Google</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              “From UX strategy to delivery — everything was top-tier.”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          <span className="text-pink-500">Get Started</span> with Us
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mb-8 rounded"></div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(
              `Thank you ${name}! We will contact you soon regarding ${service}.`
            );
            setName("");
            setNumber("");
            setService("");
          }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Number */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-white mb-1">
              Your Number
            </label>
            <input
              id="number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-1">
              Select a Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">-- Choose a Service --</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="app-development">App Development</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Submit
          </button>

          {/* Status message */}
          {status && <p className="text-center text-white mt-2">{status}</p>}
        </form>
      </section>


      <section className="bg-white w-full py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
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
