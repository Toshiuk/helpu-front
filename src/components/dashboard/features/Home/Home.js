import React, { useEffect, useState } from "react";
import "./home.css";
import { Map, Marker, TileLayer } from "react-leaflet";
import { Button, Typography, Slider } from "@material-ui/core";
import L from "leaflet";
import { Link } from "react-router-dom";

export const pointerIcon = new L.Icon({
  iconUrl: "../icons/pin.svg",
  iconRetinaUrl: "../icons/pin.svg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55]
});

export const pointerOtherIcon = new L.Icon({
  iconUrl: "../icons/otherpin.svg",
  iconRetinaUrl: "../icons/otherpin.svg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55]
});

const Home = () => {
  const [latLon, setLatLon] = useState([-23.966176, -46.794158]);
  const [zoom, setZoom] = useState(4);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    navigator.geolocation?.getCurrentPosition(position =>
      setLatLon([position.coords.latitude, position.coords.longitude])
    );
  }, []);
  return (
    <div className="home">
      <div className="home_map">
        <Map
          center={latLon}
          zoom={20 - zoom}
          style={{ width: "100%", height: "900px" }}
          scrollWheelZoom={false}
          touchZoom={false}
          dragging={false}
        >
          <Marker position={latLon} icon={pointerIcon} />
          <Marker
            position={[latLon[0] - 0.003, latLon[1]]}
            icon={pointerOtherIcon}
          />
          <Marker
            position={[latLon[0] - 0.003, latLon[1] - 0.002]}
            icon={pointerOtherIcon}
          />
          <Marker
            position={[latLon[0] + 0.003, latLon[1] - 0.005]}
            icon={pointerOtherIcon}
          />
          <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
        <div className="slider">
          <Typography className="slider_label"> How far from you?</Typography>
          <Slider
            value={zoom}
            min={2.5}
            step={0.1}
            max={8}
            getAriaValueText={() => `${zoom} Km`}
            valueLabelFormat={() => `${zoom} Km`}
            onChange={(event, number) => setZoom(number)}
            valueLabelDisplay="auto"
            color="secondary"
          />
        </div>
      </div>
      <div className="home_bottom">
        <Link to="/dashboard/request">
          <Button className="home_button" variant="contained">
            {" "}
            Help me{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
