import React from "react";

import "./footer.scss";
import ImageView from "../ImageView";
import copyscape from "../../assets/images/footer/copyscape.svg";
import dmca from "../../assets/images/footer/dmca.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import linkdin from "../../assets/images/footer/linkdin.svg";
import youtube from "../../assets/images/footer/youtube.svg";
import dribble from "../../assets/images/footer/dribble.svg";
import instagram from "../../assets/images/footer/instagram.svg";
import LinkTo from "../LinkTo/linkTo";

class Footer extends React.Component<any, any> {
  render() {
    const { hide } = this.props;
    var d = new Date();
    var year = d.getFullYear();
    return (
      <div className={`footer-container ${hide ? 'contactus-footer': ''}`}>
        <div className="footer-elment"></div>
        <div className="container">
          <div className="row">
            {
              (!hide) ? (
                <div className="col-12 cmarix-locations">
                  <div className="footer-main-title">
                    swatrixsoft TechnoLabs Pvt. Ltd.
                  </div>
                  <div className="row footer_location_list">
                    <div className="col india-loc">
                      <span className="map-icon"></span>
                      <h5>
                        India <span>(HQ)</span>
                      </h5>
                      <p>
                        443,Thegri Nagar, Near IIHT Campus
                        Jodhpur - 342001, Rajasthan, India
                      </p>
                    </div>
                    <div className="col usa-loc">
                      <span className="map-icon"></span>
                      <h5>USA</h5>
                      <p>32572 Miller Ct. Temecula, CA 92592</p>
                    </div>
                    <div className="col germany-loc">
                      <span className="map-icon"></span>
                      <h5>Germany</h5>
                      <p>Essener Strasse 5, 46047 Oberhausen, Germany</p>
                    </div>
                    <div className="col italy-loc">
                      <span className="map-icon"></span>
                      <h5>Italy</h5>
                      <p>Via Sant’Agostino, 8 10122 Torino Italy</p>
                    </div>
                    <div className="col bahrain-loc">
                      <span className="map-icon"></span>
                      <h5>Bahrain</h5>
                      <p>Villa 1275 Street 848, Block 408 Town Seef, Bahrain</p>
                    </div>
                    <div className="col nigeria-loc">
                      <span className="map-icon"></span>
                      <h5>Nigeria</h5>
                      <p>
                        287A, Corporation Drive, Dolphin Estate, Ikoyi, Lagos,
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              ) : ''
            }
            
            {
              (!hide) ? (
                <div className="col-12 get-in-touch">
                  <div className="footer-title">Get in touch</div>
                  <div className="row footer_contact_list">
                    <div className="col footer-contact-col">
                      <div className="icon skype-icon"></div>
                      <div className="footer-contact-inner">
                        <label>Skype ID</label>
                        <p><a href="skype:biz.cmarix? call">biz.swatrixsoft</a></p>
                      </div>
                    </div>
                    <div className="col footer-contact-col">
                      <div className="icon gmail-icon"></div>
                      <div className="footer-contact-inner">
                        <label>Email us</label>
                        <p><a href="mailto:swatrixsoft@gmail.com">swatrixsoft@gmail.com</a></p>
                      </div>
                    </div>
                    <div className="col footer-contact-col">
                      <div className="icon india-map-icon"></div>
                      <div className="footer-contact-inner">
                        <label>India</label>
                        <p><a href="tel:+91 7073875630">+91 7073875630</a></p>
                      </div>
                    </div>
                    <div className="col footer-contact-col">
                      <div className="icon usa-map-icon"></div>
                      <div className="footer-contact-inner">
                        <label>United States</label>
                        <p><a href="tel:8118849825">8118849825</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : ''
            }
            <div className="col-12 footer-sm">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <ul className="footer-sm-list footer-award-list">
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-good-firms"
                      >
                        Good Firms
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-clutch"
                      >
                        Clutch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-td"
                      >
                        Top Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-it-firms"
                      >
                        It Firms
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-app-futura"
                      >
                        App Futura
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.swatrixsoft.com"
                        className="footer-logo-app-firms"
                      >
                        App Firms
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="footer_socilal_link">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/swati.mathur.33483" target="_blank" rel="noopener noreferrer">
                          <ImageView src={facebook} alt="Facebook" width="10" height="19" />
                          Facebook 
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                          <ImageView src={twitter} alt="Twitter" width="17" height="14"/>
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/swatrixsoft" target="_blank" rel="noopener noreferrer">
                          <ImageView src={linkdin} alt="Linkdin" width="19" height="19"/>
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UC9xhwQ-x0gnIy-GJWSB6Itw" target="_blank" rel="noopener noreferrer">
                          <ImageView src={youtube} alt="YouTube" width="20" height="14"/>
                          Youtube
                        </a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/CMARIXTechnoLabs" target="_blank" rel="noopener noreferrer">
                          <ImageView src={dribble} alt="Dribble" width="20" height="14"/>
                          Dribble
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                          <ImageView src={instagram} alt="Instagram" width="20" height="14"/>
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 copyright">
                &copy; Copyright {year} @ swatrixsoft Technolabs Pvt. Ltd.
              </div>
              <div className="col-lg-4 col-md-12 text-center">
                <a href="https://www.dmca.com/Protection/Status.aspx?ID=f0d86f28-f003-4806-8b9b-af711df96d7f&refurl=https://www.cmarix.com/">
                  <div className="privacy_certificate">
                    <ul>
                      <li>
                        <ImageView src={dmca} alt="DMCA" width="150" height="30" />
                      </li>
                      <li>
                        <ImageView src={copyscape} alt="Copyscape" width="161" height="20" />
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-12 footer-links">
                <ul>
                  <li>
                    <LinkTo to="/term-of-use.html">Terms of Use</LinkTo>
                  </li>
                  <li>
                    <LinkTo to="/privacy-policy.html">Privacy Policy</LinkTo>
                  </li>
                  <li>
                    <LinkTo to="/sitemap.html">Sitemap</LinkTo>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
