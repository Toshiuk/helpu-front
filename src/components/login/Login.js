import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useHistory } from "react-router";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./login.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Login = () => {
  const [enter, setEnter] = useState(false);
  const history = useHistory();

  const onEnter = () => {
    setEnter(true);
    setTimeout(() => history.push(`/tutorial`), 2000);
  };

  return (
    <div className="general-out-box">
      {enter ? (
        <div className="login_loading">
          <CircularProgress
            color="secondary"
            className="loading"
            disableShrink
          />
        </div>
      ) : (
        <div className="login">
          <Fade>
            <div className="login_upper">
              <div className="login_title">Login</div>
              <div className="login_form">
                <TextField
                  className="login_form_input"
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
                <TextField
                  className="login_form_input"
                  placeholder="Enter your password"
                  variant="outlined"
                  color="secondary"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </div>
            <div className="login_bottom">
              <div className="login_register">
                <Link to="/register">I need to register</Link>
              </div>
              <Button
                className="login_form_button"
                variant="contained"
                onClick={onEnter}
              >
                {" "}
                Enter{" "}
              </Button>
              <div className="login_forgotPassword">
                <Link to="/password">Forgot password?</Link>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Login;
