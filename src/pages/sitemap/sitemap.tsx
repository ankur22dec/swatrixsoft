import React from "react";
import "./sitemap.scss";
import ImageView from "../../components/ImageView";
import waves from '../../assets/images/inner-top/waves.svg';
import LinkTo from "../../components/LinkTo/linkTo";
import ecommerce from "../../assets/images/header/ecommerce.svg";
import healthcare from "../../assets/images/header/healthcare.svg";
import media from "../../assets/images/header/media.svg";
import finance from "../../assets/images/header/finance.svg";
import insurance from "../../assets/images/header/insurance.svg";
import security from "../../assets/images/header/security.svg";
import education from "../../assets/images/header/education.svg";
import realestate from "../../assets/images/header/real-estate.svg";
import agritech from "../../assets/images/industries/icons/agritech-icon.svg";
import food from "../../assets/images/industries/icons/food-icon.svg";
import logistics from "../../assets/images/industries/icons/logistics.svg";
import sports from "../../assets/images/industries/icons/sports-icon.svg";
class SiteMap extends React.Component {
    state = {
        onScrollClass: "",
    };
    // componentWillMount() {
    //     // const script = document.createElement("script");
    //     // script.src =
    //     //     "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    //     // script.async = true;
    //     // document.body.appendChild(script);
    // }

    componentDidMount() {
        let windowObj: any = window;
        windowObj.helloTest();
    }

    handleSlideChange() {}

    render() {
        return (
            <>
                <div className="cmr-company">
                    <div className="inner-top-header banner-without-image">
                        <div className="max-animation-lg">
                            <div className="top-right">
                                <ImageView src={waves} alt="waves" className="destructive" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="cmr-reflectors">SITEMAP</div>
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
                                            <h1>
                                                CMARIX
                                                <br />
                                                <span>Sitemap</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmr-relate">
                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>01</h6>
                                    <h2>Company</h2>
                                </div>
                            </div>

                            <div className="container">
                                <div>
                                    <div className="pt-4 pb-4">
                                        <div className="row">
                                            <div className="col-12 large-col resp-submenu">
                                                <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/know-us.html" className="about-us-link">About Us</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/hybrid-model.html" className="global-delivery-link">Global Delivery</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/testimonials.html" className="testimonial-link">Testimonials</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/certificates-awards-and-alliances.html" className="certificates-link">Certificates</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/our-team.html" className="meet-team-link">Meet The Team</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/Infrastructure" className="infrastructures-link">Infrastructure</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/career.html" className="career-link">Career</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/confidentiality.html" className="confidentially-link">Confidentiality</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/engagement-models.html" className="engagement-link">Engagement Models</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/life-at-cmarix.html" className="life-cmarix-link">Life At CMARIX</LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <LinkTo to="/Why-cmarix.html" className="leverage-link">Leverage CMARIX</LinkTo>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>02</h6>
                                    <h3>
                                        <LinkTo to="/solutions.html">
                                            Solutions
                                        </LinkTo>
                                    </h3>
                                </div>
                            </div>

                            <div className="container">
                                <div>
                                    <div className="pt-4 pb-4">
                                        <div className="row">
                                            <div className="col-12 large-col">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                        <LinkTo to="/development-and-design-solution.html">
                                                            Development & Design
                                                        </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/software-development.html" className="enterprise-link">
                                                                    Enterprise Software
                                                                </LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/front-end-development.html" className="frontend-link">Front-end development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/mobile-app-development.html" className="mobileapp-link">Mobile App Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/backend-development.html" className="backend-link">Back-end Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/web-development.html" className="web-link">Web Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/MVP-development.html" className="mvp-link">MVP Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/ecommerce-development.html" className="ecommerce-link">eCommerce Development </LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/ui-ux-design.html" className="uiux-link">UI/UX Design Services</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/aws-serverless-web-application-development.html" className="aws-link">AWS Serverless</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/game-development.html" className="game-link">Game Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                <LinkTo to="/chatbot-development.html" className="chat-link">Chatbot Development</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                            <LinkTo to="/on-demand-app-development.html">
                                                                On-demand Solutions
                                                            </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/food-delivery-app-development.html" className="food-link">Food Delivery App</LinkTo>
                                                            </li>
                                                            {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/ondemand-detail.html" className="taxi-link">Taxi App Development</LinkTo>
                                                            </li> */}
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/travel-app-development.html" className="travel-link">Travel App Development</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                            <LinkTo to="/support-and-testing.html">
                                                                Support and Testing
                                                            </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list collapse show pl-0">
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/software-testing.html" className="softwaretesting-link">Software Testing</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/support-maintenance.html" className="support-link">Support & Maintenance</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/mobile-testing.html" className="mobiletesting-link">Mobile Testing</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                            <LinkTo to="/digital-marketing.html">
                                                                Digital Marketing
                                                            </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="digital-marketing">
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/search-engine-optimization.html" className="seo-link">SEO</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/social-media-marketing.html" className="smo-link">SMO</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/content-marketing.html" className="content-link">Content Marketing</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                            <LinkTo to="/api-integration.html">
                                                                API Integration
                                                            </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="suppor-testing2">
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/shipping-api-integration.html" className="shopping-link">Shipping Integration</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/payment-gateway-api-integration.html" className="paymnent-link">Payment Integration</LinkTo>
                                                            </li>
                                                            <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <LinkTo to="/social-networking-api-integration.html" className="social-link">Social Networking</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                                                        <h3 className="menu_type under_line">
                                                            <LinkTo to="/consulting-and-strategy-solution.html">
                                                                Consulting & Strategy
                                                            </LinkTo>
                                                        </h3>
                                                        <ul className="row sub-menu-navbar menu-item-list pl-0 collapse show" id="consulting-strategy">
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/it-consulting-services.html" className="itconsulting-link">IT Consulting</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/setup-odc-in-india.html" className="odc-link">ODC India</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/outsource-india.html" className="outsource-link">Outsource India</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/product-auditing.html" className="auditing-link">Product Auditing</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/software-product-development.html" className="sorftwate-product-link">Software Product Development</LinkTo>
                                                            </li>
                                                            <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <LinkTo to="/startup-consulting.html" className="startup-link">Starup Consulting</LinkTo>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>03</h6>
                                    <h3>
                                        <LinkTo to="/our-services.html">
                                            Services
                                        </LinkTo>
                                    </h3>
                                </div>
                            </div>

                            <div className="container">
                                <div>
                                    <div className="pt-4 pb-4">
                                        <div className="row">
                                        <div className="col-12 large-col">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/native-app-development.html">
                                                    Native App Development
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#native-development"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>

                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="native-development"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/iPhone-app-development.html" className="iphone-link">
                                                        iPhone app development{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/android-app-development.html" className="android-link">
                                                        Android app development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/kotlin-app-development.html" className="kotlin-link">
                                                        Kotlin App Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/iPad-app-development.html" className="ipad-link">
                                                        iPad App Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/tablet-app-development.html" className="ipad-link">
                                                         Tablet App Development
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/cross-platform-app-development.html" className="cross-platform-link">
                                                    Cross Platform Development
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#cross-platoform"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>

                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="cross-platoform"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/ionic-app-development.html" className="ionic-link">
                                                        Ionic app development{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/react-native-app-development.html" className="react-native-link">
                                                        React Native development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/flutter-app-development.html" className="flutter-link">
                                                        Flutter app development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/progressive-web-app-development.html" className="progressive-link">
                                                        Progressive Web App
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/xamarin-app-development.html" className="xamrin-link">
                                                        Xamarin Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/unity-3d-app-development.html" className="unity-link">
                                                         Unity 3D App Development
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/php-development.html">
                                                    PHP Development{" "}
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#php-development"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>
                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="php-development"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/codeigniter-development.html" className="codeigniter-link">
                                                        CodeIgniter Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/laravel-development.html" className="laravel-link">
                                                        Laravel Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/zend-development.html" className="zend-link">
                                                        Zend development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/yii-development.html" className="yii-link">
                                                        Yii Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/symfony-development.html" className="symphony-link">
                                                        Symfony Development
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/javascript-development.html">
                                                    JavaScript Development
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#javascript-development"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>
                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="javascript-development"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12" >
                                                    <LinkTo to="/angular-development.html" className="angular-link">Angular development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/node-js-development.html" className="node-link">Nodejs Development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/vuejs-development.html" className="vue-link">Vuejs development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/reactjs-development.html" className="reactjs-link">ReactJS development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/meteorjs-development.html" className="meteor-link">MeteorJS Development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/expressjs-development.html" className="expressjs-link">ExpressJS Development</LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/design-services.html">
                                                         Design Services
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#design-services"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>
                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="design-services"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/mobile-app-design-services.html" className="mobileapp-link">Mobile App Design</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/responsive-website-design.html" className="responsive-link">Responsive Website Design</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/design-prototyping.html" className="design-link">Design Prototyping</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/psd-html-conversion.html" className="psdhtml-link">PSD To HTML </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="microsoft-development.html">Microsoft Development</LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#microsoft-development"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>
                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="microsoft-development"
                                                >
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/aspdotnet-development.html" className="asp-link">Asp.net development</LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/mvc-dotnet-development.html" className="mvcnet-link">MVC.net development</LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    <LinkTo to="/cms-development.html">
                                                    CMS Development
                                                    </LinkTo>
                                                    <button
                                                    className="button sub-menu-button"
                                                    data-toggle="collapse"
                                                    data-target="#ecommerce-development"
                                                    >
                                                    <i className="menu-status"></i>
                                                    </button>
                                                </h3>

                                                <ul
                                                    className="row sub-menu-navbar menu-item-list collapse show pl-0"
                                                    id="ecommerce-development"
                                                >
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/magento-development.html" className="magento-link">
                                                        Magento development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/wordpress-development.html" className="wordpress-link">
                                                        WordPress development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/shopify-development.html" className="shopify-link">
                                                        Shopify development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/drupal-development.html" className="drupal-link">
                                                        Drupal Development
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/woocommerce-development.html" className="woocommerce-link">
                                                        WooCommerce development
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>04</h6>
                                    <h3>
                                        <LinkTo to="/hire-dedicated-developers.html">
                                            Hire Developer
                                        </LinkTo>
                                    </h3>
                                </div>
                            </div>

                            <div className="container">
                                <div>
                                    <div className="pt-4 pb-4">
                                        <div className="row">
                                        <div className="col-12 large-col">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                {/* <h3 className="menu_type under_line"> */}
                                                    {/* <LinkTo to="/hire-mobile-app-developers.html"> */}
                                                    <h3 className="menu_type under_line">
                                                    <LinkTo to="/hire-mobile-app-developers.html" className="web-link">
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
                                                    <LinkTo to="/hire-android-developers.html" className="android-link">
                                                        Hire Android developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-ios-developers.html" className="iphone-link">
                                                        Hire iOS Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-flutter-developers.html" className="flutter-link">
                                                        Hire Flutter Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-cross-platform-developer.html" className="cross-link">
                                                        Hire Cross-platform developers
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                                                
                                                    <h3 className="menu_type under_line">
                                                    <LinkTo to="/hire-web-developers.html"  className="web-link"> Hire Web Developers </LinkTo>
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
                                                    <LinkTo to="/hire-mean-stack-developers.html" className="mean-link">
                                                        Hire MEAN Stack Developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-nodejs-developers.html" className="node-link">
                                                        Hire Nodejs developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-mern-stack-developers.html" className="mern-link">
                                                        Hire MERN Stack Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-front-end-developers.html" className="frontend-link">
                                                        Hire Frontend Developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-fullstack-developers.html" className="fullstack-link">
                                                        Hire Full-Stack Developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-php-developers.html" className="php-link">
                                                        Hire PHP Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-angular-developers.html" className="angular-link">
                                                        Hire Angular developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-aspdotnet-developers.html" className="asp-link">
                                                        Hire ASP.NET Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-react-developers.html" className="reactjs-link">
                                                        Hire React Developers{" "}
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <LinkTo to="/hire-laravel-developers.html" className="laravel-link">
                                                        Hire Laravel developers
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                
                                                    <h3 className="menu_type under_line">
                                                    <LinkTo to="/cms-development.html" className="web-link">eCommerce & CMS </LinkTo>
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
                                                    <LinkTo to="/hire-magento-developer.html" className="magento-link">
                                                        Hire Magento developers 
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-wordpress-developers.html" className="wordpress-link">
                                                        Hire WordPress developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-woocommerce-developers.html" className="woocommerce-link">
                                                        Hire WooCommerce Developers
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-shopify-developers.html" className="shopify-link">
                                                        Hire Shopify Developers
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                                                
                                                    <h3 className="menu_type under_line">
                                                    <LinkTo to="/hire-quality-analyst-test-engineers.html" className="web-link">Hire QA</LinkTo>
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
                                                    <LinkTo to="/hire-manual-tester.html" className="manual-link">
                                                        Hire Manual Tester
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <LinkTo to="/hire-automated-tester.html" className="automated-link">
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
                                                    <LinkTo to="/hire-aws-developers.html" className="aws-link">
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
                                                    <LinkTo to="/hire-on-site-developer.html" className="onsite-link">
                                                        Hire Onsite Developers
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>05</h6>
                                    <h3>
                                    <LinkTo to="/industries.html">
                                        Industry
                                    </LinkTo>
                                    </h3>
                                </div>
                            </div>

                            <div className="container">
                                <div>
                                    <div className="pt-4 pb-4">
                                        <div className="row">
                                            <div className="col-12 large-col resp-submenu">
                                                <h3 className="menu_type under_line">
                                                    Industries We Serve
                                                </h3>
                                                <ul className="row sub-menu-navbar getin-touch-submenu pl-0">
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/custom-ecommerce-platforms-development.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={ecommerce} alt="Ecommerce" width="43" height="41" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Ecommerce</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                        </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/healthcare.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={healthcare} alt="Healthcare"  width="44" height="41" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Healthcare</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/media-and-entertainment.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={media} alt="Media"  width="31" height="34" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Media</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                        </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/finance-and-banking.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={finance} alt="Finance"  width="32" height="35" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Finance</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>

                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/insurance.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={insurance} alt="Insurance"  width="40" height="38" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Insurance</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/security.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={security} alt="Security"   width="34" height="42"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Security</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/elearning.html" >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={education} alt="Education"  width="29" height="40" />
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Education</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/real-estate.html"  >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={realestate} alt="Real Estate"  width="34" height="35"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Real Estate</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/food-and-beverages.html"  >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={food} alt="Real Estate"  width="34" height="35"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Food and Beverage</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/agritech.html"  >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={agritech} alt="Real Estate"  width="34" height="35"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Agritech</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/sports.html"  >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={sports} alt="Real Estate"  width="34" height="35"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Sports</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <LinkTo to="/logistic-and-transportation.html"  >
                                                        <div className="getin_touch_block">
                                                        <div className="icon">
                                                            <ImageView src={logistics} alt="Real Estate"  width="34" height="35"/>
                                                        </div>
                                                        <div className="detail">
                                                            <h3>
                                                            <strong>Logistic And Transportation</strong>
                                                            </h3>
                                                        </div>
                                                        </div>
                                                    </LinkTo>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="sitemap-plate sr-from-bottom-1">
                            <div className="sitemap-title">
                                <div className="container">
                                    <h6>06</h6>
                                    <h3>Other Links</h3>
                                </div>
                            </div>

                            <div className="container">
                                <div className="sitemap-otherlink-container">
                                    <div className="row">
                                     <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="other-link-sitemap">
                                                <LinkTo to="/portfolio.html">
                                                    Portfolio
                                                </LinkTo>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="other-link-sitemap">
                                                <LinkTo to="/inquiry.html">
                                                    Inquiry
                                                </LinkTo>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="other-link-sitemap">
                                            <LinkTo to="/partnership.html">
                                                Partnership
                                            </LinkTo>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div className="other-link-sitemap">
                                        <LinkTo to="/blog">
                                                Blog
                                            </LinkTo>
                                        </div>
                                            
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div className="other-link-sitemap">
                                        <LinkTo to="/term-of-use.html">
                                                 Terms Of Use
                                            </LinkTo>
                                        </div>
                                           
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div className="other-link-sitemap">
                                        <LinkTo to="/privacy-policy.html">
                                                 Privacy Policy
                                            </LinkTo>
                                        </div>
                                           
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div className="other-link-sitemap">
                                        <LinkTo to="/sitemap.html">
                                                Sitemap
                                            </LinkTo>
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SiteMap;