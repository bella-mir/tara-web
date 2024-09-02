import { useRef } from "react";
import { LngLatBoundsLike, Map, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import Pin from "../../../formPage/components/pin";

export const MiniMapModal = ({
  location,
}: {
  location: { lat: number; lng: number };
}) => {
  const mapRef = useRef(null);
  const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";

  const bounds = [
    { lng: 130, lat: 43 },
    { lng: 133, lat: 45 },
  ];

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
        {location && (
          <Marker
            longitude={location.lng}
            latitude={location.lat}
            anchor="bottom"
          >
            <Pin size={20} />
          </Marker>
        )}
      </Map>
    </>
  );
};
