"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function AiAnalyticsCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">AI Analytics Platform</h1>
                <p className="subtitle-desc mt--20">
                  Advanced analytics solution powered by machine learning for real-time business insights
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">AI/ML</span>
                  <span className="meta-badge">Data Analytics</span>
                  <span className="meta-badge">Full-Stack Solution</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="AI Analytics Platform"
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
                  Our client was struggling to extract actionable insights from massive data sets. Key challenges included:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>Data Silos:</strong> Information scattered across multiple systems and databases
                  </li>
                  <li>
                    <strong>Manual Analysis:</strong> Data analysis required weeks of manual work from analysts
                  </li>
                  <li>
                    <strong>Lack of Predictive Capabilities:</strong> Could only view historical data, not predict trends
                  </li>
                  <li>
                    <strong>Poor Visualization:</strong> Complex data wasn&apos;t presented in actionable formats
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
                    <h6>AI/ML</h6>
                    <p>Python with TensorFlow for predictive modeling and ML pipelines</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Data Processing</h6>
                    <p>Apache Spark for large-scale data processing and transformation</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Frontend</h6>
                    <p>React with D3.js for advanced data visualization</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Infrastructure</h6>
                    <p>AWS with data pipelines and real-time analytics</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Features</h5>
                <ul className="features-list mt--20">
                  <li>🤖 ML-powered predictive analytics engine</li>
                  <li>📊 Real-time data aggregation from multiple sources</li>
                  <li>📈 Advanced visualization dashboards</li>
                  <li>🔮 Anomaly detection system</li>
                  <li>🎯 Automated insights and alerts</li>
                  <li>⚡ Sub-second query response times</li>
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
                  <div className="result-number">85%</div>
                  <div className="result-label">Time Saved</div>
                  <p>Automated analysis reduced work from weeks to days</p>
                </div>
                <div className="result-card">
                  <div className="result-number">250%</div>
                  <div className="result-label">Better Accuracy</div>
                  <p>ML models more accurate than manual analysis</p>
                </div>
                <div className="result-card">
                  <div className="result-number">40%</div>
                  <div className="result-label">Revenue Impact</div>
                  <p>Better decisions led to improved revenue streams</p>
                </div>
                <div className="result-card">
                  <div className="result-number">50+</div>
                  <div className="result-label">Predictions/Day</div>
                  <p>Automated forecasting and trend predictions</p>
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
                <h2 className="cta-title">Ready to Unlock the Power of AI?</h2>
                <p className="cta-description mt--20">
                  Transform your data into actionable insights. Contact us to build your custom analytics solution.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Schedule a Demo
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
