import Image from "next/image";
import Link from "next/link";

const PremiumITServices = () => {
  const services = [
    {
      id: 1,
      icon: "🚀",
      title: "Web Development",
      description: "Modern, scalable web applications built with the latest technologies and best practices.",
      color: "card-bg-1"
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android that users love.",
      color: "card-bg-2"
    },
    {
      id: 3,
      icon: "🤖",
      title: "AI & ML Solutions",
      description: "Intelligent systems, machine learning models, and AI-powered automation for your business.",
      color: "card-bg-3"
    },
    {
      id: 4,
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure on AWS, Azure, and GCP with optimal performance.",
      color: "card-bg-4"
    },
    {
      id: 5,
      icon: "⚙️",
      title: "Enterprise Solutions",
      description: "Complex enterprise systems, ERP, CRM, and custom software for large organizations.",
      color: "card-bg-1"
    },
    {
      id: 6,
      icon: "🔒",
      title: "Security & DevOps",
      description: "Secure infrastructure, cybersecurity, and DevOps practices for robust systems.",
      color: "card-bg-2"
    },
    {
      id: 7,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
      color: "card-bg-3"
    },
    {
      id: 8,
      icon: "✅",
      title: "QA & Testing",
      description: "Comprehensive testing strategies ensuring quality, reliability, and performance.",
      color: "card-bg-4"
    }
  ];

  return (
    <div className="row row--15">
      {services.map((service) => (
        <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30" key={service.id}>
          <div className="rbt-flipbox">
            <div className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${service.color}`}>
              <div className="rbt-flipbox-front rbt-flipbox-face inner">
                <div className="icon icon-emoji">
                  <span className="emoji-icon">{service.icon}</span>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/contact">{service.title}</Link>
                  </h5>
                  <p>{service.description}</p>
                  <Link className="rbt-btn-link stretched-link" href="/contact">
                    Explore<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="rbt-flipbox-back rbt-flipbox-face inner">
                <p>{service.description}</p>
                <Link
                  className="rbt-btn rbt-switch-btn btn-white btn-sm"
                  href="/contact"
                >
                  <span data-text="Learn More">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumITServices;
