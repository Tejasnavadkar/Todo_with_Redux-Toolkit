import React, { useState } from 'react'
import {useDispatch} from 'react-redux' //dispatch is a react's feature fore wiring
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {   // add todo ke ander ayega simple ek form add store ke ander kuch add karega for that we use dispatch value ko store me bhejne ke liye
    const [input, setInput] = useState('')
    const dispatch = useDispatch() //to send value in store and retrive value use action ( dispatch reducer ko use karake store ke ander value add or change karata hai)

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))  // yaha pe hame payload ko bhejne ki jarurat nahi hai direct input bhej sakate hai (redux toolkit me no need to add unnecessary boilerplate thats why it is better)
        setInput('') // input field ko clean kardo
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
    }
    

export default AddTodo