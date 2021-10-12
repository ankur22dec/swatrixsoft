import React from 'react';
import ImageView from '../../ImageView';


import skypeicon from "../../../assets/images/header/skype.svg";
import gmailicon from "../../../assets/images/header/gmail.svg";
import indiaicon from "../../../assets/images/header/whatsapp.svg";
import usaicon from "../../../assets/images/header/telephone.svg";
import arrowicon from "../../../assets/images/header/logout.svg";
import isoicon from "../../../assets/images/header/iso.svg";
import LinkTo from '../../LinkTo/linkTo';
import { Link } from 'react-router-dom';


function CompanyHeader(props: any) {
    return (
        <ul className="sub-menu company-menu">
            <li className="sub-menu-container">
                <div className="container rd-container-qua">
                    <div className="menu_container">
                        <div className="menu_items">
                            <div className="row">
                                <div className="col-12 large-col resp-submenu">
                                    <h3 className="menu_type">Company</h3>
                                    <ul className="row sub-menu-navbar menu-item-list pl-0">
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/know-us.html" className="about-us-link" {...props}>About Us</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/hybrid-model.html" className="global-delivery-link" {...props}>Global Delivery</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/testimonials.html" className="testimonial-link" {...props}>Testimonials</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/certificates-awards-and-alliances.html" className="certificates-link" {...props}>Certificates</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/our-team.html" className="meet-team-link" {...props}>Meet The Team</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/infrastructure.html" className="infrastructures-link" {...props}>Infrastructure</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/career.html" className="career-link" {...props}>Career</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/confidentiality.html" className="confidentially-link" {...props}>Confidentiality</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/engagement-models.html" className="engagement-link" {...props}>Engagement Models</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/life-at-cmarix.html" className="life-cmarix-link" {...props}>Life At SWATRIXSOFT</LinkTo>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <LinkTo to="/Why-cmarix.html" className="leverage-link" {...props}>Leverage SWATRIXSOFT</LinkTo>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 large-col resp-submenu hidden-sm hidden-xs">
                                    <h3 className="menu_type">Get in touch</h3>
                                    <ul className="row sub-menu-navbar getin-touch-submenu pl-0">
                                        <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="getin_touch_block">
                                                <div className="icon">
                                                    <ImageView src={skypeicon} alt="skype" width="48" height="48"/>
                                                </div>
                                                <div className="detail">
                                                    <h4>Skype ID</h4>
                                                    <h3>
                                                        <strong>SWATRIXSOFT</strong>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="getin_touch_block">
                                                <div className="icon">
                                                    <ImageView src={gmailicon} alt="skype"  width="48" height="48"/>
                                                </div>
                                                <div className="detail">
                                                    <h4>Email us</h4>
                                                    <h3>
                                                    <strong><a href="mailto:swatrixsoft@gmail.com">swatrixsoft@gmail.com</a></strong>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="getin_touch_block">
                                                <div className="icon">
                                                    <ImageView src={indiaicon} alt="skype" width="48" height="48" />
                                                </div>
                                                <div className="detail">
                                                    <h4>India</h4>
                                                    <h3>
                                                        <strong>+91 707-387-5630</strong>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="getin_touch_block">
                                                <div className="icon">
                                                    <ImageView src={usaicon} alt="skype" width="48" height="48"/>
                                                </div>
                                                <div className="detail">
                                                    <h4>United States</h4>
                                                    <h3>
                                                        <strong>8118849825</strong>
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
                            <LinkTo to="/partnership.html"  {...props}>
                                Let's grow together <strong>Partner with us</strong>{" "}
                                <ImageView src={arrowicon} alt="skype" />
                            </LinkTo>
                        </h3>
                        <div className="iso_certificate">
                            <ImageView src={isoicon} alt="ISO" width="126" height="126" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default CompanyHeader;

