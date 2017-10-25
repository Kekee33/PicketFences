import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Request from "superagent";


class Search extends Component {
   
    constructor(){
        super();
        this.state = {};
    }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentWillMount() {
    const url = "https://stage.retsrabbit.com/api/v1/033989e234259a07740c81eb66fd3263/listing/search?&limit=10&offset=0";
    Request.get(url).then((response) => {
        this.setState({
            listings: response
        });
    });
  }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search Homes!</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
