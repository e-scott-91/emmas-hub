import React from 'react';
import a11y from "../assets/AccessibilityChampion.jpeg";

export default function Achievements() {
    return (
        <div>
            <h1>Achievements</h1>
            <p>This page is simply to show off about my achievements</p>
            <p>Despite it feeling uncomfortable I think we need to be proud of the
            things we've achieved!</p>
            <div>
                <img src={a11y} className="a11y" alt="Accessibility Champion Logo" />
            </div>
        </div>
    )
}