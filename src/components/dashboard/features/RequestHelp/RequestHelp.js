/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import "./requestHelp.css";
import { Button, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const RequestHelp = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="requestHelp">
      <div className="requestHelp_form">
        <Typography className="requestHelp_title">What do you need?</Typography>
        <Typography className="requestHelp_options_title">
          Choose the best option
        </Typography>
        <ul className="requestHelp_options">
          <li
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            market
          </li>
          <li
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            payment
          </li>
          <li
            onClick={() => setActive(3)}
            className={`${active === 3 ? "active" : ""}`}
          >
            shop
          </li>
          <li
            onClick={() => setActive(4)}
            className={`${active === 4 ? "active" : ""}`}
          >
            finances
          </li>
          <li
            onClick={() => setActive(5)}
            className={`${active === 5 ? "active" : ""}`}
          >
            banking
          </li>
          <li
            onClick={() => setActive(6)}
            className={`${active === 6 ? "active" : ""}`}
          >
            medicine
          </li>
        </ul>
        <Typography className="requestHelp_message_label">
          Send a message
        </Typography>
        <TextField className="requestHelp_message_field" multiline />
      </div>
      <div className="requestHelp_bottom">
        <Link to="/dashboard/loading">
          <Button className="requestHelp_button" variant="contained">
            {" "}
            Next step{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RequestHelp;
