import React from 'react';
import ImageView from '../../../components/ImageView';

function Leader(props: any){
    return (
        <div className="leaders_list">
            <ul>
                {
                    props.leaders.map((data: any, key: number) => {
                        return (
                            <li key={key}>
                                <div className="leader_block sr-from-bottom-1">
                                    <div className="leader_image">
                                        <ImageView src={data.image} alt="Leader" />
                                    </div>
                                    <div className="leader_details">
                                        <h3 className="member_name">{data.name}</h3>
                                        <h4 className="designation">{data.position}</h4>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Leader;
