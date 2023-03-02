import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignIn.module.scss";
import { useSignInContext } from "../contexts/SignInContext";

import Email from "../components/Email";
import Password from "../components/Password";

function SignIn() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { email, setEmail, password, setPassword } = useSignInContext();
  const [setResponse] = useState({});

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const data = JSON.stringify({ email, setEmail, password, setPassword });

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/sign-in`, data);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      toast.warning("Please signup");
    }
  };

  return (
    <div className={styles["sign-in-page"]}>
      <h1 className={styles["sign-in-title"]}>SIGN IN</h1>
      <form className={styles["sign-in-forms"]} onSubmit={handleSignIn}>
        <Email email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
      </form>
      <div href="/" className={styles["button-sign-in"]}>
        <label htmlFor="my-button"> </label>
        <button
          className={styles["sign-in-btn1"]}
          type="button"
          onClick={handleSignIn}
        >
          SIGN IN
        </button>
        <label htmlFor="button"> </label>
        <button
          className={styles["sign-in-btn2"]}
          type="button"
          onClick={handleSignUp}
        >
          SIGN UP
        </button>
      </div>
      <p className={styles["sign-in-p"]}>Forgot your password?</p>
    </div>
  );
}

export default SignIn;
