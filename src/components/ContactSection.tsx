"use client";

import { useState } from "react";
import { Code, TrendingUp, Search, BarChart2, Phone, Mail, MapPin } from "lucide-react";
import "./contact.css";

export default function ContactSection() {
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
    sessionStorage.setItem("last_lead", JSON.stringify(leadData));
    setCSuccess(true);
    setCName(""); setCPhone(""); setCEmail(""); setCWebsite(""); setCService(""); setCBudget(""); setCMessage("");
  };

  return (
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
                  { icon: <BarChart2 className="home-contact-point-icon" />, label: "Scale", tooltip: "We help you succeed for a long time by creating systems that can grow with your business." },
                ].map((item, i) => (
                  <div key={i} className="home-contact-point">
                    <div className="home-contact-point-circle">{item.icon}</div>
                    <p className="home-contact-point-label">{item.label}</p>
                    <div className="home-contact-tooltip">{item.tooltip}</div>
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
  );
}
