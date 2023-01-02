import React from 'react';
import Paper from '@mui/material/Paper';
import './posts.css';

export default function Pour() {
    return (
        <div className="blog-post-container">
            <Paper className="blog-post-paper" elevation={3}>
                <div className="blog-post">
                    <h1>POUR</h1>
                    <div className="blog-content">
                        <p>
                            POUR is an essential acronym in the world of web and digital accessibility that I came across when getting started in that domain.
                            Although I learnt it initially in the context of Content Design, in my opinion being aware of the concepts is critical for all involved with
                            web development. No one person is responsible for their application.
                        </p>

                        <h2>Perceivable</h2>
                        <p>
                            Both information and user interface components need to be presented to users in a way which they they can perceive them. An example is that some may not be able to
                            perceive visual content and thus text alternatives for images which can be read by a screen reader.
                        </p>
                        <p>
                            Other areas that come into this are needing alternatives for time based media, having
                            content which is adaptable and can be presented in a simpler way without losing meaning along with color contrast being suitable (among many others!)
                        </p>
                        <h2>Operable</h2>
                        <p>
                            Navigation and user interface components should be operable to all users regardless of how they interact with the content. This includes the essential area of keyboard
                            navigation along with others such as having enough time to operate the page, having large enough clickable areas etc.
                        </p>
                        <h2>Understandable</h2>
                        <p>
                            The understandable area is smaller but just as important. It includes the layout being clear along with the required reading and comprehension level not being too high.
                            The content should be predictable and ideally should have input assistance meaning offering suggestions when errors occur and having other more general help guidance.
                        </p>
                        <h2>Robust</h2>
                        <p>This is the least clear without explanation but ultimately refers to the need for the web content to be compatible with a range of devices, both browsers
                        and screen readers. Most of this can be done simply by using the best practices in web development such as native html tags providing the correct roles and behaviour .</p>
                        <h2>Useful Links</h2>
                        <ul>
                            <li className="italics"><a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 Guidelines</a></li>
                            <br/>
                            <li className="italics"><a href="https://contentdesign.intuit.com/accessibility-and-inclusion/accessibility-principles/">Intuit Content Design Principles - Accessibility</a></li>

                        </ul>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
