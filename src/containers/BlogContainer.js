import React, { Component } from "react";
import { NotificationContainer } from "react-notifications";
import { notificationSuccess, notificationFail } from "../utils/notification";
import Post from "../components/Blog/Post";
import FullPost from "../components/Blog/FullPost";
import NewPost from "../components/Blog/NewPost";
import HeaderContainer from "./HeaderContainer";

class BlogContainer extends Component {
  state = {
    post: [],
    selectedPost: null,
    error: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then(json => {
        const posts = json.slice(0, 8);
        const updatePosts = posts.map(el => ({ ...el, author: "Tony" }));
        this.setState({ post: updatePosts, error: false });
      })
      .then(_ => notificationSuccess("GET USERS", "Фейковые юзеры приехали"))
      .catch(error => {
        this.setState({error: true})
        notificationFail("GET USERS", "Фейковые юзеры не доехали")
      });
  }

  handleSelect = id => this.setState({selectedPost: id})

  render() {
    const { selectedPost, post, error } = this.state
    const posts = post.map(el => (
      <Post
        key={el.id}
        clicked={this.handleSelect.bind(null, el.id)}
        title={el.title}
        author={el.author}
      />
    ));

    const errorText = <p style={{textAlign: `center`, marginTop: `15px`}}>Something went wrong!</p>

    return (
      <React.Fragment>
        <HeaderContainer />
        <div className="blog-container">
          <section className="posts">{error ? errorText : posts}</section>
          <section>
            <FullPost id={selectedPost} />
          </section>
          <section>
            <NewPost />
          </section>
        </div>
        <NotificationContainer />
      </React.Fragment>
    );
  }
}

export default BlogContainer;
