/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@material-ui/core";
// import { useHistory } from "react-router";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Fade from "react-reveal/Fade";

const Step2 = ({ setStep, setShowCamera }) => {
  return (
    <Fade left>
      <div color="secondary" className=" register_position">
        <Typography>Personal info</Typography>
      </div>
      <div className="register_upper">
        <div className="register_title">Easy Register</div>
        <div className="register_form">
          <TextField
            className="register_form_input"
            placeholder="Enter your full name"
            variant="outlined"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            className="register_form_input"
            placeholder="Enter an e-mail"
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
            className="register_form_input"
            placeholder="Enter a password"
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
      <div className="register_bottom">
        <div className="register_takePhoto">
          <div role="button" onClick={() => setShowCamera(true)}>
            <CameraIcon />
          </div>
          <p>Take a picture of yourself holding a valid document</p>
        </div>
        <Button
          className="register_form_button"
          variant="contained"
          onClick={() => setStep(3)}
        >
          {" "}
          Next step{" "}
        </Button>
      </div>
    </Fade>
  );
};

export default Step2;
