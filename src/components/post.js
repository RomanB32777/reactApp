import React from 'react';
import {withRouter} from 'react-router-dom';


class Post extends React.Component {

 constructor(props){
   super(props);

   this.inputRef = React.createRef();
 }
// componentWillReceiveProps(nextProps){
//   console.log('post componentWillReceiveProps(nextProps)', nextProps);
// }
//
// shouldComponentUpdate(nextProps, nextState){
//     // проверка на обновление компонента
//     console.log('post shouldComponentUpdate(nextProps, nextState) return true', nextProps, nextState);
//     return true;
//   //  return nextProps.name.trim() !== this.props.title.trim();
// }
//
// componentWillUpdate(nextProps, nextState){
//     // подготовка к изменению после проверки
//     // разрешает setState напрямую
//     console.log('post componentWillUpdate(nextProps, nextState)', nextProps, nextState);
// }
//
// static getDerivedStateFromProps(nextProps, prevState){
// // не имеем доступ к this - это для безопасности
// // нужно тогда удалить componentWillUpdate и componentWillReceiveProps
//   console.log('post getDerivedStateFromProps(nextProps, nextState)', nextProps, prevState);
//
//   return prevState
// }
//
// getSnapshotBeforeUpdate(){
//   // после render. но до того как обновится (componentDidUpdate)
//   // позволяет получить еще не изменненое DOM-дерево до обновления
//   // например, сохранить позицию скролла человека до обновления
//   console.log('post getSnapshotBeforeUpdate');
//
// }
//
// componentDidUpdate(){
//    // после изменения
//     console.log('post componentDidUpdate()');
// }
//
// componentWillUnmount() {
//   // когда элемент удаляется из DOM-дерева
//       console.log("unmout");
// }

componentDidMount(){
  if(this.props.index === 0){
    //this.inputRef.focus(); // 1 способ
    this.inputRef.current.focus(); // current ? // 2 способ
  }

}

  render(){
    console.log(this.props);
    return(
      <div onClick={() => this.props.history.push('/start/' + this.props.title)}>
        <p onClick={this.props.onChangeTitle}>{this.props.title} {this.props.body}</p>
        <input ref={this.inputRef} onChange={this.props.onChangePost}/>
        <button onClick={this.props.onClickDelete}>Delete</button>
      </div>
    );
  }
}

// <input ref={this.inputRef} onChange={this.props.onChangePost}/> 2 способ
/*ref={(inputRef) => this.inputRef = inputRef} 1 способ */

export default withRouter(Post);
// export default withRouter(Post); - если не class, а функция
