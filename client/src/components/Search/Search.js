//import React, { Component } from "react";
//import API from "../utils/API";
//import Container from "../Container";
//import SearchForm from "../components/SearchForm";
//import SearchResults from "../SearchResults/SearchResult";
//var request = require("request");

// class Search extends Component {

//     state = {};    
     
    

// axios.post("https://stage.retsrabbit.com/api/oauth/access_token", {
//     grant_type:'client_credentials',
//     client_id:'B8tBsdsndbicXE4WRGZ71ZUT8OU8KEDYgbhWneaJ',
//     client_secret:'LSc426tS9rG4t9nTyO5Aa60WTjxOTwxbEd4VK8AV'
// }, {header:{'Content-Type':'multipart/formdata'}})
//     .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
      
  //When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {    
  //   console.log("search mounted");
    // axios.get("https://stage.retsrabbit.com/api/v1/033989e234259a07740c81eb66fd3263/listing/search?&limit=10&offset=0")
    // //"https://api.retsrabbit.com/v1/server?access_token=033989e234259a07740c81eb66fd3263/listing/search?City=Savannah"
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
   
    

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });

// const retsrabbitFormData = {
//     grant_type:'client_credentials',
//     client_id:'B8tBsdsndbicXE4WRGZ71ZUT8OU8KEDYgbhWneaJ',
//     client_secret:'LSc426tS9rG4t9nTyO5Aa60WTjxOTwxbEd4VK8AV'
// };
// //request.post({
//     url: 'https://stage.retsrabbit.com/api/oauth/access_token',
//     formData: retsrabbitFormData
// }, function optionalCallback(err,response,body){
//     if(err){
//         return console.error('failed', err);
//     }
//     console.log(body);
//});
  //};

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
//   render() {
//  return (

//   <p>hey</p>

// )
    //   <Container style={{ minHeight: "80%" }}>
    //     <h1 className="text-center">Search Homes!</h1>
    //     <Alert
    //       type="danger"
    //       style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
    //     >
    //       {this.state.error}
    //     </Alert>
    //     <SearchForm
    //       handleFormSubmit={this.handleFormSubmit}
    //       handleInputChange={this.handleInputChange}
    //       breeds={this.state.breeds}
    //     />
    //     <SearchResults results={this.state.results} />
    //   </Container>

//   }

// }
// export default Search;
