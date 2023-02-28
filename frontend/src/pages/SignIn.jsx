import React, { useState } from "react";

import styles from "../styles/SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmailClick = () => {
    setEmail("");
  };

  const handlePasswordClick = () => {
    setPassword("");
  };

  return (
    <div className={styles["sign-in-page"]}>
      <h1 className={styles["sign-in-title"]}>SIGN IN</h1>
      <form className={styles["sign-in-forms"]} onSubmit={handleSubmit}>
        <label htmlFor="email"> </label>
        <input
          className={styles["sign-in-input"]}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onClick={handleEmailClick}
        />
        <label htmlFor="password"> </label>
        <input
          className={styles["sign-in-input"]}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onClick={handlePasswordClick}
        />
      </form>
      <a href="true" className={styles["button-sign-in"]}>
        <label htmlFor="my-button"> </label>
        <button className={styles["sign-in-btn1"]} type="submit">
          SIGN IN
        </button>
        <label htmlFor="button"> </label>
        <button className={styles["sign-in-btn2"]} type="submit">
          SIGN UP
        </button>
      </a>
      <p className={styles["sign-in-p"]}>Forgot your password?</p>
    </div>
  );
}

export default SignIn;
