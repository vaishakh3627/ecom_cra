import React from "react";

import AddressItem from "./AddressItem";
import ContactFormComponent from "./ContactForm";
import { HelpComponent, HelpDivision } from "./HelpComponent";
import MapComponent from "./MapComponent";

const ContactComponent = () => {

    const addresses = [
        {
            addressType: "Office",
            addressLineOne: "205 North Michigan Avenue, Suite 810",
            addressLineTwo: "Chicago, 60601, USA",
            phone: "(123) 456-7890",
            email: "contact@Evara.com",
            mapLink: "http://google.com"
        },
        {
            addressType: "Work",
            addressLineOne: "205 North Michigan Avenue, Suite 810",
            addressLineTwo: "Chicago, 60601, USA",
            phone: "(123) 456-7890",
            email: "contact@Evara.com",
            mapLink: "http://google.com"
        },
        {
            addressType: "Home",
            addressLineOne: "205 North Michigan Avenue, Suite 810",
            addressLineTwo: "Chicago, 60601, USA",
            phone: "(123) 456-7890",
            email: "contact@Evara.com",
            mapLink: "http://google.com"
        }
    ]

    const Help = [
        {
            headLine: "01. Visit Feedback",
            contentLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            headLine: "02. Employer Services",
            contentLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            headLine: "03. Billing Inquiries",
            contentLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            headLine: "04.General Inquiries",
            contentLine: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ]

    return (
        <div className="page-content pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <section className="row align-items-end mb-50">
                            <HelpComponent />
                            <div className="col-lg-8">
                                <div className="row">
                                    {
                                        Help.map(item => <HelpDivision key={item.headLine} {...item} />)
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <MapComponent />
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <section className="mb-50">
                            <div className="row mb-60">
                                {
                                    addresses.map(item => <AddressItem key={item.addressType} {...item} />)
                                }
                            </div>
                            <ContactFormComponent />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactComponent