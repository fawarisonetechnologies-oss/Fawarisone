import { TrendingUp, MousePointerClick, Code, Megaphone, ArrowUpRight, ShoppingBag, Stethoscope, Banknote, GraduationCap, Cloud, Home as HomeIcon, ConciergeBell, Car, Brush, Wind, Zap, Atom, Layers, Server, Database, Flame } from "lucide-react";
import ServicesHero from "@/components/ServicesHero";
import ServicesFaq from "@/components/ServicesFaq";
import ContactSection from "@/components/ContactSection";
import "./services.css";

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
  { stat: "16K+", title: "Clients Served", description: "Trusted by startups, SMBs, and enterprises across India and worldwide." },
  { stat: "10+", title: "Years Experience", description: "A decade of expertise in digital marketing, SEO, and web development." },
  { stat: "5M+", title: "Keywords Ranked", description: "Proven track record of ranking keywords on Google's first page." },
  { stat: "98%", title: "Client Satisfaction", description: "We deliver results that exceed expectations every single time." },
];

const faqSchema = [
  { question: "What kind of web development services does Fawarisone Technologies offer to people like me?", answer: "Fawarisone Technologies offers web development services in India. They do business website development, eCommerce website development, custom web application development and WordPress website development. The websites they make are fast, secure and good for search engines." },
  { question: "How money does it cost to develop a website in India?", answer: "The cost of website development in India depends on what the website looks like what features it has and what it can do. Fawarisone Technologies offers web development services that're affordable for startups and also good for businesses that are growing." },
  { question: "How long does it take to build a website from start to finish?", answer: "If you want a business website it can take around 7 to 15 days. If you want a custom web development or an eCommerce website it can take around 3 to 6 weeks. This is because these websites are more complex." },
  { question: "Will my website be good for search engines. Work well on mobile phones?", answer: "Yes Fawarisone Technologies builds websites that're good for search engines and work well on mobile phones. They make sure the website loads fast and has a structure so it can rank higher on Google." },
  { question: "Do you offer custom web development or template-based websites?", answer: "Fawarisone Technologies offers both custom website development services for business needs and template-based website design for people who want to save money." },
  { question: "Do you offer eCommerce website development services to people who want to sell things", answer: "Yes Fawarisone Technologies specializes in eCommerce website development in India. They create stores that are secure can handle a lot of traffic and are designed to sell things. They also help with payment gateway integration." },
  { question: "Which is better: WordPress or custom web development?", answer: "WordPress website development is good for businesses. If you need advanced features custom web development services are better. Custom web development is also good for businesses that need solutions and want to grow." },
  { question: "What kind of marketing services do you offer to help businesses grow?", answer: "Fawarisone Technologies offers marketing services in India including SEO services Google Ads, social media marketing and content marketing. These services help increase traffic and generate leads." },
  { question: "How does SEO help improve website ranking and traffic?", answer: "Fawarisone Technologies SEO services help websites rank higher on Google. They do this by optimizing content, keywords, technical SEO and backlinks. This results in organic traffic and leads." },
  { question: "Why should I choose Fawarisone Technologies for web development and digital marketing?", answer: "Fawarisone Technologies is a trusted web development company in India with, over 16 years of experience. They deliver custom websites SEO-optimized solutions and digital marketing strategies that help businesses grow online." },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen">

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqSchema.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": { "@type": "Answer", "text": item.answer },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://fawarisone.com/services",
              "url": "https://fawarisone.com/services",
              "name": "Web Development & Digital Marketing Services in India: Fawarisone Technologies",
              "description": "web development, SEO, PPC, branding and digital marketing services, how they work, and how Fawarisone Technologies helps grow your business in India.",
              "inLanguage": "en-IN",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://fawarisone.com",
                "url": "https://fawarisone.com",
                "name": "Fawarisone Technologies",
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fawarisone.com" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fawarisone.com/services" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://fawarisone.com/#organization",
              "name": "Fawarisone Technologies",
              "url": "https://fawarisone.com",
              "logo": "https://fawarisone.com/favicon.ico",
              "description": "Fawarisone Technologies is a leading web development and digital marketing company in India offering SEO, PPC, branding, social media marketing and custom website development services.",
              "foundingDate": "2014",
              "areaServed": "IN",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5th Floor, Silicon Towers, Sector 63",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "IN",
              },
              "telephone": "+91-9540003620",
              "email": "FawarisOneTechnologies@gmail.com",
              "sameAs": ["https://www.linkedin.com/company/fawarisone"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "eCommerce Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Design" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing" } },
                ],
              },
            },
          ]),
        }}
      />

      {/* HERO — client component (rotating text) */}
      <ServicesHero />

      {/* SERVICES GRID SECTION */}
      <section className="services-grid-section" aria-label="Our Digital Services">
        <div className="services-grid-header">
          <h2>Our <span style={{ color: "#00bfff" }}>Digital Services</span></h2>
          <div className="services-grid-underline" />
          <p>
            We offer marketing and web development services to help your business grow. These services are designed to increase visibility and maximize the return on investment, for your business. Our digital marketing services can really help your business.
          </p>
        </div>
        <div className="services-grid">
          {services.map((cat, i) => (
            <div key={i} className="services-card" style={{ ["--accent" as string]: cat.color }}>
              <h3 className="services-card-category" style={{ color: cat.color }}>
                <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                  <cat.icon size={16} style={{ color: cat.color }} />
                </span>
                {cat.category}
              </h3>
              <div className="services-card-tags">
                {cat.items.map((item, j) => (
                  <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                    <span className="services-card-tag-text">{item.label}</span>
                    <ArrowUpRight size={11} className="services-card-tag-icon" />
                  </a>
                ))}
              </div>
              {cat.subCategory && (
                <>
                  <div className="services-card-sub-divider" />
                  <h3 className="services-card-sub-title" style={{ color: cat.color }}>
                    <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                      <Megaphone size={16} style={{ color: cat.color }} />
                    </span>
                    {cat.subCategory.name}
                  </h3>
                  <div className="services-card-tags">
                    {cat.subCategory.items.map((item, j) => (
                      <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                        <span className="services-card-tag-text">{item.label}</span>
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
            Industries We Empower with <span>Web Solutions</span>
          </h2>
          <div className="services-industries-underline" />
          <p className="services-industries-desc">
            We make websites and other things for the internet that&apos;re just right, for what your business does. We can build a website or a big platform, whatever your industry needs.
          </p>
          <div className="services-industries-grid">
            <div className="services-industry-card"><ShoppingBag className="services-industry-icon" /><p>E-commerce</p></div>
            <div className="services-industry-card"><Stethoscope className="services-industry-icon" /><p>Healthcare</p></div>
            <div className="services-industry-card"><Banknote className="services-industry-icon" /><p>Finance</p></div>
            <div className="services-industry-card"><GraduationCap className="services-industry-icon" /><p>Education</p></div>
            <div className="services-industry-card"><Cloud className="services-industry-icon" /><p>Tech &amp; SaaS</p></div>
            <div className="services-industry-card"><HomeIcon className="services-industry-icon" /><p>Real Estate</p></div>
            <div className="services-industry-card"><ConciergeBell className="services-industry-icon" /><p>Hospitality</p></div>
            <div className="services-industry-card"><Car className="services-industry-icon" /><p>Automotive</p></div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="services-tech">
        <div className="text-center">
          <h2 className="services-tech-heading">Technologies <span>We Use</span></h2>
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

      {/* CONTENT SCROLL BOX */}
      <section className="services-content-scroll-section">
        <div className="services-content-scroll-wrap">
          <div className="content-scroll-box">
            <div className="content-scroll-inner">
              <h2>Grow Your Business with Expert Web Development &amp; Digital Marketing Services in India</h2>
              <p>In todays world having an online presence is really important for a business to do well. You cannot ignore this. If you have a business whether it is a business or a big company, your website and the way you market your business online are very important. Your website and online marketing help your business get customers get people interested, in what your business does and make money for your business.</p>
              <p>At <a href="https://www.fawarisone.com/">Fawarisone Technologies</a> we are very good at making websites and marketing plans that work for our clients. We have been doing this for, over sixteen years. We help companies make websites that&apos;re strong get found on search engines and turn visitors into customers who pay.</p>
              <p>We do not just make websites we make experiences that help businesses grow and get results that you can measure.</p>
              <h2>Why Choose Us&nbsp;</h2>
              <p>Choosing the right digital company can make or break your online success. Here&rsquo;s why businesses trust us:</p>
              <h3>Proven Industry Experience</h3>
              <p>With over sixteen years of experience in building websites and online marketing we have helped businesses, in different fields. We know what people want and how markets are changing. This helps us to make plans that really work. We do not just try things and hope they work. We use methods that we know get results. We have seen these methods work well times before.</p>
              <h3>Complete Digital Solutions</h3>
              <p>We do everything for you in one place so you do not have to deal with a lot of companies. Our team takes care of your website from the beginning designing it and then promoting it using SEO, PPC and social media. Our team does all of this for your website, which means things are consistent our team works well together. Your business gets results faster.</p>
              <h3>Result-Oriented Approach</h3>
              <p>Our main goal is to get you results that you can actually see. We want to help you get more people to visit your website get more people to buy from you and make the most of the money you spend. Every plan we make is designed to help your business do well in the run. We make sure that what we do is what you want for your business.</p>
              <h2>Our Services</h2>
              <p>We help your business grow on the internet. Our services are made to make your business grow online. We have services to help your business. Our services are good for your business to grow on the internet.</p>
              <h2>Web Development Services</h2>
              <p>Your website is the base of your presence on the internet. We make websites that work well and look really good. These websites are also designed to help you get customers. We make sure our websites are good, at turning visitors into people who buy things from you.</p>
              <h3>Custom Website Development</h3>
              <p>We create websites that fit your business needs and target audience. Our websites are not like others that use pre-made templates. They are custom made to make your business look unique and help with branding. This way your business stands out. Users get a personalized experience.</p>
              <h3>&nbsp;E-commerce Website Development</h3>
              <p>We make websites that help you sell things on the internet. These e-commerce websites have ways to pay and are easy to use. We also make sure the pages that show your products are good so you can sell stuff.</p>
              <h3>Responsive &amp; SEO-Friendly Websites</h3>
              <p>With most people using their phones to browse it&apos;s really important to have a website that works well on mobile. We make websites that look great on phones, tablets and computers. Our websites are also built to work well with search engines so they load fast are easy to navigate and show up in search results.</p>
              <h2>Digital Marketing Services</h2>
              <p>We help your business find the right people to talk to at the right time. We do this through marketing. It is a way to reach people who&apos;re interested, in what you have to offer.</p>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>SEO helps get visitors to your website over time. We make your website better for search engines by using the right keywords, technical SEO methods and good content. Our main aim is to make your website show up higher on search engines, like Google.</p>
              <h3>Social Media Marketing (SMM)</h3>
              <p>Social media platforms like Facebook and Instagram are great, for getting your brand out there and talking to people. We make campaigns that reach the right people and help them trust your brand.</p>
              <h2>Paid Advertising (PPC Services)</h2>
              <p>You can get a lot of people to visit your website and find out about your business right away with paid advertising. These ads are really good, at getting people to do what you want them to do like buy something from you or sign up for your newsletter.</p>
              <h3>Google Ads Management</h3>
              <p>We take care of Google Ads campaigns that are just right for people who are looking for the services you offer. Our way of doing things makes sure you get the most, out of the money you spend on ads.</p>
              <h2>Branding Services</h2>
              <p>Your brand identity is really important because it is what makes your business stick, in peoples minds and be memorable.</p>
              <h3>&nbsp;Logo Design</h3>
              <p>Your brand identity is really important. It is what makes your business stick, in peoples minds. This is what makes your business be memorable.</p>
              <h3>&nbsp;Brand Strategy</h3>
              <p>We are here to help you make a brand plan that tells people what you are about what you want to say and how you want to look. This means that everything you do to market yourself will look and sound the same.</p>
              <h2>Ready to Grow Your Business Online?</h2>
              <p>Do not let your competitors take your customers from you. It is time for you to build an online presence for your business and generate consistent leads for your business.</p>
              <p>Contact Fawarisone Technologies today, for your business.</p>
              <p>Call now: 9540003620 | 9540003236 || Visit: www.fawarisone.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION — same as home page */}
      <ContactSection />

      {/* FAQ SECTION — client component */}
      <ServicesFaq />

      {/* CTA SECTION */}
      <section className="services-cta" aria-label="Get Started with Fawarisone Technologies">
        <div className="services-cta-inner">
          <h2>Ready to <span>Grow Your Business</span> Online?</h2>
          <p>
            Partner with India&apos;s leading digital marketing agency for SEO, PPC, website
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
