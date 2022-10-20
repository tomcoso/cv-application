import React, { useState } from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = (props) => {
  const [mode, setMode] = useState("edit");

  const changeMode = () => {
    mode === "edit" ? setMode("submit") : setMode("edit");
  };

  return (
    <div>
      <form>
        <Personal mode={mode} />
        <Experience mode={mode} />
        <Education mode={mode} />
        <button type="button" id="change-mode" onClick={changeMode}>
          {mode === "edit" ? "Submit" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default App;
