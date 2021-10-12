import React from 'react';

import { Link } from 'react-router-dom';
import ImageView from '../ImageView';
import HtmlParser from '../htmlParser/htmlParser';

class RelatedService extends React.Component<any, {}> {
    render() {
        return (
            <div className="cmr-related sr-from-bottom">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-12">
                        <div className="sec-title sr-from-bottom">
                            <p className="sr-from-bottom-1"><span>{this.props.label}</span></p>
                            <h3 className="sr-from-bottom-2">
                                {this.props.title}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        this.props.services.map((data:any, key: number)=>{
                            return (
                                <div key={key} className="col-lg-3 col-md-6 col-sm-6 col-6">
                                    <Link to={data.route}>
                                        <div className={`related-plate sr-from-bottom-${3+key}`}>
                                            <div className="related-icon">
                                                <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : data.title} />
                                            </div>
                                            <h6>
                                                <HtmlParser html={data.title} />
                                            </h6>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RelatedService;