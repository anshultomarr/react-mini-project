import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
const App = () => {
  return (<>  
    <div className='w-full h-screen bg-zinc-700 font-gilroy relative'>
      <Background/>
      <Foreground/>
    </div>
  </>)
}

export default App