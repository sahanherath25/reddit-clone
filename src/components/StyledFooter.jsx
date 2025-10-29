// components/Footer.tsx
'use client';

import "../styles/components/StyledFooter.css"
import React from 'react';

import {
    Github,
    Twitter,
    Linkedin,
    MessageCircle,
    Heart,
    Mail,
    ExternalLink,
    Sparkles,
    Crown
} from 'lucide-react';

const StyledFooter = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: MessageCircle, href: "#", label: "Discord" },
        { icon: Mail, href: "#", label: "Email" }
    ];

    const quickLinks = [
        { name: "About", href: "#" },
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Blog", href: "#" }
    ];

    const supportLinks = [
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Community", href: "#" },
        { name: "Contact", href: "#" }
    ];

    return (
        <footer className="footer">
            {/* Animated background elements */}
            <div className="footer-background">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
                <div className="footer-glow"></div>
            </div>

            {/* Main footer content */}
            <div className="footer-content">
                {/* Brand section */}
                <div className="footer-section brand-section">
                    <div className="brand-logo">
                        <Crown className="logo-icon" />
                        <span className="brand-name">Nexus</span>
                        <Sparkles className="sparkle-icon" />
                    </div>
                    <p className="brand-description">
                        Building the future of digital experiences with cutting-edge technology
                        and innovative solutions.
                    </p>
                    <div className="social-links">
                        {socialLinks.map(({ icon: Icon, href, label }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="social-link"
                                aria-label={label}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3 className="section-title">Quick Links</h3>
                    <ul className="footer-links">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="footer-link"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <ExternalLink size={14} />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-section">
                    <h3 className="section-title">Support</h3>
                    <ul className="footer-links">
                        {supportLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="footer-link"
                                    style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
                                >
                                    <ExternalLink size={14} />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-section newsletter-section">
                    <h3 className="section-title">Stay Updated</h3>
                    <p className="newsletter-text">
                        Get the latest news and updates delivered to your inbox.
                    </p>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">
                            <Mail size={16} />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="footer-bottom">
                <div className="footer-divider"></div>
                <div className="bottom-content">
                    <div className="copyright">
                        <span>© {currentYear} Nexus. Made with </span>
                        <Heart className="heart-icon" size={16} />
                        <span> for the community</span>
                    </div>

                    <div className="legal-links">
                        <a href="#" className="legal-link">Privacy Policy</a>
                        <a href="#" className="legal-link">Terms of Service</a>
                        <a href="#" className="legal-link">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default StyledFooter;