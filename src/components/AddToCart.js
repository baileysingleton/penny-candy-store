/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

// so make it like, take in the prop id. Then call the reducer with the prop, so we can reduce on submit.

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("hello");
    console.log(this.props.id);
  }
  handleSubmit(event) {
    console.log("value is: ", this.state.value);
    console.log("on:");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Add To Cart:
          <input
            type="text"
            placeholder="0"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Apply" />
      </form>
    );
  }
}
