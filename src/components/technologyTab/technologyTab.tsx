import React, { useState } from 'react';
import ImageView from '../ImageView';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import json from "../../constants/techonoglyStop";

function TechnologyTabView(props: any) {

    const techonology: any = json;

    const [active, setActive] = useState(techonology[0].title);

    function tabChange(key: string) {
        setActive(key);
    }

    return (
        <div className="container mini-container">
            <div className="cmr-techstop text-center sr-from-bottom">
                <div className="sec-title mb-5">
                    <p className="sr-from-bottom-1">
                        <span>{props.technologyStopTitle ? props.technologyStopTitle : 'Our Mission'}</span>
                    </p>
                    <h3 className="sr-from-bottom-2">
                        <span>Technology</span> Stop
                     </h3>
                </div>
                <Tab.Container activeKey={active}>
                    <Nav className="tech-navs sr-from-bottom-1">
                        {
                            techonology.map((data: any, key: number) => {
                                return (
                                    <Nav.Item key={key} onClick={() => tabChange(data.title)}>
                                        <Nav.Link eventKey={data.title}>{data.title}</Nav.Link>
                                    </Nav.Item>
                                );
                            })
                        }
                    </Nav>
                    <Tab.Content>
                        {
                            techonology.map((data: any, key: number) => {
                                return (
                                    <Tab.Pane key={key} eventKey={data.title}>
                                        {active === data.title ? <TechnologyTab services={data.services} /> : ''}
                                    </Tab.Pane>
                                );
                            })
                        }
                    </Tab.Content>
                </Tab.Container>

            </div>
        </div>
    )
}

function TechnologyTab(props: any) {
    const { services } = props;
    return (
        <>
            <div className="row justify-content-center mt-5">
                {
                    services.map((data: any, key: number) => {
                        return (
                            <div key={key} className={`col-lg-2 col-md-2 col-sm-3 col-4 sr-from-bottom-${key + 1}`}>
                                <Link to={`/${data.link || '#'}`}>
                                    <ImageView src={data.logo} alt={data.imageAlt ? data.imageAlt : 'Technology stop icon'} />
                                    <h5>{data.name}</h5>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TechnologyTabView;