import { useCallback, useEffect, useRef, useState } from "react";
import {
  GeoJSONSource,
  Layer,
  LngLatBoundsLike,
  Map,
  MapRef,
  NavigationControl,
  Popup,
  Source,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import border from "../../data/border_outer.json";
import { FeatureCollection } from "geojson";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchIdeas } from "../../app/actions/ideas";
import { getLoadStatus, getSelectedPoints } from "../../app/selectors/ideas";
import {
  clusterCountLayer,
  clusterLayer,
  layerFillStyle,
  unclusteredPointLayer,
} from "./layers";
import { MapCardSingle } from "./components/map-card-single";
import { MapCardMultiple } from "./components/map-card-multiple";
import { useSelector } from "react-redux";
import { Container, Preloader } from "../../components";

export const MapPage = () => {
  const mapRef = useRef<MapRef>(null);
  const dispatch = useAppDispatch();
  const loadStatus = useSelector(getLoadStatus);
  const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [cursor, setCursor] = useState<string>("auto");

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, []);

  const points = useAppSelector(getSelectedPoints);

  const geojson: any = points && {
    type: "FeatureCollection",
    features: [...points],
  };
  const maxBounds = [
    { lng: 73, lat: 55 },
    { lng: 75, lat: 57 },
  ];

  const onClick = useCallback(
    (event: any) => {
      const feature = event.features[0];
      const clusterId = feature?.properties?.cluster_id;
      if (clusterId) {
        const mapboxSource = mapRef?.current?.getSource(
          "ideas"
        ) as GeoJSONSource;
        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) {
            return;
          }

          mapRef?.current?.easeTo({
            center: feature.geometry.coordinates,
            zoom,
            duration: 500,
          });
        });
      }
      if (!feature.properties.cluster) {
        setPopupInfo(event?.features);
      }
    },
    [popupInfo]
  );

  return (
    <>
      {loadStatus === "pending" ? (
        <Container>
          <Preloader />
        </Container>
      ) : (
        clusterLayer.id &&
        unclusteredPointLayer.id && (
          <Map
            mapLib={maplibregl}
            mapStyle={`https://api.maptiler.com/maps/1e6f009f-c894-4317-a466-fe522089bc87/style.json?key=${API_KEY}`}
            style={{ width: "100vw", height: "100vh" }}
            initialViewState={{
              latitude: 56.9012,
              longitude: 74.3753,
              zoom: 12,
            }}
            ref={mapRef}
            maxZoom={15}
            minZoom={9}
            maxBounds={maxBounds as LngLatBoundsLike}
            interactiveLayerIds={[unclusteredPointLayer.id, clusterLayer.id]}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            cursor={cursor}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            <Source id="base" type="geojson" data={border as FeatureCollection}>
              <Layer {...layerFillStyle} />
            </Source>
            {geojson && (
              <Source
                id="ideas"
                type="geojson"
                data={geojson}
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
              >
                <Layer {...clusterLayer} />
                <Layer {...clusterCountLayer} />
                <Layer {...unclusteredPointLayer} />
              </Source>
            )}
            {popupInfo && (
              <Popup
                longitude={popupInfo[0].properties.lng}
                latitude={popupInfo[0].properties.lat}
                onClose={() => setPopupInfo(null)}
                maxWidth={"300px"}
              >
                {popupInfo.length === 1 ? (
                  <MapCardSingle popupInfo={popupInfo} />
                ) : (
                  <MapCardMultiple popupInfo={popupInfo} />
                )}
              </Popup>
            )}
          </Map>
        )
      )}
    </>
  );
};
