"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCategoryPageContent } from "./categoryPageContent";

const AcademyGalleryThree = () => {
  const pathname = usePathname();
  const content = getCategoryPageContent(pathname);

  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="content">
          <Image
            className="w-100 radius-10"
            src={content.imageThree}
            width={650}
            height={720}
            alt={content.sectionThreeTitle}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="inner pl--30 pl_sm--0 pl_md--0 pl_lg--0">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">Project Impact</span>
            <h2 className="title">{content.sectionThreeTitle}</h2>
            <p className="description mt--20">
              {content.sectionThreeDescription}
            </p>

            <div className="swx-outcome-list mt--30">
              {content.outcomes.map((item) => (
                <div className="swx-outcome-item" key={item}>
                  <i className="feather-arrow-right-circle" />
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

export default AcademyGalleryThree;