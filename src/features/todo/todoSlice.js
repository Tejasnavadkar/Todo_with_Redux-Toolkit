import {createSlice,nanoid} from '@reduxjs/toolkit'              // here humane createSlice import kiya to create slice and nanoid for uniqe id

     const initialState = {                     //intialState define initialy humare store me kya value hogi , ya fir empty hoga here we define first initial value in store

        todos: []             // ye he humara simple initial todo item hai aur structure define kiya
     }                                         

   // ab hum slice banayenge slice just bigger version of reducers reducer se hum store me changes kar sakate hai

    export const todoSlice = createSlice({               // reducers create karenge slice ke madat se
        name:'todo',
        initialState,                                   // har slice me initial slice hoti hai jo hamane upar initialize ki hai
        reducers:{                                      // sabase main thing iske ander ayenge hamare reducers and hum bahar function banake iske ander bhi refernce de sakte hai
                                         // context me sirf declaration likhate hai but hum defination bhi yaha pe likhate hai
        
            addTodo: (state,action) => {                    // imp thing reducer hamesha 2 things ka access deta hai state and action (action is a object) 
                                              // state :- intialstate kon kon si values hai un sabaka acess degi , action:- action se valuse rtrive kar sakate hai initial state me se or store me se
              const todo = {
                id: nanoid(),                                 // yaha pe hum todo le aye initial state me se to add (nanoid for uniqeness)
                text:action.payload                           //text laya store me se with the help of action
              }
              state.todos.push(todo)              // uper hamane todo ko banaya hai use initialstate me set bhi to karana padega isiliye state.todos.push initialstate ke ander todos me
            } ,      

            removeTodo: (state,action) => {
             state.todos = state.todos.filter((todo) => todo.id !== action.payload)                                                                                               // yaha pe delete karane vala todo chodke sare todo lenge aur state.todos me use set karenge

            },


        }
      })

      export const {addTodo,removeTodo} = todoSlice.actions             //part 1--- (for components)individual reducers ko bi to export karana padega further components me use karane ke liye iske 2 parts export karane padate hai
     
      export default todoSlice.reducer             // part 2---(for store) sare reducers ko export kare store me register karane ke liye kyoki store ko sirf reducers ke madat se hi access kar sakte hai
                                        // now import reducers in store