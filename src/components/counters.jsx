import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, purpose: "React" },
      { id: 2, value: 1, purpose: "Angular" },
      { id: 3, value: 7, purpose: "Vue" },
      { id: 4, value: 3, purpose: "Node.js" }
    ]
  };

  handleDelete(counter) {
    const counters = this.state.counters.filter(c => c.id !== counter.id);

    this.setState({
      counters
    });
  }

  resetCounters() {
    console.log("Reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters
    });
  }

  handleIncrement(counter, inc) {
    console.log(`Increment ${counter.id} by ${inc}`);
    const counters = this.state.counters.map(c => {
      if (c.id === counter.id) {
        c.value = counter.value += inc;
        return c;
      }
      return c;
    });

    this.setState({
      counters
    });
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={() => this.handleDelete(counter)}
            onIncrement={() => this.handleIncrement(counter, 1)}
            onDecrement={() => this.handleIncrement(counter, -1)}
          >
            <h4>Counter #{counter.id}</h4>
            <p>This is for {counter.purpose}</p>
          </Counter>
        ))}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.resetCounters()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
