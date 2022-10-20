import React from "react";

const ExpItem = (props) => {
  const { item } = props;
  return (
    <li className="experience" key={item.id}>
      {props.mode === "edit" ? (
        <span>
          <input
            id="position"
            placeholder="Position"
            value={item.position}
            onChange={(e) => {
              props.edit(e, item);
            }}
          />{" "}
          at{" "}
          <input
            id="company"
            placeholder="Company"
            value={item.company}
            onChange={(e) => {
              props.edit(e, item);
            }}
          />
        </span>
      ) : (
        <span>
          {item.position} at {item.company}.
        </span>
      )}

      {props.mode === "edit" ? (
        <span>
          From{" "}
          <input
            id="start"
            value={item.start}
            type="date"
            onChange={(e) => {
              props.edit(e, item);
            }}
          />{" "}
          To{" "}
          <input
            id="finish"
            value={item.finish}
            type="date"
            onChange={(e) => {
              props.edit(e, item);
            }}
          />
        </span>
      ) : (
        <span>
          From {item.start.slice(0, 7)} To {item.finish.slice(0, 7)}.
        </span>
      )}
      {props.mode === "edit" ? (
        <p>
          <textarea
            onChange={(e) => {
              props.edit(e, item);
            }}
            placeholder="General tasks and responsabilities . . ."
            id="tasks"
            cols="30"
            rows="3"
            value={item.tasks}
          ></textarea>
        </p>
      ) : (
        <p>{item.tasks}.</p>
      )}
    </li>
  );
};

export default ExpItem;
