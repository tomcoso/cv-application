import React, { useState } from "react";
import EdItem from "./EdItem";
import uniqid from "uniqid";
import "./Education.scss";

const Education = (props) => {
  const [studies, setStudies] = useState([]);
  const [current, setCurrent] = useState({
    institution: "",
    degree: "",
    start: "",
    finish: "",
    id: uniqid(),
  });
  const forceUpdate = useState(1)[1];

  const update = (e) => {
    let newCurrent;
    for (let each of Object.keys(current)) {
      if (e.target.id === each) {
        const change = {};
        change[each] = e.target.value;
        const stateCopy = current;
        newCurrent = Object.assign(stateCopy, change);
      }
    }
    setCurrent(newCurrent);
    forceUpdate(Math.random());
  };

  const addEd = () => {
    for (let each of Object.keys(current)) {
      if (current[each] === "") return;
    }

    let arr = [].concat(current, studies);

    setStudies(arr);

    setCurrent({
      institution: "",
      degree: "",
      start: "",
      finish: "",
      id: uniqid(),
    });
  };

  const editItem = (e, item) => {
    for (let each of studies) {
      if (item.id === each.id) {
        each[e.target.id] = e.target.value;
        const updateEd = studies;
        setStudies(updateEd);
        forceUpdate(Math.random());
      }
    }
  };

  return (
    <fieldset id="education">
      <legend>Education</legend>
      {props.mode === "edit" ? (
        <div id="new-education">
          <div id="new-ed-title">
            <label htmlFor="degree">Title</label>
            <input
              type="text"
              id="degree"
              value={current.degree}
              onChange={update}
            ></input>
          </div>
          <div id="new-ed-institution">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="institution"
              value={current.institution}
              onChange={update}
            ></input>
          </div>
          <div id="new-ed-date">
            <label htmlFor="start">From:</label>
            <input
              type="date"
              id="start"
              value={current.start}
              onChange={update}
            ></input>
            <label htmlFor="finish">To:</label>
            <input
              type="date"
              id="finish"
              value={current.finish}
              onChange={update}
            ></input>
          </div>
          <button type="button" id="new-ed-add" onClick={addEd}>
            Add
          </button>
        </div>
      ) : (
        ""
      )}

      <ul id="all-education">
        {studies.map((item) => (
          <EdItem item={item} key={item.id} mode={props.mode} edit={editItem} />
        ))}
      </ul>
    </fieldset>
  );
};

export default Education;
