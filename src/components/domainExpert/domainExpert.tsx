import React from 'react';
import { Link } from 'react-router-dom';

function DomainExpert(props: any) {
    return (
        <ul className="row industries-list">
            {
                props.experts.map((data: any, key: number) => {
                    return (
                        <li className={`col-lg-3 col-md-6 col-sm-6 col-6 sr-from-bottom-${key+1}`} key={key}>
                            <Link to={`/${data.route || '#'}`} className={data.image}>
                                <i className="industry-icon"></i>
                                {data.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DomainExpert;
