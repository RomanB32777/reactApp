import {ADD, LOG} from './actions/actionTypes';

const initialState = {
  login: false,
  counter: 0
}

// import {combineReducers} from 'redux'; // combineReducers - вернет новый редьюсер, состоящий из перечисленных 

// export default combineReducers({
//   counter1, // 1 редьюсер
//   counter2 // 2 редьюсер
// })

// state.counter1.counter - теперь так надо достать значение из стора в файлах, не относящихся к redux

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD:
    return {
      counter: state.counter + 1
    }

    case LOG:
      return {
        login: !state.login
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.payload
      }
 default:
    return state;

  }

//  return state;
}
