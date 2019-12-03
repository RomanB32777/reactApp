import React from 'react';
import logo from './logo.svg';
import Clock from "./components/clock";
import Post from "./components/post";

class Start extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showPost: false
    }
    this.onChangePost = this.onChangePost.bind(this);
  //   this.goToHomePage = this.goToHomePage.bind(this);
  }

  console(){
    console.log('this' );
  }



  onChangePost(name, id){
    //console.log(name, id);
    let post = this.state.posts[id];
    // console.log(post.title);
    post.title = name;

    //const posts = this.state.posts.concat();
    let posts = [...this.state.posts];
    posts[id] = post;
    console.log(posts[id].title);
    this.setState({posts});
  }

  onClickDelete(index){
    const posts = this.state.posts.concat();
    posts.splice(index, 1);

    this.setState({posts});
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
  }

  changeInputHandle = (event) => {
    //console.log(event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  showButton = () => {
    this.setState({
      showPost: !this.state.showPost
    })
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    }); // push - для того, чтобы перейти на другую страницу
  }

  render(){
    //  console.log(this.props);
    //const posts = this.state.posts;

console.log(this.props);
    return(
      <header className="App-header">
      <button onClick={this.goToHomePage}>Click to home</button>
      <img src={logo} className="App-logo" alt="logo" />
      <p onClick={this.console}>
      {this.state.pageTitle} <code>src/App.js</code> and save to reload.
      </p>
      <input type="text" onChange={this.changeInputHandle} />
      <Clock />

      <button onClick={this.showButton}>
      {this.state.showPost ? 'close' : 'open'}
      </button>

      { this.state.showPost &&
        this.state.posts.map((post, index) =>
        <Post
            key={index}
            title={post.name}
            body={post.year}
            index={index}
            onChangePost={event => this.onChangePost(event.target.value, index)}
            onClickDelete={this.onClickDelete.bind(this, index)}
        />

      ) }

      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >

      Learn React
      </a>
      </header>
    );
  }


}



export default Start;
