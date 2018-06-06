import React from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

const Search = () => (
  <div>
    {preload.shows.map(show => <ShowCard show={show} key={show.imdbID}/>)}
  </div>
);

export default Search;
