import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementingBy,
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
            <>
            <CounterDisplay count={this.state.count}/>
            </>
    )
  }
}
