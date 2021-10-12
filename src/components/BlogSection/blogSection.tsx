import React, { useState, useEffect } from "react";
import ImageView from "../ImageView";
import caretright from "../../assets/images/caret-right.svg";
import { API } from "../../constants/apiConfig";

function BlogSection() {

    const [state, setState]: any = useState({
        blogs: []
    });

    var parseString = require('xml2js').parseString;

    useEffect(() => {
        fetch(API).then(data => {
            return data.text();
        })
        .then(res => {
            parseString(res, {trim: true}, function (err: any, result: any) {
                setState({
                    blogs: result.rss.channel[0].item.slice(0, 3)
                });
            });
        })
        .catch(err => {
            console.log(err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row">
            {
                state.blogs.map((data: any, key: number) => {
                    return (
                        <div key={key} className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="blog_item sr-from-bottom-3">
                                <div className="blog_image">
                                    <ImageView src={data.featured_image} alt="Blog Image" />
                                </div>
                                <h4 className="blog_category">
                                    {data.label}
                                </h4>
                                <p>
                                    {data.title}
                                </p>
                                <a href={data.link} className="readmore" target="_blank" rel="noopener noreferrer">
                                    Read Now <ImageView src={caretright} alt="Arrow" />
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default BlogSection;
