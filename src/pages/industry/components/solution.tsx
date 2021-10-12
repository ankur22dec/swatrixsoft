import React from 'react';

function Solutions(props: any) {
    return (
        <div className="row">
            {
                props.solutions.map((data: any, key: number) => {
                    return (
                        <div key={key} className="col-md-6 col-lg-4 emerge-plate sr-from-bottom-4">
                            <div className="emerge-num">
                                {key+1}
                            </div>
                            <div>
                                <h4>{data.title}</h4>
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

export default Solutions;
