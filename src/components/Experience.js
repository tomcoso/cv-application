import React, { useState } from "react";
import uniqid from "uniqid";
import ExpItem from "./ExpItem";
import "./Experience.scss";

const Experience = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [tasks, setTasks] = useState("");
  const [id, setId] = useState(uniqid());
  const forceUpdate = useState(1)[1];

  const addItem = () => {
    const newExpArray = experiences;
    newExpArray.push({ company, position, start, finish, tasks, id });
    setExperiences(newExpArray);

    setCompany("");
    setPosition("");
    setStart("");
    setFinish("");
    setTasks("");
    setId(uniqid());
  };

  const editItem = (e, item) => {
    for (let each of experiences) {
      if (item.id === each.id) {
        each[e.target.id] = e.target.value;
        const updateEx = experiences;
        setExperiences(updateEx);
        forceUpdate(Math.random());
      }
    }
  };

  return (
    <fieldset id="work-experience">
      <legend>Work Experience</legend>
      {props.mode === "edit" ? (
        <div id="new-experience">
          <div id="new-name">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
          <div id="new-title">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
            />
          </div>
          <div id="new-date">
            <label htmlFor="start">From:</label>
            <input
              type="date"
              id="start"
              onChange={(e) => setStart(e.target.value)}
              value={start}
            />
            <label htmlFor="finish">To:</label>
            <input
              type="date"
              id="finish"
              onChange={(e) => setFinish(e.target.value)}
              value={finish}
            />
          </div>
          <div id="new-tasks">
            <label htmlFor="tasks">General Tasks and Responsanilities:</label>
            <textarea
              id="tasks"
              cols="40"
              rows="6"
              onChange={(e) => setTasks(e.target.value)}
              value={tasks}
            ></textarea>
          </div>
          <button type="button" id="new-work-add" onClick={addItem}>
            Add
          </button>
        </div>
      ) : (
        ""
      )}
      <ul id="all-experiences">
        {experiences.map((item) => (
          <ExpItem
            item={item}
            key={item.id}
            edit={editItem}
            mode={props.mode}
          />
        ))}
      </ul>
    </fieldset>
  );
};

export default Experience;
