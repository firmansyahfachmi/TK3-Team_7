const Login = (props) => {
  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>
        <br />
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
