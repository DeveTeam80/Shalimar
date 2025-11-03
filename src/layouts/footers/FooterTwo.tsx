// File: layouts/footers/FooterTwo.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function FooterShalimar() {
  return (
    <footer className="footer-section overflow-hidden position-relative footer-style3">
      <div className="footer-widgets-wrapper footer-widget-wrapperv03">
        <div className="container">
          <div className="row g-3 g-md-4 g-4 justify-content-between">
            {/* Company Info */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/" className="footer-logo">
                    <Image src="/assets/img/logo/logo-light.png" alt="Shalimar Farms Logo" width={150} height={50} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="pre-pragraph">
                    Home of premium Kota goats. Breeding excellence since 1984.
                  </p>
                  <ul className="list-area list-contact mt-3">
                    <li>
                      <a href="https://maps.google.com/?q=Pune,Maharashtra,India" target="_blank" rel="noopener noreferrer">
                        <MapPin size={16} className="inline-block mr-2" /> 
                        Pune, Maharashtra, India
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@shalimarfarms.com">
                        <Mail size={16} className="inline-block mr-2" /> 
                        info@shalimarfarms.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919876543210">
                        <Phone size={16} className="inline-block mr-2" /> 
                        +91 98765 43210
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">Quick Links</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="#why-choose-us">Why Choose Us</Link></li>
                  {/* <li><Link href="#gallery">Gallery</Link></li> */}
                  <li><Link href="#faq">FAQs</Link></li>
                  <li><Link href="#contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Our Goats */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">Our Goats</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/goats/legend">Legend</Link></li>
                  <li><Link href="/goats/sultanehind">Sultanehind</Link></li>
                  <li><Link href="/goats/gazi">Gazi</Link></li>
                  <li><Link href="/goats/daughter-of-legend">Daughter Of Legend</Link></li>
                  <li><Link href="/goats/mother-india">Mother India</Link></li>
                </ul>
              </div>
            </div>

            {/* Care Resources - NEW */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">Care Guide</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/care-guide/weight-gain">Weight Gain Guide</Link></li>
                  <li><Link href="/care-guide/sultan-bloodline">Sultan Bloodline</Link></li>
                  <li><Link href="/care-guide/pregnancy-care">Pregnancy Care</Link></li>
                  <li><Link href="/care-guide/kid-care">Kid Care</Link></li>
                  <li><Link href="/care-guide">View All Guides</Link></li>
                </ul>
              </div>
            </div>

            {/* Social Connect */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">Connect With Us</h3>
                </div>
                <p className="white-clr mb-3">Follow us for daily updates and goat care tips</p>
                <div className="social-wrapper social-empact d-flex align-items-center gap-3">
                  <a href="https://facebook.com/shalimarfarms" target="_blank" rel="noopener noreferrer" className="white-clr" aria-label="Facebook">
                    <i className="white-clr fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/shalimarfarms" target="_blank" rel="noopener noreferrer" className="white-clr" aria-label="Instagram">
                    <i className="white-clr fab fa-instagram"></i>
                  </a>
                  <a href="https://youtube.com/@shalimarfarms" target="_blank" rel="noopener noreferrer" className="white-clr" aria-label="YouTube">
                    <i className="white-clr fab fa-youtube"></i>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="white-clr" aria-label="WhatsApp">
                    <i className="white-clr fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              Copyright © {new Date().getFullYear()} <strong>Shalimar Farms</strong>. All Rights Reserved.
            </p>
            <p className="wow fadeInRight color-2" data-wow-delay=".3s">
              Developed & Designed by <a href="https://visionaryservices.in" target="_blank" rel="noopener noreferrer" className="">Visionary Services</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}