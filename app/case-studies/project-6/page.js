"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

export default function IotPlatformCaseStudy() {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      
      {/* Hero Section */}
      <div className="rbt-page-banner-area bg-color-extra2 rbt-section-gap pt--80">
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="page-title">IoT Platform Development</h1>
                <p className="subtitle-desc mt--20">
                  Connected device ecosystem processing millions of data points in real-time
                </p>
                <div className="case-meta mt--30">
                  <span className="meta-badge">IoT</span>
                  <span className="meta-badge">Real-Time Data</span>
                  <span className="meta-badge">Edge Computing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="IoT Platform"
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
                  Our client needed a comprehensive IoT solution for smart building management across multiple facilities:
                </p>
                <ul className="challenge-list mt--30">
                  <li>
                    <strong>Device Management:</strong> Handle thousands of IoT devices across distributed locations
                  </li>
                  <li>
                    <strong>Real-Time Processing:</strong> Process millions of sensor readings with minimal latency
                  </li>
                  <li>
                    <strong>Scalability:</strong> Infrastructure capable of handling exponential device growth
                  </li>
                  <li>
                    <strong>Connectivity:</strong> Support multiple wireless protocols and network conditions
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
                    <h6>Device Layer</h6>
                    <p>MQTT protocol with edge computing capabilities</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Data Streaming</h6>
                    <p>Apache Kafka for high-throughput message processing</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Backend</h6>
                    <p>Node.js microservices with time-series database</p>
                  </div>
                  <div className="tech-item-box">
                    <h6>Frontend</h6>
                    <p>React with real-time visualization and dashboards</p>
                  </div>
                </div>

                <h5 className="subtitle-heading mt--40 mb--20">Key Features</h5>
                <ul className="features-list mt--20">
                  <li>🔌 Multi-protocol device connectivity (WiFi, LoRaWAN, NB-IoT)</li>
                  <li>📊 Real-time data streaming and aggregation</li>
                  <li>🤖 ML-based anomaly detection and predictive maintenance</li>
                  <li>📱 Mobile app for device monitoring and control</li>
                  <li>⚡ Sub-second latency for critical operations</li>
                  <li>🔒 End-to-end encryption and device security</li>
                  <li>🌐 Multi-tenant architecture for scalability</li>
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
                  <div className="result-number">50K+</div>
                  <div className="result-label">Connected Devices</div>
                  <p>Managing over 50,000 IoT devices globally</p>
                </div>
                <div className="result-card">
                  <div className="result-number">25%</div>
                  <div className="result-label">Energy Savings</div>
                  <p>Intelligent optimization reduced consumption</p>
                </div>
                <div className="result-card">
                  <div className="result-number">99.95%</div>
                  <div className="result-label">Availability</div>
                  <p>Highly reliable platform with redundancy</p>
                </div>
                <div className="result-card">
                  <div className="result-number">1.5B</div>
                  <div className="result-label">Data Points/Day</div>
                  <p>Processing 1.5 billion sensor readings daily</p>
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
                <h2 className="cta-title">Ready to Build Your IoT Ecosystem?</h2>
                <p className="cta-description mt--20">
                  From smart buildings to connected enterprises, we deliver end-to-end IoT solutions tailored to your needs.
                </p>
                <div className="rbt-button-group justify-content-center mt--40">
                  <Link href="/contact" className="rbt-btn btn-white">
                    Explore IoT Solutions
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
