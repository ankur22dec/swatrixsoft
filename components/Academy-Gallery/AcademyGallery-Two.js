"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCategoryPageContent } from "./categoryPageContent";

const AcademyGalleryTwo = () => {
  const pathname = usePathname();
  const content = getCategoryPageContent(pathname);

  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-7 order-2 order-lg-1">
        <div className="pe-lg-4">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">How We Build</span>
            <h2 className="title">{content.sectionTwoTitle}</h2>
            <p className="description mt--20">
              {content.sectionTwoDescription}
            </p>
          </div>

          <div className="row g-4 mt--10">
            {content.capabilities.map((item) => (
              <div key={item.title} className="col-md-6">
                <div className="swx-capability-card">
                  <div className="swx-capability-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-lg-5 order-1 order-lg-2">
        <div className="position-relative">
          <Image
            className="rounded-4 shadow-lg"
            src={content.imageTwo}
            width={650}
            height={760}
            alt={content.sectionTwoTitle}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AcademyGalleryTwo;