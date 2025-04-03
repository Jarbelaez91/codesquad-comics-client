function Login() {
    return (
        <main>
    <div className="middle-container">
    <h1 className="comics">LOGIN</h1>
    <form>
      <div className="form-lines">
        <label htmlFor="email"> Email Address </label>
        <input className="inputs" type="email" name="email" id="email" placeholder="email" />
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
      </div>
    </form>
    </div>
      </main>
    )
  }

  export default Login