import React, {Component} from 'react';
import ActivePost from '../../components/ActivePost/ActivePost';

class Main extends Component {
  state = {
    activePost: 0,
    answerState: null, // { [id]: 'success' 'error' }, id - ключ текущего ответа, по нему понимаем правильно ответили или нет; хранится ифнормация о клике - либо праивльный ответ, либо неправильный
    posts: [
      {
        rightAnswerId: 1,
        title: "My new post",
        texts: [
          {p: 'Текст 1', id: 1},
          {p: 'Текст 2', id: 2},
          {p: 'Текст 3', id: 3},
          {p: 'Текст 4', id: 4},
        ]
      },
      {
        rightAnswerId: 1,
        title: "My post 2",
        texts: [
          {p: 'Текст 1', id: 1},
          {p: 'Текст 2', id: 2},
          {p: 'Текст 3', id: 3},
          {p: 'Текст 4', id: 4},
        ]
      }
    ]
  }

  onTextActivePost = (textId) => {

    if (this.state.answerState){ // проверка до изменения для того, чтобы избежать двойных кликов на правильный отет
      const key = Object.keys(this.state.answerState)[0];
     if (this.state.answerState[key] === 'success'){
      console.log("key ", this.state.answerState[key]);
      return;
      }
    }

    console.log('id: ', textId);

    const text = this.state.posts[this.state.activePost];
  //  console.log("right ", text.rightAnswerId, text);

    if (text.rightAnswerId === textId){

      this.setState({
        answerState: {[textId]: 'success'}
      });

  const timeout = window.setTimeout(() => {
   if (this.isPostFinished()) {
      console.log("Finished");
   }
  else{
    this.setState({
      activePost: this.state.activePost + 1,
      answerState: null
    })

  }
    window.clearTimeout(timeout);
  }, 1000)


  }
    else{
 //console.log('error');
 this.setState({
   answerState: {[textId]: 'error'}
 })
    }
  }

  isPostFinished(){
    return this.state.activePost + 1 === this.state.posts.length;
  }

  render() {
    return(
      <div className="mainClass">
      <div className="ActiveWrapper">
      <h1>Main</h1>
        <ActivePost
          onTextClick={this.onTextActivePost}
          title={this.state.posts[this.state.activePost].title}
          texts={this.state.posts[this.state.activePost].texts}
          postsLength={this.state.posts.length}
          postNumber={this.state.activePost + 1}
          state={this.state.answerState}
          />
            </div>

      </div>
    )
  }
}

export default Main;
