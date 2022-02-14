import React from "react";


const HelpComponent = () =>
        <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
            <h4 className="mb-20 text-brand">How can help you ?</h4>
            <h1 className="mb-30">Let us know how we can help you</h1>
            <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

const HelpDivision = props =>
    <div className="col-lg-6 mb-4">
        <h5 className="mb-20">{props.headLine}</h5>
        <p>{props.contentLine}</p>
    </div>

HelpDivision.defaultProps = {
    headLine: "01. Visit Feedback",
    contentLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
}

export { HelpComponent, HelpDivision }