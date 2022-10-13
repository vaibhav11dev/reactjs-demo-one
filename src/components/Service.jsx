import React, { Component } from 'react'
import SectionTitle from './subcomponents/SectionTitle'
import serviceList from '../elements/ServiceList'
import { Link } from 'react-router-dom';

export default class Service extends Component {
    render() {
        return (
            <section id="services" className="services section-bg">
                <div className="container">

                    <SectionTitle title='Services' subtitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem' />

                    <div className="row">

                        {
                            serviceList.map(
                                (val, i) => (
                                    <div className="col-md-6 mt-4" key={i}>
                                        <div className="icon-box">
                                            {val.icon}
                                            <h4><Link to="#">{val.title}</Link></h4>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }

                    </div>

                </div>
            </section>
        )
    }
}
