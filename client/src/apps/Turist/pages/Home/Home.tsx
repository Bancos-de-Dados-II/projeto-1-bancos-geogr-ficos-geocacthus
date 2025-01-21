import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
// import { LatLngTuple } from "leaflet"
import "./home.css"

import touristLocations from "../../../../data/touristLocation"

function Home() {
    return (
        <div className="home-turist-container">
            <div className="content-header">
                {/* campos de titulo, pesquisa e filtors de regioẽs */}
                <div id="title" className="box-camp">
                    <h2>Home Turist</h2>
                </div>
                <div id="search" className="box-camp">
                    <h2>Search</h2>
                </div>
                <div id="filter" className="box-camp">
                    <h2>Filter</h2>
                </div>
            </div>
            <div className="content-main">
                <div className="box-map">
                    <MapContainer
                        center={[-7.135, -34.876]} // Posição inicial do mapa
                        zoom={13}
                        style={{ height: "815px", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {touristLocations.map((location) => (
                            <Marker key={location.id} position={location.position}>
                                <Popup>
                                    <strong>{location.name}</strong>
                                    <br />
                                    {location.description}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div className="box-info">
                    <div className="camp-info">
                        <h3>info</h3>
                    </div>
                    <div className="camp-reviews">
                        <h3>reviews</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home