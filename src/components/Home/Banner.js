import React from "react";

const Banner = () =>
    <section className="home-slider style-2 position-relative mb-50">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-12">
                    <div className="home-slide-cover">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <div className="single-hero-slider single-animation-wrap"
                                style={{ backgroundImage: 'url(' + '../../assets/imgs/slider/slider-3.png' + ')' }}>
                                <div className="slider-content">
                                    <h1 className="display-2 mb-40">
                                        Pure Coffe<br />
                                        Big discount
                                    </h1>
                                    <p className="mb-65">Save up to 50% off on your first order</p>
                                    <form className="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button className="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            {/* another slide element */}
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                </div>
                <div className="col-lg-4 d-none d-xl-block">
                    <div className="banner-img style-3 animated animated">
                        <div className="banner-text mt-50">
                            <h2 className="mb-50">
                                Delivered <br />
                                to
                                <span className="text-brand">your<br />
                                    home</span>
                            </h2>
                            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                className="fi-rs-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

export default Banner