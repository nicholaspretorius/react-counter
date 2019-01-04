import React, { Component } from "react";

class CounterNav extends Component {
  formatCounter(amount) {
    const number = amount;
    return number === 1 ? "counter" : "counters";
  }

  setHeading(amount) {
    if (amount === 0) {
      return <p>There are currently no counters.</p>;
    }
    return (
      <p>
        React App has {amount} {this.formatCounter(amount)}.
      </p>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        {this.setHeading(this.props.counters.length)}
      </nav>
    );
  }
}

export default CounterNav;
