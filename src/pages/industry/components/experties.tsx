import React from 'react';

function Experties(props: any) {
    return (
        <div className="row">
            {
                props.experties.map((data: any, key: number) => {
                    return (
                        <div key={key} className={`col-lg-6 col-md-6 col-sm-12 col-12 sr-from-bottom-${key+1}`}>
                            <div className="flex-num-desc">
                                <div className="plate-num">
                                    {key+1}
                                </div>
                                <div>
                                    <h4>{data.title}</h4>
                                    <p>
                                        {data.description}    
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            
        </div>
    )
}

export default Experties;
