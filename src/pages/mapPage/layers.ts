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
    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
    "text-size": 14,
  },
  paint: {
    "text-color": "white",
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
      "#81AB2A",
      "houses",
      "#584E35",
      "transport",
      "#37576C",
      "nature",
      "#8C8244",
      "medicine",
      "#DC7759",
      "education",
      "#D4A43A",
      "services",
      "#79B0D7",
      "sport",
      "#4F6225",
      "business",
      "#D9D08F",
      "culture",
      "#805835",
      "heritage",
      "#A53D31",
      /* other */ "#807864",
    ],
    "circle-radius": 10,
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
