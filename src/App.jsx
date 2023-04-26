import react from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'


function App() {

  return (
    <>
      <div className='app'>
      <Navbar/>
      <Home/>
      <Service/>
      </div>
     
    </>
  )
}

export default App
