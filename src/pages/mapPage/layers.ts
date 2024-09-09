import type { LayerProps } from "react-map-gl";

export const clusterLayer: LayerProps = {
  id: "clusters",
  type: "circle",
  source: "ideas",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": "#D6603C",
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
};

export const clusterCountLayer: LayerProps = {
  id: "cluster-count",
  type: "symbol",
  source: "ideas",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
};

export const unclusteredPointLayer: LayerProps = {
  id: "unclustered-point",
  type: "circle",
  source: "ideas",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": [
      "match",
      ["get", "category"],
      "beutification",
      "#F6863C",
      "buildings",
      "#000000",
      "heritage",
      "#89398E",
      "sport",
      "#90CAE9",
      "services",
      "#CD5E63",
      "transport",
      "#56547D",
      "nature",
      "#458A42",
      "medicine",
      "#4A9BD5",
      /* other */ "#BEB15A",
    ],
    "circle-radius": 7,
    "circle-stroke-width": 1,
    "circle-stroke-color": "white",
  },
};

export const layerFillStyle: LayerProps = {
  id: "dff",
  type: "fill",
  paint: {
    "fill-color": "rgba(255,255,255,0.6)",
    "fill-outline-color": "#8585AD",
  },
};
