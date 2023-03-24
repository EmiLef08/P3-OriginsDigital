import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/SignIn.module.scss";
import { useSignInContext } from "../contexts/SignInContext";
import logoName from "../assets/logo_name.svg";

import Email from "../components/Email";
import Password from "../components/Password";

function SignIn() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { email, setEmail, password, setPassword } = useSignInContext();
  const [response, setResponse] = useState("");

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const data = { email, password };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (email && password)
      try {
        const res = await axios.post(`${BACKEND_URL}/sign-in`, data, response);
        setResponse(res.data);
        navigate("/");
        toast.success("✨ Welcome ✨");
      } catch (error) {
        console.error(error);
        toast.warning("Please signup");
      }
  };

  return (
    <div className={styles["sign-in-page-container"]}>
      <div className={styles["sign-in-page"]}>
        <img className={styles["sign-in-page-logo"]} src={logoName} alt="" />
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
        <Link to="/password" className={styles["sign-in-p"]}>
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
