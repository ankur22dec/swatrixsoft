"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import PremiumITBanner from "./PremiumITBanner";
import PremiumITServices from "./PremiumITServices";
import PremiumITExpertise from "./PremiumITExpertise";
import PremiumITShowcase from "./PremiumITShowcase";
import PremiumITBlogSection from "./PremiumITBlogSection";
import PremiumITCTA from "./PremiumITCTA";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import NewsletterFour from "../Newsletters/Newsletter-Four";
import FooterThree from "../Footer/Footer-Three";
import Separator from "../Common/Separator";

const PremiumITHomepage = ({ blogs = [] }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  return (
    <>
      {/* Premium Banner Section */}
      <div className="rbt-banner-area rbt-banner-premium section-bottom-overlay" id="home">
        <PremiumITBanner />
      </div>

      {/* Core Services Section */}
      <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">OUR EXPERTISE</span>
                <h2 className="title">Premium IT Solutions</h2>
                <p className="subtitle-desc">
                  End-to-end services for modern businesses
                </p>
              </div>
            </div>
          </div>
          <PremiumITServices />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="rbt-about-area bg-color-white rbt-section-gap">
        <div className="container">
          <PremiumITExpertise />
        </div>
      </div>

      {/* Portfolio/Case Studies Showcase */}
      <div className="rbt-case-study-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">SUCCESS STORIES</span>
                <h2 className="title">Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <PremiumITShowcase />
        </div>
      </div>

      {/* Key Features/Why Work With Us */}
      <div className="rbt-features-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <h2 className="title">Why Choose Swatrixsoft?</h2>
                  <p className="description mt--20">
                    We're not just another IT company. We combine cutting-edge technology with strategic thinking to deliver solutions that drive real business growth.
                  </p>
                </div>
                <ul className="feature-list mt--40">
                  <li className="feature-item">
                    <div className="icon">
                      <i className="feather-check-circle"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">10+ Years of Excellence</h6>
                      <p>Proven track record with 500+ successful projects</p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon">
                      <i className="feather-check-circle"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">Expert Team</h6>
                      <p>150+ skilled developers, designers, and architects</p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon">
                      <i className="feather-check-circle"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">24/7 Support</h6>
                      <p>Round-the-clock assistance for all your needs</p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon">
                      <i className="feather-check-circle"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">Agile Delivery</h6>
                      <p>Fast, flexible, and focused on your success</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-image">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop"
                  alt="Why Choose Us - Professional Services"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="rbt-technology-stack bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">MODERN STACK</span>
                <h2 className="title">Technologies We Master</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tech-stack-wrapper">
                <div className="tech-category">
                  <h5 className="category-title">Frontend</h5>
                  <div className="tech-items">
                    {["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="tech-category">
                  <h5 className="category-title">Backend</h5>
                  <div className="tech-items">
                    {["Node.js", "Python", "Java", "Go", "Rust", ".NET"].map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="tech-category">
                  <h5 className="category-title">AI & ML</h5>
                  <div className="tech-items">
                    {["TensorFlow", "PyTorch", "LLMs", "OpenAI", "Hugging Face", "Scikit-learn"].map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="tech-category">
                  <h5 className="category-title">Cloud</h5>
                  <div className="tech-items">
                    {["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"].map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights / Blog */}
      <div className="rbt-insights-area rbt-section-gap bg-color-white">
        <div className="container">
          <PremiumITBlogSection blogs={blogs} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">CLIENT FEEDBACK</span>
                <h2 className="title">What Our Clients Say</h2>
              </div>
            </div>
          </div>
          <TestimonialFour />
        </div>
      </div>

      {/* CTA Section */}
      <PremiumITCTA />

      {/* Newsletter Section */}
      <div className="rbt-newsletter-area rbt-section-gap bg-color-white">
        <div className="container">
          <NewsletterFour />
        </div>
      </div>

      <Separator />
      <FooterThree />
    </>
  );
};

export default PremiumITHomepage;
