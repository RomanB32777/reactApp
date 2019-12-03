// Action Creators - функции, которые выдают определенный action
import {ADD, LOG, ADD_NUMBER} from './actionTypes';

export function add() {
 return{
   type: ADD
 }
}
export function addNumber(number) {
 return{
   type: ADD_NUMBER,
   payload: number
 }
}
export function addAsyncNumber(number) {
 return (dispatch) => { // для reduxThunk
   setTimeout(() => {
     dispatch(addNumber(number))
   }, 2000);
 }
}
export function log() {
 return{
   type: LOG
 }
}
