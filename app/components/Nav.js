var React = require('react');
var NavLink = require('react-router-dom').NavLink;


function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='action' to='/' >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='action' to='/battle' >
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='action' to='/popular' >
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
