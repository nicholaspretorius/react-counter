import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      tags: []
    };
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.styles} className={this.setBadgeStyle()}>
          {this.formatCount()}
        </div>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-xs"
        >
          +
        </button>
        <button
          onClick={() => this.handleIncrement(-1)}
          className="btn btn-secondary btn-xs"
        >
          -
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement(inc) {
    let count = this.state.count;
    count += inc;

    this.setState({
      count
    });
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags.</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  setBadgeStyle() {
    let classes = "badge badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
