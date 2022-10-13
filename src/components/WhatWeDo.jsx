import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './subcomponents/SectionTitle';
import serviceList from '../elements/ServiceList'


export default class WhatWeDo extends Component {
  render() {
    const wwdList = serviceList.slice(0, 3);

    return (
      <section id="what-we-do" className="what-we-do">
        <div className="container">

          <SectionTitle title='What We Do' subtitle='Magnam dolores commodi suscipit consequatur ex aliquid' />

          <div className="row">

            {
              wwdList.map(
                (val, i) => (
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={i}>
                    <div className="icon-box">
                      <div className="icon">{val.icon}</div>
                      <h4><Link to="">{val.title}</Link></h4>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              )
            }


          </div>

        </div>

      </section >
    )
  }
}
