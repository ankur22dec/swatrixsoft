"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { getCategoryPageContent } from "./categoryPageContent";

const CategoryTechStack = () => {
  const pathname = usePathname();
  const content = getCategoryPageContent(pathname);
  const capabilities = Array.isArray(content?.capabilities)
    ? content.capabilities
    : [];

  return (
    <div className="row g-4">
      {capabilities.map((item) => (
        <div key={item.title} className="col-md-6">
          <div className="swx-capability-card">
            <div className="swx-capability-icon">
              <i className={item.icon} />
            </div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTechStack;

