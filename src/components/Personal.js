import React from "react";

class Personal extends React.Component {
  render() {
    return (
      <fieldset id="personal-info">
        <legend>Personal Information</legend>

        <div id="first-name">
          {/* <label htmlFor="first-name">First Name</label> */}
          <input type="text" placeholder="First Name" />
        </div>

        <div id="last-name">
          {/* <label htmlFor="last-name">Last Name</label> */}
          <input type="text" placeholder="Last Name" />
        </div>

        <div id="dob">
          <label htmlFor="date-of-birth">DOB</label>
          <input type="date" id="date-of-birth" min="16" max="100" />
        </div>

        <div id="address">
          {/* <label htmlFor="address">Address</label> */}
          <input type="text" placeholder="Home Address" />
        </div>

        <div id="email">
          {/* <label htmlFor="email">E-mail</label> */}
          <input type="email" placeholder="E-mail" />
        </div>

        <div id="phone-number">
          {/* <label htmlFor="phone-number">Phone Number</label> */}
          <input type="tel" placeholder="Phone Number" />
        </div>
      </fieldset>
    );
  }
}

export default Personal;
