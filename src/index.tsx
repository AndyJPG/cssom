import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const style = document.createElement('style')
style.dataset.preezie = 'global'
style.innerHTML = `
.prz-widget-container {
  --primary-color: #ffa500;
  --secondary-color: #007bff;
  color: black;
  font-size: 1rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1.2rem 0;
}

.prz-widget-h1 {}

.prz-widget-h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  color: var(--color, var(--primary-color));
}
.prz-widget-h6 {
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}
.prz-widget-p {
  width: 100%;
  text-align: center;
}

.prz-widget-button-wrapper {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: space-evenly;
}
.prz-widget-button {
  font-size: 0.7rem;
  color: white;
  text-transform: uppercase;
  border-radius: 100rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color, var(--primary-color));
  background-color: var(--bg-color, var(--primary-color, #ffffff));
  padding: 0.6rem 2.4rem;
}
.prz-widget-logo-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.prz-widget-logo {
  font-size: 0.6rem;
  text-align: center;
}

.prz-widget-progress-bar {
  width: 100%;
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;
  justify-content: space-between;
}
.prz-widget-progress-bar-item { display: flex; flex-direction: column; align-items: center;}
.prz-widget-progress-bar-item.current { color: var(--color, var(--primary-color, #ffffff)); }
.prz-widget-progress-bar-item.previous { color: var(--color, var(--secondary-color, #ffffff)); }
.prz-widget-progress-bar-icon { border-radius: 999px; border-width: 1px; border-style: solid; border-color: var(--border-color, var(--primary-color, #ffffff)); height: 2rem; width: 2rem;}
.prz-widget-progress-bar-icon.current { background-color: var(--background-color, var(--primary-color, #ffffff)); border-color: var(--border-color, var(--primary-color, #ffffff)); }
.prz-widget-progress-bar-icon.previous { background-color: var(--background-color, var(--secondary-color, #ffffff)); border-color: var(--border-color, var(--secondary-color, #ffffff)); }
.prz-widget-answer-container {
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  justify-content: center;
}
.prz-widget-answer-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: space-between;
}
.prz-widget-answer {
  width: 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.prz-widget-answer.selected {}
.prz-widget-answer.selected .prz-widget-answer-button { background-color: var(--bg-color, var(--primary-color)); border-color: var(--border-color, var(--primary-color));}

.prz-widget-answer-img-wrapper {
  display: flex;
  justify-content: center;
}
.prz-widget-answer-img {
  width: 80%;
}
.prz-widget-answer-content {
  font-size: 0.7rem;
}
.prz-widget-answer-button {
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(212, 217, 221);
  background-color: transparent;
}

.prz-widget-p-id456 { margin-top: 0.2rem; font-size: 0.9rem; font-style: italic; }
.prz-widget-p-id123 { margin-bottom: 0.2rem; }
.prz-widget-button-id123 { background-color: rgb(255, 255, 255); color: #ffa500 }

@media screen and (max-width: 900px) { .prz-widget-container { padding: 12px; color: green; } }
@media screen and (max-width: 480px) {}
`
document.getElementsByTagName('head')[0].appendChild(style)

const questionLevelStyle = document.createElement('style')
questionLevelStyle.dataset.preezie = 'questionLevel'
questionLevelStyle.innerHTML = `
@media screen and (max-width: 900px) { .prz-widget-container { padding: 120px; } }
@media screen and (max-width: 480px) {} 
`
document.getElementsByTagName('head')[0].appendChild(questionLevelStyle)

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
