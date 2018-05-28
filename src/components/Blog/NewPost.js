import React, { Component } from "react";
import { notificationSuccess, notificationFail } from "../../utils/notification";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };

  postDatahandler = () => {
    const { postUserOk, usersFail } = this.props.blogPage
    const pack = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch(`https://jsonplaceholder.typicode.com/posts`, pack)
      .then(response =>{
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then( response => notificationSuccess("POST USER", postUserOk))
      .catch( error => notificationFail("POST USER", usersFail))
  }

  render() {
    const { title, author, header, addButton, content, author1, author2 } = this.props.blogPage
    return (
      <div className="new-post">
        <h1>{header}</h1>
        <label>{title}</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>{content}</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>{author}</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">{author1}</option>
          <option value="Tony">{author2}</option>
        </select>
        <button onClick={this.postDatahandler}>{addButton}</button>
      </div>
    );
  }
}

export default NewPost;
