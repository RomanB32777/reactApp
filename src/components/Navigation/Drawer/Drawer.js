import React, {Component} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop"
import {NavLink} from 'react-router-dom';

const links =[
  {to: '/', label: 'Главная', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/createPost', label: 'Создать пост', exact: false},
  {to: '/start', label: 'Старт1', exact: false},
  {to: '/start2', label: 'Старт2', exact: false},
]

// <NavLink activeClassName={'navv_active'} exact to="/">home</NavLink>
//  <NavLink activeStyle={{
//    color: 'yellow'
//  }}
//   to="start">1</NavLink>
//  <NavLink to="start2">2</NavLink>
// {/* <NavLink to={{
//    pathname: '/posts',
//    search: '?a=1&b=2',
//    hash: 'ee'
//  }}>posts</NavLink> */}
//  {}<NavLink to="auth">auth</NavLink>
//  <NavLink to="createPost">create post</NavLink>

class Drawer extends Component {

  renderLinks(){
    return links.map((link, index) => {
      return(
    <li key={index}>

        <NavLink
        to={link.to}
        exact={link.exact}
        activeClassName={'navv_active'}
        onClick={this.props.onClose}
        >
          {link.label}
        </NavLink>


        </li>
      )
    })
  }

render(){
const cls = [
  'Drawer'
];

if (!this.props.isOpen){
  cls.push('close')
}

  return(
    /*чтобы навигация и Backdrop лежали на одном уровне*/
    <React.Fragment>
   <nav className={cls.join(' ')}>
     <ul>
      { this.renderLinks() }
     </ul>
   </nav>
   {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
</React.Fragment>
  )
 }
}

export default Drawer;
