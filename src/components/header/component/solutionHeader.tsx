import React from "react";
import ImageView from "../../ImageView";

import roundshape from "../../../assets/images/header/round.svg";
import LinkTo from "../../LinkTo/linkTo";

function SolutionHeader(props: any) {
  return (
    <ul className="sub-menu">
      <li className="sub-menu-container">
        <div className="container rd-container-qua">
          <div className="menu_container">
            <div className="menu_items">
              <div className="row">
                <div className="col-12 large-col">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/development-and-design-solution.html" {...props}>Development & Design</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#development-design"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list collapse show pl-0" id="development-design">
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/software-development.html" {...props} className="enterprise-link">Enterprise Software</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/front-end-development.html" {...props} className="frontend-link">Front-end Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/mobile-app-development.html" {...props} className="mobileapp-link">Mobile App Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/backend-development.html" {...props} className="backend-link">Back-end Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/web-development.html" {...props} className="web-link">Web Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/MVP-development.html" {...props} className="mvp-link">MVP Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/ecommerce-development.html" {...props} className="ecommerce-link">eCommerce Development </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/ui-ux-design.html" {...props} className="uiux-link">UI/UX Design Services</LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/on-demand-app-development.html" {...props}>On-demand Solutions</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#on-demand"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list  collapse show pl-0" id="on-demand">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/food-delivery-app-development.html" {...props} className="food-link">Food Delivery App</LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/taxi-app-development-solution.html" {...props} className="taxi-link">Taxi App Development</LinkTo>
                        </li> */}
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/travel-app-development.html" {...props} className="travel-link">Travel App Development</LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/support-and-testing.html" {...props}>Support and Testing</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#support-testing"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list collapse show pl-0" id="support-testing">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/software-testing.html" {...props} className="softwaretesting-link">Software Testing</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/support-maintenance.html" {...props} className="support-link">Support & Maintenance</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/mobile-testing.html" {...props} className="mobiletesting-link">Mobile Testing</LinkTo>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/digital-marketing.html" {...props}>Digital Marketing</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#digital-marketing"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="digital-marketing">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/search-engine-optimization.html" {...props} className="seo-link">SEO</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/social-media-marketing.html" {...props} className="smo-link">SMO</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/content-marketing.html" {...props} className="content-link">Content Marketing</LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/api-integration.html" {...props}>API Integration</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#suppor-testing2"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="suppor-testing2">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/shipping-api-integration.html" {...props} className="shopping-link">Shipping Integration</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/payment-gateway-api-integration.html" {...props} className="paymnent-link">Payment Integration</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/social-networking-api-integration.html" {...props} className="social-link">Social Networking</LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/consulting-and-strategy-solution.html" {...props}>Consulting & Strategy</LinkTo>
                        <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#consulting-strategy"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="consulting-strategy">
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/it-consulting-services.html" className="itconsulting-link" {...props}>IT Consulting</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/setup-odc-in-india.html" className="odc-link" {...props}>ODC India</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/outsource-india.html" className="outsource-link" {...props}>Outsource India</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/product-auditing.html" className="auditing-link" {...props}>Product Auditing</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/software-product-development.html" className="sorftwate-product-link" {...props}>Software Product Development</LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/startup-consulting.html" className="startup-link" {...props}>Starup Consulting</LinkTo>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_shape">
              <ImageView src={roundshape} alt="Shape" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default SolutionHeader;
