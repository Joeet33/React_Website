import React from 'react'
import { NavContainer } from './index.styles'

export const Nav = () => {
  return (

    <NavContainer>
       <h1>Home</h1>
    <nav>
    <ul className='nav__links'>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Search</a></li>
        <li><a href='#'>Sign up</a></li>
    </ul>
    </nav>
    </NavContainer>
    
  )
}