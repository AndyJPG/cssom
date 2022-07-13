import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const style = document.createElement('style')
style.dataset.preezie = 'global'
style.innerHTML = '.prz-widget-button { background-color: var(--primary-color, var(--widget-button-bg-color), #ffffff); }'
document.getElementsByTagName('head')[0].appendChild(style)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
