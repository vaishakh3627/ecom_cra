import React from "react";
import { NavLink } from "react-router-dom";

import Logo from '../../../assets/imgs/theme/logo.svg';
import ComIcon from '../../../assets/imgs/theme/icons/icon-compare.svg';
import WishIcon from '../../../assets/imgs/theme/icons/icon-heart.svg';
import CartIcon from '../../../assets/imgs/theme/icons/icon-cart.svg';
import ShopCartImg from '../../../assets/imgs/shop/thumbnail-3.jpg';
import ShopCartImg1 from '../../../assets/imgs/shop/thumbnail-2.jpg';
import AccIcon from '../../../assets/imgs/theme/icons/icon-user.svg';

const HeaderTop = () =>
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
            <div className="header-wrap">
                <div className="logo logo-width-1">
                    <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
                </div>
                <div className="header-right">
                    <div className="search-style-2">
                        <form action="#">
                            <select className="select-active">
                                <option>All Categories</option>
                                <option>Milks and Dairies</option>
                                <option>Wines & Alcohol</option>
                                <option>Clothing & Beauty</option>
                                <option>Pet Foods & Toy</option>
                                <option>Fast food</option>
                                <option>Baking material</option>
                                <option>Vegetables</option>
                                <option>Fresh Seafood</option>
                                <option>Noodles & Rice</option>
                                <option>Ice cream</option>
                            </select>
                            <input type="text" placeholder="Search for items..." />
                        </form>
                    </div>
                    <div className="header-action-right">
                        <div className="header-action-2">
                            <div className="search-location">
                                <form action="#">
                                    <select className="select-active">
                                        <option>Your Location</option>
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Arizona</option>
                                        <option>Delaware</option>
                                        <option>Florida</option>
                                        <option>Georgia</option>
                                        <option>Hawaii</option>
                                        <option>Indiana</option>
                                        <option>Maryland</option>
                                        <option>Nevada</option>
                                        <option>New Jersey</option>
                                        <option>New Mexico</option>
                                        <option>New York</option>
                                    </select>
                                </form>
                            </div>
                            <div className="header-action-icon-2">
                                <NavLink to="/compare">
                                    <img className="svgInject" alt="Nest" src={ComIcon} />
                                    <span className="pro-count blue">3</span>
                                </NavLink>
                                <NavLink className="navbar-item" className="is-active" to="/compare"><span className="lable ml-0">Compare</span></NavLink>
                            </div>
                            <div className="header-action-icon-2">
                                <NavLink to="/wishlist">
                                    <img className="svgInject" alt="Nest" src={WishIcon} />
                                    <span className="pro-count blue">6</span>
                                </NavLink>
                                <NavLink className="navbar-item" className="is-active" to="/wishlist"><span className="lable">Wishlist</span></NavLink>
                            </div>
                            <div className="header-action-icon-2">
                                <NavLink className="mini-cart-icon" to="/cart">
                                    <img alt="Nest" src={CartIcon} />
                                    <span className="pro-count blue">2</span>
                                </NavLink>
                                <NavLink className="navbar-item" className="is-active" to="/cart"><span className="lable">Cart</span></NavLink>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li>
                                            <div className="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src={ShopCartImg} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                                                <h4><span>1 × </span>$800.00</h4>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src={ShopCartImg1} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                                                <h4><span>1 × </span>$3200.00</h4>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="shopping-cart-footer">
                                        <div className="shopping-cart-total">
                                            <h4>Total <span>$4000.00</span></h4>
                                        </div>
                                        <div className="shopping-cart-button">
                                            <NavLink to="/cart" className="outline">View cart</NavLink>
                                            <NavLink to="/checkout">Checkout</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-action-icon-2">
                                <NavLink to="/account">
                                    <img className="svgInject" alt="Nest" src={AccIcon} />
                                </NavLink>
                                <NavLink className="navbar-item" className="is-active" to="/account"><span className="lable ml-0">Account</span></NavLink>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                    <ul>
                                        <li><NavLink className="navbar-item" className="is-active" to="/account"><i className="fi fi-rs-user mr-10"></i>My Account</NavLink></li>
                                        <li><NavLink className="navbar-item" className="is-active" to="/account"><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</NavLink></li>
                                        <li><NavLink className="navbar-item" className="is-active" to="/account"><i className="fi fi-rs-label mr-10"></i>My Voucher</NavLink></li>
                                        <li><NavLink className="navbar-item" className="is-active" to="/wishlist"><i className="fi fi-rs-heart mr-10"></i>My Wishlist</NavLink></li>
                                        <li><NavLink className="navbar-item" className="is-active" to="/account"><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</NavLink></li>
                                        <li><NavLink className="navbar-item" className="is-active" to="/login"><i className="fi fi-rs-sign-out mr-10"></i>Sign out</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default HeaderTop