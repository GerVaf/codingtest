import React from 'react'
import Nav from './components/Nav'

const Layout = ({chlidren}) => {
  return (
    <div>
        <Nav/>
        {chlidren}
    </div>
  )
}

export default Layout