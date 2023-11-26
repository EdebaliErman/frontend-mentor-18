import React from 'react'
import Button from '../Button/Button'
import "../../Style/Header.css"
function Header() {

  const url = process.env.PUBLIC_URL + "./assets/"

  return (
    <div className='Header'>
      <header>
        <div>
          <img src={url + "logo.svg"} alt='logo' />
        </div>
        <div>
          <ul>
            <li>Feartures</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </div>
      </header>
      <article>
        <div className='article-title'>
          <h1>All your files in one secure location, accesible anywhere.</h1>
          <h5>Fylo stores your most important files in one secure location, Access them wherever you need, share and collaborate with friends, family, and co-workers.</h5>
          <div className='buttons'>
            <Button name={"Get Started"} />
          </div>
        </div>
        <div>
          <img className='pl-20' src={url + "illustration-1.svg"} alt='illustration-1' />
        </div>
      </article>
    </div>
  )
}

export default Header
