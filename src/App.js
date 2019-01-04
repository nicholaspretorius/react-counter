import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import CounterNav from "./components/nav";

class App extends Component {
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

  handleResetCounters() {
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
    console.log(`Increment ${counter.id} with ${counter.value} by ${inc}`);
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
      <React.Fragment>
        <CounterNav counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={counter => this.handleDelete(counter)}
            onIncrement={(counter, inc) => this.handleIncrement(counter, inc)}
            onDecrement={(counter, dec) => this.handleIncrement(counter, dec)}
            onReset={() => this.handleResetCounters()}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
