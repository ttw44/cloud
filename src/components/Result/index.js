import React, { Component } from 'react'
import { pref } from '../Form'

// Will need access to S3 (for result storage), Cognito (probably)

const results = {name: '', act: "",
sat: "",
tuition: "",
room: "",
meal: "",
majors: [{ major: "" }],
minors: [{ minor: "" }],
sports: [{ sport: "" }]}
// This class must be created when there is a result present.
// This is determined if there are any objects in the S3 bucket for this user.

    // 5. Results has:
    //  a. Date, time created
    //  b. Your preferences
    //  c. Top 3 colleges chosen for you

class Result extends Component {
    constructor() {
        super();
        const today = new Date();
        this.state = {
            datetime: today,
            pref: pref,
            results: results
        };
    }

    render() {
        console.log("Danger");

        return (
            <div class="result">
                <p class="date">{this.state.datetime.toString()}</p>
                {this.state.results.majors.map((major, idx) => (
                    <div key={idx} className="result-item">
                        <p>Fuck</p>
                    </div>
                 ))}
            </div>
        );
    }
}

export default Result;