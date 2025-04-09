function Login({ user, setUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "form was submitted",
      e.target.password.value,
      e.target.email.value
    );
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
