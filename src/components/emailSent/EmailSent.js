import React from "react";
import "./emailSent.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Letter from "../../assets/images/Letter";

const EmailSent = () => {
  return (
    <div className="general-out-box green">
      <div className="emailSent">
        <div className="emailSent_redirect_login">
          <Link to="/login">
            <CloseIcon />
          </Link>
        </div>
        <Fade top>
          <Typography className="emailSent_label">
            {" "}
            We’ve sent you an email. Click in the link to verify{" "}
          </Typography>
        </Fade>
        <Bounce bottom>
          <Letter />
        </Bounce>
      </div>
    </div>
  );
};

export default EmailSent;
