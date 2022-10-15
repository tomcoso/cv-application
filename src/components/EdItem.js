import React from "react";

class EdItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const item = this.props.item;
    return (
      <li className="education" key={item.id}>
        <span>{item.degree}</span>
        <span>{item.institution}</span>
        <span>
          {item.start.slice(0, 4)} To {item.finish.slice(0, 4)}.
        </span>
      </li>
    );
  }
}

export default EdItem;
