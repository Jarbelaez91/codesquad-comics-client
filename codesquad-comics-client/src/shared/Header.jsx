import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";



function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("https://course-project-codesquad-comics-server.onrender.com/logout", {
      method: "POST",
    })
    .then((res)=> res.json())
    .then ((result) => {
      console.log("success", result)
      setUser({})
      localStorage.removeItem("user")
      navigate("/admin")
    })
    .catch((error) => console.log("try again", error));
    navigate("/admin")

  }



  return (
      <header>
        <nav>
          <div>
            <i className="fa-solid fa-bars hamburger-menu"></i>
            <ul className="nav-links">
              <li className="link-li">
              <Link to="/">Home</Link>
              </li>
              <li className="link-li">
              <Link to="/about">ABOUT</Link>
              </li>
              <li className="link-li">
                <Link to="/login"> Login</Link>
              </li>
              <li className="link-li">
                <a href="/#" onClick={handleLogout}> Logout</a>
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
