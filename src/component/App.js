
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../action/posts';
import Search from './search';
import Posts from './posts';

 class App extends Component {
  
  render() {
    console.log("props",this.props)
    const {posts} = this.props;
    return (
     <div>
      <Search  dispatch = {this.props.dispatch}/>
     <Posts posts = {posts}/>
     </div>
   
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts
  }
}
export default connect(mapStateToProps)(App);

