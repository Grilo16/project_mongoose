import React from 'react'
import './NavBar.css'
import NLink from './NavLink'
import { slide as Menu } from 'react-burger-menu'

const NavBar = () => {
  const navPages = [
    { pageName: 'Home', pageLink: '/' },
    { pageName: 'Organs', pageLink: '/organs' },
    { pageName: 'Quizzes', pageLink: '/quizzes' },
    { pageName: 'Comment', pageLink: '/comment' },
    { pageName: 'About', pageLink: '/about' },
  ]

  const navLinks = navPages.map((route) => {
    return (
      <>
        <NLink route={route} />
        <hr />
      </>
    )
  })

  return (
    <>
      <h3 className='menulabel'></h3>
      <Menu>
        <nav className='nav-bar'>{navLinks}</nav>
      </Menu>
    </>
  )
}

export default NavBar
