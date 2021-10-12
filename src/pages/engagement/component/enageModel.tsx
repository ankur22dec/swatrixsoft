import React from 'react';
import ImageView from '../../../components/ImageView';

function ImageSection(props: any){
    return (
        <div className="engagementmodel_image">
            <ImageView
                src={props.image}
                alt="Engagement Model"
            />
        </div>
    );
}

function DetailView(props: any) {
    const { data }: any = props;
    return (
        <div className="cmr-tw-adv">
            <div className="tw-plate tw-lg tw-four">
                <div className="cmr-tip-des">
                    <div className="spriteOne"></div>
                    <p className="cmr-point mt-3">
                        <span>{data.messageBox}</span>
                    </p>
                </div>
                <div className="slide-plate">
                    <div className="spriteOne slide-number slide-act-one"></div>
                    <div className="slide-detail">
                        <div className="model_type">
                            <h3><span>{data.title}</span></h3>
                        </div>
                        <p>
                            {data.description}
                        </p>
                        <ul className="model_characteristics">
                            {
                                data.items.map((obj: any, key: number) => {
                                    return (
                                        <li key={key}>{obj}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EnagageModel(props: any) {
    return (
        <>
        {
            props.models.map((data: any, key: number) => {
                if((key+1) % 2 === 0) {
                    // Even
                    return (
                        <div className="model_row" key={key}>
                            <div className="container">
                                <div className="row align-items-end">
                                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <DetailView data={data}/>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12 text-right">
                                        <ImageSection image={data.image}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    // Odd
                    return (
                        <div className="model_row" key={key}>
                            <div className="container">
                                <div className="row align-items-end">
                                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <ImageSection image={data.image}/>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left">
                                        <DetailView data={data}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
        </>
    )
}

export default EnagageModel;
