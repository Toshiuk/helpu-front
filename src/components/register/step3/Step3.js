import React, { useEffect, useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@material-ui/core";
// import { useHistory } from "react-router";
import LocationIcon from "@material-ui/icons/LocationOn";
import Fade from "react-reveal/Fade";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const Step3 = ({ onEnter }) => {
  const [latLon, setLatLon] = useState([-23.966176, -46.794158]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    navigator.geolocation?.getCurrentPosition(position =>
      setLatLon([position.coords.latitude, position.coords.longitude])
    );
  }, []);

  return (
    <Fade left>
      <div color="secondary" className="register_position">
        <Typography>Location</Typography>
      </div>
      <div className="register_upper">
        <div className="register_title">Easy Register</div>
        <div className="register_map">
          <Map
            center={latLon}
            zoom={14}
            style={{ width: "100%", height: "900px" }}
          >
            <Marker draggable onDragend={() => {}} position={latLon} />
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
      </div>
      <div className="register_bottom">
        <Button
          className="register_form_button"
          variant="contained"
          onClick={onEnter}
        >
          {" "}
          Continue{" "}
        </Button>
      </div>
    </Fade>
  );
};

export default Step3;
