import React from "react";

function ReviewOn(){ 
    return (
        <div className="container">
            <div className="row testimonials-bottom">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 testimonials-bottom-left sr-from-bottom-1">
                <h3>
                <strong>Great</strong> &  <strong>Dedicated</strong> Work Always Speaks In High Numbers. 
                </h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 testimonials-bottom-right sr-from-bottom-2">
                <ul className="row customer-reviews-section">
                    <li className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="review-section sr-from-bottom-3">
                        <i className="clutchco-logo"></i>
                        <div className="overall-rating">
                        4.9<small>/5</small>
                        </div>
                        <a href="https://clutch.co/profile/cmarix" target="_blank" className="all-reviews" rel="noopener noreferrer">
                        Read Reviews
                        </a>
                    </div>
                    </li>
                    <li className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="review-section sr-from-bottom-4">
                        <i className="goodfirm-logo"></i>
                        <div className="overall-rating">
                        5<small>/5</small>
                        </div>
                        <a href="https://www.goodfirms.co/company/cmarix-technolabs-pvt-ltd" target="_blank" className="all-reviews" rel="noopener noreferrer">
                        Read Reviews
                        </a>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default ReviewOn;
