import React from "react";

import About5 from "../../assets/imgs/page/about-5.png";

const PerfomanceComponent = () =>

    <div className="row mb-50 align-items-center">
        <div className="col-lg-7 pr-30">
            <img src={About5} alt="" className="mb-md-3 mb-lg-0 mb-sm-4" />
        </div>
        <div className="col-lg-5">
            <h4 className="mb-20 text-muted">Our performance</h4>
            <h1 className="heading-1 mb-40">Your Partner for e-commerce grocery solution</h1>
            <p className="mb-30">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
        </div>
    </div>

const MissionComponent = props =>

        <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
            <h3 className="mb-30">{props.headingType}</h3>
            <p>{props.contentLine}</p>
        </div>

MissionComponent.defaultProps = {
     headingType: "Who we are",
     contentLine: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
}
export {PerfomanceComponent, MissionComponent}