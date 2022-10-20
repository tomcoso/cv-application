import React, { useState } from "react";
import "./Personal.scss";

const Personal = (props) => {
  const [stateFirst, setStateFirst] = useState("");
  const [stateLast, setStateLast] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [stateEmail, setStateEmail] = useState("");
  const [statePhone, setStatePhone] = useState("");

  return (
    <fieldset id="personal-info">
      <legend>Personal Information</legend>

      <div id="first-name">
        {props.mode === "edit" ? (
          <input
            id="stateFirst"
            type="text"
            placeholder="First Name"
            value={stateFirst}
            onChange={(e) => setStateFirst(e.target.value)}
          />
        ) : (
          <span>{stateFirst}</span>
        )}
      </div>

      <div id="last-name">
        {props.mode === "edit" ? (
          <input
            id="stateLast"
            type="text"
            placeholder="Last Name"
            value={stateLast}
            onChange={(e) => setStateLast(e.target.value)}
          />
        ) : (
          <span>{stateLast}</span>
        )}
      </div>

      <div id="dob">
        {props.mode === "edit" ? (
          <div>
            <label htmlFor="date-of-birth">DOB</label>
            <input
              type="date"
              id="dateOfBirth"
              min="16"
              max="100"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        ) : (
          <span>{dateOfBirth}</span>
        )}
      </div>

      <div id="address">
        {props.mode === "edit" ? (
          <input
            type="text"
            placeholder="Home Address"
            id="stateAddress"
            value={stateAddress}
            onChange={(e) => setStateAddress(e.target.value)}
          />
        ) : (
          <span>{stateAddress}</span>
        )}
      </div>

      <div id="email">
        {props.mode === "edit" ? (
          <input
            type="email"
            placeholder="E-mail"
            id="stateEmail"
            value={stateEmail}
            onChange={(e) => setStateEmail(e.target.value)}
          />
        ) : (
          <span>{stateEmail}</span>
        )}
      </div>

      <div id="phone-number">
        {props.mode === "edit" ? (
          <input
            type="tel"
            placeholder="Phone Number"
            id="statePhone"
            value={statePhone}
            onChange={(e) => setStatePhone(e.target.value)}
          />
        ) : (
          <span>{statePhone}</span>
        )}
      </div>
    </fieldset>
  );
};

export default Personal;
