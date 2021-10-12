import React from "react";
import { Link } from "react-router-dom";

function ContactInfo() {
    return (
        <div className="container rd-container-qua cta-Div">
            <ul data-scrollreveal="enter bottom after 1.2s over 1s">
            <li>
                US : 
                <a href="tel:+1-631-206-6051" data-slimstat="5">
                +1 631-206-6051
                </a>
            </li>
            <li>
                India : 
                <a href="tel:+91 800-005-0808" data-slimstat="5">
                {" "}
                +91 800-005-0808
                </a>
            </li>
            <li>
                Email : 
                <a href="mailto:biz@cmarix.com" data-slimstat="5">
                biz@cmarix.com
                </a>
            </li>
            <li>
                Skype : 
                <a href="skype:biz.cmarix" data-slimstat="5">
                biz.cmarix
                </a>
            </li>
            <li>
                <Link
                to="/partnership.html"
                data-slimstat="5"
                >
                Partnership
                </Link>
            </li>
            <li>
                <a href="https://www.cmarix.com/blog" target="_blank" data-slimstat="5" rel="noopener noreferrer">
                Blog
                </a>
            </li>
            <li>
                <Link
                    to="/inquiry.html"
                    data-slimstat="5"
                >
                Get in touch
                </Link>
            </li>
            </ul>
        </div>
    );
}

export default ContactInfo;
