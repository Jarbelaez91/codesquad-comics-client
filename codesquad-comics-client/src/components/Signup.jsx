import { useNavigate } from "react-router-dom";
import "../App.css";



function Signup({ user, setUser }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("form was submitted");
    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/signup",
      {
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
        <h1 className="comics">SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-lines">
            <label htmlFor="firstname"> First Name </label>
            <input
              className="inputs"
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="first-name"
            />
          </div>
          <div className="form-lines">
            <label htmlFor="last-name"> Last Name </label>
            <input
              className="inputs"
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="last-name"
            />
          </div>
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
            {user} {setUser}
          </div>
          <div className="submit-button-div">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
