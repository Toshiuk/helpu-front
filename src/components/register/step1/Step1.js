import React, { useState } from "react";
import {
  Button,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox
} from "@material-ui/core";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Step1 = ({ setStep }) => {
  return (
    <Fade left>
      <div color="secondary" className="register_position">
        <Typography>Your profile</Typography>
      </div>
      <div className="register_upper">
        <div className="register_title">Easy Register</div>
        <div className="register_form">
          <FormControl component="fieldset">
            <Typography className="register_label">
              Choose the best profile for you
            </Typography>
            <RadioGroup
              className="radio_buttons"
              aria-label="profile"
              name="profile"
            >
              <FormControlLabel
                value="volunteer"
                control={<Radio />}
                label="Volunteer"
                className="radio_label"
              />
              <FormControlLabel
                value="user"
                control={<Radio color="secondary" />}
                label="User"
                className="radio_label"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="register_bottom">
        <div className="login_privacy">
          <div className="login_label">
            <Link to="/privacy">Terms of use and privace policy </Link>
          </div>
          <FormControlLabel
            value="privacy"
            control={<Checkbox color="secondary" />}
            label="I agree the terms"
            className="checkbox_label"
          />
        </div>
        <Button
          className="register_form_button"
          variant="contained"
          onClick={() => setStep(2)}
        >
          {" "}
          Next step{" "}
        </Button>
      </div>
    </Fade>
  );
};

export default Step1;
