import React from "react"
import "./features.css"
import { FiArrowRight } from 'react-icons/fi';
import { FaCubes, FaLaptop, FaPlay, FaBalanceScale, FaHeadphones } from 'react-icons/fa';
import { BsPencilSquare, } from 'react-icons/bs';
import Layout from "./Layout"

const Features = ({ handleViewChange }) => {
    const data = [
        {
            id: 1,
            img: "/images/features.png",
        },
        {
            id: 2,
            img: "/images/features1.png",
        },
        {
            id: 3,
            img: "/images/features2.png",
        },
        {
            id: 4,
            img: "/images/features3.png",
        },
        {
            id: 5,
            img: "/images/features.png",
        },
        {
            id: 6,
            img: "/images/features1.png",
        }
    ]
    return (
        <Layout>
            <div>
                <section className="breadcrumbs">
                    <div className="container">
                        <ul>
                            <li onClick={() => { handleViewChange("Home") }}><a href="#url">Home</a></li>
                            <li className="active">
                                <FiArrowRight className="mx-2" />
                                Features
                            </li>
                        </ul>
                    </div>
                </section>
                {/* bootom grid */}
                <section className="bottom-grid py-5 text-center">
                    <div className="container py-lg-5 py-md-4">
                        <h3 class="title-big text-center mb-2">Awesome App features</h3>
                        <p class="text-head mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reprehenderit expedita
                            quos sunt neque! Ullam, ut? Quam nulla esse atque?</p>
                        <div className="grid-area row">
                            <div className="col-lg-4 col-md-6 grid-feature">
                                <div className="area-box">
                                    <FaCubes />
                                    <h4><a href="#feature" class="title-head">Fully secured</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-feature mt-md-0 mt-4">
                                <div className="area-box">
                                    <FaLaptop />
                                    <h4><a href="#feature" class="title-head">Easy to edit</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-feature mt-lg-0 mt-4">
                                <div className="area-box">
                                    <FaBalanceScale />
                                    <h4><a href="#feature" class="title-head">Branding & Branding</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-feature mt-4 pt-lg-2">
                                <div className="area-box">
                                    <BsPencilSquare />
                                    <h4><a href="#feature" class="title-head">Customizable</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-feature mt-4 pt-lg-2">
                                <div className="area-box">
                                    <FaLaptop />
                                    <h4><a href="#feature" class="title-head">Easy to edit</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-feature mt-4 pt-lg-2">
                                <div className="area-box">
                                    <FaBalanceScale />
                                    <h4><a href="#feature" class="title-head">Branding & Branding</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed dolor elit sed amet init consec blandit init dolor..</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                {/* about */}
                <section className="about-4 py-5">
                    <div className="container px-0 py-lg-5 py-md-4">
                        <div className="position-relative py-lg-4">
                            <div className="heading mx-auto text-center">
                                <h3 class="title-big">Watch a Quick Tutorial</h3>
                                <a href="" className="play-view text-center mt-4">
                                    <span className="video-play-icon">
                                        <FaPlay />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* screenshot */}
                <section className="screenshot">
                    <div className="customer-layout py-5">
                        <div className="container py-lg-5 py-md-4">
                            <div className="testimonial-row">
                                <div className="heading text-center">
                                    <h3 class="title-big mb-2">App Screenshots</h3>
                                    <p class="text-head mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reprehenderit expeditaquos sunt neque! Ullam, ut? Quam nulla esse atque?</p>
                                </div>
                                {/* <div id="owl-demo1" class="owl-two owl-carousel owl-theme mb-md-3 mb-sm-5 mb-4 owl-loaded owl-drag"> */}

                                <div className="owl-item">
                                    {
                                        data.map((image, imgIndex) => {
                                            const { id, img } = image
                                            return (
                                                <img src={img} className="img-fluid slide-img" alt="" />
                                            )
                                        })
                                    }

                                </div>
                                <div className="slide-switch mt-3 d-flex justify-content-center">
                                    <button></button>
                                    <button></button>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* middle */}
                <div className="middle py-5">
                    <div className="container py-xl-5 py-lg-5">
                        <div className="welcome-left text-center py-md-3 mb-md-5">
                            <h3 class="mb-4 d-flex justify-content-center align-items-center">
                                <FaHeadphones className="mr-3" />
                                We're Here to Help You</h3>
                            <p class="text-italic">Have some questions?
                                <a href="#url"> Chat with us now</a>, or
                                <a href="mailto:example@mail.com"> send us an email</a> to
                                get in touch.</p>
                            <a href="#download" class="btn btn-primary btn-style mt-md-5 mt-4 mr-2">Download</a>
                            <a href="#download" class="btn btn-white btn-style mt-md-5 mt-4">Contact us</a>
                        </div>
                    </div>
                </div>
                {/* footer */}
                {/* <Footer /> */}
            </div>
        </Layout>
    )
}

export default Features