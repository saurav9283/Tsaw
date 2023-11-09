import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  useMap,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locationImage from "../location.png";

const center = [22.3511148, 78.6677428];

const stateBoundaries = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "State 1",
        data: "Population: 5 million\nCapital: City 1",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [85.309563, 23.344089],
            [85.417938, 23.344089],
            [85.417938, 23.477309],
            [85.309563, 23.477309],
            [85.309563, 23.344089],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "State 2",
        data: "Population: 3 million\nCapital: City 2",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [20.12319462279316, 73.663330078125],
            [20.12081928987032, 74.0716552734375],
            [20.76199238625927, 74.07440185546875],
            [20.760617100591422, 73.675537109375],
            [20.12319462279316, 73.663330078125],
          ],
        ],
      },
    },
  ],
};

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    }
  }, []);

  const customIcon = new Icon({
    iconUrl: locationImage,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const geoJSONStyle = {
    color: "black",
    weight: 2,
    fillOpacity: 0,
  };

  const handleStateClick = (e) => {
    const state = e.sourceTarget.feature.properties;
    setSelectedState(state);
  };
  const HandelSubmit = () =>
  {

  }

  return (
    <>
      <form onSubmit={HandelSubmit}>
        <label>Enter first city name</label>
        <input type="text" placeholder="First city name" />
        <label>Enter Second city name</label>
        <input type="text" placeholder="Second city name" />
        <button>search</button>
      </form>
      <MapContainer
        center={currentLocation || center}
        zoom={currentLocation ? 13 : 5}
        style={{ width: "100vw", height: "100vh" }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=qYXBEfnoy4nw81LPAzuv"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Stamen Watercolor">
            <TileLayer
              attribution='&copy; <a href="http://maps.stamen.com/copyright">Stamen Design</a> contributors'
              url="https://api.maptiler.com/maps/cadastre-satellite/256/{z}/{x}/{y}.png?key=qYXBEfnoy4nw81LPAzuv"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <GeoJSON
          data={stateBoundaries}
          style={geoJSONStyle}
          eventHandlers={{ click: handleStateClick }}
        />
        {currentLocation && (
          <Marker position={currentLocation} icon={customIcon}>
            <Popup>Current Location</Popup>
          </Marker>
        )}

        {selectedState && (
          <Marker position={currentLocation} icon={customIcon}>
            <Popup>
              {selectedState.name}
              <br />
              {selectedState.data}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
}

export default App;
