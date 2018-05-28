import React, { Component } from "react";
import { notificationSuccess, notificationFail } from "../../utils/notification";

class FullPost extends Component {

  state = { loadedPost: null }

  componentDidUpdate() {
    if(this.props.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, null)
          .then(response => {
            if (response.ok) return response.json();
            throw new Error(response.status);
          })
          .then(json => this.setState({ loadedPost: json }))
          .then(_ => notificationSuccess("GET USER", this.props.blogPage.getUserOk))
          .catch(error => notificationFail("GET USER", this.props.blogPage.usersFail));
      }
    }
  }

  deletePosthandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {method: 'delete'})
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then( response => notificationSuccess("DELETE USER", this.props.blogPage.delUserOk))
      .catch(error => notificationFail("DELETE USER", this.props.blogPage.usersFail));
  }

  render() {
    const { id, blogPage } = this.props
    const { loadedPost } = this.state
    let post = <p style={{textAlign: `center`, marginTop: `15px`}}>{blogPage.selectPost}</p>;
    if(loadedPost && id) {    
      post = (
        <div className="full-post">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="edit">
            <button onClick={this.deletePosthandler} className="delete">{blogPage.deleteButton}</button>
          </div>
        </div>
      );
    }
    return post
  }
}

export default FullPost;
