import React, { Component } from "react";
import axios from "axios";
import ImageLoad from "./components/imageLoad";
import SearchBar from "./components/searchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  handleSearch = (word) => {
    this.getSearchResults(word);
  };

  componentDidMount() {
    this.getSearchResults();
  }

  getSearchResults = (word = null) => {
    let url = `https://api.unsplash.com/search/photos/?per_page=12&query=nature&client_id=715ce388097a396a15f42b44f325d5c24b7408429be2ec34f04bf447e76e2ea0`;
    if (word) {
      url = `https://api.unsplash.com/search/photos/?per_page=12&query=${word}&client_id=715ce388097a396a15f42b44f325d5c24b7408429be2ec34f04bf447e76e2ea0`;
    }

    axios
      .get(url)
      .then((res) => {
        const images = res.data.results;
        this.setState({ images });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div data-test="cy-test">
        <div className="hero">
          <h1 className="title">
            <span>Gallery</span>
          </h1>
        </div>
        <div className="main-content">
          <h2>Search for awesome pictures</h2>
          <SearchBar handleSearch={this.handleSearch} />

          <ImageLoad data={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
