import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementingBy,
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
            <div>
            <h1>Count: {this.state.count}</h1>
            </div>
    )
  }
}
