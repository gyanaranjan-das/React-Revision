import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10)
  const buttonclk = ()=>{
    setnum(10)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={buttonclk}>click</button>
    </div>
  )
}

export default App