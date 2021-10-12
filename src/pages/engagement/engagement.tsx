import React from "react";
import "./engagement.scss";
import data from '../../constants/engagementPage';
import EnagageModel from "./component/enageModel";
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import { Link } from "react-router-dom";
import HtmlParser from "../../components/htmlParser/htmlParser";


class Engagement extends React.Component {
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
          <div className="inner-top-header banner-without-image engagment-page">
            <div className="container">
              <div className="cmr-reflectors">ENGAGEMENT</div>
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
                          Our <span className="label-angular">Engagement</span>
                          <br />
                          Models
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1">{data.assureLabel}</span>
              <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                {data.assureTitle}
              </h2>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <div className="medium_fontsize">
                <HtmlParser html={data.assureDescription} />
              </div>
            </div>
          </div>

          <div className="engagement_models">
            <div className="container">
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Take a look at</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      <span>Engagement</span> Models
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="engagement_model_list">
              <EnagageModel models={data.enangeModels}/>
            </div>
          </div>

          <TechnologyTabView technologyStopTitle="All about our"/>

          {/*Start project section */}
          <div className="start_project">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left">
                      <h4>{data.talkCardMessage}</h4>
                      <h3>{data.talkCardLabel}</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                          {data.takCardButton}
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

          <div className="cmarix_motto pt-100 pb-100">
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

export default Engagement;
