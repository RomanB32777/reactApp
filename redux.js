const redux = require('redux');

const initialState = {
  counter: 0
}
// Reducer - функция, которая делает некие преобразования (изменяет state) | reducer(state), где state тот объект, который описывает состояние всего приложения

const reducer = (state = initialState, action) => { // action - с полем type

  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }

  return state;
}

// Store - то место, где хранятся все данные

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log('Subscribe', store.getState()); // subscribe - изменение store
}); // подписаться на изменение store


//console.log(store.getState());

// Actions; type нужен для определения действия, которое мы совершаем

const addCounter = {
  type: 'ADD'
}

// вызов действия
store.dispatch(addCounter);
//console.log('2', store.getState());

store.dispatch({ type: 'SUB'});
//console.log('3', store.getState());

store.dispatch({ type: 'ADD_NUMBER', value: 10});
//console.log('4', store.getState());
