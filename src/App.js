import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <select>
          <option>Pizza Hut</option>
          <option>Papa Johns</option>
          <option>Jimmy Johns</option>
          <option>Dominos</option>
          <option>Panera Bread</option>
        </select>
      </div>
    );
  }
}

export default App;
