import React from "react";

class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateFirst: "",
      stateLast: "",
      dateOfBirth: "",
      stateAddress: "",
      stateEmail: "",
      statePhone: "",
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    for (let each in this.state) {
      if (e.target.id === each) {
        let st = this.state;
        let change = {};
        change[each] = e.target.value;
        let newSt = Object.assign(st, change);
        this.setState(newSt);
      }
    }
  }

  render() {
    return (
      <fieldset id="personal-info">
        <legend>Personal Information</legend>

        <div id="first-name">
          {this.props.mode === "edit" ? (
            <input
              id="stateFirst"
              type="text"
              placeholder="First Name"
              value={this.state.stateFirst}
              onChange={this.update}
            />
          ) : (
            <span>{this.state.stateFirst}</span>
          )}
        </div>

        <div id="last-name">
          {this.props.mode === "edit" ? (
            <input
              id="stateLast"
              type="text"
              placeholder="Last Name"
              value={this.state.stateLast}
              onChange={this.update}
            />
          ) : (
            <span>{this.state.stateLast}</span>
          )}
        </div>

        <div id="dob">
          {this.props.mode === "edit" ? (
            <div>
              <label htmlFor="date-of-birth">DOB</label>
              <input
                type="date"
                id="dateOfBirth"
                min="16"
                max="100"
                value={this.state.dateOfBirth}
                onChange={this.update}
              />
            </div>
          ) : (
            <span>{this.state.dateOfBirth}</span>
          )}
        </div>

        <div id="address">
          {this.props.mode === "edit" ? (
            <input
              type="text"
              placeholder="Home Address"
              id="stateAddress"
              value={this.state.stateAddress}
              onChange={this.update}
            />
          ) : (
            <span>{this.state.stateAddress}</span>
          )}
        </div>

        <div id="email">
          {this.props.mode === "edit" ? (
            <input
              type="email"
              placeholder="E-mail"
              id="stateEmail"
              value={this.state.stateEmail}
              onChange={this.update}
            />
          ) : (
            <span>{this.state.stateEmail}</span>
          )}
        </div>

        <div id="phone-number">
          {this.props.mode === "edit" ? (
            <input
              type="tel"
              placeholder="Phone Number"
              id="statePhone"
              value={this.state.statePhone}
              onChange={this.update}
            />
          ) : (
            <span>{this.state.statePhone}</span>
          )}
        </div>
      </fieldset>
    );
  }
}

export default Personal;
