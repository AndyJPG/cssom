import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const style = document.createElement('style')
style.dataset.preezie = 'global'
style.innerHTML = `
@font-face {
  font-family: Montserrat;
  src: url("https://preeziestaticcontent.blob.core.windows.net/static/fonts/Montserrat-Regular-Preezie.woff2") format("woff2");
}
@font-face {
  font-family: Roboto;
  src: url("https://preeziestaticcontent.blob.core.windows.net/static/fonts/Roboto-Regular-Preezie.woff2") format("woff2");
}
.prz-widget-container { --primary-color: #ffa500; }
.prz-widget-answer-wrapper { display: flex; flex-wrap: wrap; }
.prz-widget-button { background-color: var(--widget-button-bg-color, var(--primary-color, #ffffff)); }
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
