import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../../AuthContext";
import Logo from '../../../assets/imgs/theme/logo.svg';
import WishIcon from '../../../assets/imgs/theme/icons/icon-heart.svg';
import CartIcon from '../../../assets/imgs/theme/icons/icon-cart.svg';
import ShopCartImg from '../../../assets/imgs/shop/thumbnail-3.jpg';
import AccIcon from '../../../assets/imgs/theme/icons/icon-user.svg';

const HeaderTop = () => {

    const auth = useAuth()

    return (<div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
            <div className="header-wrap">
                <div className="logo logo-width-1">
                    <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
                </div>
                <div className="header-right">
                    <div className="search-style-1">
                        <form action="#">
                            <input type="text" placeholder="Search for items..." />
                        </form>
                    </div>
                    <div className="header-action-right">
                        <div className="header-action-2">
                            <div className="header-action-icon-2">
                                <NavLink to="/wishlist">
                                    <img className="svgInject" alt="Nest" src={WishIcon} />
                                    <span className="pro-count blue">6</span>
                                </NavLink>
                                <NavLink className="navbar-item" to="/wishlist"><span className="lable">Wishlist</span></NavLink>
                            </div>
                            <div className="header-action-icon-2">
                                <NavLink className="mini-cart-icon" to="/cart">
                                    <img alt="Nest" src={CartIcon} />
                                    <span className="pro-count blue">2</span>
                                </NavLink>
                                <NavLink className="navbar-item" to="/cart"><span className="lable">Cart</span></NavLink>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li>
                                            <div className="shopping-cart-img">
                                                <a href="#"><img alt="Nest" src={ShopCartImg} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="#">Daisy Casual Bag</a></h4>
                                                <h4><span>1 × </span>$800.00</h4>
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
                                <NavLink className="navbar-item" to="/account"><span className="lable ml-0">Account</span></NavLink>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                    <ul>
                                        <li>
                                            <NavLink className="navbar-item" to="/account">
                                                My Account
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="navbar-item" to="/account">
                                                Order Tracking
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="navbar-item" to="/account">
                                                My Voucher
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="navbar-item" to="/wishlist">
                                                My Wishlist
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="navbar-item" to="/account">
                                                Setting
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="navbar-item" to="/login">
                                                Sign out
                                            </NavLink>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => auth.toggleUserType("admin")}
                                                className="navbar-item">
                                                Switch to admin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default HeaderTop