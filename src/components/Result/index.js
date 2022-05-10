import React, { Component } from 'react'
import {Collapse} from 'react-collapse';

import './index.css'

// This class must be created when there is a result present.
// This is determined if there are any objects in the S3 bucket for this user.

    // 5. Results has:
    //  a. Date, time created
    //  b. Your preferences
    //  c. Top 3 colleges chosen for you

class Result extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate = () => false

    render() {
        /* Sort by highest sat.. typically the best schools for education */
        const items = this.props.json.data.listCollege1S.items.sort((a, b) => (a.SAT < b.SAT) ? 1 : -1).splice(0, 3);
        return (
            <div className="results">
                <p className="date">Results Date: {new Date().toLocaleDateString()}</p>
                { /* For loop through items... */}
                {
                    items.map((college, idx) => {
                        return (
                            <div key={idx}>
                                <hr></hr>
                                <h2 className="uniname">{college.CollegeName}</h2>
                                <div className="indented">
                                    <p className="sat">SAT: {college.SAT}</p>
                                    <p className="act">ACT: {college.ACT}</p>
                                    <p className="tuition">Tuition (2-semester): ${college.Tuition}</p>
                                    <p className="meal">Meal (2-semester): ${college.Meal}</p>
                                    <p className="room">Room (2-semester): ${college.Room}</p>
                                    <h3>Majors</h3>
                                    <Collapse isOpened={true || false}>
                                        {
                                            college.Majors.map((major, idx2) => {
                                                return (
                                                    <div key={idx2}>
                                                        <p>{major}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </Collapse>
                                    <h3>Minors</h3>
                                    <Collapse isOpened={true || false}>
                                        {
                                            college.Minors.map((minor, idx2) => {
                                                return (
                                                    <div key={idx2}>
                                                        <p>{minor}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </Collapse>
                                    <h3>Sports</h3>
                                    <Collapse isOpened={true || false}>
                                        {
                                            college.Sports.map((sport, idx2) => {
                                                return (
                                                    <div key={idx2}>
                                                        <p>{sport}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </Collapse>
                                </div>
                            </div>  
                        ); 
                    })
                }
            </div>
        );
    }
}

export default Result;