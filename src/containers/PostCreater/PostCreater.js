import React, {Component} from 'react';
import Input from "../../components/UI/input/input";
import Select from "../../components/UI/select/select";
import is from 'is_js';
import {createControl} from '../../form/formFramework'
//import Axios from 'axios';

// 5- видео блока о формах

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Вопрос не может быть пустым',
    id: number
  }, {required: true})
}

function createFormControls() { // заново инициализирует форму
  return {
      question: createControl({
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым'
      }, {required: true}),
      option1: createOptionControl(1),
      option2: createOptionControl(2),
      option3: createOptionControl(3),
      option4: createOptionControl(4)
  }
}

export default class PostCreate extends Component {

  state = {
    quiz: [
      {name: "Roma"}
    ],
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  // componentDidMount() {
  //   Axios.get('https://reactapp-708d0.firebaseio.com/users.json')
  //     .then(res => { 
  //       console.log(res);
        
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  // }

  submitHandler = event => {
   // console.log("submit");
    event.preventDefault();
  }

  addSomeInfoPostHandler = () => {

  }

  createPostHandler = () => {
  //  Axios.post('https://reactapp-708d0.firebaseio.com/users', this.state.quiz)
  //  .then(response => {
  //    console.log(response);
  //  })
  //  .catch(error => {
  //    console.log(error);
     
  //  })
  }

  changeHandler = (value, controlName) => {

  }

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value // + - привести к числу
    })
    console.log(event.target.value);
  }

  renderControls(){
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]; // объект option1, option2 ..
       return (
         <Input
         key={controlName + index}
           label={control.label}
           value={control.value}
           valid={control.valid}
           shouldVal={!!control.validation}
           touched={control.touched}
           errorMessage={control.errorMessage}
           onChange={event => this.changeHandler(event.target.value, controlName)}
         />
       )
    }) //  Object.keys - получаем массив ключей option1, option2, .. в строковом формате
  }

  render(){
    const select = <Select
       label={"Выберите правильный ответ"}
       value={this.state.rightAnswerId}
       onChange={this.selectChangeHandler}
       options={[
         {text: 1, value: 1},
         {text: 2, value: 2},
         {text: 3, value: 3},
         {text: 4, value: 4}
       ]}
    />
    return(
      <div>
        <h1>Создание поста</h1>
        <form onSubmit={this.submitHandler}>

         { this.renderControls() }

         { select }

        <button onClick={this.addSomeInfoPostHandler} type="success">Добавить что-то</button>
        <button onClick={this.createPostHandler} type="primary">Создать пост</button>

        </form>
      </div>
    )
  }
}
