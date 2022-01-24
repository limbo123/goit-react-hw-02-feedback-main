import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        Object.keys(options).map(name => {
            return(
                <button key={name} type="button" name={name} onClick={onLeaveFeedback}>{name}</button>
            )
        })
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;