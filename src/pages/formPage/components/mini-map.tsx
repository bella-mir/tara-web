import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  Layer,
  LngLatBoundsLike,
  Map,
  Marker,
  MarkerDragEvent,
  NavigationControl,
  Source,
  LayerProps,
} from "react-map-gl";
import border from "../../../data/border_outer.json";
import { FeatureCollection } from "geojson";
import maplibregl from "maplibre-gl";
import Pin from "./pin";
import { FormContext } from "../formContext";

export const MiniMap = () => {
  const { setCoordinates, coordinates } = useContext(FormContext);

  useEffect(() => {
    setMarker({ latitude: coordinates.lat, longitude: coordinates.lng });
  }, [coordinates]);

  const [marker, setMarker] = useState({
    latitude: coordinates.lat,
    longitude: coordinates.lng,
  });

  const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
    console.log(event);
  }, []);

  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    setCoordinates({ lng: event.lngLat.lng, lat: event.lngLat.lat });
  }, []);

  const mapRef = useRef(null);
  const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";

  const bounds = [
    { lng: 130, lat: 43 },
    { lng: 133, lat: 45 },
  ];

  const layerFillStyle: LayerProps = {
    id: "dff",
    type: "fill",
    paint: {
      "fill-color": "rgba(255,255,255,0.7)",
      "fill-outline-color": "#8585AD",
    },
  };

  useEffect(() => {
    if (mapRef?.current) {
      //@ts-ignore
      mapRef.current.setLanguage("ru");
    }
  }, []);

  return (
    <>
      <Map
        attributionControl={false}
        mapLib={maplibregl}
        mapStyle={`https://api.maptiler.com/maps/1e6f009f-c894-4317-a466-fe522089bc87/style.json?key=${API_KEY}`}
        initialViewState={{
          latitude: 56.9012,
          longitude: 74.3753,
          zoom: 11,
        }}
        ref={mapRef}
        maxZoom={15}
        minZoom={9}
        // maxBounds={bounds as LngLatBoundsLike}
        style={{ height: "100%", minHeight: "300px" }}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        <Source id="base" type="geojson" data={border as FeatureCollection}>
          <Layer {...layerFillStyle} />
        </Source>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
          anchor="bottom"
        >
          <Pin size={20} />
        </Marker>
      </Map>
    </>
  );
};
