import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { LatLngTuple } from "leaflet"
import "./home.css"

import touristLocations from "../../../../data/touristLocation"

interface ITouristLocation {
    id: number;
    name: string;
    description: string;
    position: LatLngTuple;
}

function Home() {
    const [selectedLocation, setSelectedLocation] = useState<ITouristLocation | null>(null);

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
                            <Marker 
                                key={location.id} 
                                position={location.position}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedLocation(location);
                                    }
                                }}
                            >
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
                        {selectedLocation ? (
                            <div>
                                <h3>{selectedLocation.name}</h3>
                                <h5>{selectedLocation.position}</h5>
                                <p>{selectedLocation.description}</p>
                            </div>
                        ) : (
                            <p>Selecionar um ponto para ver detalhes.</p>
                        )}
                    </div>
                    <div className="camp-reviews">
                        {/* Listar reviews aqui */}
                        <p>Campo de reviews em breve</p>
                        {/* Implementar componente de reviews */}
                        {/* <ReviewList reviews={reviews} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home