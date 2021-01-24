// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'

// JSX element, header

const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <img src={asabenehImage} alt='author name' style={{'border-radius':'50%', width:'200px', height:'200px'}}></img>
      <h3>
        {author.firstName} {author.lastName} <i class="fas fa-check-circle"></i>
      </h3>
      <br></br>
      <p>
        Senior Developer, Finland
      </p>
    </div>
  </header>
)

const Header = ()=>{
  return header; 
}


// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript','Node.js', 'ReactJS', 'jQuery', 'GraphQL', 'MongoDB', 'Docker']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <h4>
        Skills{' '}
      </h4>
      <p><ul>{techsFormatted}</ul></p>
    </div>
  </main>
)
const Main = ()=>{
  return main; 
}
const ReusableButton = ()=>(
  <div>
    <button>ReusableButton</button>
  </div>
)

// JSX element, footer
const Footer = ()=>(
     <footer>
      <div className='footer-wrapper'>
        <p><i class="fas fa-clock"></i> <span className='date-text'>Joined January 4, 2019</span></p>
      </div>  
      
    </footer>
  
)


// JSX element, app
const app = (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
    <ReusableButton />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
