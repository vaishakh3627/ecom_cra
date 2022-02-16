import React from "react";

const BannerFooter = () =>
    <section className="banners mb-25">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="banner-img">
                        <img src={"../../assets/imgs/banner/banner-1.png"} alt="" />
                        <div className="banner-text">
                            <h4>
                                Everyday Fresh & <br />Clean with Our<br />
                                Products
                            </h4>
                            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                className="fi-rs-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner-img">
                        <img src={"../../assets/imgs/banner/banner-2.png"} alt="" />
                        <div className="banner-text">
                            <h4>
                                Make your Breakfast<br />
                                Healthy and Easy
                            </h4>
                            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                className="fi-rs-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-md-none d-lg-flex">
                    <div className="banner-img mb-sm-0">
                        <img src={"../../assets/imgs/banner/banner-3.png"} alt="" />
                        <div className="banner-text">
                            <h4>The best Organic <br />Products Online</h4>
                            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                className="fi-rs-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

export default BannerFooter