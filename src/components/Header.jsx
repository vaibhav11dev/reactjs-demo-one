import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiChevronDown, BiChevronRight, BiMenu, BiX } from "react-icons/bi";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
        this.mobileMenuTrigger = this.mobileMenuTrigger.bind(this);

        window.addEventListener('load',  function () {
            let elements = document.querySelectorAll('.dropdown > a');
            for (let i in elements) {
                if (elements.hasOwnProperty(i)) {
                    elements[i].onclick = function (e) {
                        e.preventDefault();
                        this.parentElement.querySelector('ul').classList.toggle('dropdown-active');
                    }
                }
            }
        })
    }

    mobileMenuTrigger() {
        document.querySelector('.navbar').classList.toggle('navbar-mobile');
        this.setState({ isMobile: !this.state.isMobile })
    }

    render() {


        return (
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <div className="logo me-auto">
                        <h1><Link to="index.html">ReactJs</Link></h1>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="#about">About</Link></li>
                            <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto " to="#portfolio">Portfolio</Link></li>
                            <li><Link className="nav-link scrollto" to="#testimonials">Testimonials</Link></li>
                            <li className="dropdown"><Link to="#"><span>Drop Down</span> <BiChevronDown /></Link>
                                <ul>
                                    <li><Link to="#">Drop Down 1</Link></li>
                                    <li className="dropdown"><Link to="#"><span>Deep Drop Down</span><BiChevronRight /></Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Drop Down 2</Link></li>
                                    <li><Link to="#">Drop Down 3</Link></li>
                                    <li><Link to="#">Drop Down 4</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
                        </ul>
                        <div onClick={this.mobileMenuTrigger} className="bi bi-list mobile-nav-toggle">
                            {this.state.isMobile ? <BiX /> : <BiMenu />}
                        </div>
                    </nav>

                    <div className="header-social-links d-flex align-items-center">
                        <Link to="#" className="twitter"><FaTwitter /></Link>
                        <Link to="#" className="facebook"><FaFacebookF /></Link>
                        <Link to="#" className="instagram"><FaInstagram /></Link>
                        <Link to="#" className="linkedin"><FaLinkedinIn /></Link>
                    </div>

                </div>
            </header>
        )
    }
}
