"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function CloudMigrationCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">Enterprise Cloud Migration</h1>
                <p className="subtitle-desc mt--20">
                  Migrated legacy infrastructure to modern cloud architecture with zero downtime
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">Cloud Architecture</span>
                  <span className="meta-badge">DevOps</span>
                  <span className="meta-badge">Enterprise</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Cloud Migration"
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
                  Our large enterprise client faced significant operational challenges with their on-premise infrastructure:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>Infrastructure Costs:</strong> Massive spending on data center maintenance and operations
                  </li>
                  <li>
                    <strong>Scalability Issues:</strong> Difficulty scaling resources to match demand fluctuations
                  </li>
                  <li>
                    <strong>Disaster Recovery:</strong> Limited redundancy and backup capabilities
                  </li>
                  <li>
                    <strong>Technical Debt:</strong> Legacy systems difficult to maintain and update
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
                <h5 className="subtitle-heading mt--40 mb--20">Migration Strategy</h5>
                <div className="tech-stack-grid">
                  <div className="tech-item-box">
                    <h6>Cloud Platform</h6>
                    <p>AWS with multi-region setup for high availability</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Infrastructure</h6>
                    <p>Containerization with Kubernetes for orchestration</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>CI/CD</h6>
                    <p>Automated deployment pipelines with GitOps practices</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Monitoring</h6>
                    <p>Prometheus, Grafana for real-time visibility</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Features</h5>
                <ul className="features-list mt--20">
                  <li>☁️ Multi-region AWS architecture</li>
                  <li>🔄 Zero-downtime migration strategy</li>
                  <li>📊 Advanced monitoring and alerting</li>
                  <li>🔐 Enhanced security posture (VPC, IAM, KMS)</li>
                  <li>💾 Automated backup and disaster recovery</li>
                  <li>⚡ Auto-scaling based on demand</li>
                  <li>🪵 Centralized logging for compliance</li>
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
                  <div className="result-number">60%</div>
                  <div className="result-label">Cost Reduction</div>
                  <p>Eliminated expensive data center operations</p>
                </div>
                <div className="result-card">
                  <div className="result-number">0</div>
                  <div className="result-label">Downtime</div>
                  <p>Zero downtime during entire migration</p>
                </div>
                <div className="result-card">
                  <div className="result-number">3x</div>
                  <div className="result-label">Faster Scaling</div>
                  <p>Now scales resources in minutes instead of days</p>
                </div>
                <div className="result-card">
                  <div className="result-number">99.99%</div>
                  <div className="result-label">Availability</div>
                  <p>Enterprise-grade reliability and redundancy</p>
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
                <h2 className="cta-title">Ready for Your Cloud Journey?</h2>
                <p className="cta-description mt--20">
                  Modernize your infrastructure with our proven cloud migration strategies. We ensure minimal risk and maximum ROI.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Start Your Migration
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
