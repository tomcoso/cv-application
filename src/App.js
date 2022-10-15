import React from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Personal />
          <Experience />
          <Education />
        </form>
      </div>
    );
  }
}

export default App;
