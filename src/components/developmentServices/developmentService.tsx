import React from 'react';
import ImageView from '../ImageView';


class DevelopmentService extends React.Component<any, {}> {

    render() {
        return (
            <>
                {
                    this.props.services.map((data: any,key: number) => {
                        return (
                            <div key={key} className={`col-lg-3 col-md-4 col-sm-6 col-12 sr-from-bottom-${1+key}`}>
                                <div className="ser-plate">
                                    <ImageView src={data.image} alt={data.title} />
                                    <div className="ser-title">
                                        {data.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default DevelopmentService;