import React from "react";
import ImageView from "../../ImageView";

import roundshape from "../../../assets/images/header/round.svg";
import LinkTo from "../../LinkTo/linkTo"; 

function HireHeader(props: any) {
  return (
    <ul className="sub-menu">
      <li className="sub-menu-container">
        <div className="container rd-container-qua">
          <div className="menu_container">
            <div className="menu_items">
              <div className="row">
                <div className="col-12 large-col">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      {/* <h3 className="menu_type under_line"> */}
                        {/* <LinkTo to="/hire-mobile-app-developers.html" {...props}> */}
                          <h3 className="menu_type under_line">
                          <LinkTo to="/hire-mobile-app-developers.html" {...props} className="web-link">
                          Hire Mobile Developers
                          </LinkTo>
                            {/* <a href="javascript:void(0)" className="web-link">Hire Mobile Developer</a> */}
                            <button
                              className="button sub-menu-button"
                              data-toggle="collapse"
                              data-target="#mobile-developer"
                            >
                              <i className="menu-status"></i>
                            </button>
                          {/* </h3> */}
                        {/* </LinkTo> */}
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="mobile-developer">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-android-developers.html" className="android-link" {...props}>
                            Hire Android Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-ios-developers.html" className="iphone-link" {...props}>
                            Hire iOS Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-flutter-developers.html" className="flutter-link" {...props}>
                            Hire Flutter Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-cross-platform-developer.html" className="cross-link" {...props}>
                            Hire Cross-platform Developers
                          </LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-react-native-developers.html" className="react-native-link"{...props}>
                            Hire React Native Developers
                          </LinkTo>
                          </li> */}
                          {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-kotlin-developers.html" className="react-native-link"{...props}>
                            Hire Kotlin Developers
                          </LinkTo>
                          
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                     
                        <h3 className="menu_type under_line">
                        <LinkTo to="/hire-web-developers.html" {...props}  className="web-link"> Hire Web Developers </LinkTo>
                          {/* <a href="javascript:void(0)" className="web-link">Hire Web Developer</a> */}
                          <button
                            className="button sub-menu-button"
                            data-toggle="collapse"
                            data-target="#web-developer"
                          >
                            <i className="menu-status"></i>
                          </button>
                        </h3>
                      <ul className="row sub-menu-navbar menu-item-list  pl-0 collapse show" id="web-developer">
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-mean-stack-developers.html" className="mean-link" {...props}>
                            Hire MEAN Stack Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-nodejs-developers.html" className="node-link" {...props}>
                            Hire Nodejs Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-mern-stack-developers.html" className="mern-link" {...props}>
                            Hire MERN Stack Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-front-end-developers.html" className="frontend-link" {...props}>
                            Hire Frontend Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-fullstack-developers.html" className="fullstack-link" {...props}>
                            Hire Full-Stack Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-php-developers.html" className="php-link" {...props}>
                            Hire PHP Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-angular-developers.html" className="angular-link" {...props}>
                            Hire Angular Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-aspdotnet-developers.html" className="asp-link" {...props}>
                            Hire ASP.NET Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-react-developers.html" className="reactjs-link" {...props}>
                            Hire React Developers{" "}
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/hire-laravel-developers.html" className="laravel-link" {...props}>
                            Hire Laravel Developers
                          </LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-webflow-designers.html" className="shopify-link"{...props}>
                            Hire Webflow Designers
                          </LinkTo>
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      
                        <h3 className="menu_type under_line">
                        <LinkTo to="/cms-development.html" {...props} className="web-link">eCommerce & CMS </LinkTo>
                          {/* <a href="javascript:void(0)" className="web-link">eCommerce & CMS</a> */}
                          <button
                            className="button sub-menu-button"
                            data-toggle="collapse"
                            data-target="#ecommercecms-developer"
                          >
                            <i className="menu-status"></i>
                          </button>
                        </h3>
                     
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="ecommercecms-developer">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-magento-developer.html" className="magento-link" {...props}>
                            Hire Magento Developers 
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-wordpress-developers.html" className="wordpress-link" {...props}>
                            Hire WordPress Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-woocommerce-developers.html" className="woocommerce-link" {...props}>
                            Hire WooCommerce Developers
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-shopify-developers.html" className="shopify-link"{...props}>
                            Hire Shopify Developers
                          </LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-salesforce-commerce-developers.html" className="shopify-link"{...props}>
                            Hire Salesforce Commerce Developers
                          </LinkTo>
                        </li> */}
                        
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-ionic-app-developers.html" className="shopify-link"{...props}>
                            Hire Ionic Developers
                          </LinkTo>
                        </li> */}
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-drupal-developers.html" className="drupal-link"{...props}>
                            Hire Drupal Developers
                          </LinkTo>
                        </li> */}
                        
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      
                        <h3 className="menu_type under_line">
                        <LinkTo to="/hire-quality-analyst-test-engineers.html" {...props} className="web-link">Hire QA</LinkTo>
                          {/* <a href="javascript:void(0)" className="web-link">Hire QA</a> */}
                          <button
                            className="button sub-menu-button"
                            data-toggle="collapse"
                            data-target="#hire-qa"
                          >
                            <i className="menu-status"></i>
                          </button>
                        </h3>
                    
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="hire-qa">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-manual-tester.html" className="manual-link" {...props}>
                            Hire Manual Tester
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-automated-tester.html" className="automated-link" {...props}>
                            Hire Automated Tester
                          </LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        Cloud Technologies
                            <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#cloud-technologies"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="cloud-technologies">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/hire-aws-developers.html" className="aws-link" {...props}>
                            Hire AWS Developers
                          </LinkTo>
                        </li>
                     
                      </ul>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        Looking for Onsite Development?
                            <button
                          className="button sub-menu-button"
                          data-toggle="collapse"
                          data-target="#hire-onsite"
                        >
                          <i className="menu-status"></i>
                        </button>
                      </h3>
                      <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="hire-onsite">
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12 onsite-developer-menu">
                          <LinkTo to="/hire-on-site-developer.html" className="onsite-link" {...props}>
                            Hire Onsite Developers
                          </LinkTo>
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

export default HireHeader;
