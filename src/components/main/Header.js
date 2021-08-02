function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">Employees</div>
        <nav className="nav">
          <menu className="menu">
            <li className="menu__item">New employee</li>
            <li className="menu__item">Search employee</li>
          </menu>
        </nav>
      </div>
    </header>
  )

}

export default Header