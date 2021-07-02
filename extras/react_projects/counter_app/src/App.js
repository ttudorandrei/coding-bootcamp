import { Component } from "react";

import Button from "./Button";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onDecrementClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Counter</h1>
        <h2 className="text-center">{this.state.count}</h2>
        <div class="d-grid gap-2">
          <Button text="INCREMENT" onClick={this.onIncrementClick} />
          <Button
            text="DECREMENT"
            onClick={this.onDecrementClick}
            variant="danger"
          />
        </div>
      </div>
    );
  }
}

export default App;
