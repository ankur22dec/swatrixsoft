import React from 'react';
import ImageView from '../../../components/ImageView';
import { Link } from 'react-router-dom';


function AppDevelopmentService(props: any) {
    return (
        <div className="container mini-container">
            <div className="row">
                {
                    props.services.map((data: any, key: number) => {
                        return (
                            <div key={key} className="col-md-6 service-alt">
                                <Link to={`/${data.link || '#'}`}>
                                    <div className={`app-plate sr-from-bottom-${key+1}`}>
                                        <div>
                                            <h5>
                                                {data.name}
                                                <br />
                                                Development
                                            </h5>
                                            <p>
                                                {data.description}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="icon_box">
                                                <ImageView className="over-icon" src={data.image} alt="Icon" />
                                                <div className="icon_overlay">
                                                    <ImageView src={data.overlay} alt="Icon" />
                                                </div>
                                            </div>
                                            <div className="link-btn">
                                                Visit Now <i className="icon-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppDevelopmentService;
