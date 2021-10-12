import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import ImageView from "../ImageView/index";
import "./header.scss";
import skypeicon from "../../assets/images/header/skype.svg";
import gmailicon from "../../assets/images/header/gmail.svg";
import indiaicon from "../../assets/images/header/india.svg";
import usaicon from "../../assets/images/header/usa.svg";
import arrowicon from "../../assets/images/header/logout.svg";
import isoicon from "../../assets/images/header/iso.svg";
import roundshape from "../../assets/images/header/round.svg";
import appleicon from "../../assets/images/header/apple.svg";
import ionicicon from "../../assets/images/header/ionic.svg";
import ecommerce from "../../assets/images/header/ecommerce.svg";
import healthcare from "../../assets/images/header/healthcare.svg";
import media from "../../assets/images/header/media.svg";
import finance from "../../assets/images/header/finance.svg";
import insurance from "../../assets/images/header/insurance.svg";
import security from "../../assets/images/header/security.svg";
import education from "../../assets/images/header/education.svg";
import realestate from "../../assets/images/header/real-estate.svg";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg cnslt-light customNav fixed-top">
      <div className="container rd-container-qua">
        <Link className="navbar-brand" to="/dashboard">
          <ImageView className="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ml-auto stellarnav desktop"
          id="main-nav"
        >
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item nav-company has-sub">
              <Link className="nav-link" to="/">
                Company
                <b className="caret"></b>
              </Link>
              <ul className="sub-menu company-menu">
                <li className="sub-menu-container">
                  <div className="container rd-container-qua">
                    <div className="menu_container">
                      <div className="menu_items">
                        <div className="row">
                          <div className="col-12 large-col resp-submenu">
                            <h3 className="menu_type">Company</h3>
                            <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">About Us</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Global Delivery</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Testimonials</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Certificates</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Meet The Team</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Infrastructure</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Career</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Confidentiality</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Engagement Models</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Life At CMARIX</a>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <a href="#">Leverage CMARIX</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 large-col resp-submenu">
                            <h3 className="menu_type">Get in touch</h3>
                            <ul className="row sub-menu-navbar getin-touch-submenu collapse show pl-0">
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={skypeicon} alt="skype" width="48" height="48"/>
                                  </div>
                                  <div className="detail">
                                    <h4>Skype ID</h4>
                                    <h3>
                                      <strong>biz.cmarix</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={gmailicon} alt="Gmail"  width="48" height="48"/>
                                  </div>
                                  <div className="detail">
                                    <h4>Email us</h4>
                                    <h3>
                                      <strong>biz@cmarix.com</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={indiaicon} alt="skype" width="48" height="48" />
                                  </div>
                                  <div className="detail">
                                    <h4>India</h4>
                                    <h3>
                                      <strong>+91 800-005-0808</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={usaicon} alt="skype" width="48" height="48"/>
                                  </div>
                                  <div className="detail">
                                    <h4>United States</h4>
                                    <h3>
                                      <strong>+1 631-206-6051</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_footer company_footer">
                      <h3>
                        <a href="#">
                          Let's grow together <strong>Partner with us</strong>{" "}
                          <ImageView src={arrowicon} alt="skype" />
                        </a>
                      </h3>
                      <div className="iso_certificate">
                        <ImageView src={isoicon} alt="ISO" width="126" height="126"/>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item has-sub">
              <a className="nav-link" href="hire-page.html">
                Hire Developers
                <b className="caret"></b>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-container">
                  <div className="container rd-container-qua">
                    <div className="menu_container">
                      <div className="menu_items">
                        <div className="row">
                          <div className="col-12 large-col">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Development & Design
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Enterprise Software</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Front-end Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Mobile App Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Back-end Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Web Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">MVP Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">eCommerce Development </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">UI/UX Design Services</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  On-demand Solutions
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Food Delivery App</a>
                                  </li>
                                  {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Taxi App Development</a>
                                  </li> */}
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Travel App Development</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Support and Testing
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Software Testing</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Support & Maintenance</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Mobile Testing</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Digital Marketing
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">SEO & SMO</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Content Marketing</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Support and Testing
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Shipping Integration</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Payment Integration</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Social Networking</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Consulting & Strategy
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Consulting</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Digital Strategy</a>
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
            </li>
            <li className="nav-item has-sub">
              <Link
                className="nav-link redirect"
                to="/node-js-development.html"
              >
                Services
                <b className="caret"></b>
              </Link>
              <ul className="sub-menu">
                <li className="sub-menu-container">
                  <div className="container rd-container-qua">
                    <div className="menu_container">
                      <div className="menu_items">
                        <div className="row">
                          <div className="col-12 large-col">
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Native App Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">iPhone app Development </a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Android app Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Kotlin App Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">iPad App Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">iPad App Development</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Cross Platform Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Ionic app Development </a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">React Native Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Flutter app Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Progressive Web App</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Xamarin Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">NativeScript App Development</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  PHP Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">CodeIgniter Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Laravel Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Zend Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Yii Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Symfony Development</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  JavaScript Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Angular Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Nodejs Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Vuejs Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Vuejs Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">ReactJS Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">MeteorJS Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">ExpressJS Development</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Design Services
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Mobile App Design</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Responsive Website Design</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Design Prototyping</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">PSD To HTML </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Microsoft Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Asp.net Development</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">MVC.net Development</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  CMS Development
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Magento Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">WordPress Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Shopify Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Drupal Development</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">WooCommerce Development</a>
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
            </li>
            <li className="nav-item has-sub">
              <Link className="nav-link" to="/startup-consulting.html">
                Consulting
                <b className="caret"></b>
              </Link>

              <ul className="sub-menu">
                <li className="sub-menu-container">
                  <div className="container rd-container-qua">
                    <div className="menu_container">
                      <div className="menu_items">
                        <div className="row">
                          <div className="col-12 large-col">
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Hire Mobile Developer
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Android Developers </a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire iOS Developers</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Flutter Developers</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">
                                      Hire Cross-platform Developers
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Hire Web Developers
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire MEAN Stack Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire Nodejs Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire MERN Stack Developers</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire Frontend Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire Full-Stack Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire PHP Developers</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire Angular Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire ASP.NET Developers</a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire React Developers </a>
                                  </li>
                                  <li className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="#">Hire Laravel Developers</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  eCommerce & CMS
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Magento Developers</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire WordPress Developers</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire WooCommerce Developers</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Shopify Developers</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12 resp-submenu">
                                <h3 className="menu_type under_line">
                                  Digital Marketing
                                </h3>
                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Manual Tester</a>
                                  </li>
                                  <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <a href="#">Hire Automated Tester</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-12 col-12 resp-submenu">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <h3 className="menu_type under_line text-center">
                                      Looking for Cloud Technologies?
                                    </h3>
                                    <div className="other_hire text-center">
                                      <a href="#">
                                        <ImageView src={appleicon} alt="IOS" />
                                        <h3>Hire AWS Developer</h3>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <h3 className="menu_type under_line text-center">
                                      Looking for Onsite Development
                                    </h3>
                                    <div className="other_hire text-center">
                                      <a href="#">
                                        <ImageView src={ionicicon} alt="IOS" />
                                        <h3>Hire Onsite Developer</h3>
                                      </a>
                                    </div>
                                  </div>
                                </div>
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
            </li>
            <li className="nav-item  has-sub">
              <Link className="nav-link" to="/industry.html">
                Industries <b className="caret"></b>
              </Link>
              <ul className="sub-menu industries-menu">
                <li className="sub-menu-container">
                  <div className="container rd-container-qua">
                    <div className="menu_container">
                      <div className="menu_items">
                        <div className="row">
                          <div className="col-12 large-col resp-submenu">
                            <h3 className="menu_type under_line">
                              Industries We Serve
                            </h3>
                            <ul className="row sub-menu-navbar getin-touch-submenu collapse show pl-0">
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView
                                      src={ecommerce}
                                      alt="Ecommerce"
                                      width="43"
                                      height="41"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Ecommerce</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView
                                      src={healthcare}
                                      alt="Healthcare"
                                      width="44"
                                      height="41"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Healthcare</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={media} alt="Media" width="31" height="34" />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Media</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={finance} alt="Finance" width="32" height="35"/>
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Finance</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>

                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView
                                      src={insurance}
                                      alt="Insurance"
                                      width="40" height="48"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Insurance</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView src={security} alt="Security" width="34" height="32" />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Security</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView
                                      src={education}
                                      alt="Education"
                                      width="29" height="40"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Education</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="getin_touch_block">
                                  <div className="icon">
                                    <ImageView
                                      src={realestate}
                                      alt="Real Estate"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h3>
                                      <strong>Real Estate</strong>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_footer company_footer">
                      <div className="row align-items-center">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                          <h3 className="engage_steps_title">Steps to Engage</h3>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                          <div className="steps">
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 step_main_parent">
                                <div className="step_block">
                                  <div className="number">
                                    <span>1</span>
                                  </div>
                                  <h4>Post your project requirement</h4>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 step_main_parent">
                                <div className="step_block">
                                  <div className="number">
                                    <span>2</span>
                                  </div>
                                  <h4>
                                    Discuss project details with our technical
                                    analysts
                                  </h4>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 step_main_parent">
                                <div className="step_block">
                                  <div className="number">
                                    <span>3</span>
                                  </div>
                                  <h4>Select engagement model and timeline</h4>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-12 step_main_parent">
                                <div className="step_block">
                                  <div className="number">
                                    <span>4</span>
                                  </div>
                                  <h4>And we start coding</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio.html">
                Portfolio
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div data-scrollreveal="enter top">
              <Link
                to="/inquiry.html"
                className="btn btn-dark large-btn move-btn"
              >
                Inquire Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;