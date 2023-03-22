import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";
import { Eye, EyeOff } from "react-ionicons";
function ConfirmPassword({ setConfirmPassword, confirmPassword, password }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordsMatch = password === confirmPassword;
  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <div>
      <div className={styles["form-group"]}>
        <label htmlFor="password"> </label>
        <div className={styles["password-container"]}>
          <input
            className={styles["sign-up-input"]}
            id="confirmPassword"
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            autoComplete="new-password"
            required
          />
          <button
            type="button"
            className={styles["password-button"]}
            onClick={handleTogglePasswordVisibility}
          >
            {passwordVisible ? (
              <Eye
                onClick={handleTogglePasswordVisibility}
                className={styles["visibility-icon"]}
                color="#ffffff"
                height="22px"
                width="22px"
              />
            ) : (
              <EyeOff
                onClick={handleTogglePasswordVisibility}
                className={styles["visibility-icon"]}
                color="#ffffff"
                height="22px"
                width="22px"
              />
            )}
          </button>
        </div>
      </div>
      {!passwordsMatch && (
        <span className={styles["sign-span"]}>Passwords do not match</span>
      )}
    </div>
  );
}

ConfirmPassword.propTypes = {
  setConfirmPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default ConfirmPassword;
