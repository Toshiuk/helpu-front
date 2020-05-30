import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useHistory } from "react-router";
import EmailIcon from "@material-ui/icons/Email";
import "./forgotPassword.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ForgotPassword = () => {
  const [enter, setEnter] = useState(false);
  const history = useHistory();

  const onEnter = () => {
    setEnter(true);
    setTimeout(() => history.push(`/verification`), 2000);
  };

  return (
    <div className="general-out-box">
      {enter ? (
        <div className="forgotPassword_loading">
          <CircularProgress
            color="secondary"
            className="loading"
            disableShrink
          />
        </div>
      ) : (
        <div className="forgotPassword">
          <Fade left>
            <div className="forgotPassword_upper">
              <div className="forgotPassword_title">Forgot Password</div>
              <div className="forgotPassword_form">
                <TextField
                  className="forgotPassword_form_input"
                  placeholder="Enter your e-mail"
                  variant="outlined"
                  color="secondary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </div>
            <div className="forgotPassword_bottom">
              <Button
                className="forgotPassword_form_button"
                variant="contained"
                onClick={onEnter}
              >
                {" "}
                Done{" "}
              </Button>
              <div className="forgotPassword_login">
                <Link to="/login">Back to login</Link>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
