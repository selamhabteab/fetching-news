import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (<nav>
      <section>
        <Link to="/">Dashboard</Link>
        <Link to="/posts">
          News Post
        </Link>
      </section>
  </nav>)
}



