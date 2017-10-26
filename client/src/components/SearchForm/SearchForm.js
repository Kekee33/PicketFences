import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
<div>
<div className="jumbotron">
<form>
  <div className="form-group">
    <label for="exampleInputAddress"></label>
    <input type="text" class="form-control" id="exampleInputAddress" placeholder="property address" />
  </div>
  <div className="form-group">
    <label for="exampleInputPrice"></label>
    <input type="text" class="form-control" id="exampleInputPrice" placeholder="list price" />
  </div>
  <div className="form-group">
    <label for="exampleInputZipcode"></label>
    <input type="text" class="form-control" id="exampleInputZipcode" placeholder="zip code" />
  </div>  
  
  <button type="submit" class="btn btn-default">Submit</button>
</form>
</div>
</div>

export default SearchForm;