import React from 'react'
import ReactDOM from 'react-dom'



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
// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>30 Days of React</h1>
        <div className='all-numbers'>
          <Numbers numbers={numbersList()}/>
        </div>  
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
