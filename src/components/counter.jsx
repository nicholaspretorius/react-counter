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
        <div className="row">
          <div className="col-1">
            <span
              style={this.styles}
              className={this.setBadgeStyle(this.props.counter.value)}
            >
              {this.formatCount(this.props.counter.value)}
            </span>
          </div>
          <div className="col">
            <button
              onClick={this.props.onIncrement}
              className="btn btn-secondary btn-xs m-2"
            >
              +
            </button>
            <button
              onClick={this.props.onDecrement}
              className="btn btn-secondary btn-xs m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-xs m-2"
              onClick={this.props.onDelete}
            >
              X
            </button>
            {this.renderTags()}
          </div>
        </div>
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
