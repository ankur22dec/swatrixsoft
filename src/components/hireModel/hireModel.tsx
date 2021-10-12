import React from 'react';
import HtmlParser from '../htmlParser/htmlParser';

function HireModel(props: any) {
    return (
        <div className="container">
            <div className="row">
                {
                    props.models.map((data: any, key: number)=>{ 
                        return (
                            <div key={key} className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className={`time_block sr-from-bottom-${key + 1} ${data.className}`}>
                                    <h3>{data.name}</h3>
                                    <div className="timing_details">
                                        <div className="hours_per_day">
                                            <h4>Hours Per Day</h4>
                                            <span>
                                                <strong>{data.hour}</strong> hrs/day
                                            </span>
                                        </div>
                                        <div className="minimun_day">
                                            <HtmlParser html = 
                                            {
                                                (data.name === 'Hourly') ? '<h4>Minimum Hours</h4>' : '<h4>Minimum Days</h4>'
                                            }
                                            />
                                            <span>
                                                <strong>{data.days}</strong> { (data.name === 'Hourly') ? 'Hours' : 'days' }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HireModel;
