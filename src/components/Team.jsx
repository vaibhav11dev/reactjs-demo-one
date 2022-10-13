import React, { Component } from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from './subcomponents/SectionTitle';
import teamList from '../elements/TeamList';
import { Link } from 'react-router-dom';


export default class Team extends Component {
    render() {
        return (
            <section id="team" className="team">
                <div className="container">

                    <SectionTitle title='Team' subtitle='Sit sint consectetur velit quos quisquam cupiditate nemo qui' />

                    <div className="row">
                        {
                            teamList.map(
                                (val, i) => {
                                    const team = val.name.split(' - ')
                                    return (
                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={i}>
                                            <div className="member">
                                                <img src={require(`../assets/img/team/team-${i+1}.jpg`)} alt="" />
                                                <h4>{team[0]}</h4>
                                                <span>{team[1]}</span>
                                                <p>
                                                    {val.title}
                                                </p>
                                                <div className="social">
                                                    <Link to="#"><FaTwitter /></Link>
                                                    <Link to="#"><FaFacebookF /></Link>
                                                    <Link to="#"><FaInstagram /></Link>
                                                    <Link to="#"><FaLinkedinIn /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </section>
        )
    }
}
