import React from "react";
import ImageView from "../../ImageView";

import ecommerce from "../../../assets/images/header/ecommerce.svg";
import healthcare from "../../../assets/images/header/healthcare.svg";
import media from "../../../assets/images/header/media.svg";
import finance from "../../../assets/images/header/finance.svg";
import insurance from "../../../assets/images/header/insurance.svg";
import security from "../../../assets/images/header/security.svg";
import education from "../../../assets/images/header/education.svg";
import realestate from "../../../assets/images/header/real-estate.svg";
import LinkTo from "../../LinkTo/linkTo";

function IndustryHeader(props: any) {
  return (
    <ul className="sub-menu industries-menu">
      <li className="sub-menu-container">
        <div className="container rd-container-qua">
          <div className="menu_container">
            <div className="menu_items">
              <div className="row">
                <div className="col-12 large-col resp-submenu">
                  <h3 className="menu_type under_line">Industries We Serve</h3>
                  <ul className="row sub-menu-navbar getin-touch-submenu pl-0">
                    <li className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <LinkTo to="/custom-ecommerce-platforms-development.html" {...props}>
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
                      <LinkTo to="/healthcare.html" {...props}>
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
                      <LinkTo to="/media-and-entertainment.html" {...props}>
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
                      <LinkTo to="/finance-and-banking.html" {...props}>
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
                      <LinkTo to="/insurance.html" {...props}>
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
                      <LinkTo to="/security.html" {...props}>
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
                      <LinkTo to="/elearning.html" {...props}>
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
                      <LinkTo to="/real-estate.html" {...props} >
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
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 step_main_parent">
                      <div className="step_block">
                        <div className="number">
                          <span>1</span>
                        </div>
                        <h4>Post your project requirement</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 step_main_parent">
                      <div className="step_block">
                        <div className="number">
                          <span>2</span>
                        </div>
                        <h4>
                          Discuss project details with our technical analysts
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 step_main_parent">
                      <div className="step_block">
                        <div className="number">
                          <span>3</span>
                        </div>
                        <h4>Select engagement model and timeline</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 step_main_parent">
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
  );
}

export default IndustryHeader;
