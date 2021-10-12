import React from 'react';
import ReactHtmlParser from 'react-html-parser';
 

function HtmlParser(props: any) {
    return (
        <>
            {ReactHtmlParser(props.html)}
        </>
    );
}

export default HtmlParser;
