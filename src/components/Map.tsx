import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { IStation } from "../types/IStation";

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
        <Marker position={[Number(selected.y), Number(selected.x)]}>
          <Popup>{selected.name}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
