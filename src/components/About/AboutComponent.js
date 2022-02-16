import React from "react"

import { PerfomanceComponent, MissionComponent } from "./PerfomanceComponent";
import { ServiceComponent, ServiceDivision } from "./ServiceComponent";
import StatisticsComponent from "./StatisticsComponents";
import { TeamComponent, PersonsComponent } from "./TeamComponent";
import WelcomeHeader from "./WelcomeHeader";

import ImageType1 from "../../assets/imgs/theme/icons/icon-1.svg";
import ImageType2 from "../../assets/imgs/theme/icons/icon-2.svg";
import ImageType3 from "../../assets/imgs/theme/icons/icon-3.svg";
import ImageType4 from "../../assets/imgs/theme/icons/icon-4.svg";
import ImageType5 from "../../assets/imgs/theme/icons/icon-5.svg";
import ImageType6 from "../../assets/imgs/theme/icons/icon-6.svg";

const AboutComponent = () => {

    const Perfomance = [
        {
            headingType: "Who we are",
            contentLine: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
        },
        {
            headingType: "Our history",
            contentLine: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
        },
        {
            headingType: "Our mission",
            contentLine: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
        }

    ]

    const Service = [
        {
            imageType: {ImageType1},
            headingLine: "Best Prices & Offers",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            imageType: {ImageType2},
            headingLine: "Wide Assortment",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            imageType: {ImageType3},
            headingLine: "Free Delivery",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            imageType: {ImageType4},
            headingLine: "Easy Returns",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            imageType: {ImageType5},
            headingLine: "100% Satisfaction",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            imageType: {ImageType6},
            headingLine: "Great Daily Deal",
            contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        }
    ]

    const TeamDetails = [
        {
            numberLine: "12",
            headingContent: "Glorious years"
        },
        {
            numberLine: "36",
            headingContent: "Happy clients"
        },
        {
            numberLine: "58",
            headingContent: "Projects complete"
        },
        {
            numberLine: "24",
            headingContent: "Team advisor"
        },
        {
            numberLine: "26",
            headingContent: "Products Sale"
        }
    ]

    const person = [
        {
            imageLine: "assets/imgs/page/about-6.png",
            nameLine: "H. Merinda",
            positionLine: "CEO & Co-Founder",
            facebookLine: "assets/imgs/theme/icons/icon-facebook-brand.svg",
            twitterLine: "assets/imgs/theme/icons/icon-twitter-brand.svg",
            instagramLine: "assets/imgs/theme/icons/icon-instagram-brand.svg",
            youtubeLine: "assets/imgs/theme/icons/icon-youtube-brand.svg"
        },
        {
            imageLine: "assets/imgs/page/about-8.png",
            nameLine: "Dilan Specter",
            positionLine: "Head Engineer",
            facebookLine: "assets/imgs/theme/icons/icon-facebook-brand.svg",
            twitterLine: "assets/imgs/theme/icons/icon-twitter-brand.svg",
            instagramLine: "assets/imgs/theme/icons/icon-instagram-brand.svg",
            youtubeLine: "assets/imgs/theme/icons/icon-youtube-brand.svg"
        }
    ]

    return (
        <div className="page-content pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <WelcomeHeader />
                        <section className="text-center mb-50">
                            <ServiceComponent />
                            <div className="row">
                                {
                                    Service.map(item => <ServiceDivision key={item.headingLine} {...item} />)
                                }
                            </div>
                        </section>
                        <section className="row align-items-center mb-50">
                            <PerfomanceComponent />
                            <div className="row">
                                {
                                    Perfomance.map(item => <MissionComponent key={item.headingType} {...item} />)
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section className="container mb-50 d-none d-md-block">
                <div className="row about-count">
                    {
                        TeamDetails.map(item => <StatisticsComponent key={item.numberLine} {...item} />)
                    }
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <section className="mb-50">
                            <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                            <div className="row">
                                <TeamComponent />
                                <div className="col-lg-8">
                                    <div className="row">
                                        {
                                            person.map(item => <PersonsComponent key={item.nameLine} {...item} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent