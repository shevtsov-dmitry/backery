import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import CSS
import '../style/wholeHtmlPageCommonLayout.css'
import './components/previewGreetingPage/PreviewGreetingPage.css'
import './components/everythingYouLike/EverythingYouLike.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
