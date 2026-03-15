"use client";

import { useState, useEffect } from "react";
import { Globe, FileText, ShoppingCart, Palette, Smartphone, Wind, Wrench, Code, Video, Film, Clapperboard, Sparkles, Pen, Share2, Play, TrendingUp, Search, BookOpen, Users, MousePointerClick, Mail, Megaphone, Star, BarChart2, Phone, MapPin } from "lucide-react";

const allServices = [
  // Services
  "Website Development", "Landing Pages", "eCommerce Solutions", "UI/UX Design",
  "Mobile App Development", "WordPress Development", "Website Maintenance", "Custom Web Applications",
  // Creative
  "Video Editing", "Corporate Videos", "Explainer Videos", "Motion Graphics",
  "Logo Animation", "Social Media Videos", "Brand Films", "Video Marketing",
  // Marketing
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

export default function ContactPage() {

const [open,setOpen] = useState(false)
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [service, setService] = useState("")
  const [status, setStatus] = useState("")

const services = [
"SEO Services",
"PPC Advertising",
"AI SEO Optimization",
"Website Development",
"Ecommerce Website Development",
"Digital Marketing Services"
]

const [index,setIndex] = useState(0)
const [fade,setFade] = useState(true)

useEffect(()=>{

const interval = setInterval(()=>{

setFade(false)

setTimeout(()=>{

setIndex((prev)=>(prev + 1) % services.length)
setFade(true)

},500)

},3000)

return ()=> clearInterval(interval)

},[])

return (

<div className="bg-black text-gray-100 min-h-screen">

{/* HERO SECTION */}

<section className="w-full bg-black py-20 px-6 mt-14 text-center space-y-6">

<h1 className="text-4xl sm:text-5xl font-bold text-[#00bfff]">

Let’s Build Something Great Together
<br/>

<span
className={`text-pink-500 inline-block mt-4 transition-opacity duration-500 ${
fade ? "opacity-100" : "opacity-0"
}`}
>

{services[index]}

</span>

</h1>

<p className="text-lg text-gray-400 max-w-3xl mx-auto">
Looking for professional SEO services, Google Ads PPC management,
AI powered SEO, or modern website development? Fawarisone Technologies
helps businesses grow with powerful digital solutions.
</p>

<a
href="https://wa.me/919540003620"
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
>

Chat on WhatsApp

</a>

</section>


{/* SERVICES SCROLLER */}
<section className="w-full bg-white py-16 overflow-hidden">
  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
      Our <span className="text-[#00bfff]">Digital Services</span>
    </h2>
    <div className="w-24 h-1 bg-[#00bfff] mx-auto mb-8 rounded"></div>
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

{/* CONTACT DETAILS SECTION */}
<section className="relative bg-black py-20 px-6 overflow-hidden">

  {/* Decorative sparkles */}
  <Sparkles className="absolute top-8 left-8 w-6 h-6 text-[#00bfff] opacity-30 animate-pulse" />
  <Sparkles className="absolute top-16 right-12 w-4 h-4 text-pink-500 opacity-40 animate-pulse" />
  <Sparkles className="absolute bottom-10 left-1/4 w-5 h-5 text-[#00bfff] opacity-20 animate-pulse" />
  <Sparkles className="absolute bottom-16 right-8 w-6 h-6 text-pink-400 opacity-30 animate-pulse" />
  <Sparkles className="absolute top-1/2 left-6 w-3 h-3 text-yellow-400 opacity-40 animate-pulse" />
  <Sparkles className="absolute top-1/3 right-1/4 w-4 h-4 text-yellow-300 opacity-25 animate-pulse" />

  {/* Glowing blobs */}
  <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#00bfff]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

  <div className="text-center mb-14 relative z-10">
    <div className="flex items-center justify-center gap-2 mb-3">
      <Sparkles className="w-5 h-5 text-[#00bfff]" />
      <span className="text-[#00bfff] text-sm uppercase tracking-widest font-medium">Let&apos;s Connect</span>
      <Sparkles className="w-5 h-5 text-[#00bfff]" />
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-white">
      Get In <span className="text-[#00bfff]">Touch</span>
    </h2>
    <div className="w-24 h-1 bg-[#00bfff] mx-auto mt-3 rounded"></div>
  </div>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
    {/* Left - Contact Info */}
    <div className="flex-1 space-y-10">
      <div className="flex items-start gap-6">
        <div className="p-4 rounded-full bg-[#00bfff]/10 border border-[#00bfff]/30">
          <Phone className="w-6 h-6 text-[#00bfff]" />
        </div>
        <div>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Phone</p>
          <a href="tel:+919540003620" className="text-white text-xl font-semibold hover:text-[#00bfff] transition">+91 9540003620</a>
        </div>
      </div>

      <div className="w-full h-px bg-gray-800" />

      <div className="flex items-start gap-6">
        <div className="p-4 rounded-full bg-[#00bfff]/10 border border-[#00bfff]/30">
          <Mail className="w-6 h-6 text-[#00bfff]" />
        </div>
        <div>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Email</p>
          <a href="mailto:contactus@fawarisone.com" className="text-white text-xl font-semibold hover:text-[#00bfff] transition">contactus@fawarisone.com</a>
        </div>
      </div>

      <div className="w-full h-px bg-gray-800" />

      <div className="flex items-start gap-6">
        <div className="p-4 rounded-full bg-[#00bfff]/10 border border-[#00bfff]/30">
          <MapPin className="w-6 h-6 text-[#00bfff]" />
        </div>
        <div>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Address</p>
          <p className="text-white text-xl font-semibold leading-relaxed">H-66 GF KH 260/63, Aali Vihar,<br/>New Delhi, South Delhi,<br/>Delhi - 110076, India</p>
        </div>
      </div>
    </div>

    {/* Right - Logo */}
    <div className="flex-1 flex justify-center items-center relative">
      <Sparkles className="absolute -top-4 -left-4 w-5 h-5 text-pink-400 animate-pulse" />
      <Sparkles className="absolute -bottom-4 -right-4 w-5 h-5 text-[#00bfff] animate-pulse" />
      <Sparkles className="absolute top-1/2 -right-6 w-4 h-4 text-yellow-400 animate-pulse" />
      <img
        src="/FawarisOneTechnologies-logo.png"
        alt="FawarisOne Technologies"
        className="w-72 md:w-96 object-contain animate-smoothPulse"
      />
    </div>
  </div>
</section>

{/* MAP SECTION */}
<section className="w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0!2d77.3350072!3d28.5435736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5576023bdf7:0x24ead7f66b645053!2sfawarisone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</section>

{/* GET STARTED SECTION */}
      <section className="bg-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          <span className="text-pink-500">Get Started</span> with Us
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mb-8 rounded"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setStatus(`Thank you ${name}! We will contact you soon regarding ${service}.`)
            setName("")
            setNumber("")
            setService("")
          }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-white mb-1">Your Number</label>
            <input
              id="number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your Number"
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-1">Select a Service</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
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
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Submit
          </button>
          {status && <p className="text-center text-white mt-2">{status}</p>}
        </form>
      </section>

</div>

)

}