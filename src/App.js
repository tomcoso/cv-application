import React from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Personal />
          <Experience />
        </form>
      </div>
    );
  }
}

export default App;
