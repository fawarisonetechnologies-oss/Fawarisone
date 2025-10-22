"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(`Thank you ${name}! We will contact you soon regarding ${service}.`);
    setName("");
    setNumber("");
    setService("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white mt-15">
      {/* 404 Message */}
      <h1 className="text-6xl font-extrabold mb-4 mt-10">404</h1>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#00bfff] mb-4">
        Grow Your Business With Our
        <span
          id="rotatingText"
          className="text-white ml-2 transition-opacity duration-500 ease-in-out"
        ></span>
      </h1>
      <p className="text-lg text-gray-400">
        Your success is our mission. We build brands, drive traffic, and boost conversions.
      </p>

      <button
        onClick={() => router.push("/")}
        className="inline-block bg-[#ff4081] text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition-all mt-8"
      >
        Go Home
      </button>

      {/* Fixed HR element */}
      <hr className="custom-hr" />

      {/* Get Started Section */}
      <section className="bg-black py-20 w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          <span className="text-pink-500">Get Started</span> with Us
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mb-8 rounded"></div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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
    </div>
  );
}
