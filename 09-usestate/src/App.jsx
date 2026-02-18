import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const increasebtn = () => {
    setnum(num+1)
  }
  const decreasebtn = ()=>{
    setnum(num-1)
  }
  return (
    <div>
      <h1 className='flex font-bold justify-center items-center h-screen text-6xl'>{num}</h1>
      <button onClick={increasebtn} className='font-black flex'>increase</button>
      <button onClick={decreasebtn} className='font-black'>decrease</button>
    </div>
  )
}

export default App