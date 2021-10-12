import React from 'react';
import ImageView from '../../../components/ImageView';

function Members(props: any) {
    return (
        <div className="technocrats_list">
            <ul>
                {
                    props.members.map((data: any, key: number) => {
                        return (
                            <li key={key}>
                                <div className="member_block sr-from-bottom-1">
                                    <div className="member_photo">
                                        <div className="flip-card-front">
                                            <ImageView src={data.image} alt="technocrats" />
                                        </div>
                                        <div className="flip-card-back">
                                            <ImageView src={data.back} alt="logo" />
                                        </div>
                                    </div>
                                    <h3 className="member_name">{data.name}</h3>
                                    <h4 className="designation">{data.position}</h4>
                                </div>
                            </li>
                        );
                    })
                }
                <li className="more_member">
                    <div className="member_block sr-from-bottom-1">
                        <div className="member_photo">
                        <ImageView src={props.more.image} alt="technocrats" />
                        <div className="other_member_list">
                            <h3>
                            {props.more.memeber}+ <br /> More
                            </h3>
                        </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Members;