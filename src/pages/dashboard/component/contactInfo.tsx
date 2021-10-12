import React from "react";
import { Link } from "react-router-dom";

function ContactInfo() {
    return (
        <div className="container rd-container-qua cta-Div">
            <ul data-scrollreveal="enter bottom after 1.2s over 1s">
            <li>
                US : 
                <a href="tel:+1-xxx-xxx-xxxx" data-slimstat="5">
                8118849825
                </a>
            </li>
            <li>
                India : 
                <a href="tel:+91 7073875630" data-slimstat="5">
                {" "}
                +91 707-387-5630
                </a>
            </li>
            <li>
                Email : 
                <a href="mailto:swatrixsoft@gmail.com" data-slimstat="5">
                swatrixsoft@gmail.com
                </a>
            </li>
            <li>
                Skype : 
                <a href="skype:live:.cid.4f546262482b5b90" data-slimstat="5">
                Swatrixsoft
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
