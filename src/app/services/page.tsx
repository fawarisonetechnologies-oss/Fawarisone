"use client";

import { useState, useEffect } from "react";
import { TrendingUp, MousePointerClick, Code, Megaphone, ArrowUpRight, ShoppingBag, Stethoscope, Banknote, GraduationCap, Cloud, Home as HomeIcon, ConciergeBell, Car, Brush, Wind, Zap, Atom, Layers, Server, Database, Flame } from "lucide-react";
import "./services.css";

const rotatingServices = [
  "SEO Optimization",
  "PPC Advertising",
  "Website Development",
  "Social Media Marketing",
  "eCommerce Solutions",
  "Performance Marketing",
];

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
  {
    stat: "16K+",
    title: "Clients Served",
    description: "Trusted by startups, SMBs, and enterprises across India and worldwide.",
  },
  {
    stat: "10+",
    title: "Years Experience",
    description: "A decade of expertise in digital marketing, SEO, and web development.",
  },
  {
    stat: "5M+",
    title: "Keywords Ranked",
    description: "Proven track record of ranking keywords on Google's first page.",
  },
  {
    stat: "98%",
    title: "Client Satisfaction",
    description: "We deliver results that exceed expectations every single time.",
  },
];

export default function ServicesPage() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingServices.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              "mainEntity": faqData.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer,
                },
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
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://fawarisone.com",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://fawarisone.com/services",
                  },
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
              "sameAs": [
                "https://www.linkedin.com/company/fawarisone",
              ],
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

      {/* HERO SECTION */}
      <section className="services-hero" aria-label="Services Hero">
        <h1>
         Web Development & Digital Marketing Services
          <br />
          <span
            className="services-hero-rotating"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {rotatingServices[index]}
          </span>
        </h1>
        <p>
          Fawarisone Technologies helps businesses grow online by doing marketing and making websites. They do lots of things like SEO and PPC. They also make websites and do social media marketing for businesses. Fawarisone Technologies gives businesses results that they can actually measure, which is really helpful, for Fawarisone Technologies clients. This is what Fawarisone Technologies does.
        </p>
        <a
          href="https://wa.me/919540003620"
          target="_blank"
          rel="noopener noreferrer"
          className="services-hero-btn"
        >
          Get Free Consultation
        </a>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="services-grid-section" aria-label="Our Digital Services">
        <div className="services-grid-header">
          <h2>Our <span style={{ color: '#00bfff' }}>Digital Services</span></h2>
          <div className="services-grid-underline" />
          <p>
            We offer marketing and web development services to help your business grow. These services are designed to increase visibility and maximize the return on investment, for your business. Our digital marketing services can really help your business.
          </p>
        </div>
        <div className="services-grid">
          {services.map((cat, i) => (
            <div
              key={i}
              className="services-card"
              style={{ ['--accent' as string]: cat.color }}
            >
              <h2 className="services-card-category" style={{ color: cat.color }}>
                <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                  <cat.icon size={16} style={{ color: cat.color }} />
                </span>
                {cat.category}
              </h2>
              <div className="services-card-tags">
                {cat.items.map((item, j) => (
                  <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                    <h3 className="services-card-tag-text">{item.label}</h3>
                    <ArrowUpRight size={11} className="services-card-tag-icon" />
                  </a>
                ))}
              </div>
              {cat.subCategory && (
                <>
                  <div className="services-card-sub-divider" />
                  <h2 className="services-card-sub-title" style={{ color: cat.color }}>
                    <span className="services-card-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                      <Megaphone size={16} style={{ color: cat.color }} />
                    </span>
                    {cat.subCategory.name}
                  </h2>
                  <div className="services-card-tags">
                    {cat.subCategory.items.map((item, j) => (
                      <a key={j} href={`/services/${item.slug}`} className="services-card-tag">
                        <h3 className="services-card-tag-text">{item.label}</h3>
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
            Industries We Empower with{" "}
            <span>Web Solutions</span>
          </h2>
          <div className="services-industries-underline" />
          <p className="services-industries-desc">
            We make websites and other things for the internet that're just right, for what your business does. We can build a website or a big platform, whatever your industry needs.
          </p>
          <div className="services-industries-grid">
            <div className="services-industry-card">
              <ShoppingBag className="services-industry-icon" />
              <p>E-commerce</p>
            </div>
            <div className="services-industry-card">
              <Stethoscope className="services-industry-icon" />
              <p>Healthcare</p>
            </div>
            <div className="services-industry-card">
              <Banknote className="services-industry-icon" />
              <p>Finance</p>
            </div>
            <div className="services-industry-card">
              <GraduationCap className="services-industry-icon" />
              <p>Education</p>
            </div>
            <div className="services-industry-card">
              <Cloud className="services-industry-icon" />
              <p>Tech &amp; SaaS</p>
            </div>
            <div className="services-industry-card">
              <HomeIcon className="services-industry-icon" />
              <p>Real Estate</p>
            </div>
            <div className="services-industry-card">
              <ConciergeBell className="services-industry-icon" />
              <p>Hospitality</p>
            </div>
            <div className="services-industry-card">
              <Car className="services-industry-icon" />
              <p>Automotive</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="services-tech">
        <div className="text-center">
          <h2 className="services-tech-heading">
            Technologies <span>We Use</span>
          </h2>
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
              <h1>Grow Your Business with Expert Web Development &amp; Digital Marketing Services in India</h1>
              <p>In todays world having an online presence is really important for a business to do well. You cannot ignore this. If you have a business whether it is a business or a big company, your website and the way you market your business online are very important. Your website and online marketing help your business get customers get people interested, in what your business does and make money for your business.</p>
              <p>At <a href="https://www.fawarisone.com/">Fawarisone Technologies</a> we are very good at making websites and marketing plans that work for our clients. We have been doing this for, over sixteen years. We help companies make websites that&apos;re strong get found on search engines and turn visitors into customers who pay.</p>
              <p>We do not just make websites we make experiences that help businesses grow and get results that you can measure.</p>

              <h2>Why Choose Us&nbsp;</h2>
              <p>Choosing the right digital company can make or break your online success. Here&rsquo;s why businesses trust us:</p>

              <h3>Proven Industry Experience</h3>
              <p>With over sixteen years of experience in building websites and online marketing we have helped businesses, in different fields.We know what people want and how markets are changing.This helps us to make plans that really work. We do not just try things and hope they work. We use methods that we know get results. We have seen these methods work well times before.</p>

              <h3>Complete Digital Solutions</h3>
              <p>We do everything for you in one place so you do not have to deal with a lot of companies. Our team takes care of your website from the beginning designing it and then promoting it using SEO, PPC and social media. Our team does all of this for your website, which means things are consistent our team works well together. Your business gets results faster.</p>

              <h3>Result-Oriented Approach</h3>
              <p>Our main goal is to get you results that you can actually see. We want to help you get more people to visit your website get more people to buy from you and make the most of the money you spend. Every plan we make is designed to help your business do well in the run. We make sure that what we do is what you want for your business. Our goal is to help you succeed with your business and make the most of your website traffic and conversion rates and get the return, on investment or ROI.</p>

              <h2>Our Services</h2>
              <p>We help your business grow on the internet. Our services are made to make your business grow online. We have services to help your business. Our services are good for your business to grow on the internet. We want to help your business grow online.</p>

              <h1>&nbsp;Web Development Services</h1>
              <p>Your website is the base of your presence on the internet. We make websites that work well and look really good. These websites are also designed to help you get customers. We make sure our websites are good, at turning visitors into people who buy things from you.</p>

              <h3>Custom Website Development</h3>
              <p>We create websites that fit your business needs and target audience. Our websites are not like others that use -made templates. They are custom made to make your business look unique and help with branding. This way your business stands out. Users get a personalized experience. When we build a website we think about how users will feel when they use it. how fast it will. How well it will handle lots of traffic. We build websites for businesses and services that can grow as your business grows. Whether you need a website, for your company or a platform to offer services. we create solutions that meet your needs and help your business succeed.</p>

              <h3>&nbsp;E-commerce Website Development</h3>
              <p>We make websites that help you sell things on the internet. These e-commerce websites have ways to pay and are easy to use. We also make sure the pages that show your products are good so you can sell stuff.</p>
              <p>We want to make sure your online store can handle a lot of products without slowing down. So you can add products whenever you want. We build websites for companies that just started and, for big e-commerce companies. Our e-commerce websites help these companies sell products.</p>

              <h3>Responsive &amp; SEO-Friendly Websites</h3>
              <p>With most people using their phones to browse it&apos;s really important to have a website that works well on mobile. We make websites that look great on phones, tablets and computers. Our websites are also built to work well with search engines so they load fast are easy to navigate and show up in search results. This means your website will show up higher on Google and more people will find it naturally.</p>

              <h1>Digital Marketing Services</h1>
              <p>We help your business find the right people to talk to at the time. We do this through marketing. It is a way to reach people who&apos;re interested, in what you have to offer. Our digital marketing helps you connect with the audience. It is done at the time to get the best results. We make sure your business gets noticed by the people. The right time is important to get your message across. So we use marketing to help your business succeed. It helps you reach people who want what you have. We help your business grow by finding the audience.</p>

              <h3>Search Engine Optimization (SEO)</h3>
              <p>SEO helps get visitors to your website over time. We make your website better for search engines by using the keywords technical SEO methods and good content.</p>
              <p>* Our main aim is to make your website show up higher on search engines, like Google.</p>
              <p>This way people looking for your business can find it easily. With SEO work we help your website grow steadily and get better rankings. This means more people can find your business when searching online. Our goal is to help you get visitors and sales from search engines. We use effective SEO techniques to achieve this.</p>

              <h3>Social Media Marketing (SMM)</h3>
              <p>Social media platforms like Facebook and Instagram are great, for getting your brand there and talking to people. We make campaigns that reach the right people and help them trust your brand.</p>
              <p>We focus on making content choosing the right audience and checking how well our campaigns do. This way we can make sure people really engage with your brand and see it often.</p>
              <p>We use Facebook and Instagram to build brand awareness. Our campaigns help you connect with your audience.</p>
              <p>Our strategies help you get the most out of media. We create content target the people and check how well we are doing.</p>

              <h3>Online Reputation Management</h3>
              <p>Your online reputation really matters to customers when they are making decisions. We make sure your business looks good online by keeping an eye on reviews what people say about you and when your business is mentioned online.</p>
              <p>We deal with feedback and show people the good things about your business so customers trust you and think you are a good business. This helps keep customers coming back to your business, which&apos;s really important, for your online reputation and your business</p>

              <h1>Paid Advertising (PPC Services)</h1>
              <p>You can get a lot of people to visit your website and find out about your business away with paid advertising. These ads are really good, at getting people to do what you want them to do like buy something from you or sign up for your newsletter. Paid advertising campaigns can bring you a lot of traffic and leads.</p>

              <h3>Google Ads Management</h3>
              <p>We Take care of Google Ads campaigns that are just right for people who are looking for the services you offer. Our way of doing things makes sure you get the most, out of the money you spend on ads.</p>
              <p>We do all the work from finding the words to writing the ads and keeping track of how they are doing so we can get you good leads fast with our Google Ads campaigns.</p>

              <h3>Facebook &amp; Instagram Ads</h3>
              <p>Social media advertising is really good at helping us find the right people to show our ads to. We can pick who sees our ads based on things like how old they&apos;re what they like and what they do. We make ads that are interesting and get people to do something.</p>
              <p>Our goal with these ads is to get more people to know about the company get people to show interest, in what the company&apos;s selling and get more sales. We try to do this by showing our ads to the people at the right time. We use social media advertising to make sure our ads are seen by people who will actually care about what the company&apos;s selling.</p>

              <h3>Lead Generation Campaigns</h3>
              <p>We help people make marketing plans that get leads for your business. Our way of doing things makes sure these leads are actually useful and more likely to become customers.</p>
              <p>When we look at the numbers and pick the targets your business makes more money and grows. We do this by combining data analysis and strategic targeting to get the most, out of your marketing budget and help your business grow.</p>

              <h1>&nbsp;Branding Services</h1>
              <p>Your brand identity is really important because it is what makes your business stick, in peoples minds and be memorable. Your brand identity is what people remember about your business.</p>

              <h3>&nbsp;Logo Design</h3>
              <p>Your brand identity is really important. It is what makes your business stick, in peoples minds. This is what makes your business be memorable. Your brand identity is what people remember about your business. Your brand identity is what stays with people.</p>

              <h3>&nbsp;Brand Strategy</h3>
              <p>We are here to help you make a brand plan that tells people what you are about what you want to say and how you want to look. This means that everything you do to market yourself will look and sound the same.</p>
              <p>Having a brand plan is really important because it helps you be different, from other companies and it helps you make friends with your customers that will last for a long time.</p>

              <h1>Content Writing Services</h1>
              <p>Content is key, to marketing and SEO success. It helps a lot. Good content is really important. Without it digital marketing and SEO won&apos;t work well. Content is the backbone of marketing and SEO success.</p>

              <h3>SEO Content Writing</h3>
              <p>We make content that has the keywords so your website shows up higher on search engines. Our content is good, for search engines and also fun and useful to read. This way people who visit your site have an experience and are more likely to become customers. It really helps turn visitors into buyers.</p>

              <h3>Blog &amp; Website Content</h3>
              <p>People really like content because it helps them trust the person who made it. We make blogs and website content that teaches people things tells them what is going on and keeps them interested in what we have to say.</p>
              <p>Our way of making content is to give people something so they come back, to our website and then they do what we want them to do like buy something from us.</p>

              <h1>Our Results (Social Proof)</h1>
              <p>We care about giving you results that you can measure. These results help your business grow.</p>

              <h3>Increased Website Traffic by 300%</h3>
              <p>Our SEO and marketing strategies have really helped businesses get a lot more people to visit their websites. We do this by making sure the websites are working well and by running campaigns that are targeted at the people. This helps get more people to visit the websites all the time.</p>
              <p>When more people visit a website the business has a chance to get new customers and make sales.</p>

              <h3>Generated High-Quality Leads</h3>
              <p>We want to get the right people to notice us of just trying to get a lot of people. Our campaigns are made to find people who&apos;re really interested in the services that you offer.</p>
              <p>This helps us get more people to actually buy something. It makes sure that you get a good return, on the money you spend on our campaigns.</p>

              <h3>Improved Google Rankings</h3>
              <p>We have successfully ranked websites for keywords across various industries. Our SEO techniques help websites stay visible for a time and grow steadily. Better rankings mean more visitors coming to the website naturally and less need to pay for ads. This approach ensures that our clients get growth. Websites with rankings get more organic traffic. Our techniques make sure that our clients rely less, on paid ads.</p>

              <h1>Industries We Serve</h1>
              <p>We help businesses in industries with tailored solutions. We provide solutions to companies in different fields. Our solutions are designed to meet the needs of businesses across industries. We offer solutions that are customized for businesses, in industries.</p>

              <h3>Small Businesses</h3>
              <p>We help local businesses get noticed online and attract customers who&apos;re nearby. Our approach is affordable. Gets fast results.</p>
              <p>This helps small businesses compete well in the market.</p>

              <h3>Startups</h3>
              <p>Startups need solutions that won&apos;t break the bank and can grow with them. We help them by providing plans that make it possible to expand fast without overspending. We are with startups from the beginning helping them build their brand and get their message out. We support them all the way no matter what stage they are at. Startups get help with branding and marketing, from us. We are here to help them succeed.</p>

              <h3>E-commerce Businesses</h3>
              <p>We are here to help e-commerce businesses make sales. We do this by making sure their websites are easy to use and look good. We also help them create marketing campaigns that reach the people.</p>
              <p>Our main goal with e-commerce businesses is to make their websites better, for the people who use them make their products easier to find and get more people to buy things from them.</p>
              <p><br /><br /></p>

              <h1>Why Clients Trust Us</h1>
              <p>Building trust is really important for business relationships that last a time. You need to have trust with the people you do business with so you can work well. Building trust is the key, to making business relationships strong and lasting.</p>

              <h3>Transparent Communication</h3>
              <p>We make sure to communicate honestly with our clients throughout the entire project. They are always updated on how thingsre going, what we&apos;re doing and what we&apos;ve achieved so far. This way they know exactly whats happening. Can trust us to get the job done. It also helps to avoid any confusion that might pop up during the project.</p>

              <h3>Dedicated Support</h3>
              <p>Our team is always there to help you with your questions and worries. We make sure everything runs smoothly. You get updates on time.</p>
              <p>This really helps us work well and have relationships, with our clients.</p>

              <h3>On-Time Project Delivery</h3>
              <p>We care about your time. Make sure all projects are finished on time. Our step-, by-step process helps us projects quickly and still do a great job. This means you can start offering your services and running your campaigns without waiting.</p>

              <h3>&nbsp;Long-Term Partnership Approach</h3>
              <p>We want to work with you for a time not just for a little while. Our goal is to help your business grow and get better.</p>
              <p>This means your business will keep getting better and better over time and you will have long term success with your business.</p>

              <h1>Ready to Grow Your Business Online?</h1>
              <p>Do not let your competitors take your customers from you. It is time for you to build an online presence for your business and generate consistent leads for your business.</p>
              <p>We are here to help you with every step of the way for your business. From building your website for your business to scaling your marketing efforts for your business.</p>
              <p>Contact Fawarisone Technologies today, for your business.</p>
              <p>Call now: 9540003620 | 9540003236 || Visit: www.fawarisone.com</p>

              <h1>&nbsp;Get FREE Website Audit &amp; Marketing Strategy</h1>
              <p>Do you want to know how your website is doing?</p>
              <p>We will give you a free website audit and a marketing plan to help you see what is working with your website and what needs to be improved with your website.</p>

              <h3>Detailed Website Analysis</h3>
              <p>We look at how your website&apos;s doing.</p>
              <p>* We check its speed</p>
              <p>* We check its SEO</p>
              <p>* We check how users experience it.</p>
              <p>This helps find problems that might be hurting your rankings and sales. Our report gives you tips to make your website perform better overall. It helps you fix issues with your websites performance,speed, SEO and user experience. This way you can improve your rankings and conversions.</p>

              <h3>&nbsp;Competitor Analysis</h3>
              <p>We take a look at your competitors to see what they are doing. This helps us find ways for your business to do things better.</p>
              <p>Your business can then stay ahead of the others, in the market. We do this by making a plan and putting it into action. This is how your business gets planning and execution.</p>

              <h3>Customized Growth Plan</h3>
              <p>We look at your business. Come up with a plan that is just right for you to get more visitors to your website, more people who are interested, in what you have to offer and more sales.</p>
              <p>This gives your business a path to follow so it can do well.</p>
              <p>You can get a consultation and start making your business bigger today. This is a way to help your business grow. You should claim your consultation now and see how it can help your business today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED SECTION */}
      <section className="services-form-section">
        <h2 className="services-form-heading">
          <span>Get Started</span> with Us
        </h2>
        <div className="services-form-underline" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(`Thank you ${name}! We will contact you soon regarding ${service}.`);
            setName("");
            setNumber("");
            setService("");
          }}
          className="services-form"
        >
          <div>
            <label htmlFor="svc-name" className="services-form-label">Your Name</label>
            <input
              id="svc-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              autoComplete="name"
              className="services-form-input"
            />
          </div>
          <div>
            <label htmlFor="svc-number" className="services-form-label">Your Number</label>
            <input
              id="svc-number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your Number"
              required
              autoComplete="tel"
              className="services-form-input"
            />
          </div>
          <div>
            <label htmlFor="svc-service" className="services-form-label">Select a Service</label>
            <select
              id="svc-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="services-form-select"
            >
              <option value="">-- Choose a Service --</option>
              <option value="seo">SEO Optimization</option>
              <option value="ppc">PPC Advertising</option>
              <option value="web-development">Website Development</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="ecommerce">eCommerce Development</option>
              <option value="branding">Branding & Design</option>
              <option value="performance-marketing">Performance Marketing</option>
            </select>
          </div>
          <button type="submit" className="services-form-btn">Submit</button>
          {status && <p className="services-form-status">{status}</p>}
        </form>
      </section>

      {/* FAQ SECTION */}
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

      {/* CTA SECTION */}
      <section className="services-cta" aria-label="Get Started with Fawarisone Technologies">
        <div className="services-cta-inner">
          <h2>Ready to <span>Grow Your Business</span> Online?</h2>
          <p>
            Partner with India's leading digital marketing agency for SEO, PPC, website
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
