import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }} className = "bg-pattern"
  >
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow:'column wrap'
      }}
    ><span>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p className = "subtitle">A fullstack web developer.</p>
      </span>

      <h2 style={{ margin: 0, position: 'absolute', left: 0 }} className = "rotate">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          
          }}
        >
          About
        </Link>
      </h2>
      <h2 style={{ margin: 0, position: 'absolute', right: 0 }} className = "rotateNeg">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          
          }}
        >
          Projects
        </Link>
      </h2>

      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
