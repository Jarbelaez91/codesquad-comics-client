function Header({ user, setUser }) {
  return (
      <header>
        <nav>
          <div>
            <i className="fa-solid fa-bars hamburger-menu"></i>
            <ul className="nav-links">
              <li className="link-li">
                <a href="index.html"> Home</a>
              </li>
              <li className="link-li">
                <a href="about.html"> About</a>
              </li>
              <li className="link-li">
                <a href="login.html"> Login</a>
              </li>
              {user}
              {setUser}
            </ul>
          </div>
        </nav>
      </header>
  );
}

export default Header;
