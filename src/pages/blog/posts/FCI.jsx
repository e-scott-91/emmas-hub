import React from 'react';
import './posts.css';

export default function FCI() {
    return (
        <div className="blog-post">
            <h1>RUM FCI</h1>
            <h3 className="italics">December 2022</h3>
            <div className="blog-content">
                <p>
                    As a former backend developer, RUM was a new term to me and as is often the case, sounded a lot more intimating than it actually is until I learnt more so I thought I’d share.
                    Ultimately it a broad term covering the performance monitoring from any user interactions and can include the collection of a variety of metrics including load times and customer journeys. It is a fundamental part of delivering production grade web applications (and others I imagine too).

                </p>

                <p>
                    A key point before getting started on your application of RUM is to define what you want to achieve. I found that the use case within my current role focusses solely on Failed Customer Interactions (FCI). The goal of this is to reduce the MMTD (mean time to detect) of incidents that occur in our web application.

                    What do I mean by an FCI. Well again, it is another term that can be defined based on the use case, tech stack and tooling for detection. For us it had been defined as a failed network call. So when the front end makes a request to our GraphQL server, if the response is an error then we know that the customer has had a failed interaction. You may see that using this as the sole way to detect FCI’s is slightly controversial. Ultimately there are other failures that could occur within the UX that are not associated with a network call but the decision was made because this FCI implementation was done knowing that thorough unit, integration and e2e functional tests are already in place.

                </p>
                <p>
                    Before closing as usual I like to state some strengths and weaknesses of the topics I cover. Strengths:

                    - Obvious but worth noting. Insights into real user’s experiences is invaluable. They are who we make the application for!
                    - Adaptable based on needs. As an area it can provide you with a variety of insights from improvement along with resolution of inicdents.

                    Weaknesses:

                    - It depends on the volume of users being high enough to provide the data you are looking for. If it is in the middle of the night or your application is not popular yet, this can hold you back.
                    - It can generate large volumes of data meaning the right visualisation tools and storage volumes are essential.
                </p>
            </div>
        </div>
    )
}