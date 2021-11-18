import "./login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  //   To illustrate how the user will login
  const dummyUserName = "tortoise@gmail.com";
  const dummyPassword = "tortoise";

  const handleSubmit = () => {
    if (userName === dummyUserName && password === dummyPassword) {
      history.push("/profile");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <p>Fill the form field to go to next step</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {!showError ? (
        <button type="Submit" value="Submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      ) : (
        <>
          <p style={{color:"red"}}>Incorrect Password</p>
          <button
            onClick={() => {
              setShowError(false);
            }}
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
};
