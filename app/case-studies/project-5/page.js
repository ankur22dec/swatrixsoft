"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function ErpSystemCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">Enterprise ERP System</h1>
                <p className="subtitle-desc mt--20">
                  Custom ERP solution that unified operations across finance, supply chain, and HR departments
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">Enterprise Software</span>
                  <span className="meta-badge">ERP</span>
                  <span className="meta-badge">Integration</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                  alt="ERP System"
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
                  A multinational manufacturing company struggled with disconnected business systems:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>System Fragmentation:</strong> Multiple legacy systems with no integration
                  </li>
                  <li>
                    <strong>Data Inconsistency:</strong> Different departments had conflicting information
                  </li>
                  <li>
                    <strong>Manual Processes:</strong> Significant manual data entry and reconciliation
                  </li>
                  <li>
                    <strong>Poor Visibility:</strong> No real-time view of business operations
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
                <h5 className="subtitle-heading mt--40 mb--20">Implementation Approach</h5>
                <div className="tech-stack-grid">
                  <div className="tech-item-box">
                    <h6>ERP Platform</h6>
                    <p>Custom-built on SAP with tailored workflows</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Integration</h6>
                    <p>API-based integration with legacy systems</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Analytics</h6>
                    <p>Business Intelligence dashboards with real-time reporting</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Training</h6>
                    <p>Comprehensive change management and user training</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Modules</h5>
                <ul className="features-list mt--20">
                  <li>💰 Finance & Accounting automation</li>
                  <li>🏭 Supply Chain Management optimization</li>
                  <li>👥 Human Resources & Payroll integration</li>
                  <li>📦 Inventory Management with real-time tracking</li>
                  <li>📊 Advanced Business Intelligence</li>
                  <li>🔗 Master data governance</li>
                  <li>📱 Mobile ERP access</li>
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
                  <div className="result-number">40%</div>
                  <div className="result-label">Operational Efficiency</div>
                  <p>Reduced process cycle time significantly</p>
                </div>
                <div className="result-card">
                  <div className="result-number">$2.5M</div>
                  <div className="result-label">Annual Savings</div>
                  <p>Eliminated manual processes and errors</p>
                </div>
                <div className="result-card">
                  <div className="result-number">95%</div>
                  <div className="result-label">Data Accuracy</div>
                  <p>Unified source of truth across organization</p>
                </div>
                <div className="result-card">
                  <div className="result-number">24/7</div>
                  <div className="result-label">Visibility</div>
                  <p>Real-time insights into business operations</p>
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
                <h2 className="cta-title">Ready to Modernize Your Enterprise?</h2>
                <p className="cta-description mt--20">
                  We&apos;ll help you implement an ERP system that drives operational excellence and unlocks growth potential.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Discuss Your Needs
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
