import React from 'react';
import "./posts.css";

export default function Kafka() {
    return (
        <div className="blog-post">
            <h1>Kafka</h1>
            <h3>Feb 2022</h3>
            <div className="blog-content">
                <p>
                    I have been working with Kafka for about 5 months now and think it is great. It is also used by
                    50% of all fortune 100 companies so I am not alone in my opinion. Despite this, of my junior colleagues,
                    the general rule seems to be that only those who work with it are aware of it, meaning a large proportion miss
                    out. This post hopes to bridge that gap.
                </p>
                <h2>
                    Exploration
                </h2>
                <p className="questioning">So what is it?</p>
                <p>
                    It is an event streaming platform.
                </p>
                <p className="questioning">And what does that mean?</p>
                <p>
                    It allows developers to create applications that continually consume and produce streams of data
                    records in real time, allowing stream processing.

                    To understand stream processing, it can be helpful to comapre it to the alternative batch processing.
                    In batch processing, data is collected over time and then (as the name suggests) it is processing in a batch.
                    Some batch processing example are a result of legacy system restraints however there are situations where
                    batch processing is still preferable.

                    Stream processing instead incolves processing each event in real time as they occur/ arrive.
                </p>
                <p>USE CASE TABLE</p>
            </div>


        </div>
    )
}