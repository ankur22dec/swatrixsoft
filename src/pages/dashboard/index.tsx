import React from "react";
import VisibilitySensor from "react-visibility-sensor";

//  Icons & Images
import circle6 from "../../assets/images/circle-6.svg";
import ClientReview from "../../components/clientReview/clientReview";
import ImageView from "../../components/ImageView";
import downarrow from "../../assets/images/home/down-arrow.png";
import arrowprev from "../../assets/images/arrow-prev.svg";
import arrownext from "../../assets/images/arrow-next.svg";
import BlogSection from "../../components/BlogSection/blogSection";
import DomainExpert from "../../components/domainExpert/domainExpert";
import TopSlider from "./component/topSlider";
import ContactInfo from "./component/contactInfo";
import InquiryForm from "./component/inquiry";
import ReviewOn from "./component/reviewOn";
import PoweredBy from "./component/poweredBy";
import Product from "./component/product";
import ConsultingUI from "./component/consulting";
import DesktopSliderComponent from "./component/desktopSliderComponent";
import MobileSliderComponent from "./component/mobileSliderComponent";
import data from "../../constants/dashboard";
import HtmlParser from "../../components/htmlParser/htmlParser";

class Dashboard extends React.Component {
  flag: any = (window.innerWidth > 992) ? false : true;
  scrollRef: any = '';

  constructor(props: any) {
    super(props);
    this.state = {
      slideupsection: false,
      onScrollClass: "",
      isMobile: this.flag,
    };
    this.handleSlide = this.handleSlide.bind(this);
    this.handleSlideClose = this.handleSlideClose.bind(this);
  }

  state = {
    slideupsection: false,
    onScrollClass: "",
    isMobile: this.flag
  };

  // componentWillMount() {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  componentDidMount() {
    let windowObj: any = window;
    windowObj.helloTest();
    windowObj.handleTextEffect();
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleSlide() {
    this.setState({
      slideupsection: true,
    });
  }

  handleSlideClose() {
    this.setState({
      slideupsection: false,
    });
  }

  goTo = () => {
    window.scrollTo({
      behavior: "smooth",
      top: (this.scrollRef.offsetTop - 50)
    });
  }

  render() {
    let slideFlag = this.state.slideupsection;
    const { isMobile } = this.state;

    return (
      <div className="main">
        <div className="hero-top at-cmarix-top">
          <div>
            <TopSlider />
            <ContactInfo />
          </div>
          <div className="left-bottom">
            <ImageView src={circle6} alt="circle"  width="374" height="225"/>
          </div>
        </div>

        {
          (isMobile) ? (
            <div className="home-services-main">
              <MobileSliderComponent slides={data.sliderContent} />
              <div className="service-left-navigation">
                <div className="left-navigation-inner">
                  <span className="next-slide">Next</span>
                  <span className="next-slide-name">Web Development</span>
                </div>
              </div>
              <div className="service-right-navigation">
                <div onClick={() => this.goTo()}>
                  <span>
                    <ImageView src={downarrow} alt="Down Arrow" />
                  </span>
                  Jump to Consulting Services
                </div>
              </div>
            </div>
          ) : <DesktopSliderComponent slides={data.sliderContent} scrollTo={this.goTo} />
        }

        <div ref={(ref) => this.scrollRef = ref}>
          <ConsultingUI handleSlideClose={this.handleSlideClose} slideFlag={slideFlag} handleSlide={this.handleSlide} />
        </div>
        <div className="home-case-study-main sr-from-bottom-1">
          <div className="container home-case-study-title">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <h3 className="sr-from-bottom-2">
                  <span className="bubble-title">Everything we do is</span>
                  <br />
                  Implemented to <br />
                  Grow
                </h3>
              </div>
              <div className="col-lg-6 section-small-description">
                <VisibilitySensor
                  partialVisibility={true}
                  onChange={(e) => {
                    if (e) {
                      if (!this.state.onScrollClass) {
                        this.setState({
                          onScrollClass: "in-view",
                        });
                      }
                    }
                  }}
                >
                  <div className={`${this.state.onScrollClass}`}>
                    <p>
                      We Build <strong>Lasting </strong> <strong>Partnerships</strong> & <strong>Experiences </strong>
                      That Drive <strong>Results</strong>
                    </p>
                  </div>
                </VisibilitySensor>
              </div>
            </div>
          </div>
          <div className="home-case-study-swiper sr-from-bottom-1">
            <Product />
            <div className="case-study-pagination">
              <div className="container">
                <div className="case-study-slider-pagination"></div>
              </div>
            </div>
            <div className="swiper-button-prev-unique">
              <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
            </div>
            <div className="swiper-button-next-unique">
              <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
            </div>
          </div>
        </div>

        <div className="home-industries-main left-sq">
          <div className="background-label sr-from-bottom-1">INDUSTRIES</div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 sr-from-bottom-1">
                <h3>
                  Industries <br /> In Focus
                </h3>
              </div>
              <div className="col-lg-6 pl-0 pr-0 sr-from-bottom-2 section-small-description">
                <p>
                  Created & Creating Results For More Than <strong>25+ Industries</strong>  & still continuing..
                </p>
              </div>
            </div>
            <div className="sr-from-bottom-2">
              <DomainExpert experts={data.domainExpert} />
            </div>
          </div>
        </div>

        <PoweredBy />

        <div className="cmarix-testimonials">
          <div className="background-label sr-from-bottom-1">REVIEW</div>
          <div className="container">
            <div className="row">
              <div className="col sr-from-bottom-1">
                <h3>
                  <span className="bubble-title">Everything we do is</span>
                  <br />
                  Few of many words
                </h3>
              </div>
            </div>
            <div className="testimonials-main sr-from-bottom-2">
              <ClientReview reviews={data.reviews} />
            </div>
          </div>
        </div>

        <div className="testimonial-review-avearage">
          <ReviewOn />
        </div>

        <div className="let-discuss">
          <InquiryForm />
        </div>

        <div className="blog_section">
          <div className="container">
            <h4 className="our_blog_title sr-from-bottom-1">Our Blogs</h4>
            <div className="blog_upper">
              <div className="upper_left sr-from-bottom-2">
                <h3>
                  <HtmlParser html={
                    (data.blogsTitle) ? data.blogsTitle : 'We Have A Lot of <span>Experience</span> <br />(and Cautionary Tales) to <span>Write</span> About'
                  } />
                </h3>
              </div>
              <div className="upper_right sr-from-bottom-2">
                <a className="view_all_blog" href="https://www.cmarix.com/blog"  rel="noopener noreferrer" target="_blank">
                  View All Blogs <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog_list">
              <BlogSection />
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default Dashboard;
