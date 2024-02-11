import {configureStore} from '@reduxjs/toolkit';
import  todoReducer from '../features/todo/todoSlice';  // ab simply iss reducers ko store ke object me dalo


export const store = configureStore({          //here we create Store using configureStore method & store it in variable and then export it

    reducer:todoReducer                                 // store ke liye humane itni mehnat ki thi

}) 
