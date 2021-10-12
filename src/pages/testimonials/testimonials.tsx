import React from "react";
import "./testimonials.scss";
import StickyBox from "react-sticky-box";
import data from '../../constants/testimonials';
import TechnologyTabView from "../../components/technologyTab/technologyTab";
import ClientReview from "../../components/clientReview/clientReview";
import FeedbackUI from "./component/feedback";
import { Link } from "react-router-dom";
import HtmlParser from "../../components/htmlParser/htmlParser";

class Testimonials extends React.Component {
  state = {
    onScrollClass: "",
  };
  // componentWillMount() {
  // }
  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  handleSlideChange() {}
  render() {
    return (
      <>
        <div>
          <div className="inner-top-header banner-without-image testimonials-page">
            <div className="container">
              <div className="cmr-reflectors">TESTIM</div>
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
                          <span className="label-angular">Testimonials</span>
                          <br />
                          Client's Success
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
              <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                {data.assureTitle}
              </h3>
            </div>
            <div className="sec-description sr-from-bottom-3 mt-1">
              <div className="medium_fontsize">
                <HtmlParser html={data.assureDescription} />
              </div>
            </div>
          </div>

          <div className="reviews_on_clutch">
            <div className="container">
              <div className="cmr-reflectors">REVIEW</div>
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>{data.clientLabel}</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      {data.clientTitle}
                    </h3>
                  </div>
                </div>
              </div>
              <ClientReview reviews={data.reviews} />
            </div>
          </div>

          <div className="clients_words">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>{data.feedbackLabel}</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                      {data.feedbacktopTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer_review">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                    <StickyBox offsetTop={80} offsetBottom={20}>
                      <div className="excellent_customer">
                        <div className="banner-pattern">
                          <div className="pattern_inner">
                            <span></span>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                          </div>
                        </div>
                        <h3>{data.feedbackTitle}</h3>
                        <p>
                          {data.feedbackDescription}
                        </p>
                        <Link to="/our-services.html">
                          <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                            Our Services
                <i className="icon-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </StickyBox>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-6 col-12">
                    <FeedbackUI feedbacks={data.feedbacks} />
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
                  It’s all about people and process. Having the right people execute time tested processes is a sure shot way to results. 
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <TechnologyTabView  technologyStopTitle="All about our"/>

          {/*Start project section */}
          <div className="start_project">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left">
                      <h4>{data.cardLabel}</h4>
                      <h3>{data.cardMessage}</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                          Hire Developer
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

export default Testimonials;
