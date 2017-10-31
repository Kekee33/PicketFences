import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
<div>
<div className="jumbotron">
<form>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputAddress" placeholder="property address" />
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputPrice" placeholder="list price" />
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputZipcode" placeholder="zip code" />
  </div>  
  
  <button type="submit" className="btn btn-default">Submit</button>
</form>
</div>
</div>

export default SearchForm;