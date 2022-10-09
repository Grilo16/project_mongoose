import './NavBar.css'
import { Link } from 'react-router-dom'
import React from 'react'

function NLink({ route }) {
  return (
    <Link className='burger-link' to={route.pageLink}>
      <button className='menu-item'>{route.pageName}</button>
    </Link>
  )
}

export default NLink
