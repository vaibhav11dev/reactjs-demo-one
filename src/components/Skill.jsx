import React, { Component } from 'react';
import skillList from '../elements/SkillList';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Skill extends Component {
    render() {
        const firstSkillList = skillList.slice(0, 3);
        const secondSkillList = skillList.slice(3, 6);

        return (
            <section id="skills" className="skills">
                <div className="container">

                    <div className="row skills-content">

                        <div className="col-lg-6">

                            {
                                firstSkillList.map(
                                    (val, i) => (
                                        <div className="progress" key={i}>
                                            <span className="skill">{val.title} <i className="val">{val.percentage}%</i></span>
                                            <ProgressBar now={val.percentage} />
                                        </div>
                                    )
                                )
                            }
                        </div>

                        <div className="col-lg-6">
                            {
                                secondSkillList.map(
                                    (val, i) => (
                                        <div className="progress" key={i}>
                                            <span className="skill">{val.title} <i className="val">{val.percentage}%</i></span>
                                            <ProgressBar now={val.percentage} />
                                        </div>
                                    )
                                )
                            }
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
