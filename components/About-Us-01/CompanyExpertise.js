"use client";

import Image from "next/image";
import Link from "next/link";

const CompanyExpertise = () => {
  const expertise = [
    {
      id: 1,
      icon: "feather-globe",
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks like React, Next.js, and Node.js. We build scalable, responsive solutions for enterprises.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      icon: "feather-cloud",
      title: "Cloud Solutions",
      description:
        "Secure, scalable cloud infrastructure and deployment strategies. AWS, Azure, and Google Cloud expertise to optimize your applications.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      id: 3,
      icon: "feather-cpu",
      title: "AI & Machine Learning",
      description:
        "Intelligent automation and data-driven insights. We integrate AI/ML solutions to enhance business processes and decision-making.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Analytics"],
    },
    {
      id: 4,
      icon: "feather-layers",
      title: "Enterprise Architecture",
      description:
        "Designing robust, scalable systems for large organizations. Microservices, API-first architecture, and system integration expertise.",
      technologies: ["Microservices", "APIs", "System Design", "Integration"],
    },
    {
      id: 5,
      icon: "feather-lock",
      title: "Security & Compliance",
      description:
        "Industry-standard security practices and compliance frameworks. GDPR, HIPAA, and SOC 2 certified solutions for sensitive data.",
      technologies: ["Encryption", "GDPR", "HIPAA", "Best Practices"],
    },
    {
      id: 6,
      icon: "feather-trending-up",
      title: "Digital Transformation",
      description:
        "Strategic modernization of legacy systems. We guide organizations through digital evolution with proven methodologies.",
      technologies: ["Legacy Modernization", "Process Automation", "Innovation"],
    },
  ];

  return (
    <div className="rbt-expertise-area bg-color-white rbt-section-gap">
      <div className="container">
        {/* Section Header */}
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-pink-opacity">Our Expertise</span>
              <h2 className="title">
                Enterprise Solutions & <span className="theme-gradient">Technical Excellence</span>
              </h2>
              <p className="description has-medium-font-size mt--20">
                We deliver industry-leading technology solutions across web development, cloud infrastructure, AI integration, and enterprise architecture. Our multidisciplinary team brings deep expertise and proven methodologies to transform your business.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="row g-5 mt--20">
          {expertise.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div className="rbt-card rbt-hover h-100">
                <div className="rbt-card-body p--40">
                  {/* Icon */}
                  <div className="icon-wrapper mb--30">
                    <div className="icon-box bg-primary-opacity p--20" style={{ borderRadius: "10px", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={`${item.icon} text-primary`} style={{ fontSize: "28px" }}></i>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="rbt-card-title mb--15">
                    <Link href="#">{item.title}</Link>
                  </h4>

                  {/* Description */}
                  <p className="rbt-card-text mb--25">{item.description}</p>

                  {/* Technologies */}
                  <div className="tech-stack">
                    <p className="has-small-font-size fw-bold mb--10">Technologies:</p>
                    <div className="d-flex gap-2 flex-wrap">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rbt-badge-3 bg-pink-opacity"
                          style={{ fontSize: "11px", padding: "4px 8px" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt--25">
                    <Link className="rbt-btn-link" href="#">
                      Learn More <i className="feather-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt--80">
          <div className="col-lg-12">
            <div className="rbt-card bg-gradient-6 p--60 text-center">
              <h3 className="title text-white mb--20">
                Ready to Transform Your <span>Digital Future?</span>
              </h3>
              <p className="description text-white mb--40">
                Partner with us to unlock the full potential of modern technology. From strategy to implementation, we're here to support your success.
              </p>
              <Link className="rbt-btn btn-white" href="#contact">
                <span className="btn-text">Start a Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyExpertise;
