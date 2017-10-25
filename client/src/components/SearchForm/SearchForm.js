import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
<div>
    <form className="search">
        <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="street"
                list="address"
                type="text"
                className="form-control"
                placeholder="Type an addres to begin"
                id="address"
            />
            <datalist id="addresses">
                {props.addresses.map(address => <option value={address} key={address} />)}
            </datalist>
        </div>
    </form>;
<form className="price">
    <div className="form-group">
        <label htmlFor="priceRange">Price:</label>
        <input
            value={props.search}
            onChange={props.handleInputChange}
            name="price"
            list="priceRange"
            type="text"
            className="form-control"
            placeholder="Type in your price range"
            id="price"
        />
        <datalist id="priceRange">
            {props.priceRange.map(price => <option value={price} key={price} />)}
        </datalist>
        <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-success"
        >
            Search
    </button>
    </div>
</form>;
</div>

export default SearchForm;