import React, { useState } from 'react';


const SigninScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (role === "admin") {
      console.log("admin role");
      props.history.push('/admin');
    } else if (role === "student") {
      props.history.push('/home');
    };
  }

  return (
    <div>

      <form className="form" onSubmit={submitHandler}>
        <center><h1>Login form</h1></center>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            minLength="8"
            value={password}
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          </div>
          <div>
            <label>Please Select Role</label>
          <select onChange={(e) => { setRole(e.target.value) }}
            value={role}
            required>
            <option value="">Please Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>

          </select>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
