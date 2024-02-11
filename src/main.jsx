import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>   {/*provider me wrap kiya and store property set ki */}
    <App />
  </Provider>
)
