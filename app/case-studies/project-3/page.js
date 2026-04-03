"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function MobileBankingCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">Mobile Banking Application</h1>
                <p className="subtitle-desc mt--20">
                  Secure, scalable mobile banking platform serving millions of users worldwide
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">Mobile App</span>
                  <span className="meta-badge">FinTech</span>
                  <span className="meta-badge">Security-First</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                  alt="Mobile Banking App"
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
                  Our client needed a modern mobile banking app to compete with digital-native banks:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>Security Compliance:</strong> Meet strict regulatory requirements (PCI-DSS, ISO 27001)
                  </li>
                  <li>
                    <strong>Global Scale:</strong> Support millions of concurrent users across multiple continents
                  </li>
                  <li>
                    <strong>Legacy Integration:</strong> Connect with existing banking systems and infrastructure
                  </li>
                  <li>
                    <strong>User Experience:</strong> Compete with modern fintech apps in terms of UX and speed
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
                <h5 className="subtitle-heading mt--40 mb--20">Technology Stack</h5>
                <div className="tech-stack-grid">
                  <div className="tech-item-box">
                    <h6>Mobile</h6>
                    <p>React Native for iOS and Android with native security modules</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Backend</h6>
                    <p>Microservices architecture with Node.js and Go services</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Security</h6>
                    <p>End-to-end encryption, biometric authentication, fraud detection</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Infrastructure</h6>
                    <p>Kubernetes on AWS with multi-region redundancy</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Features</h5>
                <ul className="features-list mt--20">
                  <li>🔐 End-to-end encryption for all transactions</li>
                  <li>👆 Biometric authentication (Face ID, Touch ID)</li>
                  <li>💳 Real-time payment processing</li>
                  <li>🛡️ AI-powered fraud detection</li>
                  <li>📱 Offline mode capabilities</li>
                  <li>🌍 Multi-currency support</li>
                  <li>⚡ Sub-second transaction confirmation</li>
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
                  <div className="result-number">2M+</div>
                  <div className="result-label">Active Users</div>
                  <p>Successfully serving millions worldwide</p>
                </div>
                <div className="result-card">
                  <div className="result-number">99.99%</div>
                  <div className="result-label">Uptime</div>
                  <p>24/7 reliability for mission-critical operations</p>
                </div>
                <div className="result-card">
                  <div className="result-number">4.8/5</div>
                  <div className="result-label">App Rating</div>
                  <p>Consistently top-rated across app stores</p>
                </div>
                <div className="result-card">
                  <div className="result-number">0</div>
                  <div className="result-label">Security Breaches</div>
                  <p>Perfect security record since launch</p>
                </div>
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
                <h2 className="cta-title">Ready to Build Your FinTech Solution?</h2>
                <p className="cta-description mt--20">
                  We specialize in secure, scalable financial applications. Let us help you create the next generation of banking.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Get in Touch
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
