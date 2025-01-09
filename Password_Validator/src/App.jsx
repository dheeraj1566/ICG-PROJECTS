import React, { useState } from "react";
import validator from "validator";
import "./App.css"; // Import the CSS file

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Your password is strong!");
    } else {
      setErrorMessage("Your password is not strong enough.");
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Password Strength Checker</h2>
      <label className="label">Enter Password:</label>
      <input
        type="password"
        className="input"
        placeholder="Type your password"
        onChange={(e) => validate(e.target.value)}
      />
      {errorMessage && (
        <span
          className={`error ${
            errorMessage.includes("not") ? "red" : "green"
          }`}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default App;
