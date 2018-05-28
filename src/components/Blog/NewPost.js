import React, { Component } from "react";
import { notificationSuccess, notificationFail } from "../../utils/notification";

// import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };

  postDatahandler = () => {
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
      // .then(response => console.log(response))
      .then( response => notificationSuccess("POST USER", "Имитация записи на сервер - успешна"))
      .catch( error => notificationFail("POST USER", "Фейл"))
  }

  render() {
    return (
      <div className="new-post">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDatahandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
