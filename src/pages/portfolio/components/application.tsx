import React from 'react';
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import ImageView from '../../../components/ImageView';

// const TabView = (props: any) => {
//     const { applications } = props;
//     return (
//         <Nav className="tech-navs" variant="pills">
//             {
//                 applications.map((data: any, key: number) => {
//                     return (
//                         <Nav.Item key={key}>
//                             <Nav.Link eventKey={data.type}>
//                                 <div className="ic-round">
//                                     <i className={data.icon}></i>
//                                 </div>
//                                 {data.name}
//                             </Nav.Link>
//                         </Nav.Item>
//                     )
//                 })
//             }
//         </Nav>
//     )
// }
 

class Application extends React.Component<any, any> {
    state = {
        onScrollClass: "",
        loadAll: false
    };

    render() {
        const { applications } = this.props;
        const { loadAll } = this.state;
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey={applications[0].type}>
                {/* <TabView applications={applications}/> */}
                <Tab.Content>
                    {
                        applications.map((data: any, key: number) => {
                            const items = [...data.apps];
                            const loadItems = loadAll ? items : items.splice(0, 10);
                            return (
                                <Tab.Pane eventKey={data.type} key={key}>
                                    <div className="port-grid">
                                        <div className="container mb-5">
                                            {
                                                loadItems.map((obj: any, index: number) => {
                                                    return (
                                                        <div className={`port-plate ${((index+1) % 2 === 0) ? 'pt-5' : ''}`} key={index}>
                                                            <Link to={`/${obj.link}`}>
                                                                <VisibilitySensor
                                                                    partialVisibility={true}
                                                                    onChange={(e) => {
                                                                        if (e) {
                                                                            if (!this.state.onScrollClass) {
                                                                                this.setState({
                                                                                    onScrollClass: 'in-view'
                                                                                })
                                                                            }
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className={`anmtn-element ${this.state.onScrollClass}`}>
                                                                        <div className="animated-cuts-top">
                                                                            <ImageView src={obj.image} alt="portfolio" />
                                                                        </div>
                                                                    </div>
                                                                </VisibilitySensor>
                                                                <div className="port-desc">
                                                                    <div className="flex-1">
                                                                        <p>{obj.weDid}</p>
                                                                        <h5>{obj.name}</h5>
                                                                        <div className="port-slates">
                                                                            <div className="port-cate">
                                                                                {obj.type}
                                                                            </div>
                                                                            {
                                                                                obj.tech.map((data: any, index: number) => {
                                                                                    return (
                                                                                        <div key={index} className="cat-tech ic-round">
                                                                                            <i className={obj.tech[index]} title={obj.title[index]}></i>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="view-btn pr-2">
                                                                        <button>
                                                                            <i className="icon-arrow-right"></i>
                                                                        </button>
                                                                        <p className="fj-letters">VIEW CASE</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/* {
                                            (data.apps.length > 10 && !loadAll) ? <button onClick={() => {
                                                this.setState({
                                                    ...this.state,
                                                    loadAll: true
                                                })
                                            }} className="cmr-outline-btn hvr-shutter-out-horizontal sr-from-bottom-2">
                                            Load More <i className="icon-arrow-down"></i>
                                            </button> : ''
                                        } */}
                                    </div>
                                </Tab.Pane>
                            );
                        })
                    }
                </Tab.Content>
            </Tab.Container>
        );
    }
}

export default Application;
