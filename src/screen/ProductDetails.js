import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {

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
              
              <div class="product_image_area">
                    <div class="container">
                        <div class="row s_product_inner">
                            <div class="col-lg-6">
                                <div class="single-prd-item" >
                                    <img class="img-fluid-product-single" src={require('../../src/img/category/p12.jpg')} alt=""/>
                                </div>	
                            </div>
                            <div class="col-lg-5">
                                <div class="s_product_text">
                                    <h3>Faded SkyBlu Denim Jeans</h3>
                                    <h2>$149.99</h2>
                                    <ul class="list">
                                        <li><a class="active" href="#"><span>Category</span> : Household</a></li>
                                        <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                                    </ul>
                                    <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                        something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                        during the winter.</p>
                                    <div class="product_count">
                                        <label for="qty">Quantity:</label>
                                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                        class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                        <button onclick=""
                                        class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                    </div>
                                    <div class="card_area d-flex align-items-center">
                                        <Link class="primary-btn" to="/Cart">Add to Cart</Link>
                                        <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--================End Single Product Area =================--> */}

                {/* <!--================Product Description Area =================--> */}
                <section class="product_description_area">
                    <div class="container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                aria-selected="false">Specification</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
                                    and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
                                    Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
                                    London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
                                    officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
                                    job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                                    showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
                                    child’s painting set for her birthday and it was with this that she produced her first significant work, a
                                    half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
                                    named ‘Hangover’ by Beryl’s husband and</p>
                                <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
                                    more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
                                    the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
                                    more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
                                    streamlined plan of cooking that is more efficient for one person creating less</p>
                            </div>
                            <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Width</h5>
                                                </td>
                                                <td>
                                                    <h5>128mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Height</h5>
                                                </td>
                                                <td>
                                                    <h5>508mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Depth</h5>
                                                </td>
                                                <td>
                                                    <h5>85mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Weight</h5>
                                                </td>
                                                <td>
                                                    <h5>52gm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Quality checking</h5>
                                                </td>
                                                <td>
                                                    <h5>yes</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Freshness Duration</h5>
                                                </td>
                                                <td>
                                                    <h5>03days</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>When packeting</h5>
                                                </td>
                                                <td>
                                                    <h5>Without touch of hand</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Each Box contains</h5>
                                                </td>
                                                <td>
                                                    <h5>60pcs</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default ProductDetail;