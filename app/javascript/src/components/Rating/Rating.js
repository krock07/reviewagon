import React from 'react';
import './Rating.css'

const Rating = (props) => {
    const score = (props.score / 5) * 100
    return (
        <div>
            <span className="star-wrapper">
                <span className="stars" style={{ width: score + "%" }}></span>
            </span>
        </div>
    );
};

// Passing down the score for a 
// review in our props, and then converting it 
// into a percentage score out of 100. 
// Then we can set that percentage as 
// the width of our inner span element

export default Rating;