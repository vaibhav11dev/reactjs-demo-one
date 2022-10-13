import React, { Component } from 'react'
import { BiCheckDouble, BiReceipt, BiCubeAlt } from "react-icons/bi";

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src={require('../assets/img/about.jpg')} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li><BiCheckDouble /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><BiCheckDouble /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            </ul>
                            <div className="row icon-boxes">
                                <div className="col-md-6">
                                    <BiReceipt />
                                    <h4>Corporis voluptates sit</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <BiCubeAlt />
                                    <h4>Ullamco laboris nisi</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
