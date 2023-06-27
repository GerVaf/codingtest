import React from 'react'
import Layout from './Layout'
import Routes from './routes/Routes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className=' font-custom '>
      <Nav/>
      <Routes/>
    </div>
  )
}

export default App