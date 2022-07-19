import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const style = document.createElement('style')
style.dataset.preezie = 'global'
style.innerHTML = `
.prz-widget-container { --primary-color: #ffa500; --secondary-color: #007bff; }
.prz-widget-h1 {}
.prz-widget-h4 {}
.prz-widget-p {}
.prz-widget-progress-bar { display: flex; justify-content: space-between; }
.prz-widget-progress-bar-item { display: flex; flex-direction: column; align-items: center;}
.prz-widget-progress-bar-item.current { color: var(--color, var(--primary-color, #ffffff)); }
.prz-widget-progress-bar-item.previous { color: var(--color, var(--secondary-color, #ffffff)); }
.prz-widget-progress-bar-icon { border-radius: 999px; border-width: 1px; border-style: solid; border-color: var(--border-color, var(--primary-color, #ffffff)); height: 2rem; width: 2rem;}
.prz-widget-progress-bar-icon.current { background-color: var(--background-color, var(--primary-color, #ffffff)); border-color: var(--border-color, var(--primary-color, #ffffff)); }
.prz-widget-progress-bar-icon.previous { background-color: var(--background-color, var(--secondary-color, #ffffff)); border-color: var(--border-color, var(--secondary-color, #ffffff)); }
.prz-widget-answer-wrapper { display: flex; flex-wrap: wrap; }
.prz-widget-answer {}
.prz-widget-answer.selected { border-width: 1px; border-style: solid; border-color: #ffa500 }
.prz-widget-answer-img {}
.prz-widget-button-wrapper {}
.prz-widget-button { background-color: var(--widget-button-bg-color, var(--primary-color, #ffffff)); }
.prz-widget-logo {}
@media screen and (max-width: 900px) { .prz-widget-container { padding: 12px; } }
@media screen and (max-width: 480px) {} 
`
document.getElementsByTagName('head')[0].appendChild(style)

const cssEditorStyle = document.createElement('style')
cssEditorStyle.dataset.preezie = 'cssEditor'
document.getElementsByTagName('head')[0].appendChild(cssEditorStyle)

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
