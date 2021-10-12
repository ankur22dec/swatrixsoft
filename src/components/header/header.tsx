import React from "react";
import ImageView from "../ImageView";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import SolutionHeader from "./component/solutionHeader";
import ServiceHeader from "./component/serviceHeader";
import HireHeader from "./component/hireHeader";
import IndustryHeader from "./component/industryHeader";
import CompanyHeader from "./component/companyHeader";

class CustomHeader extends React.Component {
  state = {
    showing: false,
    mobileInfo: false,
  };
  componentDidMount() {
    const windowObj: any = window;

    windowObj.jQuery(document).ready(function ($: any) {
      windowObj.jQuery(".stellarnav").stellarNav({
        breakpoint: 960,
        openingSpeed: 500,
        closingDelay: 0,
        sticky: true,
      });
    });
    
    windowObj.jQuery(window).scroll(function() {    
      var scroll = windowObj.jQuery(window).scrollTop();
      if (scroll >= 50) {
        windowObj.jQuery("#main-nav").addClass("fixed");
        windowObj.jQuery(".customNav ").addClass("fixed");
      } else {
        windowObj.jQuery("#main-nav").removeClass("fixed");
        windowObj.jQuery(".customNav ").removeClass("fixed");
      }
  });
  }
  // Remove Class For moblie
  removeMenu() {
    const windowObj: any = window;
    windowObj.jQuery(".stellarnav .sub-menu").each((data: any, element: any) => {
      windowObj.jQuery(element).css("display", "none");
    });

    windowObj.jQuery(".stellarnav .nav-company").each((data: any, element: any) => {
      windowObj.jQuery(element).removeClass("open");
      this.setState({mobileInfo: false});
    });
    this.setState({showing: false});
  }

  render() {
    const { showing } = this.state;
    
    let activeClasses = this.state.showing ? " active" : "";
    let infoactiveClasses = this.state.mobileInfo ? " active" : "";
    
    return (
      <nav className="navbar navbar-expand-lg cnslt-light customNav fixed-top">
        <Link className="navbar-brand in-smaller" to="/">
          <ImageView className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="mobile-action-buttons">
          <button
            className={`contact-info-mobile  ${infoactiveClasses}`}
            onClick={() => this.setState({ mobileInfo: true })}
          >
            <span>i</span>
          </button>
          <button
            className={`navbar-toggler ${activeClasses}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.setState({ showing: !showing })}
          >
            <span className="button_bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <div
          className={`mobile-contact-info  ${infoactiveClasses}`}
        >
          <div className="info-header">
            <span onClick={() => this.setState({ mobileInfo: false })}>
              <span></span>
              <span></span>
            </span>
          </div>
          <ul>
            <li>US : +1 631-206-6051</li>
            <li>India : +91 800-005-0808</li>
            <li>Email : biz@cmarix.com</li>
            <li>
              <Link to="/partnership.html" onClick={() => this.removeMenu()}>
                 Partnership
              </Link>
              </li>
            <li>
             <a href="https://www.cmarix.com/blog" target="_blank" onClick={() => this.removeMenu()} rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li>
              <Link to="/inquiry.html" onClick={() => this.removeMenu()}>
                Get in touch
              </Link>
              </li>
            <li>
              <Link to="/inquiry.html" onClick={() => this.removeMenu()}>
                INQUIRY
              </Link>
              </li>
          </ul>
        </div>
        <div
          style={{ display: showing ? "block" : "none" }}
          className="stellarnav desktop navbar-collapse  ml-auto"
          id="main-nav"
        >
          <Link className="navbar-brand in-larger" to="/">
            <ImageView className="logo" src={logo} alt="Logo" />
          </Link>
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item nav-company has-sub">
              <Link className="nav-link" to="/" onClick={() => this.removeMenu()}>
                Company
              </Link>
              <CompanyHeader onClick={() => {
                // this.setState({ showing: !showing });
                this.removeMenu();
              }}/>
            </li>
            <li className="nav-item has-sub">
              <Link to="/solutions.html" className="nav-link"  onClick={() => this.removeMenu()}>
                Solutions
              </Link>
              <SolutionHeader  onClick={() => this.removeMenu()}/>
            </li>
            <li className="nav-item has-sub"  >
              <Link to="/our-services.html" className="nav-link" onClick={() => this.removeMenu()}>
                Services
              </Link>
              <ServiceHeader onClick={() => this.removeMenu()} />
            </li>
            <li className="nav-item has-sub">
              <Link to="/hire-dedicated-developers.html" className="nav-link"  onClick={() => this.removeMenu()}>
                Hire Developers
              </Link>
              <HireHeader  onClick={() => this.removeMenu()}/>
            </li>
            <li className="nav-item has-sub">
              <Link to="/industries.html" className="nav-link"  onClick={() => this.removeMenu()}>
                Industries
              </Link>
              <IndustryHeader  onClick={() => this.removeMenu()}/>
            </li>
            <li className="nav-item">
              <Link to="/portfolio.html" className="nav-link" onClick={() => this.removeMenu()}>
                Portfolio
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 inquire_now">
            <div>
              <Link
                to="/inquiry.html"
                className="btn btn-dark large-btn move-btn"
                onClick={() => this.removeMenu()}
              >
                Inquire Now
              </Link>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default CustomHeader;
