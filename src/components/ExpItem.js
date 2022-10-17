import React from "react";

class ExpItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: this.props.item };
  }

  changeState(e) {
    let item = this.state.item;
    for (let each in item) {
      if (e.target.id === each) {
        item[each] = e.target.value;
      }
    }
    this.setState({ item: item });
  }

  render() {
    const item = this.state.item;
    return (
      <li className="experience" key={item.id}>
        {this.props.mode === "edit" ? (
          <span>
            <input
              id="position"
              placeholder="Position"
              value={item.position}
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
              }}
            />{" "}
            at{" "}
            <input
              id="company"
              placeholder="Company"
              value={item.company}
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
              }}
            />
          </span>
        ) : (
          <span>
            {item.position} at {item.company}.
          </span>
        )}

        {this.props.mode === "edit" ? (
          <span>
            From{" "}
            <input
              id="start"
              value={item.start}
              type="date"
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
              }}
            />{" "}
            To{" "}
            <input
              id="finish"
              value={item.finish}
              type="date"
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
              }}
            />
          </span>
        ) : (
          <span>
            From {item.start.slice(0, 7)} To {item.finish.slice(0, 7)}.
          </span>
        )}
        {this.props.mode === "edit" ? (
          <p>
            <textarea
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
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
  }
}

export default ExpItem;
