import React, { Component } from "react";
import './index.css'

import { getCollege1 } from '../../graphql/queries'
import { API, graphqlOperation  } from 'aws-amplify';



export const pref = {
    act: 0,
    sat: 0,
    tuition: 0,
    room: 0,
    meal: 0,
    majors: [{ major: "" }],
    minors: [{ minor: "" }],
    sports: [{ sport: "" }]
}

class Form extends Component {
  constructor() {
    super();
    this.state = pref;
  }

  AddMajor = () => {
    this.setState({
      majors: this.state.majors.concat([{ major: "" }]),
    });
  };

  AddMinor = () => {
    this.setState({
      minors: this.state.minors.concat([{ minor: "" }]),
    });
  };

  AddSport = () => {
    this.setState({
      sports: this.state.sports.concat([{ sports: "" }]),
    });
  };

  RemoveMajor = (idx) => {
    this.setState({
      majors: this.state.majors.filter((s, _idx) => _idx !== idx),
    });
  };

  RemoveMinor = (idx) => {
    this.setState({
      minors: this.state.minors.filter((s, _idx) => _idx !== idx),
    });
  };

  RemoveSport = (idx) => {
    this.setState({
      sports: this.state.sports.filter((s, _idx) => _idx !== idx),
    });
  };

  ChangeMajor = (idx) => (evt) => {
    const newMajors = this.state.majors.map((major, sidx) => {
      if (idx !== sidx) return major;
      return { ...major, name: evt.target.value };
    });
    this.setState({ majors: newMajors });
  };

  ChangeMinor = (idx) => (evt) => {
    const newMinors = this.state.minors.map((minor, sidx) => {
      if (idx !== sidx) return minor;
      return { ...minor, name: evt.target.value };
    });
    this.setState({ minors: newMinors });
  };

  ChangeSport = (idx) => (evt) => {
    const newSports = this.state.sports.map((sport, sidx) => {
      if (idx !== sidx) return sport;
      return { ...sport, name: evt.target.value };
    });
    this.setState({ sports: newSports });
  };

  handleSATChange = (evt) => {
    this.setState({
      sat: evt.target.value,
    });
  };

  handleACTChange = (evt) => {
    this.setState({
      act: evt.target.value,
    });
  };

  handleTuitionChange = (evt) => {
    this.setState({
      tuition: evt.target.value,
    });
  };

  handleRoomChange = (evt) => {
    this.setState({
      room: evt.target.value,
    });
  };

  handleMealChange = (evt) => {
    this.setState({
      meal: evt.target.value,
    });
  };

  submit = async (e) => {
    // 1. Make call to DynamoDB for Colleges
    // 2. Get results 
    // 3. Upload them to private S3 Bucket for this User
    // 4. Redirect to yourcolleges

    const result = await API.graphql(graphqlOperation(getCollege1, {
      input: {
        ID: 10
      }
    })).then(response =>
      {
        console.log(response);
      }).catch(e => {
        console.log(e);
      })

    e.preventDefault();
  };

  render() {
    return (
      <form className="collegeform" onSubmit={this.submit}>
        <fieldset className="formfield">
          <legend>Test scores</legend>

          <input
            onKeyPress={(e) =>
              !/[0-9]/.test(e.key) &&
              e.preventDefault()
            }
            className="input"
            placeholder="Your ACT score..."
            value={this.state.act}
            onChange={this.handleACTChange}
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your SAT score..."
            value={this.state.sat}
            onChange={this.handleSATChange}
          />
        </fieldset>
        <fieldset className="formfield">
          <legend>Budget</legend>

          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your tuition budget..."
            value={this.state.tuition}
            onChange={this.handleTuitionChange}
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your room & board budget..."
            value={this.state.room}
            onChange={this.handleRoomChange}
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your meal budget..."
            value={this.state.meal}
            onChange={this.handleMealChange}
          />
        </fieldset>
        <fieldset className="formfield">
          <legend>Major, minor and sport preference</legend>

            <div className="list">
                {this.state.majors.map((major, idx) => (
            <div key={idx} className="list-major">
              <input
                className="input"
                placeholder={`Major #${idx + 1}`}
                value={major.name}
                onChange={() => this.ChangeMajor(idx)}
              />
              <button
                className="button"
                id="delbutton"
                type="button"
                onClick={() => this.RemoveMajor(idx)}
              >
                -
              </button>
            </div>
          ))}
          <button
            className="button"
            id="small"
            type="button"
            onClick={this.AddMajor}
          >
            Add Major (+)
          </button>
          </div>
          
            <div className="list">
          {this.state.minors.map((minor, idx) => (
            <div key={idx} className="list-major">
              <input
                className="input"
                placeholder={`Minor #${idx + 1}`}
                value={minor.name}
                onChange={() => this.ChangeMinor(idx)}
              />
              <button
                className="button"
                id="delbutton"
                type="button"
                onClick={() => this.RemoveMinor(idx)}
              >
                -
              </button>
            </div>
          ))}
          <button
            className="button"
            id="small"
            type="button"
            onClick={this.AddMinor}
          >
            Add Minor (+)
          </button>
          </div>

            <div className="list">
          {this.state.sports.map((sport, idx) => (
            <div key={idx} className="list-sport">
              <input
                className="input"
                placeholder={`Sport #${idx + 1}`}
                value={sport.name}
                onChange={() => this.ChangeSport(idx)}
              />
              <button
                className="button"
                id="delbutton"
                type="button"
                onClick={() => this.RemoveSport(idx)}
              >
                -
              </button>
            </div>
          ))}
          <button
            className="button"
            id="small"
            type="button"
            onClick={this.AddSport}
          >
            Add Sport (+)
          </button>
          </div>
          
        </fieldset>
        <button id="gen" className="button" type="submit">
          Generate Top Colleges
        </button>
      </form>
    );
  }
}

export default Form;
