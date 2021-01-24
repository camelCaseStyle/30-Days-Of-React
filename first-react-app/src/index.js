import React from 'react'
import ReactDOM from 'react-dom'

const center = {
  display: 'flex',
  'justify-content': 'center',
  'margin-top':'10px'
}

const heading = <h1 style={center}>Subscribe</h1>
const subheading = <p style={center}>Sign up with your email address to receive news and updates</p>
const input = (
  <div style={center} className='header-wrapper'>
    <input type="text" id="first-name" name="first-name" placeholder='Firstname'></input>
    <input type="text" id="last-name" name="last-name" placeholder='Last name'></input>
    <input type="text" id="email" name="email" placeholder='Email'></input>
  </div>
)
const subscribe = (
  <div style={center}>
    <button style={center}>Subscribe</button>
  </div>
  
)

const rootElement = document.getElementById('root');

const app = (
  <div style={{background:'#C2E6F4', 'border-radius':'1pc'}} className='app'>
    {heading}
    {subheading}
    {input}
    {subscribe}
  </div>
)
ReactDOM.render(app, rootElement);