import React from "react";
import { fetchPost } from "../action/posts";

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText : '',
    }
  }
 handleChange = (e)=>{
    this.setState({
      searchText : e.target.value,
    })
 }
 handleSearch = ()=>{
     this.props.dispatch(fetchPost(this.state.searchText));
 }
  render() {
        
    return (
        <div className="search">
        <h1>My DICTONARY</h1>
          
             <input type="text" className="textArea " onChange={this.handleChange} />
             <button className="searchButton" onClick={this.handleSearch}>
              Search
             </button>
           
          </div>
    )
  }
}
