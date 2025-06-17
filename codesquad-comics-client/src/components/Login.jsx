import '../index.css'
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Login({ user, setUser }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      user: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("form was submitted", body);
        fetch(`${API_BASE_URL}/login/local`,      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("form submitted 2", result);
        setUser(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/admin");
      })
      .catch((error) => console.log("try again", error));
  };

  return (
    <main>
      <div className="middle-container">
        <h1 className="comics">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-lines">
            <label htmlFor="email"> Email Address </label>
            <input
              className="inputs"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="form-lines">
            <label htmlFor="password"> Password </label>
            <input
              className="inputs"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="submit-button-div">
            <button className="submit-button">Submit</button>
            {user}
            {setUser}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
