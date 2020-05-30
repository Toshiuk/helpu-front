import React from "react";
import "./dashboard.css";
import { Link, Switch, Route } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";
import Home from "./features/Home/Home";
import RequestHelp from "./features/RequestHelp/RequestHelp";

const Dashboard = () => {
  return (
    <div className="general-out-box">
      <div className="dashboard_header">
        <Typography>Home</Typography>
        <div className="dashboard_icon">
          <MenuIcon />
        </div>
      </div>
      <div className="dashboard">
        <Switch>
          <Route exact path="/dashboard/request" component={RequestHelp} />
          <Home />
        </Switch>
      </div>
      <div className="dashboard_footer">
        <div className="dashboard_icon">
          <Link to="/dashboard/profile">
            <PersonOutlineIcon />
          </Link>
        </div>
        <div className="dashboard_icon">
          <Link to="/dashboard/profile">
            <ChatBubbleOutlineIcon />
          </Link>
        </div>
        <div className="dashboard_icon">
          <Link to="/dashboard/profile">
            <HelpOutlineIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
