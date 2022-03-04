import React, { useState, useEffect } from "react"
// import { FaCubes, FaBalanceScale, FaLaptop, FaTv, FaChartPie, FaCogs, FaRecycle, FaDatabase, FaUsers, FaDownload, FaCoffee } from 'react-icons/fa';
// import { BsPencilSquare, } from 'react-icons/bs';
// import { FiSmile } from 'react-icons/fi';
// import { HiRefresh, HiSupport } from 'react-icons/hi';
// import { DiAndroid } from 'react-icons/di';
import Layout from "./Layout"

const Home = ({ handleViewChange }) => {
    const [myCar, setmyCar] = useState("volvo")

    const handleChange = (event) => {
        setmyCar(event.target.value)
    }

    // let statsScroll = () => {
    //     
    // }
    //     document.body.onscroll = function () {
    //             alert("hi!")


    // }
    useEffect(() => {
        var observer = new IntersectionObserver(function (entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            let countCustomer = 0
            let countDownload = 0
            let countSatisfied = 0
            let countCoffee = 0
            if (entries[0].isIntersecting === true) {

                const customerInterval = setInterval(() => {
                    if (countCustomer === 2010) {
                        clearInterval(customerInterval)
                    }
                    countCustomer += 10
                    document.querySelector("#customer").innerHTML = countCustomer
                }, 3)

                const downloadInterval = setInterval(() => {
                    if (countDownload === 119) {
                        clearInterval(downloadInterval)
                    }
                    document.querySelector("#download").innerHTML = ++countDownload

                }, 9)

                const satisfiedInterval = setInterval(() => {
                    if (countSatisfied === 1490) {
                        clearInterval(satisfiedInterval)
                    }
                    countSatisfied += 10
                    document.querySelector("#satisfied").innerHTML = countSatisfied

                }, 2)

                const coffeeInterval = setInterval(() => {
                    if (countCoffee === 119) {
                        clearInterval(coffeeInterval)
                    }
                    document.querySelector("#coffee").innerHTML = ++countCoffee

                }, 9)

                console.log('Element has just become visible in screen');

            }
        }, { threshold: [0] });

        observer.observe(document.querySelector("#statsScroll"));
    })

    // statsScroll => {
    //     
    // }



    return (
        <Layout>
            <div>
                <section className="banner">
                    <div className="container py-5" >
                        <div class="banner-text py-md-4">
                            <div className="row banner-info">
                                <div className="col-lg-7 align-self text-1">
                                    <h2>Organize all your Media Content easily with this App.</h2>
                                    <p class="mt-3">Nulla maximus purus et sem consequat, porta porta tellus vulputate.Nunc porttitor libero vitae vehicula sodales. Vestibulum id condimentum ante.</p>
                                    <form action="#">
                                        <input type="email" name="Email" placeholder="Enter your email..." required="" />
                                        {/* <select type="text" value={myCar} onChange={handleChange} >
                                        <option value="ford">Ford</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="ford">Ford</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="Toyota">Toyota</option>
                                    </select> */}
                                        <button type="submit" className="btn">Take free trail</button>
                                    </form>
                                    <p class="mt-3 link">*We will give a trial download link to your mail address</p>
                                </div>
                                <div className="col-lg-5 col-md-7 mt-lg-0 mt-4">
                                    <img src="images/screenshot.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* bottom grids */}
                <section className="bottom-grid py-5">
                    <div className="container py-lg-5 py-md-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 grid-feature">
                                <div className="area-box">
                                    <FaCubes />
                                    <h4><a href="#feature" class="title-head">Modular</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed..</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 grid-feature mt-md-0 mt-4">
                                <div className="area-box">
                                    <FaLaptop />
                                    <h4><a href="#feature" class="title-head">Responsive</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed..</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 grid-feature  mt-lg-0 mt-4">
                                <div className="area-box">
                                    <FaBalanceScale />
                                    <h4><a href="#feature" class="title-head">Scalable</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed..</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 grid-feature mt-lg-0 mt-4">
                                <div className="area-box">
                                    <BsPencilSquare />
                                    <h4><a href="#feature" class="title-head">Customizable</a></h4>
                                    <p>Vivamus a ligula quam. Ut blandit eu leo non sed..</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                {/* mobile view */}
                <section className="py-5 mobile">
                    <div className="mobile-info py-lg-5 py-md-4">
                        <h3 class="title-big mb-5 text-center">Awesome App Features</h3>
                        <div className="container">
                            <div className="row mobile-info-inn mx-lg-0">
                                <div className="col-lg-4 mobile-right">
                                    <div className="row mb-lg-5 mb-4">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                <FaTv />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Responsive web design</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-lg-5 mb-4">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                <HiRefresh />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Free updates forever</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                <FaChartPie />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Infinite colors</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mobile-left">
                                    <img src="images/features.png" class="img-fluid radius-image" alt=""></img>
                                </div>
                                <div className="col-lg-4 mobile-right">
                                    <div className="row mb-lg-5 mb-4">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                {/* <FaChart /> */}
                                                <FaCogs />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Loaded with features</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-lg-5 mb-4">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                <HiSupport />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Friendly online support</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2 text-center">
                                            <div className="mobile-icon">
                                                <FaRecycle />
                                            </div>
                                        </div>
                                        <div className="col-10 mobile-right-info">
                                            <h6><a href="#url">Built with SASS, Gulp</a></h6>
                                            <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec
                                                adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services page */}
                <section className="features py-5">
                    <div className="call py-lg-5 py-md-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 feature-grid-left ">
                                    <h3 class="title-big mb-4 ml-0">
                                        Learn the features of new Beautiful lifestyle app!</h3>
                                    <p class="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, init commodo risus. Nullam sit amet laoreet elit.Suspendisse non sed consequat magna a velit efficitur risus dolor set. </p>
                                    <ol className="mt-5 mb-0">
                                        <li>Suspendisse non sed consequat magna a velit commodo</li>
                                        <li>Fusce eget ex fermentum, ultricies nisi ac sed et, init dolor sit</li>
                                        <li>Quisque venenatis eros et, init commodo risus amet.</li>
                                        <li>Suspendisse non sed consequat magna a velit</li>
                                    </ol>
                                    <a href="contact.html" class="btn btn-primary btn-style mt-md-5 mt-4">Contact Us</a>
                                </div>
                                <div className="col-lg-6 feature-grid-right mt-lg-0 mt-4">
                                    <div className="call-grid d-grid">
                                        <div className="grid-1 box-wrap">
                                            <BsPencilSquare />
                                            <h4><a href="#feature" class="title-head">Easy to edit</a></h4>
                                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                                        </div>
                                        <div className="grid-1 box-wrap">
                                            <HiSupport />
                                            <h4><a href="#feature" class="title-head">Full protection</a></h4>
                                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                                        </div>
                                        <div className="grid-1 box-wrap">
                                            <FaDatabase />
                                            <h4><a href="#feature" class="title-head">Data secure</a></h4>
                                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                                        </div>
                                        <div className="grid-1 box-wrap">
                                            <DiAndroid />
                                            <h4><a href="#feature" class="title-head">Hi-speed app</a></h4>
                                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service page */}
                <section className="bg-gray service">
                    <div className="mid py-5">
                        <div className="container py-lg-5 py-md-3">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="images/image1.jpg" alt="" class="img-fluid radius-image"></img>
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 about-right align-self">
                                    <h5 class="title-small">Who we are</h5>
                                    <h3 className="title-big ml-0">Easy to manage your all Data by this App!</h3>
                                    <p class="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Non quae, fugiat consequatur voluptatem nihil ad.</p>
                                    <a href="about.html" class="btn btn-style btn-primary mt-4">Know More</a>
                                </div>
                                <div className="col-lg-6 mt-5 about-right align-self order2">
                                    <h5 class="title-small">WHY CHOOSE US</h5>
                                    <h3 className="title-big ml-0">Bug free responsive app with high performence speed!</h3>
                                    <p class="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Non quae, fugiat consequatur voluptatem nihil ad.</p>
                                    <a href="about.html" class="btn btn-style btn-primary mt-4">Know More</a>
                                </div>
                                <div className="col-lg-6 mt-md-5 mt-4">
                                    <img src="images/image2.jpg" alt="" class="img-fluid radius-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* middle */}
                <div className="middle py-5">
                    <div className="container py-xl-5 py-lg-5">
                        <div className="welcome-left text-center py-md-3">
                            <h3 class="mb-4">This Mobile App is available for all devices.
                                <br /> i.e, Android and apple devices</h3>
                            <a href="#url">
                                <img src="images/android-store.png" alt="" width="200px" class="img-fluid" /></a>
                            <a href="#url">
                                <img src="images/apple-store.png" alt="" width="250px" class="img-fluid" /></a>
                            <p class="text-italic">* Available on iPhone, iPad and all Android devices</p>
                        </div>
                    </div>
                </div>
                {/* stats */}
                <section className="py-5" id="statsScroll">
                    <div className="gallery container py-md-5 py-4">
                        <div className="row stats-con">
                            <div className="col-md-3 col-6 stats-info">
                                <FaUsers />
                                <p class="counter" id="customer">200</p>
                                <h3>Customers</h3>
                            </div>
                            <div className="col-md-3 col-6 stats-info">
                                <FaDownload />
                                <p class="counter" id="download">120</p>
                                <h3>Download</h3>
                            </div>
                            <div className="col-md-3 col-6 stats-info mt-md-0 mt-5">
                                <FiSmile />
                                <p class="counter" id="satisfied">1500</p>
                                <h3>Satisfied</h3>
                            </div>
                            <div className="col-md-3 col-6 stats-info mt-md-0 mt-5">
                                <FaCoffee />
                                <p class="counter" id="coffee">120</p>
                                <h3>Cups of coffee</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* clients */}
                <section className="clients py-5">
                    <div className="py-lg-5 py-md-4">
                        <div className="container">
                            <h3 class="title-big text-center mb-2">Our Valuable customers</h3>
                            <p class="text-head mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reprehenderit expedita
                                quos sunt neque! Ullam, ut? Quam nulla esse atque?</p>
                            <div className="company-logo text-center">
                                <div className="row logos mb-md-5">
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                                        <img src="images/logo1.png" alt="" class="img-fluid" />
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                                        <img src="images/logo2.png" alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-sm-0 mt-4">
                                        <img src="images/logo3.png" alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-md-0 mt-4">
                                        <img src="images/logo4.png" alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt mt-4">
                                        <img src="images/logo5.png" alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4">
                                        <img src="images/logo1.png" alt="" class="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* forms */}

                {/* footer */}
                {/* <Footer /> */}
            </div>
        </Layout>


    )
}

export default Home;
