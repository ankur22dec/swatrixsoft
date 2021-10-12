import React from "react";
import "./team.scss";
import data from '../../constants/team';
import HtmlParser from "../../components/htmlParser/htmlParser";
import Members from "./components/memeber";
import Pillers from "./components/pillers";
import { Link } from "react-router-dom";


class Team extends React.Component {
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
              <div className="cmr-reflectors">TEAM</div>
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
                        Meet
                        <br />
                        <span className="label-angular">The Team</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="excellent-results sr-from-bottom-1">
            <div className="container mini-container pt-60 pb-100 left-rnd">
              <div className="sec-tag-lines">
                <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                  {data.titleLabel}
                </h2>
              </div>
              <div className="sec-description sr-from-bottom-3 mt-1">
                <div className="medium_fontsize">
                  <HtmlParser html={data.titleDescription} />
                </div>
              </div>
              <h3 className="pwered-by">We are Powered by <b>Engineers</b>. Empowered by <b>Technology</b>.</h3>
            </div>
          </div>
          <div className="our_pillar">
            <div className="container">
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Quick Look</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      Our <span>Pillar</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Pillers members={data.piilers} />
          </div>
          {/* <div className="our_leader">
            <div className="container">
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Quick Look</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      Our <span>Leaders</span>
                    </h3>
                  </div>
                </div>
              </div>
              <Leader leaders={data.leaders} />
            </div>
          </div> */}

          <div className="our_technocrats">
            <div className="container">
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Quick Look</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      Our <span>Technocrats</span>
                    </h3>
                  </div>
                </div>
              </div>
              <Members members={data.members} more={data.moreMember} />
            </div>
          </div>
          
          <div className="let-discuss mb-3">
            <div className="container">
              <div className="row align-items-center mb-5">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="discuss-left">
                    <div className="discuss-title sr-from-bottom-2">

                      <h3>
                        <HtmlParser html={data.recruiteTitle} />
                      </h3>
                      <p className="mt-3">
                        <i>
                          {data.recruiteDescription}
                          <br />
                          <b>Think you match our required standards?</b>
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="discuss-right left-brush sr-from-bottom-3">
                    <h4>Check our Open Positions</h4>
                    <Link to="/career.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        Join Our Team
                        <i className="icon-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row align-items-center reverse-direction-mobile">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="discuss-right left-brush sr-from-bottom-3">
                    <h4>Want more anout us?</h4>
                    <Link to="/know-us.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        Know Us
                        <i className="icon-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="discuss-left">
                    <div className="discuss-title sr-from-bottom-2">

                      <h3>
                        {data.relationTitle}<br />
                      </h3>
                      <p className="mt-3">
                        <i>
                          {data.relationDescription}
                        </i>
                      </p>
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

          {/*Start project section */}
          <div className="start_project">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left">
                      <h4>{data.cardLabel}</h4>
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
        </div>
      </>
    );
  }
}

export default Team;
