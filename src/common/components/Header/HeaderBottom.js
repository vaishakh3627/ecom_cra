import React from "react";
import { Container, Dropdown, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import HotImage from "../../../assets/imgs/theme/icons/icon-hot.svg";
import PhoneImage from "../../../assets/imgs/theme/icons/icon-headphone.svg";
import Banner from "../../../assets/imgs/banner/banner-menu.png";
import HeartIcon from "../../../assets/imgs/theme/icons/icon-heart.svg";
import CartIcon from "../../../assets/imgs/theme/icons/icon-cart.svg";
import Thumbnail3 from "../../../assets/imgs/shop/thumbnail-3.jpg";
import Thumbnail4 from "../../../assets/imgs/shop/thumbnail-4.jpg";
import Category1 from "../../../assets/imgs/theme/icons/category-1.svg";
import Category2 from "../../../assets/imgs/theme/icons/category-2.svg";
import Category3 from "../../../assets/imgs/theme/icons/category-3.svg";
import Category4 from "../../../assets/imgs/theme/icons/category-4.svg";
import Category5 from "../../../assets/imgs/theme/icons/category-5.svg";
import Category6 from "../../../assets/imgs/theme/icons/category-6.svg";
import Category7 from "../../../assets/imgs/theme/icons/category-7.svg";
import Category8 from "../../../assets/imgs/theme/icons/category-8.svg";
import Category9 from "../../../assets/imgs/theme/icons/category-9.svg";
import Category10 from "../../../assets/imgs/theme/icons/category-10.svg";

const dropMenu = [
  {
    route: "shop-grid-right.html",
    thumb: Category1,
    name: "Milk and Dairies",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category2,
    name: "Clothing & beauty",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category3,
    name: "Pet Foods & Toy",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category4,
    name: "Baking material",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category5,
    name: "Fresh Fruit",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category6,
    name: "Wines & Drinks",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category7,
    name: "Fresh Seafood",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category8,
    name: "Fast food",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category9,
    name: "Vegetables",
  },
  {
    route: "shop-grid-right.html",
    thumb: Category10,
    name: "Bread and Juice",
  },
];

const HeaderBottom = () => (
  <div className="header-bottom header-bottom-bg-color sticky-bar">
    <div className="container">
      <div className="header-wrap header-space-between position-relative">
        <div className="header-nav d-none d-lg-flex">
          <div className="main-categori-wrap d-none d-lg-block">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Browse All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Container>
                  {dropMenu.map((item, key) => (
                    <Row key={key}>
                      <a href={item.route}>
                        <img src={item.thumb} alt="" style={{ width: "10px" }} />
                        <a className="justify-content-center">{item.name}</a>
                      </a>
                    </Row>
                  ))}
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
            <nav>
              <ul>
                <li className="hot-deals">
                  <img src={HotImage} alt="hot deals" />
                  <a href="shop-grid-right.html">Hot Deals</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    Shop <i className="fi-rs-angle-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Shop Invoice<i className="fi-rs-angle-right"></i>
                      </a>
                      <ul className="level-menu">
                        <li>
                          <a href="shop-invoice-1.html">Shop Invoice 1</a>
                        </li>
                        <li>
                          <a href="shop-invoice-2.html">Shop Invoice 2</a>
                        </li>
                        <li>
                          <a href="shop-invoice-3.html">Shop Invoice 3</a>
                        </li>
                        <li>
                          <a href="shop-invoice-4.html">Shop Invoice 4</a>
                        </li>
                        <li>
                          <a href="shop-invoice-5.html">Shop Invoice 5</a>
                        </li>
                        <li>
                          <a href="shop-invoice-6.html">Shop Invoice 6</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>

                <li className="position-static">
                  <a href="#">
                    Mega menu <i className="fi-rs-angle-down"></i>
                  </a>
                  <ul className="mega-menu">
                    <li className="sub-mega-menu sub-mega-menu-width-22">
                      <a className="menu-title" href="#">
                        Fruit & Vegetables
                      </a>
                      <ul>
                        <li>
                          <a href="shop-product-right.html">Meat & Poultry</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Fresh Vegetables</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Herbs & Seasonings
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Cuts & Sprouts</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Exotic Fruits & Veggies
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Packaged Produce</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-mega-menu sub-mega-menu-width-22">
                      <a className="menu-title" href="#">
                        Breakfast & Dairy
                      </a>
                      <ul>
                        <li>
                          <a href="shop-product-right.html">
                            Milk & Flavoured Milk
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Butter and Margarine
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Eggs Substitutes</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Marmalades</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Sour Cream</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Cheese</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-mega-menu sub-mega-menu-width-22">
                      <a className="menu-title" href="#">
                        Meat & Seafood
                      </a>
                      <ul>
                        <li>
                          <a href="shop-product-right.html">
                            Breakfast Sausage
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Dinner Sausage</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Chicken</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Sliced Deli Meat</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Wild Caught Fillets
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Crab and Shellfish
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-mega-menu sub-mega-menu-width-34">
                      <div className="menu-banner-wrap">
                        <a href="shop-product-right.html">
                          <img src={Banner} alt="Nest" />
                        </a>
                        <div className="menu-banner-content">
                          <h4>Hot deals</h4>
                          <h3>
                            Don't miss
                            <br />
                            Trending
                          </h3>
                          <div className="menu-banner-price">
                            <span className="new-price text-success">
                              Save to 50%
                            </span>
                          </div>
                          <div className="menu-banner-btn">
                            <a href="shop-product-right.html">Shop now</a>
                          </div>
                        </div>
                        <div className="menu-banner-discount">
                          <h3>
                            <span>25%</span>
                            off
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hotline d-none d-lg-flex">
          <img src={PhoneImage} alt="hotline" />
          <p>
            1900 - 888<span>24/7 Support Center</span>
          </p>
        </div>
        <div className="header-action-icon-2 d-block d-lg-none">
          <div className="burger-icon burger-icon-white">
            <span className="burger-icon-top"></span>
            <span className="burger-icon-mid"></span>
            <span className="burger-icon-bottom"></span>
          </div>
        </div>
        <div className="header-action-right d-block d-lg-none">
          <div className="header-action-2">
            <div className="header-action-icon-2">
              <a href="shop-wishlist.html">
                <img alt="Nest" src={HeartIcon} />
                <span className="pro-count white">4</span>
              </a>
            </div>
            <div className="header-action-icon-2">
              <a className="mini-cart-icon" href="shop-cart.html">
                <img alt="Nest" src={CartIcon} />
                <span className="pro-count white">2</span>
              </a>
              <div className="cart-dropdown-wrap cart-dropdown-hm2">
                <ul>
                  <li>
                    <div className="shopping-cart-img">
                      <a href="shop-product-right.html">
                        <img alt="Nest" src={Thumbnail3} />
                      </a>
                    </div>
                    <div className="shopping-cart-title">
                      <h4>
                        <a href="shop-product-right.html">
                          Plain Striola Shirts
                        </a>
                      </h4>
                      <h3>
                        <span>1 × </span>$800.00
                      </h3>
                    </div>
                    <div className="shopping-cart-delete">
                      <a href="#">
                        <i className="fi-rs-cross-small"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="shopping-cart-img">
                      <a href="shop-product-right.html">
                        <img alt="Nest" src={Thumbnail4} />
                      </a>
                    </div>
                    <div className="shopping-cart-title">
                      <h4>
                        <a href="shop-product-right.html">Macbook Pro 2022</a>
                      </h4>
                      <h3>
                        <span>1 × </span>$3500.00
                      </h3>
                    </div>
                    <div className="shopping-cart-delete">
                      <a href="#">
                        <i className="fi-rs-cross-small"></i>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="shopping-cart-footer">
                  <div className="shopping-cart-total">
                    <h4>
                      Total <span>$383.00</span>
                    </h4>
                  </div>
                  <div className="shopping-cart-button">
                    <a href="shop-cart.html">View cart</a>
                    <a href="shop-checkout.html">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBottom;
