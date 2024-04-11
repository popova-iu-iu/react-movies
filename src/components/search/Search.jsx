import React from "react";

export class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleClick = (e) => {
    this.props.searchMovies(this.state.search);
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
    // this.setState({ type: e.target.dataset.type });
  };

  render() {
    return (
      <div className="">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />

          <button
            className="search-btn"
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
            }}
          >
            Search
          </button>
        </div>

        <div className="search-radio">
          <label htmlFor="">
            <input
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span className="search-radio__text">All</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span className="search-radio__text">Movies</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span className="search-radio__text">Series</span>
          </label>
        </div>
      </div>
    );
  }
}
