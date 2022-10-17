import React from "react";

class EdItem extends React.Component {
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
      <li className="education" key={item.id}>
        {this.props.mode === "edit" ? (
          <input
            id="degree"
            type="text"
            placeholder="Career"
            value={item.degree}
            onChange={(e) => {
              this.props.edit(e, item);
              this.changeState(e);
            }}
          />
        ) : (
          <span>{item.degree}</span>
        )}

        {this.props.mode === "edit" ? (
          <input
            id="institution"
            type="text"
            placeholder="Institution"
            value={item.institution}
            onChange={(e) => {
              this.props.edit(e, item);
              this.changeState(e);
            }}
          />
        ) : (
          <span>{item.institution}</span>
        )}

        {this.props.mode === "edit" ? (
          <span>
            <input
              id="start"
              type="date"
              value={item.start}
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
              }}
            />{" "}
            To{" "}
            <input
              id="finish"
              type="date"
              value={item.finish}
              onChange={(e) => {
                this.props.edit(e, item);
                this.changeState(e);
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
  }
}

export default EdItem;
