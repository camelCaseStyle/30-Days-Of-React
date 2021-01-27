// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'

// JSX element, header



// JSX element, header
const Header = ({
  data:{
    asabenehImage, 
    author:{firstName, middleName, lastName},
    location
  }
})=>{
  return(
  <header>
    <div className='header-wrapper'>
      <img src={asabenehImage} alt='author name' style={{'border-radius':'50%', width:'200px', height:'200px'}}></img>
      <h3>
        {firstName} {middleName} {lastName} <i class="fas fa-check-circle"></i>
      </h3>
      <br></br>
      <p>
        {location}
      </p>
    </div>
  </header>
  )
}



// JSX element, main
const Techlist = ({techs})=>{
  const techList = techs.map((tech)=><li key={tech}>{tech}</li>)
  return techList; 
}

// JSX element, main
const Main = ({
  data:{
    skills
  }
})=>{
  return (
    <main>
    <div className='main-wrapper'>
      <h4>
        Skills{' '}
        :
      </h4>
      <ul><Techlist techs={skills}/></ul>
    </div>
  </main>
  )
}



// JSX element, footer
const Footer = ({
  data:{
    copyright
  }
})=>{ 
  return (
    <footer>
    <div className='footer-wrapper'>
      <p>{copyright}</p>
    </div>
    </footer>
  )
  
}


// JSX element, app
const App = ()=>{
  const data = {
    asabenehImage: asabenehImage,
    author: {
      firstName: 'Anubhav',
      middleName: 'Ashish',
      lastName: 'Baria'
    },
    location: 'Sydney, New South Wales',
    copyright: 'Copyright 2020',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
  return (
    <div className='app'>
      <Header data={data}/>
      <Main data={data}/>
      <Footer data={data}/>

    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)
