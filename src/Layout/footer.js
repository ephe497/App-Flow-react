import React, { useState, useEffect } from "react"
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';

const Footer = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [])

    const functionTop = () => {
        window.scrollTo(0, 0)
    }



    return (
        <div>
            <section className="container">
                <div className="forms px-4">
                    <div className="py-4">
                        <div className="container-fluid py-lg-3 py-2">
                            <div className="row align-items-center">
                                <div className="main-midd col-lg-6">
                                    <h4 class="title-head">Subscribe our newsletter</h4>
                                    <p>We’re a team of non-cynics who truly care for our work.</p>
                                </div>
                                <div className="main-midd-2 col-lg-6 mt-lg-0 mt-4">
                                    <form action="#url" method="GET" class="rightside-form">
                                        <input type="email" class="form-control" name="email" placeholder="Enter your email" />
                                        <button class="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <footer className="footer">
                    <div className="container py-lg-3">
                        <div className="row">
                            <div className="col-lg-4 mt-5">
                                <h6 class="footer-title">Contact information</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur elit. Nihil sit dicta, commodi maxime
                                    provident quidem non, amet.</p>
                                <div className="social-footer mt-3">
                                    <ul className="social-icons">
                                        <li className="facebook">
                                            <a href="">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li className="dribble">
                                            <a href="">
                                                <FiDribbble />
                                            </a>
                                        </li>
                                        <li className="google">
                                            <a href="">
                                                <AiOutlineGoogle />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-4 col-6 mt-5 footer-list">
                                        <h6 class="footer-title">Useful links</h6>
                                        <ul>
                                            <li><a href="features.html">App Features</a></li>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#blog">Blog posts</a></li>
                                            <li><a href="#pricing">Pricing plans</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-6 mt-5 footer-list">
                                        <h6 class="footer-title">Product help</h6>
                                        <ul>
                                            <li><a href="features.html">Privacy policy</a></li>
                                            <li><a href="about.html">Support</a></li>
                                            <li><a href="#blog">Terms & conditions</a></li>
                                            <li><a href="#pricing">License and uses</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 mt-5 footer-list">
                                        <h6 class="footer-title">Download</h6>
                                        <a href="#playstore">
                                            <img src="images/googleplay.png" class="img-fluid" alt="" />
                                        </a>
                                        <a href="#appstore">
                                            <img src="images/appstore.png" class="img-fluid mt-md-2" alt="" />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mid-footer align-center py-4 mt-5">
                            <p class=" text-center"> © 2020 App Flow. All Rights Reserved. Design by <a href="#">Ephe Mhi</a></p>
                        </div>
                    </div>
                </footer>
                <button id="movetop" onClick={functionTop} title="Go to top" style={{ display: (scrollY > 20 ? "block" : "none") }}>
                    ⤴
                </button>

            </section>
        </div>
    )
}

export default Footer;