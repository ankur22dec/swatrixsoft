import React from "react";
import ImageView from "../../../components/ImageView";
import HtmlParser from "../../../components/htmlParser/htmlParser";


function KeyFeature(props: any) {
    const { features } = props;
    
    return (
        <div className="cmr-tech-part">
            <div className="container mini-container">
                <div className="col-md-12">
                    <div className="sec-title sr-from-bottom">
                        <p className="sr-from-bottom-1">
                            <span>Take a look at</span>
                        </p>
                        <h3 className="sr-from-bottom-2 mb-5">
                            <HtmlParser html={props.keyfeatureTitle} />
                        </h3>
                    </div>
                </div>
            </div>
            {
                features.map((data: any, key: number) => {
                    return (
                        <div className={`${data.className} technology_row ${((key+1)%2) === 0 ? 'rtldir' : ''}`} key={key}>
                            <div className="container">
                                <div className="tech-layer"></div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className={`cmr-tech-xicon sr-from-bottom-${key+1}`} >
                                            <div className={`spriteOne ${data.iconClassName}`}></div>
                                        </div>
                                        <div>
                                            <h4 className="cmr-title sr-from-bottom-1" >
                                                <HtmlParser html={data.title}  />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="cmr-techstop">
                                            <div className="row justify-content-center mb-5">
                                                {
                                                    data.items.map((item: any, index: number) => {
                                                        return (
                                                            <div key={index} className={`sr-from-bottom-${index+1}`}>
                                                                <div className="ond-plate">
                                                                    <ImageView src={item.image} alt="hero-icon" />
                                                                    <h5>{item.title}</h5>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default KeyFeature;