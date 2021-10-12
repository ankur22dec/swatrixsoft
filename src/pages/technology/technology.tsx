import React from "react";
import "./technology.scss";
import ContactForm from "../../components/ContactForm/contactForm";
import TechnologyList from "./components/technologyList";
import data from '../../constants/serviceLanding';
import BlogSection from "../../components/BlogSection/blogSection";
import HtmlParser from '../../components/htmlParser/htmlParser';

class Technology extends React.Component<any, any> {
 
  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
  }

  render() {
    return (
      <>
        <div>
          <div className="inner-top-header banner-without-image technology-page">
            <div className="container">
              <div className="cmr-reflectors">TECHNOLOGIES</div>
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
                        <span>Technologies</span>
                        <br />
                        We are working with
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mini-container pt-60 pb-100 left-sq">
            <div className="sec-tag-lines">
              <span className="sr-from-bottom-1">
                {data.missionLabel}
              </span>
              <h3 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                {data.missionTitle}
              </h3>
            </div>
          </div>

          <TechnologyList items={data.items}/>

          <div className="cmarix_motto pt-100 pb-100 right-sq">
            <div className="container mini-container">
              <div className="better_outcome">
                <div className="sec-tag-lines sr-from-bottom-1">
                  <h3>
                    We here @CMARIX are committed to continuously develop better
                    outcomes for the customers
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="blog_section">
            <div className="container">
            <h4 className="our_blog_title sr-from-bottom-1">Our Blogs</h4>
              <div className="blog_upper">
                  <div className="upper_left sr-from-bottom-2">
                      <h3>
                          <HtmlParser html={'We Have A Lot of <span>Experience</span> <br />(and Cautionary Tales) to <span>Write</span> About'} />
                      </h3>
                  </div>
                  <div className="upper_right sr-from-bottom-2">
                      <a className="view_all_blog" href="https://www.cmarix.com/blog" target="_blank" rel="noopener noreferrer">
                          View All Blogs <i className="icon-arrow-right"></i>
                      </a>
                  </div>
              </div>
              <div className="blog_list">
                <BlogSection />
              </div>
            </div>
          </div>

          <div className="clearfix">
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}

export default Technology;
