import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

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
              <section className="section_gap" style={{marginTop:'8rem'}}>
                <div className="single-product-slider">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 text-center">
                        <div className="section-title">
                          <h1>Latest Products</h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <Link to="/ProductDetail"><img className="img-fluid" src={require('../../src/img/product/p1.jpg')} alt=""/></Link>
                          <div className="product-details" >
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p2.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p3.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p4.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p5.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p6.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p7.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                          <img className="img-fluid"  src={require('../../src/img/product/p8.jpg')} alt=""/>
                          <div className="product-details">
                            <h6>addidas New Hammer sole
                              for Sports person</h6>
                            <div className="price">
                              <h6>$150.00</h6>
                              <h6 className="l-through">$210.00</h6>
                            </div>
                            <div className="prd-bottom">
        
                              <a href="" className="social-info">
                                <span className="ti-bag"></span>
                                <p className="hover-text">add to bag</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-heart"></span>
                                <p className="hover-text">Wishlist</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-sync"></span>
                                <p className="hover-text">compare</p>
                              </a>
                              <a href="" className="social-info">
                                <span className="lnr lnr-move"></span>
                                <p className="hover-text">view more</p>
                              </a>
                            </div>
                          </div>
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

export default Dashboard;