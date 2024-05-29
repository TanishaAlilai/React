import { useState } from 'react'
import './App.css'
import Card from "./Components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card
     
     image="https://www.melskitchencafe.com/wp-content/uploads/2021/07/strawberry-frozen-yogurt5.jpg"
     name="Tanisha"
     city="stamford"
     job="doctor"
     />
     <Card
     
     image="https://www.melskitchencafe.com/wp-content/uploads/2021/07/strawberry-frozen-yogurt5.jpg"
     name="Tanisha"
     city="stamford"
     job="doctor"
     />
    </>

    
    
  )
}

export default App
