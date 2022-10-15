import React from "react";

class ExpItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const item = this.props.item;
    return (
      <li className="experience" key={item.id}>
        <span>
          {item.position} at {item.company}.
        </span>
        <span>
          From {item.start.slice(0, 7)} To {item.finish.slice(0, 7)}.
        </span>
        <p>{item.tasks}.</p>
      </li>
    );
  }
}

export default ExpItem;
