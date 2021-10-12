import React from "react";
import ImageView from "../../../components/ImageView";
import HtmlParser from "../../../components/htmlParser/htmlParser";
import { Link } from "react-router-dom";
import LinkTo from "../../../components/LinkTo/linkTo";

function SliderUIElement(props: any) {
    const { data } = props;
    return (
        <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="service-slide-left">
                <h5>{props.data.label}</h5>
                <h3 data-splitting="chars">
                    <HtmlParser html={props.data.title}/>
                </h3>
                <p>
                    {props.data.description}
                </p>
                <div className="application-type">
                    <ul>
                        {
                            data.technology.map((obj: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <LinkTo to={obj.url}>
                                            <ImageView src={obj.image} alt="Android" />
                                        </LinkTo>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link to={`/${props.data.link}`} className="view_all_blog">
                    View Service <i className="icon-arrow-right"></i>
                </Link>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="service-slide-right">
                    <ImageView src={props.data.image} alt={props.data.imageAlt} />
                </div>
                <div className="circle-mask"></div>
            </div>
        </div>
    );
}

export default SliderUIElement;
