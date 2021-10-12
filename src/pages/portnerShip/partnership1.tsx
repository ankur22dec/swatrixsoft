import React from "react";
import "./partnership.scss";
import ImageView from "../../components/ImageView";
import globalModel from "../../assets/images/global-delivery/global-delivery-model.png";
import iso1 from "../../assets/images/global-delivery/iso1.svg";
import iso2 from "../../assets/images/global-delivery/iso2.svg";
import cmmi3 from "../../assets/images/global-delivery/cmmi3.svg";
import { Link } from "react-router-dom";
import WeProvide from "../../components/weProvide/weProvide";
import data from "../../constants/globalDelivery";
import Management from "./component/management";
import TechnologyTabView from "../../components/technologyTab/technologyTab";

class PartnerShip extends React.Component {
  // componentWillMount() {
  // }
  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  render() {
    return (
      <>
        <div>
          <div className="inner-top-header banner-without-image team-page">
            <div className="container">
              <div className="cmr-reflectors">GLOBAL</div>
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
                      Partnership
                      <br />
                      <span className="label-angular">With Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="excellent-results sr-from-bottom-1">
            <div className="container mini-container pt-60 pb-100">
              <div className="sec-tag-lines">
                <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                  {data.title}
                </h3>
              </div>
              <div className="sec-description sr-from-bottom-3 mt-1">
                <p className="medium_fontsize">
                  {data.description}
                </p>
              </div>
            </div>
          </div>

          <div className="delivery_model">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12 text-center">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Quick Look</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      <span>Global Delivery Model</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="global_model">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center sr-from-bottom-2">
                    <ImageView src={globalModel} alt="Global Model" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Project Management */}
          <div className="local_project_management engagement_models">
            <div className="container">
              <Management />
            </div>
          </div>

          {/* certificates */}
          <div className="certificates sr-from-bottom-1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="certificate_list sr-from-bottom-3">
                    <span>CERTIFIED BY:</span>
                    <ul>
                      <li>
                        <ImageView src={iso1} alt="ISO" />
                      </li>
                      <li>
                        <ImageView src={iso2} alt="ISO" />
                      </li>
                      <li>
                        <ImageView src={cmmi3} alt="CMMI 3" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What we Provide */}
          <div className="cmr-what-we">
            <div className="container mt-5">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Take a look at</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      <span>Why to choose </span> CMARIX?
                    </h3>
                  </div>
                </div>
              </div>
              <WeProvide provide={data.weProvide}/>
            </div>
          </div>

          {/* Technology Stop */}
          <TechnologyTabView technologyStopTitle="All about our"/>

          {/*Start project section */}
          <div className="start_project">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left">
                      <h4>{data.cardLabel} </h4>
                      <h3>{data.cardTitle}</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                          {data.cardButton}
                          <i className="icon-arrow-right"></i>
                        </button>
                      </Link>
                      <div className="rings">
                        <div className="ring_inner">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cmarix_motto pt-100 pb-60">
            <div className="container mini-container">
              <div className="better_outcome">
                <div className="sec-tag-lines sr-from-bottom-1">
                  <h3>
                    {data.weAre}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PartnerShip;
