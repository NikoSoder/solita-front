import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { IStation } from "../types/IStation";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

type ChildPropsMap = {
  selected: IStation;
};

function ChangeView({ selected }: ChildPropsMap) {
  const map = useMap();
  map.setView([Number(selected.y), Number(selected.x)], map.getZoom());
  return null;
}

const Map = ({ selected }: ChildPropsMap) => {
  return (
    <>
      <MapContainer
        center={[Number(selected.y), Number(selected.x)]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "327px", width: "auto" }}
      >
        <ChangeView selected={selected} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[Number(selected.y), Number(selected.x)]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 18],
            })
          }
        >
          <Popup>{selected.name}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
