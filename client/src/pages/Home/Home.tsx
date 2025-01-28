import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./home.css"

import touristServices, { ITouristLocationBase } from "../../service/touristLocation"

function Home() {
    
    const [touristLocations, setTouristLocations] = useState<ITouristLocationBase[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<ITouristLocationBase | null>(null);

    useEffect(() => {
        const fetchLocations = async () => {
            const locations = await touristServices.fetchTouristLocations();
            if (locations) {
                setTouristLocations(locations);
            }
        };

        fetchLocations();
    }, []);
    return (
        <div className="home-container">
            <div className="content-header">
                {/* campos de titulo, pesquisa e filtors de regioẽs */}
                <div id="title" className="box-camp">
                    <h3>Home Agent</h3>
                </div>
                <div id="search" className="box-camp">
                    <h3>Search</h3>
                </div>
                <div id="actions" className="box-camp">
                    <div className="action-element">
                        <a href="/agent/create/tourist-place">
                            <h3>Create Tourist Location</h3>
                        </a>
                    </div>
                    <div className="action-element">
                        <a href="/agent/profile">
                            <h3>Profile</h3>
                        </a>
                    </div>
                    <div className="action-element">
                        <a href="/">
                            <h3>Logout</h3>
                        </a>
                    </div>
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
                                <img src={selectedLocation!.image} alt="" />
                                <h3>{selectedLocation.name}</h3>     
                                <h5>{selectedLocation.position}</h5> 
                                <p>Telefone: {selectedLocation!.phone}</p>
                                <p>{selectedLocation.description}</p> 
                                <p></p>
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