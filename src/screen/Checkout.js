import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {

    render() {
        return (
            <div className="">
              <header className="header_area sticky-header" style={{marginTop: '2.5rem'}}>
                <div className="main_menu">
                  <nav className="navbar navbar-expand-lg navbar-light main_box"  style={{bordeRadius: '5rem'}}>
                    <div className="container">
                      <Link className="navbar-brand logo_h" style={{marginRight: '8rem'}} to="/"><span style={{color: ' #ffba00', fontSize: '24px', fontFamily: 'cursive'}}>STORE</span></Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <form className="nav-search">
                          <span className="lnr lnr-magnifier" style={{marginTop: '0.8rem'}} id="search"></span>
                          <input type="text" className="form-control" style={{width: '30rem', border: 'none',bordeRadius: '0rem',
                          boxShadow: 'none',
                          outline: 'none',  borderBottom: '1px solid #ced4da'}} id="search_input" placeholder="Search Here"/>
                          {/* <!-- <button type="submit" className="btn"><span className="lnr lnr-magnifier" id="search"></span></button> --> */}
                        </form>
                        <ul className="nav navbar-nav menu_nav ml-auto">
                          <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                          <li className="nav-item"><Link to="/cart" className="cart"><span className="ti-bag"></span></Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
              
                0
              <section class="checkout_area section_gap"  style={{marginTop: '8rem'}}>
                <div class="container">
                    <div class="returning_customer">
                        <div class="check_title">
                            <h2>Returning Customer? <a href="#">Click here to login</a></h2>
                        </div>
                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new
                            customer, please proceed to the Billing & Shipping section.</p>
                        <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" id="name" name="name"/>
                                <span class="placeholder" data-placeholder="Username or Email"></span>
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="password" class="form-control" id="password" name="password"/>
                                <span class="placeholder" data-placeholder="Password"></span>
                            </div>
                            <div class="col-md-12 form-group">
                                <button type="submit" value="submit" class="primary-btn">login</button>
                                <div class="creat_account">
                                    <input type="checkbox" id="f-option" name="selector"/>
                                    <label for="f-option">Remember me</label>
                                </div>
                                <a class="lost_pass" href="#">Lost your password?</a>
                            </div>
                        </form>
                    </div>
                    <div class="cupon_area">
                        <div class="check_title">
                            <h2>Have a coupon? <a href="#">Click here to enter your code</a></h2>
                        </div>
                        <input type="text" placeholder="Enter coupon code"/>
                        <a class="tp_btn" href="#">Apply Coupon</a>
                    </div>
                    <div class="billing_details">
                        <div class="row">
                            <div class="col-lg-8">
                                <h3>Billing Details</h3>
                                <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div class="col-md-6 form-group p_star">
                                        <input type="text" class="form-control" id="first" name="name"/>
                                        <span class="placeholder" data-placeholder="First name"></span>
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input type="text" class="form-control" id="last" name="name"/>
                                        <span class="placeholder" data-placeholder="Last name"></span>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" id="company" name="company" placeholder="Company name"/>
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input type="text" class="form-control" id="number" name="number"/>
                                        <span class="placeholder" data-placeholder="Phone number"></span>
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input type="text" class="form-control" id="email" name="compemailany"/>
                                        <span class="placeholder" data-placeholder="Email Address"></span>
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <select class="country_select">
                                            <option value="1">Country</option>
                                            <option value="2">Country</option>
                                            <option value="4">Country</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input type="text" class="form-control" id="add1" name="add1"/>
                                        <span class="placeholder" data-placeholder="Address line 01"></span>
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input type="text" class="form-control" id="add2" name="add2"/>
                                        <span class="placeholder" data-placeholder="Address line 02"></span>
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input type="text" class="form-control" id="city" name="city"/>
                                        <span class="placeholder" data-placeholder="Town/City"></span>
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <select class="country_select">
                                            <option value="1">District</option>
                                            <option value="2">District</option>
                                            <option value="4">District</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP"/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <div class="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector"/>
                                            <label for="f-option2">Create an account?</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <div class="creat_account">
                                            <h3>Shipping Details</h3>
                                            <input type="checkbox" id="f-option3" name="selector"/>
                                            <label for="f-option3">Ship to a different address?</label>
                                        </div>
                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-4">
                                <div class="order_box">
                                    <h2>Your Order</h2>
                                    <ul class="list">
                                        <li><a href="#">Product <span>Total</span></a></li>
                                        <li><a href="#">Fresh Blackberry <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                        <li><a href="#">Fresh Tomatoes <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                        <li><a href="#">Fresh Brocoli <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    </ul>
                                    <ul class="list list_2">
                                        <li><a href="#">Subtotal <span>$2160.00</span></a></li>
                                        <li><a href="#">Shipping <span>Flat rate: $50.00</span></a></li>
                                        <li><a href="#">Total <span>$2210.00</span></a></li>
                                    </ul>
                                    <div class="payment_item">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option5" name="selector"/>
                                            <label for="f-option5">Check payments</label>
                                            <div class="check"></div>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                            Store Postcode.</p>
                                    </div>
                                    <div class="payment_item active">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option6" name="selector"/>
                                            <label for="f-option6">Paypal </label>
                                            <img src="img/product/card.jpg" alt=""/>
                                            <div class="check"></div>
                                        </div>
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                            account.</p>
                                    </div>
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector"/>
                                        <label for="f-option4">I’ve read and accept the </label>
                                        <a href="#">terms & conditions*</a>
                                    </div>
                                    <Link class="primary-btn" to="/Confirmation">Proceed to Paypal</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              <footer className="footer-area section_gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7  col-md-6 col-sm-6">
                      <div className="single-footer-widget">
                        <h6>Newsletter</h6>
                        <p>Stay update with our latest</p>
                        <div className="" id="mc_embed_signup">
        
                          <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get" className="form-inline">
        
                            <div className="d-flex flex-row">
        
                              <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                              required="" type="email"/>
                              <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                              <div style={{position: 'absolute', left: '-5000px'}}>
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
                              </div>
                            </div>
                            <div className="info"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="single-footer-widget">
                        <h6>Follow Us</h6>
                        <p>Let us be social</p>
                        <div className="footer-social d-flex align-items-center">
                          <a href="#"><i className="fa fa-facebook"></i></a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="#"><i className="fa fa-dribbble"></i></a>
                          <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0">
                      Copyright &copy;2019 All rights reserved
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          );
    }
}

export default Checkout;