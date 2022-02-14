import React from "react";

const Title = () =>
    <div className="section-title style-2">
        <h3>Popular Products</h3>
        <ul className="nav nav-tabs links" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one"
                    type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two"
                    type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks &
                    Dairies</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three"
                    type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes &
                    Teas</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four"
                    type="button" role="tab" aria-controls="tab-four" aria-selected="false">Pet Foods</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five"
                    type="button" role="tab" aria-controls="tab-five" aria-selected="false">Meats</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six"
                    type="button" role="tab" aria-controls="tab-six" aria-selected="false">Vegetables</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven"
                    type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
            </li>
        </ul>
    </div>

const Item = () =>
    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
        <div className="product-cart-wrap mb-30">
            <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                        <img className="default-img" src="../assets/imgs/shop/product-1-1.jpg" alt="" />
                        <img className="hover-img" src="../assets/imgs/shop/product-1-2.jpg" alt="" />
                    </a>
                </div>
                <div className="product-action-1">
                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i
                        className="fi-rs-heart"></i></a>
                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                        className="fi-rs-shuffle"></i></a>
                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                </div>
            </div>
            <div className="product-content-wrap">
                <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red
                    Rice</a></h2>
                <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                    <span className="font-small text-muted">By <a
                        href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                    <div className="product-price">
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i
                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

const ProductsList = () =>
    <section className="product-tabs section-padding position-relative">
        <div className="container">
            <Title />
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div className="row product-grid-4">
                        <Item />
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                    <div className="row product-grid-4">
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    </section >

export default ProductsList