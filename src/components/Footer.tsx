"use client";
import Link from "next/link";
import { FaTwitter, FaTelegram, FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
                    {/* Agency Info */}
                    <div className="max-w-md">
                        <div className="flex flex-col items-start text-left space-y-4">
                            <div className="logo">
                                {/* Logo */}
                                <Link href="/" className="flex items-center">
                                    <img
                                        src="/FawarisOneTechnologies-logo.png" // Make sure your logo is in the public/ folder
                                        alt="Fawarisone"
                                        className="h-14 w-auto" // Adjust height; width auto keeps aspect ratio
                                    />
                                </Link>
                            </div>


                            <p className="text-gray-400 text-sm leading-relaxed">
                                📍 Fawaris One, 5th Floor, Silicon Towers,
                                <br /> Sector 63, Noida, UP 201301
                                <br /> 📞 +91-9876543210
                                <br /> ✉️ FawarisOneTechnologies@gmail.com </p>


                            {/* Social Icons */}
                            <div className="flex space-x-4 text-lg text-white mt-2">
                                <a href="#" className="hover:text-[#00bfff]"><FaTwitter /></a>
                                <a href="#" className="hover:text-[#00bfff]"><FaTelegram /></a>
                                <a href="#" className="hover:text-[#00bfff]"><FaLinkedinIn /></a>
                                <a href="#" className="hover:text-[#00bfff]"><FaYoutube /></a>
                                <a href="#" className="hover:text-[#00bfff]"><FaInstagram /></a>
                                <a href="#" className="hover:text-[#00bfff]"><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Services</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li>Website Development</li>
                                <li>Landing Pages</li>
                                <li>eCommerce Solutions</li>
                                <li>UI/UX Design</li>
                                <li>Mobile App Development</li>
                                <li>WordPress Development</li>
                                <li>Website Maintenance</li>
                                <li>Custom Web Applications</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Creative</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li>Video Editing</li>
                                <li>Corporate Videos</li>
                                <li>Explainer Videos</li>
                                <li>Motion Graphics</li>
                                <li>Logo Animation</li>
                                <li>Social Media Videos</li>
                                <li>Brand Films</li>
                                <li>Video Marketing</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Marketing</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li>SEO Optimization</li>
                                <li>Content Marketing</li>
                                <li>Social Media Management</li>
                                <li>Pay Per Click (PPC)</li>
                                <li>Email Marketing</li>
                                <li>Online Branding</li>
                                <li>Influencer Marketing</li>
                                <li>Performance Marketing</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Resources</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li>Case Studies</li>
                                <li>Blog</li>
                                <li>Portfolio</li>
                                <li>Tutorials</li>
                                <li>Marketing Guides</li>
                                <li>Industry Insights</li>
                                <li>FAQs</li>
                                <li>Free Consultation</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Company</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li>About Us</li>
                                <li>Our Team</li>
                                <li>Careers</li>
                                <li>Contact Us</li>
                                <li>Client Testimonials</li>
                                <li>Partnerships</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-xs text-gray-400 space-y-2">
                    <p><strong>Explore Topics:</strong> Web Design | Branding | Marketing | Video Production | eCommerce | SEO | Apps | Digital Ads</p>
                    <p><strong>About Us:</strong> Our Story | Vision & Mission | Privacy Policy | Terms & Conditions | Careers | Press | Partnerships</p>
                    <p><strong>Important Links:</strong> Behance | Dribbble | Clutch | GoodFirms | Upwork | LinkedIn</p>
                    <p><strong>Client Support:</strong> Submit Ticket | Live Chat | Help Center | Knowledge Base</p>
                    <p><strong>Careers:</strong> Join Our Team | Internships</p>
                    <p><strong>Upcoming Launches:</strong> AI Website Builder | Video Editing Suite | Marketing Automation Tools</p>
                </div>
            </div>
        </footer>
    );
}
