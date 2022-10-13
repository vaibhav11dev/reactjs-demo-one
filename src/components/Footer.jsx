import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>ReactJs</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><BiChevronRight /> <Link to="#">Home</Link></li>
                                    <li><BiChevronRight /> <Link to="#">About us</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Services</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Terms of service</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><BiChevronRight /> <Link to="#">Web Design</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Web Development</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Product Management</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Marketing</Link></li>
                                    <li><BiChevronRight /> <Link to="#">Graphic Design</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Themevedanta</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <Link to="https://bootstrapmade.com/">Themevedanta</Link>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="#" className="twitter"><FaTwitter /></Link>
                        <Link to="#" className="facebook"><FaFacebookF /></Link>
                        <Link to="#" className="instagram"><FaInstagram /></Link>
                        <Link to="#" className="linkedin"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </footer>
        )
    }
}
