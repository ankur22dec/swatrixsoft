"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function EcommerceCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">E-Commerce Platform Transformation</h1>
                <p className="subtitle-desc mt--20">
                  How we rebuilt a major e-commerce platform to increase sales by 300% and improve customer experience
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">Web Development</span>
                  <span className="meta-badge">E-Commerce</span>
                  <span className="meta-badge">Full-Stack Solution</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                  alt="E-Commerce Platform"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="rbt-case-study-section bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center mb--60">
                <h2 className="title">The Challenge</h2>
              </div>
              <div className="case-content">
                <p>
                  Our client was operating an outdated e-commerce platform built on legacy technology. The platform suffered from:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>Slow Performance:</strong> Page load times exceeded 5 seconds, leading to high bounce rates
                  </li>
                  <li>
                    <strong>Poor User Experience:</strong> Outdated UI/UX causing customer frustration and cart abandonment
                  </li>
                  <li>
                    <strong>Limited Scalability:</strong> Infrastructure couldn&apos;t handle peak traffic during promotional periods
                  </li>
                  <li>
                    <strong>Security Vulnerabilities:</strong> Legacy codebase had multiple security risks
                  </li>
                  <li>
                    <strong>Manual Processes:</strong> Order management and inventory tracking were time-consuming and error-prone
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="rbt-case-study-section bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center mb--60">
                <h2 className="title">Our Solution</h2>
              </div>
              <div className="case-content">
                <p>
                  We implemented a comprehensive transformation using modern web technologies and best practices:
                </p>
                
                <h5 className="subtitle-heading mt--40 mb--20">Technology Stack</h5>
                <div className="tech-stack-grid">
                  <div className="tech-item-box">
                    <h6>Frontend</h6>
                    <p>Next.js with React for lightning-fast performance and SEO optimization</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Backend</h6>
                    <p>Node.js with Express for scalable server architecture</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Database</h6>
                    <p>MongoDB for flexible data model and horizontal scaling</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Cloud Infrastructure</h6>
                    <p>AWS with CloudFront CDN for global performance</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Features Implemented</h5>
                <ul className="features-list mt--20">
                  <li>⚡ Advanced search with AI-powered recommendations</li>
                  <li>🛒 Optimized checkout process (reduced cart abandonment by 45%)</li>
                  <li>📱 Fully responsive mobile-first design</li>
                  <li>🔒 Enterprise-grade security with SSL/TLS encryption</li>
                  <li>💳 Multiple payment gateway integration</li>
                  <li>📊 Real-time analytics dashboard</li>
                  <li>🔄 Automated inventory management system</li>
                  <li>📧 Personalized email marketing automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="rbt-case-study-section bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center mb--60">
                <h2 className="title">Results & Impact</h2>
              </div>
              
              <div className="results-grid mt--40">
                <div className="result-card">
                  <div className="result-number">300%</div>
                  <div className="result-label">Sales Increase</div>
                  <p>First year revenue growth compared to previous platform</p>
                </div>
                <div className="result-card">
                  <div className="result-number">72%</div>
                  <div className="result-label">Bounce Rate Reduction</div>
                  <p>Improved user engagement with faster load times</p>
                </div>
                <div className="result-card">
                  <div className="result-number">45%</div>
                  <div className="result-label">Cart Abandonment Down</div>
                  <p>Streamlined checkout process increased conversions</p>
                </div>
                <div className="result-card">
                  <div className="result-number">99.9%</div>
                  <div className="result-label">Uptime SLA</div>
                  <p>Reliable infrastructure ensuring business continuity</p>
                </div>
              </div>

              <div className="case-content mt--60">
                <h5 className="subtitle-heading mb--20">Additional Benefits</h5>
                <ul className="benefits-list">
                  <li>Page load time reduced from 5s to 1.2s (average)</li>
                  <li>Mobile traffic increased by 156%</li>
                  <li>Customer satisfaction score improved from 3.2 to 4.7/5</li>
                  <li>Operational costs reduced by 35% through automation</li>
                  <li>Team productivity increased with modern tools and processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rbt-cta-area bg-gradient-cta rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-cta-content text-center">
                <h2 className="cta-title">Ready to Transform Your Platform?</h2>
                <p className="cta-description mt--20">
                  Let us help you achieve similar results. Our expertise in web development and e-commerce solutions can drive significant growth for your business.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />
      <FooterThree />
    </>
  );
}
