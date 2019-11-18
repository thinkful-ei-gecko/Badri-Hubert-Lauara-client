import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span className='username'>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login' className='navLink'>
              <div className='basicBtn'>
              Logout
              </div>
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='navLink' to='/login'><div className='basicBtn'>Login</div></Link>
        <Link className='navLink' to='/register'><div className='basicBtn'>Sign up</div></Link>
      </nav>
    )
  }

  render() {
    return (
      <header className='mainHeader'>
        <h1 className='mainTitle'>
          <Link className='header' to='/'>
            Learn Spanish Medical Terms
          </Link>
        </h1>
        <div className='navLinks'>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header
