import Link from "next/link";

const BreadCrumb = ({ title, text }) => {
  const normalized = `${title || ""} ${text || ""}`.toLowerCase();

  const heroImage = normalized.includes("ai")
    ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1800&h=700&fit=crop"
    : normalized.includes("mobile") || normalized.includes("app")
    ? "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1800&h=700&fit=crop"
    : normalized.includes("marketing")
    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&h=700&fit=crop"
    : "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&h=700&fit=crop";

  return (
    <div
      className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 swx-service-breadcrumb"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage: `linear-gradient(rgba(16, 21, 47, 0.78), rgba(16, 21, 47, 0.78)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center">
              <h2 className="title">{title}</h2>
              <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="feather-chevron-right"></i>
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">{text}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
