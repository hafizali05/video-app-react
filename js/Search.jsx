import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSearchChange = this.handleSearchChange.bind(this);
  //   this.state = {
  //     searchTerm: "hello search term"
  //   };
  // }
  state = {
    searchTerm: ''
  }
  handleSearchChange = event =>{
    this.setState({searchTerm:event.target.value});
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>s video</h1>
          <input
            onChange={this.handleSearchChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="find video"
          />
        </header>
        {preload.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}

      </div>
    );
  }
}

export default Search;
