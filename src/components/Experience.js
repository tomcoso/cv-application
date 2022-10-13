import React from "react";
import uniqid from "uniqid";

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
    for (let each in this.state.currentEx) {
      if (e.target.id === each) {
        this.state.currentEx[each] = e.target.value;
      }
    }
    const newCurrent = this.state.currentEx;
    this.setState({
      experiences: this.state.experiences,
      currentEx: newCurrent,
    });
  }

  render() {
    console.log(this.state.experiences);
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
            <li className="experience" key={item.id}>
              <span>
                {item.position} at {item.company}.
              </span>
              <span>
                From {item.start.slice(0, 7)} To {item.finish.slice(0, 7)}.
              </span>
              <p>{item.tasks}.</p>
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Experience;
