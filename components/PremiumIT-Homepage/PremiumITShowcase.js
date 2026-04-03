import Image from "next/image";
import Link from "next/link";

const PremiumITShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Drycool Chillers",
      category: "Industrial Solutions Website",
      description:
        "Corporate website focused on industrial chillers, product showcase, and lead generation.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
      siteUrl: "https://www.drycoolchillers.com",
    },
    {
      id: 2,
      title: "Aanyasoft",
      category: "Software Company Website",
      description:
        "Business website highlighting software services, portfolio, and technology capabilities.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      siteUrl: "https://www.aanyasoft.com",
    },
    {
      id: 3,
      title: "JCTPL",
      category: "Enterprise Web Platform",
      description:
        "Professional enterprise web presence designed for trust, clarity, and conversions.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      siteUrl: "https://www.jctpl.in",
    },
  ];

  return (
    <div className="row row--15">
      {projects.map((project) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mt--30" key={project.id}>
          <div className="showcase-card">
            <div className="showcase-image">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
              />
              <div className="showcase-overlay">
                <span className="category-badge">{project.category}</span>
                <Link
                  className="showcase-overlay-link"
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <i className="feather-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="showcase-content">
              <h5 className="title">
                <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </Link>
              </h5>
              <p className="description">{project.description}</p>
              <Link
                className="read-more"
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Live Site <i className="feather-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumITShowcase;
