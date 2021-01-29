import React from 'react'
import ReactDOM from 'react-dom'
import {tenHighestPopulation} from './data/ten_most_highest_populations'
const maxpop = 7693165599;
const numbersList = ()=>{
  let numbers = []; 
  for(let i =0; i < 32; i++){
    numbers.push(i);
  }
  console.log(numbers)
  return numbers; 
}

const isPrime = (num)=>{
  for(let i = 2; i < num; i++){
    if(num%i === 0) return false; 
  } 
  return num > 1;
}

const isEven = (num)=> num%2 === 0 ? true : false;   

const Numbers = ({numbers})=>{
  const list = numbers.map((num)=>{
    if (isPrime(num)){
      return <div className= 'num prime'key={num}>
        <div className='insideText'> {num} </div>
        
        </div>
    }else if(isEven(num)){
      return <div className= 'num even'key={num}>
                <div className='insideText'> {num} </div>
              </div>
    }
    return(
    <div className= 'num odd'key={num}>
      <div className='insideText'> {num} 
      </div>
    </div>
    )
  })
  return list; 
}



const Bars = ({countries})=>{
  const bars = countries.map(country=>{
    let width = (country.population/maxpop)*300 + 'px';
    return (
      <div>
        <div className='bar' style={{width:width, display:'inline-block'}}></div>
      </div>
    )
  })
  return bars;
}

const Countries = ({countries})=>{
  const countryList = countries.map((country)=>{
    return (
      <div>
        {country.country}
      </div>
    )
  })
  return <div>{countryList}</div>; 
}

const Population = ({countries})=>{
  const countryList = countries.map(country=>{
    return (
      <div>
        {country.population.toLocaleString()}
      </div>
    )
  })
  return countryList; 
}



// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>30 Days of React</h1>
        <h2>World population</h2>
        <h3>Ten most populated countries</h3> 
        <div className='main'>
          <div className='countries'>
            <Countries countries={tenHighestPopulation}/>
          </div>
          <div className='bars'>
            <Bars countries={tenHighestPopulation}/>
          </div>
        <div className='numbers'>
          <Population countries={tenHighestPopulation}/>
        </div>
        </div>
        
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
