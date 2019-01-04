import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        {this.props.children}
        <div
          style={this.styles}
          className={this.setBadgeStyle(this.props.value)}
        >
          {this.formatCount(this.props.value)}
        </div>
        <button
          onClick={() => this.props.onIncrement()}
          className="btn btn-secondary btn-xs m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement()}
          className="btn btn-secondary btn-xs m-2"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
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

  setBadgeStyle(value) {
    let classes = "badge badge-";
    return (classes += value === 0 ? "warning" : "primary");
  }

  formatCount(value) {
    const count = value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
