import React, { Component } from "react";
import { FilterStyled } from "./FilterStyled";

class Filter extends Component {
  render() {
    return (
      <FilterStyled>
        <label htmlFor="filter-id">Find contact by name:</label>
        <input
          id="filter-id"
          type="text"
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
      </FilterStyled>
    );
  }
}

export default Filter;
