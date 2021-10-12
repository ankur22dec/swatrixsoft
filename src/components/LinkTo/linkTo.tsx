import React from 'react';
import { Link } from 'react-router-dom';

function LinkTo(props: any) {
    return (
        <Link to={props.to} onClick={() => {
            if(props.onClick) {
                props.onClick();
            }
        }} {...props}>
            {props.children}
        </Link>
    )
}
export default LinkTo;
