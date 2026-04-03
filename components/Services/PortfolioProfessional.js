"use client";

import Image from "next/image";
import Link from "next/link";

import portfolio01 from "../../public/images/portfolio/portfolio-01.jpg";
import portfolio02 from "../../public/images/portfolio/portfolio-02.jpg";
import portfolio03 from "../../public/images/portfolio/portfolio-03.jpg";

const PortfolioProfessional = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Drycool Chillers",
      category: "Industrial Solutions",
      description:
        "Premium industrial cooling solutions provider. We designed and developed a comprehensive web presence showcasing their advanced chiller technology, product specifications, and technical support services.",
      fullDescription:
        "Drycool Chillers is a leader in industrial cooling technology. Our team created a professional, technical website that effectively communicates their innovative cooling solutions to B2B clients worldwide. The site features detailed product catalogs, technical specifications, and a dedicated support portal.",
      link: "https://www.drycoolchillers.com",
      image: portfolio01,
      technologies: ["React", "Next.js", "Node.js"],
      results: [
        "60% increase in online inquiries",
        "Improved product visibility",
        "Enhanced technical documentation",
      ],
    },
    {
      id: 2,
      title: "Aanyasoft",
      category: "Software Services",
      description:
        "Leading software development and IT consulting firm. We created a modern, responsive platform that highlights their comprehensive service offerings and successful project portfolio.",
      fullDescription:
        "Aanyasoft provides innovative software solutions to enterprises globally. We developed an engaging website that showcases their expertise in custom software development, cloud solutions, and IT consulting. The platform effectively demonstrates their capabilities through case studies and client testimonials.",
      link: "https://www.aanyasoft.com",
      image: portfolio02,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      results: [
        "40% boost in qualified leads",
        "Streamlined project showcase",
        "Enhanced client credibility",
      ],
    },
    {
      id: 3,
      title: "JCTPL",
      category: "Industry & Projects",
      description:
        "Specialized industry project and solutions provider. We built a professional platform that effectively communicates their project expertise, industry solutions, and company achievements.",
      fullDescription:
        "JCTPL is known for delivering specialized project solutions across various industries. Our team developed a comprehensive platform that showcases their diverse portfolio, technical expertise, and track record of successful implementations for enterprise clients.",
      link: "https://www.jctpl.in",
      image: portfolio03,
      technologies: ["Next.js", "Node.js", "MongoDB"],
      results: [
        "Enhanced industry presence",
        "Improved project visibility",
        "Streamlined client communication",
      ],
    },
  ];

  return (
    <div className="container">
      {/* Portfolio Header */}
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">
              Our <span className="theme-gradient">Professional</span> Work
            </h2>
            <p className="description has-medium-font-size mt--20">
              We partner with industry leaders to create innovative digital
              solutions. Below are select projects that demonstrate our
              expertise in web development, software solutions, and digital
              transformation across diverse sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Cards - Main Grid */}
      <div className="row g-5 mt--40">
        {portfolioProjects.map((project) => (
          <div className="col-lg-4 col-md-6 col-12" key={project.id}>
            <div className="rbt-card variation-01 rbt-hover h-100">
              <div className="rbt-card-img">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    width={520}
                    height={360}
                    alt={project.title}
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-badge-3 bg-primary-opacity mb--15">
                  {project.category}
                </h5>
                <h4 className="rbt-card-title">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h4>
                <p className="rbt-card-text">{project.description}</p>

                {/* Technologies */}
                <div className="mt--20">
                  <p className="has-small-font-size fw-bold">
                    Technologies:
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rbt-badge-3 bg-pink-opacity"
                        style={{ fontSize: "12px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="mt--20">
                  <p className="has-small-font-size fw-bold">Key Results:</p>
                  <ul style={{ fontSize: "13px", listStyle: "none" }}>
                    {project.results.map((result, idx) => (
                      <li key={idx} className="mb--8">
                        <i className="feather-check text-success me-2"></i>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rbt-card-bottom mt--30">
                  <a className="rbt-btn-link" href={project.link} target="_blank"
                    rel="noopener noreferrer">
                    View Website
                    <i className="feather-external-link ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extended Portfolio Details Section */}
      <div className="row mt--80">
        <div className="col-lg-12">
          <div className="section-title text-center mb--60">
            <h2 className="title">
              Why <span className="theme-gradient">Choose</span> Us
            </h2>
            <p className="description has-medium-font-size mt--20">
              Our portfolio demonstrates our commitment to delivering
              high-quality, professional solutions that drive business results.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Features */}
      <div className="row g-5 mt--30">
        {[
          {
            title: "Proven Track Record",
            description:
              "Successfully partnered with industry-leading companies to deliver transformative digital solutions.",
            icon: "feather-award",
          },
          {
            title: "Technical Excellence",
            description:
              "Expert team leveraging cutting-edge technologies and best practices in software development.",
            icon: "feather-code",
          },
          {
            title: "Professional Approach",
            description:
              "Dedicated project management and transparent communication throughout the development lifecycle.",
            icon: "feather-target",
          },
          {
            title: "Measurable Results",
            description:
              "We focus on delivering solutions that generate concrete business value and ROI for our clients.",
            icon: "feather-trending-up",
          },
        ].map((feature, idx) => (
          <div className="col-lg-6 col-md-12" key={idx}>
            <div className="rbt-feature feature-style-1 feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className={feature.icon}></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">{feature.title}</h6>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="row mt--80">
        <div className="col-lg-12">
          <div className="rbt-card bg-gradient-6 p--60 text-center">
            <h3 className="title text-white mb--30">
              Ready to <span>Start Your Project?</span>
            </h3>
            <p className="description text-white mb--40">
              Join leading companies who trust us for their digital
              transformation. Let's build something great together.
            </p>
            <Link className="rbt-btn btn-white" href="/contact">
              <span className="btn-text">Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfessional;
