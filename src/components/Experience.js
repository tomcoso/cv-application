import React from "react";
import uniqid from "uniqid";
import ExpItem from "./ExpItem";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      currentEx: {
        company: "",
        position: "",
        start: "",
        finish: "",
        tasks: "",
        id: uniqid(),
      },
    };

    this.addTask = this.addTask.bind(this);
    this.updateCurrentEx = this.updateCurrentEx.bind(this);
  }

  addTask() {
    const arr = this.state.experiences;
    for (let each in this.state.currentEx) {
      if (this.state.currentEx[each] === "") return;
    }
    arr.push(this.state.currentEx);

    this.setState({
      experiences: arr,
      currentEx: {
        company: "",
        position: "",
        start: "",
        finish: "",
        tasks: "",
        id: uniqid(),
      },
    });
  }

  updateCurrentEx(e) {
    let newCurrent;
    for (let each of Object.keys(this.state.currentEx)) {
      if (e.target.id === each) {
        const change = {};
        change[each] = e.target.value;
        const stateCopy = this.state.currentEx;
        newCurrent = Object.assign(stateCopy, change);
      }
    }
    this.setState({
      currentEx: newCurrent,
    });
  }

  render() {
    const currentEx = this.state.currentEx;
    return (
      <fieldset id="work-experience">
        <legend>Work Experience</legend>
        <div id="new-experience">
          <div id="new-name">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              onChange={this.updateCurrentEx}
              value={currentEx.company}
            />
          </div>
          <div id="new-title">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              onChange={this.updateCurrentEx}
              value={currentEx.position}
            />
          </div>
          <div id="new-date">
            <label htmlFor="start">From:</label>
            <input
              type="date"
              id="start"
              onChange={this.updateCurrentEx}
              value={currentEx.start}
            />
            <label htmlFor="finish">To:</label>
            <input
              type="date"
              id="finish"
              onChange={this.updateCurrentEx}
              value={currentEx.finish}
            />
          </div>
          <div id="new-tasks">
            <label htmlFor="tasks">General Tasks and Responsanilities:</label>
            <textarea
              id="tasks"
              cols="40"
              rows="6"
              onChange={this.updateCurrentEx}
              value={currentEx.tasks}
            ></textarea>
          </div>
          <button type="button" id="new-work-add" onClick={this.addTask}>
            Add
          </button>
        </div>
        <ul id="all-experiences">
          {this.state.experiences.map((item) => (
            <ExpItem item={item} key={item.id} />
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Experience;
