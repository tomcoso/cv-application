import React from "react";
import EdItem from "./EdItem";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studies: [],
      currentEd: {
        institution: "",
        degree: "",
        start: "",
        finish: "",
        id: uniqid(),
      },
    };

    this.addEd = this.addEd.bind(this);
    this.updateEd = this.updateEd.bind(this);
  }

  addEd() {
    for (let each of Object.keys(this.state.currentEd)) {
      if (this.state.currentEd[each] === "") return;
    }

    let arr = [].concat(this.state.currentEd, this.state.studies);

    this.setState({
      studies: arr,
      currentEd: {
        institution: "",
        degree: "",
        start: "",
        finish: "",
        id: uniqid(),
      },
    });
  }

  updateEd(e) {
    let newCurrent;
    for (let each of Object.keys(this.state.currentEd)) {
      if (e.target.id === each) {
        const change = {};
        change[each] = e.target.value;
        const stateCopy = this.state.currentEd;
        newCurrent = Object.assign(stateCopy, change);
      }
    }
    this.setState({
      currentEd: newCurrent,
    });
  }

  render() {
    const current = this.state.currentEd;
    return (
      <fieldset id="education">
        <legend>Education</legend>
        <div id="new-education">
          <div id="new-ed-title">
            <label htmlFor="degree">Title</label>
            <input
              type="text"
              id="degree"
              value={current.degree}
              onChange={this.updateEd}
            ></input>
          </div>
          <div id="new-ed-institution">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="institution"
              value={current.institution}
              onChange={this.updateEd}
            ></input>
          </div>
          <div id="new-ed-date">
            <label htmlFor="start">From:</label>
            <input
              type="date"
              id="start"
              value={current.start}
              onChange={this.updateEd}
            ></input>
            <label htmlFor="finish">To:</label>
            <input
              type="date"
              id="finish"
              value={current.finish}
              onChange={this.updateEd}
            ></input>
          </div>
          <button type="button" id="new-ed-add" onClick={this.addEd}>
            Add
          </button>
        </div>
        <ul id="all-education">
          {this.state.studies.map((item) => (
            <EdItem item={item} key={item.id} />
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Education;