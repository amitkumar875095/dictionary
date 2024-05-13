import React from "react";
import { fetchPost } from "../action/posts";
import '../index.css'
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
      <div>
      <h1 className >My DICTONARY</h1>
        <div className="search">
        
          
             <input type="text" className="textArea " onChange={this.handleChange} />
             <button className="searchButton" onClick={this.handleSearch}>
              Search
             </button>
           
          </div>
          </div>
    )
  }
}
