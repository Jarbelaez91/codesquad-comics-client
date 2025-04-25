import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../App.css";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/logout",
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        setUser({});
        localStorage.removeItem("user");
        navigate("/admin");
      })
      .catch((error) => console.log("try again", error));
    navigate("/admin");
  };

  return (
    <header>
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "var(--blue" }}
      >
        <a href="/">
          <img
            style={{ width: "300px", height: "auto", objectFit: "cover" }}
            src="./images/CodeSquad-Comics-logo.jpg"
            alt="Home"
          />
        </a>
      </div>
      <nav>
        <div>
          <i className="fa-solid fa-bars hamburger-menu"></i>
          <ul
            style={{
              paddingBottom: "10px",
              display: "flex",
              flexWrap: "wrap",
              fontSize: "20px",
              justifyContent: "flex-end",
            }}
          >
            <li
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5em 0 5em",
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5em 0 5em",
              }}
            >
              <Link to="/about">ABOUT</Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5em 0 5em",
              }}
            >
              <Link to="/login"> Login</Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5em 0 5em",
              }}
            >
              <a href="/#" onClick={handleLogout}>
                {" "}
                Logout
              </a>
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
