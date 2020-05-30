/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "./tutorial.css";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import TutorialCard1 from "../../assets/images/TutorialCard1";
import TutorialCard2 from "../../assets/images/TutorialCard2";
import TutorialCard3 from "../../assets/images/TutorialCard3";

const Tutorial = () => {
  const [indexCard, setIndexCard] = useState(0);
  const nextCard = () => setIndexCard(indexCard + 1);
  return (
    <div className="general-out-box">
      <Fade top>
        <div className="tutorial">
          <Carousel
            swipeable
            emulateTouch
            showThumbs={false}
            showArrows={false}
            selectedItem={indexCard}
            onChange={setIndexCard}
          >
            <div className="tutorialCard" onClick={nextCard}>
              <Typography className="tutorialCard_label">
                {" "}
                The easiest and fastest way to find help{" "}
              </Typography>
              <TutorialCard1 />
            </div>
            <div className="tutorialCard" onClick={nextCard}>
              <Typography className="tutorialCard_label">
                {" "}
                Help others who are in need{" "}
              </Typography>
              <TutorialCard2 />
            </div>
            <Link to="/dashboard">
              <div className="tutorialCard">
                <Typography className="tutorialCard_label">
                  {" "}
                  Can you help us find you?{" "}
                </Typography>
                <TutorialCard3 />
              </div>
            </Link>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};

export default Tutorial;
