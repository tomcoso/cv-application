import React from "react";

const EdItem = (props) => {
  const item = props.item;
  return (
    <li className="education" key={item.id}>
      {props.mode === "edit" ? (
        <input
          id="degree"
          type="text"
          placeholder="Career"
          value={item.degree}
          onChange={(e) => {
            props.edit(e, item);
          }}
        />
      ) : (
        <span>{item.degree}</span>
      )}

      {props.mode === "edit" ? (
        <input
          id="institution"
          type="text"
          placeholder="Institution"
          value={item.institution}
          onChange={(e) => {
            props.edit(e, item);
          }}
        />
      ) : (
        <span>{item.institution}</span>
      )}

      {props.mode === "edit" ? (
        <span>
          <input
            id="start"
            type="date"
            value={item.start}
            onChange={(e) => {
              props.edit(e, item);
            }}
          />{" "}
          To{" "}
          <input
            id="finish"
            type="date"
            value={item.finish}
            onChange={(e) => {
              props.edit(e, item);
            }}
          />
        </span>
      ) : (
        <span>
          {item.start.slice(0, 4)} To {item.finish.slice(0, 4)}.
        </span>
      )}
    </li>
  );
};

export default EdItem;
