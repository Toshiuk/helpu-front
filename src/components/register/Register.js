import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import "./register.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import "react-html5-camera-photo/build/css/index.css";

const Register = () => {
  const [enter, setEnter] = useState(false);
  const [step, setStep] = useState(1);
  const [showCamera, setShowCamera] = useState(false);

  const history = useHistory();

  const onEnter = () => {
    setEnter(true);
    setTimeout(() => history.push(`/verification`), 2000);
  };

  return (
    <div className="general-out-box">
      {enter ? (
        <div className="register_loading">
          <CircularProgress
            color="secondary"
            className="loading"
            disableShrink
          />
        </div>
      ) : (
        <div className="register">
          <div className="redirect_login">
            <Link to="/login">
              <CloseIcon />
            </Link>
          </div>

          <>
            {step === 1 && <Step1 setStep={setStep} />}
            {step === 2 && (
              <Step2 setStep={setStep} setShowCamera={setShowCamera} />
            )}
            {step === 3 && <Step3 onEnter={onEnter} />}
          </>
        </div>
      )}
      {showCamera && (
        <div className="overlay">
          <Camera onTakePhoto={() => setShowCamera(false)} />
        </div>
      )}
    </div>
  );
};

export default Register;
