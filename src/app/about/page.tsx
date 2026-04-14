import AboutHero from "@/components/AboutHero";
import AboutFaq from "@/components/AboutFaq";
import ContactSection from "@/components/ContactSection";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen">

      {/* HERO — client component (rotating text) */}
      <AboutHero />

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
              Top digital marketing company in India
            </h2>
            <p className="about-content-desc">
              Fawarisone Technologies is India&apos;s leading digital marketing company specializing in SEO, PPC, social media marketing, website development, and performance marketing. We help startups, SMBs, and enterprises grow online with data-driven strategies, AI-powered SEO, Google Ads, content marketing, and conversion rate optimization. Our expert team delivers measurable results — higher Google rankings, increased website traffic, quality lead generation, and maximum ROI. Whether you need local SEO, eCommerce SEO, paid advertising, or complete online branding, we build custom digital marketing solutions tailored to your business goals.
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
              <p className="about-content-box-text">At Fawarisone Technologies, we are a results-driven digital marketing company in India helping businesses grow with powerful SEO services, PPC advertising, social media marketing, and online branding strategies.</p>
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

      {/* CONTACT SECTION — same as home page */}
      <ContactSection />

      {/* FAQ SECTION — client component */}
      <AboutFaq />

    </div>
  );
}
