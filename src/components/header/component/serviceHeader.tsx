import React from "react";
import ImageView from "../../ImageView";

import roundshape from "../../../assets/images/header/round.svg";
import LinkTo from "../../LinkTo/linkTo"; 

function ServiceHeader(props: any) {
  return (
    <ul className="sub-menu service-menu">
      <li className="sub-menu-container">
        <div className="container rd-container-qua">
          <div className="menu_container">
            <div className="menu_items">
              <div className="row">
                <div className="col-12 large-col">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/native-app-development.html" {...props}>
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
                          <LinkTo to="/iPhone-app-development.html" className="iphone-link" {...props}>
                            iPhone app Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/android-app-development.html" className="android-link" {...props}>
                            Android app Development
                          </LinkTo>
                        </li>                     
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/iPad-app-development.html" className="ipad-link" {...props}>
                            iPad App Development
                          </LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/augmented-reality-development.html" className="ipad-link" {...props}>
                          Augmented Reality(AR) Development
                          </LinkTo>
                        </li> */}
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/business-intelligence-company.html" className="ipad-link" {...props}>
                          Business Intelligence Company
                          </LinkTo>
                        </li> */}
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/iot-app-development.html" className="ipad-link" {...props}>
                          IoT App Development
                          </LinkTo>
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/cross-platform-app-development.html" className="cross-platform-link" {...props}>
                          Cross Platform Development
                        </LinkTo>
                        {/* <LinkTo to="/mobile-app-development-company-in-california-san-francisco-los-angeles.html" className="cross-platform-link" {...props}>
                        Mobile App Development Company In California, San Francisco, Los Angeles
                        </LinkTo> */}
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
                          <LinkTo to="/ionic-app-development.html" className="ionic-link" {...props}>
                            Ionic app Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/react-native-app-development.html" className="react-native-link" {...props}>
                            React Native Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/flutter-app-development.html" className="flutter-link" {...props}>
                            Flutter app Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/progressive-web-app-development.html" className="progressive-link" {...props}>
                            Progressive Web App
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/xamarin-app-development.html" className="xamrin-link" {...props}>
                            Xamarin Development
                          </LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/php-development.html" {...props}>
                          PHP Development
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
                          <LinkTo to="/codeigniter-development.html" className="codeigniter-link" {...props}>
                            CodeIgniter Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/laravel-development.html" className="laravel-link" {...props}>
                            Laravel Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/zend-development.html" className="zend-link" {...props}>
                            Zend Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/yii-development.html" className="yii-link" {...props}>
                            Yii Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/symfony-development.html" className="symphony-link" {...props}>
                            Symfony Development
                          </LinkTo>
                        </li>
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/laminas-development.html" className="symphony-link" {...props}>
                          Laminas Development Services
                          </LinkTo>
                          </li> */}
                          {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/machine-learning-development.html" className="symphony-link" {...props}>
                          Machine Learning Company
                          </LinkTo>
                        </li> */}
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/ott-platform-development.html" className="symphony-link" {...props}>
                          OTT Platform Development
                          </LinkTo>
                        </li> */}
                        {/* <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/vr-app-development.html" className="symphony-link" {...props}>
                          VR App Development
                          </LinkTo>
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/javascript-development.html" {...props}>
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
                          <LinkTo to="/angular-development.html" className="angular-link" {...props}>Angular Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/node-js-development.html" className="node-link" {...props}>Nodejs Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/vuejs-development.html" className="vue-link" {...props}>Vuejs Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/reactjs-development.html" className="reactjs-link" {...props}>ReactJS Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/meteorjs-development.html" className="meteor-link" {...props}>MeteorJS Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/expressjs-development.html" className="expressjs-link" {...props}>ExpressJS Development</LinkTo>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/design-services.html" {...props}>
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
                          <LinkTo to="/mobile-app-design-services.html" className="mobileapp-link" {...props}>Mobile App Design</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/responsive-website-design.html" className="responsive-link" {...props}>Responsive Website Design</LinkTo>
                        </li>
                        
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/design-prototyping.html" className="design-link" {...props}>Design Prototyping</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/psd-html-conversion.html" className="psdhtml-link" {...props}>PSD To HTML </LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="microsoft-development.html" {...props}>Microsoft Development</LinkTo>
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
                          <LinkTo to="/aspdotnet-development.html" className="asp-link" {...props}>Asp.net Development</LinkTo>
                        </li>
                        <li className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <LinkTo to="/mvc-dotnet-development.html" className="mvcnet-link" {...props}>MVC.net Development</LinkTo>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 resp-submenu">
                      <h3 className="menu_type under_line">
                        <LinkTo to="/cms-development.html" {...props}>
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
                        {/* <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/machine-learning-development.html" className="magento-link" {...props}>
                          Machine Learning Company in India 
                          </LinkTo>
                        </li> */}
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/magento-development.html" className="magento-link" {...props}>
                            Magento Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/wordpress-development.html" className="wordpress-link" {...props}>
                            WordPress Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/shopify-development.html" className="shopify-link" {...props}>
                            Shopify Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/drupal-development.html" className="drupal-link" {...props}>
                            Drupal Development
                          </LinkTo>
                        </li>
                        <li className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <LinkTo to="/woocommerce-development.html" className="woocommerce-link" {...props}>
                            WooCommerce Development
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

export default ServiceHeader;
