import { Fragment, useState } from "react";

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAddressChange = (value) => {
    setEmailAddress(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = {
      EmailAddress: emailAddress,
      Password: password,
    };

    const options = {
      method: "POST",
      url: process.env.NEXT_PUBLIC_API_URL + `Author/Login`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(process.env.NEXT_PUBLIC_API_URL + `Author/Login`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <Fragment>
      <main className="form-signin">
        <form
          style={{
            margin: "50px 0",
          }}
          onSubmit={loginHandler}
        >
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => handleEmailAddressChange(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign In
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022 MikeMilly</p>
        </form>
      </main>
    </Fragment>
  );
}

export default Login;
