import React, { useState, useEffect } from "react"
import "./about.css";
import { FiArrowRight } from 'react-icons/fi';
import { FaCloudDownloadAlt, FaSignInAlt, FaGift, FaWordpress, FaHtml5, FaDrupal, FaCss3, FaFreeCodeCamp, FaJoomla } from 'react-icons/fa';
import Layout from "./Layout"



const About = ({ handleViewChange }) => {
    return (
        <Layout>
            <div>
                <section className="breadcrumbs">
                    <div className="container">
                        <ul>
                            <li onClick={() => { handleViewChange("Home") }}><a href="#url">Home</a></li>
                            <li className="active">
                                <FiArrowRight className="mx-2" />
                                About Us
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="features py-5">
                    <div className="call py-lg-5 py-md-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 feature-grid-left ">
                                    <h3 class="title-big mb-4 ml-0">
                                        This App help to Manage Everything for You</h3>
                                    <p class="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, init commodo risus. Nullam sit amet laoreet elit.Suspendisse non sed consequat magna a velit efficitur risus dolor set. </p>
                                    <ol className="mt-4 mb-0">
                                        <li>Suspendisse non sed consequat magna a velit commodo</li>
                                        <li>Fusce eget ex fermentum, ultricies nisi ac sed et, init dolor sit</li>
                                        <li>Quisque venenatis eros et, init commodo risus amet.</li>
                                        <li>Suspendisse non sed consequat magna a velit</li>
                                    </ol>
                                    <div className="row mt-5">
                                        <div className="col-4 col-lg-3">
                                            <div className="count-data text-center">
                                                <h4 class="count-number font-weight-bold">1023</h4>
                                                <span>Customers</span>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-3">
                                            <div className="count-data text-center">
                                                <h4 class="count-number font-weight-bold">5470</h4>
                                                <span>Downloads</span>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-3">
                                            <div className="count-data text-center">
                                                <h4 class="count-number font-weight-bold">3560</h4>
                                                <span>Satisfied</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-grid-right mt-lg-0 mt-5">
                                    <img src="images/about.png" alt="" class="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-2 py-5">
                    <div className="call py-lg-5 py-md-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 feature-grid-right mb-lg-0 mb-5">
                                    <img src="images/about1.png" alt="" class="img-fluid" />
                                </div>
                                <div className="col-lg-6 feature-grid-left ">
                                    <h3 class="title-big mb-4 ml-0">
                                        Work faster with powerful filters with this app</h3>
                                    <p class="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, init commodo risus. Nullam sit amet laoreet elit.Suspendisse non sed consequat magna a velit efficitur risus dolor set. </p>
                                    <ol className="mt-4 mb-0">
                                        <li>Suspendisse non sed consequat magna a velit commodo</li>
                                        <li>Fusce eget ex fermentum, ultricies nisi ac sed et, init dolor sit</li>
                                        <li>Quisque venenatis eros et, init commodo risus amet.</li>
                                        <li>Suspendisse non sed consequat magna a velit</li>
                                    </ol>
                                    <a href="contact.html" class="btn btn-primary btn-style mt-md-5 mt-4 mr-2">Get Started</a>
                                    <a href="contact.html" class="btn btn-outline-primary btn-style mt-md-5 mt-4">Contact Us</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* specification */}
                <section className="specification-1 py-5">
                    <div className="py-lg-5 py-md-4">
                        <div className="container">
                            <h5 class="title-small text-center">Easy steps</h5>
                            <h3 class="title-big mb-5 text-center">We have some Easy steps</h3>
                            <div className="row">
                                <div className="counter-left col-lg-6 text-center align-self">
                                    <img src="images/steps.png" alt="" class="mg-fluid radius-image" />
                                </div>
                                <div className="counter-right col-lg-6">
                                    <div className="specification">
                                        <div className="specification-icons text-center">
                                            <FaCloudDownloadAlt className="color-orange" />
                                        </div>
                                        <div className="specification-info">
                                            <h6>Download the app</h6>
                                            <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing  elit. facere aperiam sequi dolor set amet init consec et amet</p>
                                        </div>
                                    </div>
                                    <div className="specification">
                                        <div className="specification-icons text-center">
                                            <FaSignInAlt className="color-green" />
                                        </div>
                                        <div className="specification-info">
                                            <h6>Login your account</h6>
                                            <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing  elit. facere aperiam sequi dolor set amet init consec et amet</p>
                                        </div>
                                    </div>
                                    <div className="specification">
                                        <div className="specification-icons text-center">
                                            <FaGift className="color-blue" />
                                        </div>
                                        <div className="specification-info">
                                            <h6>Enjoy the App!</h6>
                                            <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing  elit. facere aperiam sequi dolor set amet init consec et amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* technologies */}
                <section className="technologies">
                    <div className="midd py-5">
                        <div className="container py-lg-5 py-md-3">
                            <div className="row">
                                <div className="col-lg-6 align-self mb-lg-0 mb-md-5 mb-4">
                                    <h5 class="title-small mb-2">OUR TECHNOLOGIES</h5>
                                    <h3 class="title-big ml-0">Designed & Worked by the Latest Integration</h3>
                                    <p class="mt-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet dolor consect etur adipisicing elit. Non quae, fugiat sed.</p>
                                </div>
                                <div className="col-lg-6 technologies-right pr-lg-5">
                                    <div className="row">
                                        <div className="col-sm-5 col-4 text-right">
                                            <div className="icon-1">
                                                <FaWordpress />
                                            </div>
                                            <div className="icon-2 mt-3">
                                                <FaHtml5 />
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-4">
                                            <div className="icon-4">
                                                <FaDrupal />
                                            </div>
                                            <div className="icon-3 mt-3">
                                                <FaCss3 />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="icon-5">
                                                <FaFreeCodeCamp />
                                            </div>
                                            <div className="icon-6 mt-3">
                                                <FaJoomla />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* download */}
                <section className="download">
                    <div className="download-content text-center py-5">
                        <div className="container py-lg-4">
                            <h3 class="title-big">App Launch is free for <span>evaluation</span>.<br /> Try it today!</h3>
                            <h6>Click to Download the Application</h6>
                            <div class="banner-button">
                                <a href="#download" class="btn btn-style btn-primary">Download Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer */}
                {/* <Footer /> */}
            </div>
        </Layout>
    )
}

export default About