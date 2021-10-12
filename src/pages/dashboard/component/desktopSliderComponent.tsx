import React from "react";
import ImageView from "../../../components/ImageView";
import email from "../../../assets/images/home/email.svg";
import downarrow from "../../../assets/images/home/down-arrow.png";
import SliderUIElement from "./sliderElementUI";
import { Link } from "react-router-dom";

var offsets: any = {};
var prevIndex = 0;
// var new_scroll: any;
class DesktopSliderComponent extends React.Component<any, any> {
  $: any = "";

  state = {
    activeSlide: 0,
    visibe: true
  }

  componentDidMount() {
    const windowObj: any = window;
    this.$ = windowObj.jQuery;
    this.calculate_offset();
  }

  makeAbsolute = () => {
    var singleSlideHeight = this.$(".home-work-slide").height();
    var height = this.$("#slider_wrapper").height();
    var topToadd = height - singleSlideHeight - 83;
    this.$("#slider_wrapper .home-work-slide").css("position", "absolute");
    this.$("#slider_wrapper .home-work-slide").css("top", topToadd + "px");
    this.$("#custom_pagination").css("position", "absolute");
    this.$("#custom_pagination").addClass("hide");
    this.$(".email-us.custom-slider-email").removeClass("slide-progress");
    this.$(".invisionapp-wrapper .service-left-navigation").removeClass(
      "slide-progress"
    );
    this.$(".invisionapp-wrapper .service-right-navigation").removeClass(
      "slide-progress"
    );
  };

  makeFixed = () => {
    this.$("#slider_wrapper .home-work-slide").css("position", "fixed");
    this.$("#slider_wrapper .home-work-slide").css("top", "0px");
    this.$("#slider_wrapper .home-work-slide").css("bottom", "none");
    this.$("#custom_pagination").css("position", "fixed");
    this.$("#custom_pagination").removeClass("hide");
    this.$(".email-us.custom-slider-email").addClass("slide-progress");
    this.$(".invisionapp-wrapper .service-left-navigation").addClass(
      "slide-progress"
    );
    this.$(".invisionapp-wrapper .service-right-navigation").addClass(
      "slide-progress"
    );
  };

  calculate_offset = () => {
    // let section_count = this.$('#hbsection').length + 1;
    let counter = 0;
    this.$(".invisionapp-wrapper #hbsection").each((index: any, elem: any) => {
      this.$(elem).height(window.screen.availHeight + "px");
      offsets[index] = this.$(elem).offset().top;
      counter++;
    });
    this.$(".invisionapp-wrapper").height(
      window.screen.availHeight * (counter + 1) + "px"
    );
    if (this.$("#slider_wrapper").length) {
      // const windowObj: any = window;
      this.new_scroll();
      this.$(document).scroll(this.new_scroll);
    }

    this.$('#custom_pagination .custom-pagination-bullet').each((key: any, element: any) => {
      this.$(element).click(() => {
        this.$('.custom-pagination-bullet').removeClass('custom-pagination-bullet-active');
        this.$(element).addClass('custom-pagination-bullet-active');
        this.$(window).scrollTop(offsets[key] + 100);
      })
    })
  };

  goToNextSlide = () => {
    this.$('#custom_pagination .custom-pagination-bullet').each((key: any, element: any) => {
      if((prevIndex+1) === key) {
        this.$('.custom-pagination-bullet').removeClass('custom-pagination-bullet-active');
        this.$(element).addClass('custom-pagination-bullet-active');
        this.$(window).scrollTop(offsets[key] + 100);
      }
    })
  }

  new_scroll = () => {
    var offsetTop = this.$("#slider_wrapper").offset().top;
    var currentScrollPos = window.pageYOffset;
    var height = this.$("#slider_wrapper").height();
    var headerHeight = 50;
    offsetTop = offsetTop - headerHeight;
    var type = "above";
    if (currentScrollPos < offsetTop) {
      type = "above";
    } else if (
      currentScrollPos >= offsetTop &&
      currentScrollPos < height + offsetTop
    ) {
      type = "inside";
    } else {
      type = "below";
    }
    var singleSlideHeight = this.$(".home-work-slide").height();
    switch (type) {
      case "above":
        this.$(".email-us.custom-slider-email").removeClass("slide-progress");
        this.$(".invisionapp-wrapper .service-left-navigation").removeClass(
          "slide-progress"
        );
        this.$(".invisionapp-wrapper .service-right-navigation").removeClass(
          "slide-progress"
        );
        this.$("#slider_wrapper .home-work-slide").css("position", "absolute");
        this.$("#slider_wrapper .home-work-slide").css("top", "0px");
        this.$("#custom_pagination").css("position", "absolute");
        this.$("#custom_pagination").css("top", "none");
        this.$("#custom_pagination").addClass("hide");
        break;
      case "inside":
        this.makeFixed();
        var index = 0;
        if (currentScrollPos >= offsets[0] && currentScrollPos < offsets[1]) {
          index = 0;
        } else if (
          currentScrollPos >= offsets[1] &&
          currentScrollPos < offsets[2]
        ) {
          index = 1;
        } else if (
          currentScrollPos >= offsets[2] &&
          currentScrollPos < offsets[3]
        ) {
          index = 2;
        } else if (currentScrollPos >= offsets[3] &&
          currentScrollPos < offsets[4]) {
          index = 3;
        }
        else if (currentScrollPos >= offsets[4]) {
          index = 4;
        }
        if (prevIndex !== index) {
          let animateobj = this.$(
            "#slider_wrapper .home-work-slide:nth(" + index + ")"
          );
          let actobj = this.$(
            "#slider_wrapper .home-work-slide.swiper-slide-active"
          );
          var direction = "next";
          if (prevIndex > index) {
            direction = "prev";
          }
          prevIndex = index;
          this.setState({
            ...this.state,
            visibe: false
          })
          this.setState({
            ...this.state,
            activeSlide: index
          },() => {
            this.setState({
              ...this.state,
              visibe: true
            });
          });
          
          this.slideChange(actobj, animateobj, direction);
          this.$(".custom-pagination-bullet").removeClass(
            "custom-pagination-bullet-active"
          );
          this.$(".custom-pagination-bullet:eq(" + index + ")").addClass(
            "custom-pagination-bullet-active"
          );
        }
        if (currentScrollPos > offsetTop + height - singleSlideHeight) {
          this.makeAbsolute();
        }
        break;
      case "below":
        this.makeAbsolute();
        break;
    }
  };

  slideChange(activeobj: any, animateobj: any, direction: any) {
    if (direction === "next") {
      animateobj.addClass("swiper-slide-active");
      activeobj.removeClass("swiper-slide-active");
      animateobj.css({
        "z-index": "1",
      });
      activeobj.css({
        "z-index": "2",
      });
      activeobj.addClass("margintopup");
      setTimeout(() => {
        animateobj.css({
          "z-index": "1",
        });
        activeobj.css({
          "z-index": "0",
        });
        activeobj.removeClass("clip-section").removeClass("margintopup");
      }, 700);
    } else {
      animateobj.addClass("swiper-slide-active");
      activeobj.removeClass("swiper-slide-active");
      activeobj.css({
        "z-index": "2",
      });
      animateobj.css({
        "z-index": "1",
      });
      activeobj.addClass("margintopdown");
      setTimeout(() => {
        activeobj.removeClass("swiper-slide-active");
        animateobj.css({
          "z-index": "1",
        });
        activeobj.css({
          "z-index": "0",
        });
        activeobj.removeClass("clip-path").removeClass("margintopdown");
      }, 700);
    }
  }

  componentWillUnmount() {
    this.$(document).off("scroll", this.new_scroll);
  }

  getTextName() {
    const { activeSlide } = this.state;
    const { slides } = this.props;
    if(slides[activeSlide+1]) {
      return slides[activeSlide+1]['name']
    }
    return '';
  }

  render() {
    const { slides } = this.props;
    const { visibe } = this.state;

    return (
      <section className="invisionapp-wrapper" id="slider_wrapper">
        <div
          id="hbsection"
          className="invisionapp-hunger-partner home-work-slide swiper-slide-active"
        >
          <SliderUIElement data={slides[0]}/>
        </div>
        <div
          id="hbsection"
          className="invisionapp-hunger-partner home-work-slide"
        >
          <SliderUIElement data={slides[1]}/>
        </div>
        <div
          id="hbsection"
          className="invisionapp-hunger-partner home-work-slide"
        >
          <SliderUIElement data={slides[2]}/>
        </div>
        <div
          id="hbsection"
          className="invisionapp-hunger-partner home-work-slide"
        >
          <SliderUIElement data={slides[3]}/>
        </div>
        <div
          id="hbsection"
          className="invisionapp-hunger-partner home-work-slide"
        >
          <SliderUIElement data={slides[4]}/>
        </div>
        <div
          className="custom-pagination custom-pagination-clickable custom-pagination-bullets"
          id="custom_pagination"
        >
          <span className="custom-pagination-bullet custom-pagination-bullet-active"></span>
          <span className="custom-pagination-bullet"></span>
          <span className="custom-pagination-bullet"></span>
          <span className="custom-pagination-bullet"></span>
          <span className="custom-pagination-bullet"></span>
        </div>

        <div className="email-us custom-slider-email">
          <Link to="/inquiry.html">
            <ImageView src={email} alt="Email Us" />
          </Link>
        </div>
        <div className="service-left-navigation">
          <div className="left-navigation-inner">
            <span className="next-slide" onClick={() => this.goToNextSlide()}>Next</span>
            {
              visibe ? (
              <span className="next-slide-name">{this.getTextName()}</span>
              ) : ''
            }
          </div>
        </div>
        <div className="service-right-navigation">
          <div onClick={() => this.props.scrollTo()}>
            <span>
              <ImageView src={downarrow} alt="Down Arrow" />
            </span>
            Jump to Consulting Services
          </div>
        </div>
      </section>
    );
  }
}

export default DesktopSliderComponent;
