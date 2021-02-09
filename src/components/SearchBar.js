import React, { useState } from 'react';

//class SearchBar extends React.Component {
//add destructured onFormSubmit arg to fx decl
const SearchBar = ({ onFormSubmit }) => {
	//state = { term: '' };
	const [term, setTerm] = useState('');
	
	//delete const to make class component
	const onInputChange = (event) => {
		//this.setState({ term: event.target.value }); makes no sense outside of a class component
		setTerm(event.target.value);
	};

	//delete const to make class component
	//name collision on function - renamed from onFormSubmit to onSubmit
	const onSubmit = (event) => {
		event.preventDefault();
	
		//this.props.onFormSubmit(this.state.term); makes no sense outside of a class component
		onFormSubmit(term);
	};
	
	//removed render() and added fx body to fx component
	//this.onFormSubmit->onSubmit this.onInputChange->onInputChange this.state.term->term
	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input onChange={onInputChange} type="text" value={term}/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;