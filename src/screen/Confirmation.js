import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends Component {

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
              
              <section class="order_details section_gap"  style={{marginTop: '8rem'}}>
                <div class="container">
                    <h3 class="title_confirmation">Thank you. Your order has been received.</h3>
                    <div class="row order_d_inner">
                        <div class="col-lg-4">
                            <div class="details_item">
                                <h4>Order Info</h4>
                                <ul class="list">
                                    <li><a href="#"><span>Order number</span> : 60235</a></li>
                                    <li><a href="#"><span>Date</span> : Los Angeles</a></li>
                                    <li><a href="#"><span>Total</span> : USD 2210</a></li>
                                    <li><a href="#"><span>Payment method</span> : Check payments</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="details_item">
                                <h4>Billing Address</h4>
                                <ul class="list">
                                    <li><a href="#"><span>Street</span> : 56/8</a></li>
                                    <li><a href="#"><span>City</span> : Los Angeles</a></li>
                                    <li><a href="#"><span>Country</span> : United States</a></li>
                                    <li><a href="#"><span>Postcode </span> : 36952</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="details_item">
                                <h4>Shipping Address</h4>
                                <ul class="list">
                                    <li><a href="#"><span>Street</span> : 56/8</a></li>
                                    <li><a href="#"><span>City</span> : Los Angeles</a></li>
                                    <li><a href="#"><span>Country</span> : United States</a></li>
                                    <li><a href="#"><span>Postcode </span> : 36952</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="order_details_table">
                        <h2>Order Details</h2>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Pixelstore fresh Blackberry</p>
                                        </td>
                                        <td>
                                            <h5>x 02</h5>
                                        </td>
                                        <td>
                                            <p>$720.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Pixelstore fresh Blackberry</p>
                                        </td>
                                        <td>
                                            <h5>x 02</h5>
                                        </td>
                                        <td>
                                            <p>$720.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Pixelstore fresh Blackberry</p>
                                        </td>
                                        <td>
                                            <h5>x 02</h5>
                                        </td>
                                        <td>
                                            <p>$720.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Subtotal</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>$2160.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Shipping</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>Flat rate: $50.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Total</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>$2210.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Confirmation;