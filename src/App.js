import React from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mode: "edit" };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.state.mode === "edit"
      ? this.setState({ mode: "submit" })
      : this.setState({ mode: "edit" });
  }

  // storeData() {

  // }

  render() {
    return (
      <div>
        <form>
          <Personal mode={this.state.mode} />
          <Experience mode={this.state.mode} />
          <Education mode={this.state.mode} />
          <button type="button" id="change-mode" onClick={this.changeMode}>
            {this.state.mode === "edit" ? "Submit" : "Edit"}
          </button>
        </form>
      </div>
    );
  }
}

export default App;
