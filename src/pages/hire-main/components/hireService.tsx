import React from 'react';
import ImageView from '../../../components/ImageView';
import { Link } from 'react-router-dom';

function HireService(props: any) {
    return (
        <div className="dedicated_service_list_inner">
            <div className="row">
                {
                    props.services.map((data: any, key: number) => {
                        return (
                            <div key={key} className="col-lg-2 col-md-3 col-sm-3 col-6">
                                <div className={`dedicated_service_deatils sr-from-bottom-1`}>
                                    <Link to={`/${data.routeName}`}>
                                        <div className="dedicated_service_icon">
                                        <ImageView src={data.image} alt={data.imageAlt ? data.imageAlt : 'Dedicated service icon'} />
                                        <div className="icon_overlay">
                                            <ImageView src={data.overlay} alt="Icon" />
                                        </div>
                                        </div>
                                        <h3 className="dedicated_service_name">
                                            {data.name}
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HireService;
