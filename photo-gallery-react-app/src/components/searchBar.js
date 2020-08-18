import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);        
        this.state = {
            searchText: ''
        };
    }	

	handleChange = e => {
		this.setState({searchTerm: e.target.value});
	   
	  }
	
	  handleSubmit = e => {     
		this.props.handleSearch(this.state.searchTerm);
		e.preventDefault();
	  }

	render() {
		return (
			<form className="searchForm" onSubmit={this.handleSubmit}>				
				<input
                    type="search"
                    onChange={this.handleChange} 
                    name="search"
                    placeholder="Search images"
                />
				<button type="submit" id="submit" className="searchButton">Search</button>
			</form>
		);
	}
}

export default SearchForm;