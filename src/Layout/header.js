import React, { useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import '../App.css';
import { FaCube, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useEffect } from "react/cjs/react.development";


function Header({ darktheme, toggleThemeMode }) {
    const [showLinks, setshowLinks] = useState(false)
    const [pageToRender, setpageToRender] = useState("Home")

    const [activeLink, setActiveLink] = useState("")


    useEffect(() => {
        if (window) {
            setActiveLink(window.location.pathname)
        }
    }, [
        window.location.pathname
    ])

    const handleViewChange = (views) => {
        console.log(views)
        setpageToRender(views)

    }

    const link = [
        {
            name: "Home",
            to: "/"
        },
        {
            name: "About",
            to: "/about"
        },
        {
            name: "App features",
            to: "/features"
        },
        {
            name: "Contact",
            to: "/contact"
        }
    ]

    return (
        // <Router>
        // <div className={darktheme}>
        <header className='fixed-top'>
            <div className="container">
                <nav className='navbar navbar-expand-lg'>
                    <a href="home.js" className="nav-brand">
                        <FaCube />
                        App flow
                    </a>
                    {showLinks && (
                        <div className="slidebar">
                            <div className="slidebar-container">
                                <button onClick={() => { setshowLinks(!showLinks) }}>
                                    <FaTimes />
                                </button>
                                <div className="nav-link slidebar-links">
                                    <ul>
                                        <li onClick={() => { setshowLinks(!showLinks) }}><Link to='/'>home</Link></li>
                                        <li onClick={() => { setshowLinks(!showLinks) }}><Link to='/about'>about</Link></li>
                                        <li onClick={() => { setshowLinks(!showLinks) }}><Link to="/features">app features</Link></li>
                                        <li onClick={() => { setshowLinks(!showLinks) }}><Link to='/contact'>contact</Link></li>
                                    </ul>
                                </div>
                            </div>              </div>

                    )}
                    <button className='toggle-bar' onClick={() => { setshowLinks(!showLinks) }}>
                        <FaBars />

                    </button>
                    <div className="links">
                        <ul className="nav-link">
                            {/* <li><Link to='/'>home</Link></li>
                  <li><Link to='/about'>about</Link></li>
                  <li><Link to="/features">app features</Link></li>
                  <li><Link to='/contact'>contact</Link></li> */}

                            {
                                link.map((_d, index) => {
                                    return (
                                        <li key={index}><Link to={_d.to}> <span style={{ color: activeLink == _d.to ? "#8731e8" : "" }}>{_d.name}</span> </Link></li>

                                    )
                                })
                            }
                            <li><button className="btn-style btn-primary btn">download</button></li>
                            <li className="theme-switch">
                                <FaSun />
                                <div className="switch" onClick={toggleThemeMode}>
                                    <div className={darktheme == "dark-theme" ? "open" : null}></div>
                                </div>
                                <FaMoon />
                            </li>
                        </ul>

                    </div>

                </nav>
            </div>
        </header >

        // </div >
        // </Router>
    );
}

export default Header;
