import React from "react";
import ImageView from "../../../components/ImageView";

function Encourge(props: any) {
    const { items } = props;
    return (
        <>
            {
                items.map((data: any, key: number) => {
                    return (
                        <div key={key} className="col-md-6 col-lg-3 sr-from-bottom-3">
                            <div className="enc-plate">
                                <div className="img-enc">
                                    <ImageView src={data.image} alt="Icon" />
                                </div>
                                <h5>{data.title} </h5>
                                <p>
                                    {data.description}    
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Encourge;