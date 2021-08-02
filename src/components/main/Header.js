import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <NavLink to="/" className="logo__link">Employees</NavLink>
        </div>
        <nav className="nav">
          <menu className="menu">
            <li className="menu__item">
              <NavLink to="/new" className="menu__link" activeClassName="menu__link--active">
                New employee
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/search" className="menu__link" activeClassName="menu__link--active">
                Search employee
              </NavLink>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  )

}

export default Header