import React, { Component } from 'react'
export default class Posts extends Component {
  render() {
    const {posts} = this.props;
    console.log("Posts",posts);
    return (
         <div>
            {posts.map((post)=>{
                return (
                  
                    <div className="component">
                       <div className="list">
                          <div className="searchWord"><p> Word : {post.word}</p></div>
                           <div className="searchMeaning"><p>Meaning: {post.meaning}</p></div>
                       </div>
                    </div>

                )
            })}
            </div>
        
    )
  }
}
