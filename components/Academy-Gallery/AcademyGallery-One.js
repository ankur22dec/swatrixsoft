"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCategoryPageContent } from "./categoryPageContent";

const AcademyGalleryOne = () => {
  const pathname = usePathname();
  const content = getCategoryPageContent(pathname);

  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="content">
          <Image
            className="w-100 radius-10"
            src={content.imageOne}
            width={650}
            height={720}
            alt={content.sectionOneTitle}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="inner pl--30 pl_sm--0 pl_md--0 pl_lg--0">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">What You Get</span>
            <h2 className="title">{content.sectionOneTitle}</h2>

            <p className="description mt--20">
              {content.sectionOneDescription}
            </p>

            <div className="swx-feature-grid mt--30">
              {content.highlights.map((item) => (
                <div className="swx-feature-item" key={item}>
                  <i className="feather-check-circle" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyGalleryOne;