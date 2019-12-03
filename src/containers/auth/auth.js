import React, {Component} from 'react';
import Input from "../../components/UI/input/input";
import is from 'is_js';

// 1-5 видео блока о формах

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите коректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите коректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

 loginHandler = () => {

 }

 registerHandler = () => {

 }

 submitHandler = event => {
  // console.log("submit");
   event.preventDefault();
 }

 validateControl(value, validation){
   if (!validation) return true;

   let isValid = true;

   if (validation.required){
     isValid = value.trim() !== '' && isValid; // trim - очистит лишние пробелы
   }

   if (validation.email){
     isValid = is.email(value) && isValid;
   }

   if (validation.minLength){
     isValid = value.length >= validation.minLength && isValid;
   }

   return isValid;
 }

 onChangeHandler = (event, controlName) => {
  // console.log(`${controlName}: `, event.target.value);

   const formControls = { ...this.state.formControls};
   const control = { ...formControls[controlName]};

   control.value = event.target.value;
   control.touched = true;
   control.valid = this.validateControl(control.value, control.validation);

   formControls[controlName] = control;

   let isFormValid = true;

   Object.keys(formControls).forEach(name => {
     isFormValid = formControls[name].valid && isFormValid;
   });

   this.setState({
     formControls, isFormValid
   });
 }

 renderInputs(){
   return Object.keys(this.state.formControls).map((controlName, index) => {
     const control = this.state.formControls[controlName];
     return (
       <Input
         key={controlName + index}
         type={control.type}
         value={control.value}
         valid={control.valid}
         touched={control.touched}
         label={control.label}
         shouldVal={!!control.validation}
         errorMessage={control.errorMessage}
         onChange={event => this.onChangeHandler(event, controlName)}
       />
     )
   }); // Object.keys - получение массива из formControls

 }

  render(){
    return(
      <div>
        <h1>Auth</h1>
        <form onSubmit={this.submitHandler}>

           { this.renderInputs() }

      { /*  <Input
         label="Email"
          />
         <Input
         label="Пароль"
         errorMessage="test"
         /> */}

          <button onClick={this.loginHandler} type="success">Войти</button>
          <button onClick={this.registerHandler} type="primary">Регистрация</button>

        </form>
      </div>
    )
  }
}
