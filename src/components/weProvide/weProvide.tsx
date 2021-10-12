import React from 'react';

function WeProvide(props: any) {
    return (
            <>
                {
                    props.provide.map((data: any, key: number) => {
                        return (
                            <div key={key} className={`row provide-plate sr-from-bottom-${key+3}`}>
                                <div className="col-md-6 col-lg-4 left-tags">
                                    <span className="step-number-custom">0{key+1}.</span>
                                    <span className="step-label-custom">
                                        {data.title}
                                    </span>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </>
    );
}

export default WeProvide;
