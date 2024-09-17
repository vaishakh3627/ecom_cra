import React from "react";

const TeamComponent = () =>
    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
        <h6 className="mb-5 text-brand">Our Team</h6>
        <h1 className="mb-30">Meet Our Expert Team</h1>
        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
        <a href="#" className="btn">View All Members</a>
    </div>

const PersonsComponent = props =>
    <div className="col-lg-6 col-md-6">
        <div className="team-card">
            <img src={props.imageLine} alt="" />
            <div className="content text-center">
                <h4 className="mb-5">{props.nameLine}</h4>
                <span>{props.positionLine}</span>
                <div className="social-network mt-20">
                    <a href="#"><img src={props.facebookLine} alt="" /></a>
                    <a href="#"><img src={props.twitterLine} alt="" /></a>
                    <a href="#"><img src={props.instagramLine} alt="" /></a>
                    <a href="#"><img src={props.youtubeLine} alt="" /></a>
                </div>
            </div>
        </div>
    </div>

PersonsComponent.defaultProps = {
    imageLine: "assets/imgs/page/about-6.png",
    nameLine: "H. Merinda",
    positionLine: "CEO & Co-Founder",
    facebookLine: "assets/imgs/theme/icons/icon-facebook-brand.svg",
    twitterLine: "assets/imgs/theme/icons/icon-twitter-brand.svg",
    instagramLine: "assets/imgs/theme/icons/icon-instagram-brand.svg",
    youtubeLine: "assets/imgs/theme/icons/icon-youtube-brand.svg"
}
export { TeamComponent, PersonsComponent }