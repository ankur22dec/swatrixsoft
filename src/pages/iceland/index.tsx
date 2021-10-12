import React from "react";
import "./anyvision.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import icon1 from "../../assets/images/casestudy/iceland/iceland_health.png";
import icon2 from "../../assets/images/casestudy/iceland/product_name.jpg";
import icon3 from "../../assets/images/casestudy/iceland/product_info.jpg";
import icon4 from "../../assets/images/casestudy/iceland/backend1.png";
import icon5 from "../../assets/images/casestudy/iceland/backend2.png";
import icon6 from "../../assets/images/casestudy/iceland/club.png";
import icon7 from "../../assets/images/casestudy/iceland/types3.png";
import icon8 from "../../assets/images/casestudy/iceland/type3s.png";
import icon9 from "../../assets/images/casestudy/iceland/allgroup.png";
import icon10 from "../../assets/images/casestudy/iceland/rightBlur.png";
import icon11 from "../../assets/images/casestudy/iceland/file.svg";
import cmarixLine from "../../assets/images/casestudy/cmarix_line.png";

class Iceland extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <script>helloTest();</script>
                    <meta property="og:image" content={`https://www.cmarix.com${icon1}`} />
                </Helmet>
                <div className="ionic-app-development-services">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">CASESTUDY</div>
                            <div className="row align-items-stretch">
                                <div className="col-md-12">
                                    <div className="inner-left">
                                        <div
                                            className="inner-head-title sr-from-bottom text-center"
                                            data-splitting
                                        >
                                            <div className="banner-pattern centered_lines">
                                                <div className="pattern_inner">
                                                    <span></span>
                                                    <div className="line line1"></div>
                                                    <div className="line line2"></div>
                                                    <div className="line line3"></div>
                                                </div>
                                            </div>
                                            <span>ICELAND HEALTH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="iceland_case_study">
                    <ImageView src={cmarixLine} alt="Cmarix-line" className="mt2px h15px" />
                    <div className="container">
                        <p className="iceland_desc">Iceland health is a leading manufacturer of The Fish Oil products – Providing a premium quality, high potency nutritional
                        supplements designed to sustain and extend lifetime of wellness.
      </p>
                        <div className="iceland_feature">
                            <ul className="row techRows">
                                <li>
                                    <div className="techIcons">
                                        <i className="icon-icon_webmob sbrandtwo"></i>
                                    </div>
                                    <div>
                                        <p>Built for</p>
                                        <h3>Web &amp; Mobile</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="techIcons">
                                        <i className="zmdi zmdi-globe sbrandfour"></i>
                                    </div>
                                    <div>
                                        <p>Country</p>
                                        <h3>United States</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="techIcons">
                                        <i className="icon-icon_bulb sbrandone"></i>
                                    </div>
                                    <div>
                                        <p>Technologies</p>
                                        <h3>Magneto Enterprise</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="techIcons">
                                        <i className="icon-icon_industry sbrandthree"></i>
                                    </div>
                                    <div>
                                        <p>Industry</p>
                                        <h3>HealthCare & Wellness</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="iceland_detail">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-1 col-md-11">
                                    <p className="iceland_info">CMARIX has developed a highly scalable Magento Enterprise based web platform playing crucial role in
                                    company growth strategy. Icelandhealth.com provides one stop platform for product sale for:
               </p>
                                    <ul className="iceland_list">
                                        <li> Website Customers </li>
                                        <li>Customers via Call center/ phone customers </li>
                                        <li>Customers via email & other marketing campaign </li>
                                    </ul>
                                </div>
                                <div className="iceleand_img col-md-12">
                                    <ImageView src={icon1} className="img-responsive" alt="Iceland Screen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="product_info">
                            <div className="row">
                                <div className="col-md-4">
                                    <ImageView src={icon2} className="img-responsive" alt="Product Name" />
                                </div>
                                <div className="col-md-8">
                                    <ImageView src={icon3} className="img-responsive" alt="Product Info" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature_section">
                        <div className="container">
                            <div className="titleDiv">
                                <h1>Features</h1>
                            </div>
                            <div className="iceland_list_container row">
                                <ul className="iceland_list col-sm-6 col-lg-5">
                                    <li>Automated Trial Product functionality</li>
                                    <li>Recurring Payment and Auto Orders</li>
                                    <li>Five 9Call Centre Integration</li>
                                    <li>Customer loyalty & Reward  points Management </li>
                                    <li>SAP Integrated Order Processing</li>
                                    <li>Separate order placing interface for call center agent </li>
                                </ul>
                                <ul className="iceland_list col-sm-6 col-lg-5 col-lg-offset-2">
                                    <li>Credit Card prior notice on expiration for recurring customer</li>
                                    <li>Security enhancements to prevent unauthorized login attempts.</li>
                                    <li>SASS based CSS implementation</li>
                                    <li>Customized Tax calculation and Shipping options</li>
                                    <li>UPS Address Verification API integration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="magento_screens clearfix">
                            <div className="leftscreen">
                                <ImageView src={icon4} alt="Backend" />
                            </div>
                            <div className="titleDiv rellax relPos" data-rellax-percentage="0.1" data-rellax-speed="-0.5">
                                <div className="backText">
                                    <h1>Backend</h1>
                                    <p className="text-right">Screen</p>
                                </div>
                            </div>
                            <div className="rightscreen rellax relPos" data-rellax-percentage="0.1" data-rellax-speed="-0.5">
                                <ImageView src={icon5} alt="Backend" />
                            </div>
                        </div>
                    </div>

                    <div className="advantageClub">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="fs18 mt2rem">
                                        This platform has unique features for customer loyalty like the OMEGA ADVANTAGE™ CLUB MEMBERS aiding to set up automated shipments along with the control over the quantity of bottles in each shipment, as well as the shipping frequency.
                                    </p>
                                </div>

                                <div className="col-md-10 text-center">
                                    <ImageView src={icon6} alt="club" />
                                </div>

                                <div className="col-md-2 text-center">
                                    <ImageView src={icon7} className="smallHide" alt="club" />
                                    <ImageView src={icon8} className="largeHide" alt="club" />
                                </div>
                            </div>
                        </div>

                        <div className="skyLine">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 mt2rem text-center">
                                        <div>
                                            <ImageView src={icon9} alt="advantages" />
                                        </div>
                                        <div className="titleDiv">
                                            <div className="backText">
                                                <h1>Call Center</h1>
                                                <p className="text-right">Integration</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mt2rem">
                                        <div>
                                            <ImageView src={icon10} className="mb5rem" alt="shipping" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="techSpecs container">
                        <ul className="row nomargin">

                            <li className="col-sm-12 col-lg-2 titleDiv mulTi">
                                <h1>Tech<span className="disBlc">Specs</span></h1>
                            </li>

                            <li className="col-sm-6 col-lg-4">
                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>Development Environment:</h3>
                                </div>
                                <div>

                                    <ul className="propUl">
                                        <li>PHP Version 5.4.45</li>
                                        <li>Magento Enterprise 1.14.0.1</li>
                                        <li>Zend Op catch</li>
                                    </ul>
                                </div>

                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>Database:</h3>
                                </div>
                                <div>

                                    <ul className="propUl">
                                        <li>MySql 5.1.73</li>
                                    </ul>
                                </div>

                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>Server monitoring tool:</h3>
                                </div>
                                <div>

                                    <ul className="propUl">
                                        <li>NewRelic</li>
                                        <li>Dynatrace</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="col-sm-6 col-lg-3">
                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>Other integration:</h3>
                                </div>
                                <div>

                                    <ul className="propUl">
                                        <li>SAP Integration</li>
                                        <li>WordPress</li>
                                    </ul>
                                </div>

                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>Third Party tools:</h3>
                                </div>
                                <div>

                                    <ul className="propUl">
                                        <li>DocuSign Power form</li>
                                        <li>UPS AVS</li>
                                        <li>Postcode Anywhere tool</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="col-sm-12 col-lg-3 apiDiv">
                                <div className="iconSpecs">
                                    <ImageView src={icon11} alt="file" />
                                    <h3>API</h3>
                                </div>
                                <div>
                                    <ul className="propUl">
                                        <li>InfusionSoft API</li>
                                        <li>Authorize.net CIM API</li>
                                        <li>eBay and Amazon sell API</li>
                                        <li>Google store locator API</li>
                                        <li>Google Tag manager</li>
                                        <li>Facbook API</li>
                                        <li>Twitter API</li>
                                        <li>Google plus API</li>
                                        <li>Product data feed manger</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Iceland;