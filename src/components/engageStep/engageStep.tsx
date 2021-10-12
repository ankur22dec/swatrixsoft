import React from 'react';

function EngageStep(props: any) {
    return (
        <div className="row">
            {
                props.steps.map((data: any, key: number) => {
                    return (
                        <div key={key} className={`col-lg-3 col-md-3 col-sm-6 col-12 step_main_parent sr-from-bottom-${(key+2)}`}>
                            <div className="step_block">
                                <div className="number">
                                    <span>{key+1}</span>
                                </div>
                                <h4>{data.title}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default EngageStep;
