import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const style = document.createElement('style')
style.dataset.preezie = 'global'
style.innerHTML = `
.prz-widget-container {}
.prz-widget-h1 {}
.prz-widget-h4 {}
.prz-widget-p {}
.prz-widget-answer-wrapper { display: flex; flex-wrap: wrap; }
.prz-widget-answer {}
.prz-widget-answer-img {}
.prz-widget-button-wrapper {}
.prz-widget-button { background-color: var(--widget-button-bg-color, var(--primary-color, #ffffff)); }
.prz-widget-logo {}
@media screen and (max-width: 900px) { .prz-widget-container { padding: 12px; } }
@media screen and (max-width: 480px) {} 
`
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
