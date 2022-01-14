import React from 'react'
import './contact.css'
import { FiArrowRight } from 'react-icons/fi';
import { FaMap, FaEnvelope, FaHeadphones } from 'react-icons/fa';
import Layout from "./Layout"



const Contact = ({ handleViewChange }) => {
    return (
        <Layout>
            <div>
                <section className="breadcrumbs">
                    <div className="container">
                        <ul>
                            <li onClick={() => { handleViewChange("Home") }}><a href="#url">Home</a></li>
                            <li className="active">
                                <FiArrowRight className="mx-2" />
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </section>
                {/* contacts grid */}
                <section className="contact-grid py-5">
                    <div className="pt-lg-4 pt-md-3 pb-4">
                        <div className="container">
                            <div class="heading text-center mx-auto">
                                <h5 class="title-small text-center mb-2">Contact our team</h5>
                                <h3 class="title-big mb-2">Get in Touch with Us </h3>
                                <p class="mb-5">If you have a question regarding our services, feel free
                                    to contact us using the form below.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 form-inner-cont">
                                    <form action="" className="signin-form">
                                        <div className="form-grids">
                                            <div class="form-input">
                                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter your name *" required="" />
                                            </div>
                                            <div class="form-input">
                                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter sunject *" required="" />
                                            </div>
                                            <div class="form-input">
                                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter your email *" required="" />
                                            </div>
                                            <div class="form-input">
                                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter your phone number *" required="" />
                                            </div>
                                        </div>
                                    </form>
                                    <div class="form-input">
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your query here" required=""></textarea>
                                    </div>
                                    <div class="text-right">
                                        <button class="btn btn-style btn-primary">Submit</button>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-lg-0 mt-4">
                                    <section>
                                        <div className="contact-type">
                                            <div className="address-grid mb-3">
                                                <h6>Address</h6>
                                                <p>#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.</p>
                                                <span className='pos-icon'>
                                                    <FaMap />
                                                </span>
                                            </div>
                                            <div className="address-grid mb-3">
                                                <h6>Email</h6>
                                                <a href="mailto:mailone@example.com" class="link1">mailone@example.com</a>
                                                <span className='pos-icon'>
                                                    <FaEnvelope />
                                                </span>
                                            </div>
                                            <div className="address-grid ">
                                                <h6>Phone</h6>
                                                <a href="tel:+12 324-016-695" class="link1">+12 324-016-695</a>
                                                <span className='pos-icon'>
                                                    <FaHeadphones />
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-sub */}
                <div className="contact-sub">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen=""></iframe>
                </div>
                {/* footer */}
                {/* <Footer /> */}
            </div>
        </Layout>
    )
}

export default Contact