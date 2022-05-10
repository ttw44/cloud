import React, { Component } from "react";
import Result from '../Result'
import './index.css'

import Amplify, { API, graphqlOperation  } from 'aws-amplify';

import awsExports from '../../aws-exports';
import { TopThree } from '../../graphql/topthree'

Amplify.configure(awsExports);


class Form extends Component {
  constructor() {
    super();
    this.state = { act: "",
      sat: "",
      tuition: "",
      room: "",
      meal: "",
      majors: [{ major: "" }],
      minors: [{ minor: "" }],
      sports: [{ sport: "" }],
      showresults: false,
      result: {},
      err: false };
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
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      sat: value,
    });
  };

  handleACTChange = (evt) => {
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      act: value,
    });
  };

  handleTuitionChange = (evt) => {
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      tuition: value,
    });
  };

  handleRoomChange = (evt) => {
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      room: value,
    });
  };

  handleMealChange = (evt) => {
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      meal: value,
    });
  };

  handleShowChange = (boo) => {
    this.setState({
      showresults: boo, error: false
    });
  };

  submit = async (e) => {
    e.preventDefault();
    const show = this.state.showresults;
    if (!show) {
      // 1. Make call to DynamoDB for Colleges
      // 2. Get results 
      let bufferresult;
      try {
          bufferresult = await API.graphql(graphqlOperation(TopThree, {
            act: this.state.act,
            sat: this.state.sat,
            tuition: this.state.tuition,
            meal: this.state.meal,
            room: this.state.room
          }));
      } catch(err) {
        console.log(err);
      }
      /* Determines if the bufferresult had bad result */
      if (bufferresult === undefined) {
        this.setState({error: true});
        console.log("Bad input");
        return;
      }
      this.setState({ showresults: true });
      this.setState({ error: false});
      this.setState({result : { ...bufferresult } });
      console.log(bufferresult);
    }
  };

  render() {
    const show = this.state.showresults;
    const res = this.state.result;
    const err = this.state.error;
    return (

      <div>
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
            min="0"
            max="35"
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your SAT score..."
            value={this.state.sat}
            onChange={this.handleSATChange}
            min="0"
            max="1600"
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
            min="0"
            max="1000000"
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your room & board budget..."
            value={this.state.room}
            onChange={this.handleRoomChange}
            min="0"
            max="1000000"
          />
          <input
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            className="input"
            placeholder="Your meal budget..."
            value={this.state.meal}
            onChange={this.handleMealChange}
            min="0"
            max="1000000"
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
            <div>
              {
                (show === true && err === false) &&
                <div>
                  <button type="button" className="button" id="rmv" onClick={() => {this.handleShowChange(false)}}>Remove Results</button>
                  <Result json={res} />
                </div>
              }
              {
                err === true &&
                <div className="results">
                  <h2 className="bad">Please enter valid input, silly goose!</h2>
                </div>
              }
            </div>
      </div>
    );
  }
}

export default Form;
