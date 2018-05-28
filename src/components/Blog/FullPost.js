import React, { Component } from "react";
import { NotificationContainer } from "react-notifications";
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
          .then(_ => notificationSuccess("GET USER", "Успех"))
          .catch(error => notificationFail("GET USER", "Фейл"));
      }
    }
  }

  deletePosthandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {method: 'delete'})
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then( response => notificationSuccess("DELETE USER", "Имитация удаления - успешна"))
      .catch(error => notificationFail("DELETE USER", "Фейл"));
  }

  render() {
    const { id } = this.props
    const { loadedPost } = this.state
    let post = <p style={{textAlign: `center`, marginTop: `15px`}}>Please select a Post!</p>;
    if(loadedPost && id) {    
      post = (
        <div className="full-post">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="edit">
            <button onClick={this.deletePosthandler} className="delete">Delete</button>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
      {post} 
      <NotificationContainer /> 
      </React.Fragment>
    )
  }
}

export default FullPost;
