import React from 'react';

interface ImageProps {
    src: string;
    alt: string,
    className?: string;
    height?: any;
    width?: any;
}

type Props = HTMLImageElement & ImageProps

function ImageView(props: ImageProps) {
    return (
        <img 
            src={props.src}
            className={props.className}
            alt={props.alt}
            height={props.height || null}
            width={props.width || null}
        />
    )
}

export default ImageView;