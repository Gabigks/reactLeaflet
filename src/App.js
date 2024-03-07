import logo from './logo.svg';
import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';


function App() {
  //markers -52.7071687 -27.1146446
  const markers = [
    {
      geocode: [-27.103126, -52.615814],
      popUp: "Panificadora nosso pão"
    },
    {
      geocode: [-27.100656, -52.616847],
      popUp: "Sicredi"
    },
    {
      geocode: [-27.100362, -52.611964],
      popUp: "Celeiro Center"
    }                                                                                                                                                                                                                                                                                                                                
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38]
  });

  const createCustomClusterIcon = (cluster) => { 
    return new divIcon({
      html: <div class=""></div>
    })
  };

  return (
    <MapContainer center={[-27.103924, -52.613936]} zoom={13}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />

      
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => ( 
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popUp}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
