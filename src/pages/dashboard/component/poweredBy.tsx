import React from "react";
import clientLogos from "../../../assets/images/client-logos.png";

function PoweredBy() {
    return (
        <div className="cmarix-clientele-main">
          <div className="circle-element"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 cmarix-clientele-left sr-from-bottom-1">
                <h2>
                  Our smile is <br />
                  powered by
                </h2>
                <p>
                 We Created Results For <span>SMEs, Enterprises and Fortune 500 companies across globe</span> and for different <span>industry verticals</span>.
                </p>
              </div>
              <div className="col-lg-7 cmarix-clientele-content">
                <div className="client-logos sr-from-bottom-1">
                  <img src={clientLogos} alt="The Clients Logo" width="797" height="417"/>
                </div>
                <div className="sr-from-bottom-2">
                  <ul>
                    <li className="col-md-6">
                      <span>90%</span> Client Retention
                    </li>
                    <li className="col-md-6">
                      <span>80%</span> Referral Business
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PoweredBy;
