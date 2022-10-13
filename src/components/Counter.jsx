import React, { Component } from 'react';
import counterList from '../elements/CounterList';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { isVisible: false };
        this.onChangeTrigger = this.onChangeTrigger.bind(this);
    }

    onChangeTrigger(isVisible) {
        if (isVisible) {
            this.setState({ isVisible: true })
        }
    }

    render() {
        return (
            <section id="counts" className="counts">
                <div className="container">

                    <div className="row">

                        {
                            counterList.map(
                                (val, i) => (
                                    <div className="col-lg-3 col-6" key={i}>
                                        <div className="count-box">
                                            {val.icon}
                                            <VisibilitySensor onChange={this.onChangeTrigger} offset={{top:10}} delayedCall>
                                                <CountUp end={this.state.isVisible ? val.count : 0} />
                                            </VisibilitySensor>
                                            <p>{val.title}</p>
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
