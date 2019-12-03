import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import MenuToggle from "./components/Navigation/MenuToggle/MenuToggle";
import Drawer from "./components/Navigation/Drawer/Drawer"
import Layout from "./hos/Layout/Layout"
import Start from "./Start";
import Start2 from "./Start2";
import PostDetail from "./components/postDetail";
import Auth from "./containers/auth/auth";
import Main from "./containers/main/Main";
import PostCreater from "./containers/PostCreater/PostCreater";
import {connect} from 'react-redux';  // соединяет компонент реакта с стором, работает как компонет высокого порядка
import {add, log, addNumber, addAsyncNumber} from './redux/actions/actions'
//import axios from 'axios';



class App extends React.Component {
//  state = {
//   login: false
// }


render(){
//  console.log('APP', this.props);
  return (
  <Layout>

    <Header />
    <button onClick={this.props.onLog}>Login for start2</button>

    {/*   <button onClick={this.props.onAddNumber.bind(this, 5)}>Login for start2</button>  */}
    <button onClick={this.props.onAdd}>добавить 1</button>
     <button onClick={() => this.props.onAsynNumber(5)}>Асинхронно добавить 5</button>
     <button onClick={() => this.props.onAddNumber(5)}>добавить 5</button>


    {/*<button onClick={() => this.setState({login: true})}>Login for start2</button>*/}
    <p>{this.props.login ? 'TRUE' : 'FALSE'}</p>
    <p>Counter = {this.props.counter}</p>

    <Switch>
    { /* </Route exact path='/' render={() => <h1>hello</h1>} /> */}

      { /* this.props.login ? <Route path='/start2' render={() => <Start2 />} /> : null */}
      <Route path='/start/:name' component={PostDetail} />
      <Route path='/start' exact component={Start} />
      <Route path='/auth' component={Auth} />
      <Route path='/createPost' component={PostCreater} />
      <Route path='/' component={Main} />
      <Redirect to={'/'} />
      {/* <Route path='/start2' component={Start2} />} /> */}
      </Switch>

</Layout>
  );
}
}

function mapStateToProps(state) { // state - общий state, характерный для всего приложения
  return { // возвращаем js-объект
    // изменим и трасформируем какие-то данные из state в props для компонета, который мы соединяем (App)
    login: state.login,
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) { // dispatch - диспатчить (вызывать) новые действия
  return {
    // задавать какие-то кастомные функции как параметры для компонента, который оборачиваем
    //onAdd: () => dispatch({type: 'ADD'}),
    onAdd: () => dispatch(add()),
    onSub: () => dispatch({type: 'SUB'}),
    onLog: () => dispatch(log()),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsynNumber: number => dispatch(addAsyncNumber(number)),
  //  onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
  } // передаст эти функции в props
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // вызываем функцию connect -> она возвращает новую функцию, в которую мы уже кладем как параметр компонет App

// <Route path='/1' component={Start} />
// <Route path='/2' component={Start2} />
