import React from 'react';
import ImageView from '../ImageView';

function Benifits(props: any) {
    return (
        <div className="row wrap benefit_row">
            {
                props.benifits.map((data: any, key: number) => {
                    return (
                        <div key={key} className={`col-lg-6 col-md-6 col-sm-6 col-12 sr-from-bottom-${(key+1)} ${((key+1)%2 === 0 ? 'pt-60' : '')}`}>
                            <div className="benefites_block">
                                <div className="icon_box">
                                    <ImageView src={data.image} alt="startupIcon" />
                                    <div className="icon_overlay">
                                        <ImageView src={data.overlay} alt="startupIcon" />
                                    </div>
                                </div>
                                <h3>{data.title}</h3>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Benifits;
