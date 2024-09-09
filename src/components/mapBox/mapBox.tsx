import { useRef } from "react";
import {
  Layer,
  LngLatBoundsLike,
  Map,
  MapRef,
  NavigationControl,
  Source,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import border from "./data/border_outer.json";
import { FeatureCollection } from "geojson";
import { layerFillStyle } from "./layers";

export const MapBox = () => {
  const mapRef = useRef<MapRef>(null);
  const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";

  const maxBounds = [
    { lng: 80, lat: 56 },
    { lng: 73, lat: 48 },
  ];

  return (
    <>
      <Map
        //@ts-ignore
        mapLib={maplibregl}
        mapStyle={`https://api.maptiler.com/maps/1e6f009f-c894-4317-a466-fe522089bc87/style.json?key=${API_KEY}`}
        style={{ width: "100vw", height: "100vh" }}
        initialViewState={{
          latitude: 56.9012,
          longitude: 74.3753,
          zoom: 11,
        }}
        ref={mapRef}
        maxZoom={15}
        minZoom={9}
        maxBounds={maxBounds as LngLatBoundsLike}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        <Source id="base" type="geojson" data={border as FeatureCollection}>
          <Layer {...layerFillStyle} />
        </Source>
      </Map>
    </>
  );
};
