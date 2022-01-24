import React from "react";
import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if(total() > 0){
        return(
            <ul>
                <li>good: {good}</li>
                <li>neutral: {neutral}</li>
                <li>bad: {bad}</li>
                <li>total: {total()}</li>
                <li>positivePercentage: {positivePercentage(total())}%</li>
            </ul>
        )
    }else{
        return(
        <Notification message="There is no feedback"/>
        )
    }
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;