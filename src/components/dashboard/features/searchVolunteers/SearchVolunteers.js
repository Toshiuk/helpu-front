import React from "react";
import "./searchVolunteers.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Typography } from "@material-ui/core";
import Searching from "../../../../assets/images/Searching";

const SearchVolunteers = () => {
  return (
    <div className="general-out-box green">
      <div className="searchVolunteers">
        <Fade top>
          <Typography className="searchVolunteers_label">
            {" "}
            We’re looking for volunteers who are close{" "}
          </Typography>
        </Fade>
        <Bounce bottom>
          <Searching />
        </Bounce>
      </div>
    </div>
  );
};

export default SearchVolunteers;
