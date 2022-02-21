import React from 'react'
import './index.css'

export default function Header() {
  return (

    <div className='header'>
        <h1 className='home'>Home</h1>
    <nav className='nav'>
    <ul className='nav__links'>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Search</a></li>
        <li><a href='#'>Sign up</a></li>
    </ul>
    </nav>
    </div>
    
  )
}