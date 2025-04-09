function Signup({ user, setUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "form was submitted",
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.email.value,
      e.target.password.value
    );
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
