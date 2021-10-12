import React from "react";
import ImageView from "../../../components/ImageView";
import quetionmark from "../../../assets/images/quetion-mark.svg";
import { Link } from "react-router-dom";

function InquiryForm() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="discuss-left">
                    <div className="question-mark sr-from-bottom-1">
                    <ImageView src={quetionmark} alt="Question Mark" width="179" height="179"/>
                    </div>
                    <div className="discuss-title sr-from-bottom-2">
                    <h3>
                        Great Business Are Incomplete  <br />
                        Without Great Software. <br />
                        <span className="small-font">
                            You Have Ideas.
                            We have Great Solutions.
                            Time to Work Together.  
                        </span>
                        {/* <span>Let's start the discussion</span> */}
                    </h3>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="discuss-right left-brush sr-from-bottom-3">
                    <h4>24 X 7 Support</h4>
                    <Link to="/inquiry.html">
                        <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        Inquire Now
                        <i className="icon-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default InquiryForm;
