import React from "react";


const StatisticsComponent = props =>
    <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
        <h1 className="heading-1"><span className="count">{props.numberLine}</span>+</h1>
        <h4>{props.headingContent}</h4>
    </div>


StatisticsComponent.defaultProps = {
    numberLine: "12",
    headingContent: "Glorious years"
}




export default StatisticsComponent