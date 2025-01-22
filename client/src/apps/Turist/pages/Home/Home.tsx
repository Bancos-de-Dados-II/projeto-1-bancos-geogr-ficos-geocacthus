import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { LatLngTuple } from "leaflet"
import "./home.css"

import touristServices, { ITouristLocationBase } from "../../../../service/touristLocation"
import touristLocationsTest from "../../../../data/touristLocation"

interface ITouristLocation {
    id: number;
    name: string;
    description: string;
    position: LatLngTuple;
}

function Home() {
    {/*
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
    */}

    const [selectedLocationTest, setSelectedLocationTest] = useState<ITouristLocation | null>(null); // para teste, retirar depois

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
                        {touristLocationsTest.map((location) => ( // substituir o touristLocationsTest por touristLocations
                            <Marker 
                                key={location.id} 
                                position={location.position}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedLocationTest(location); // substituir o setSelectedLocationsTest por setSelectedLocation
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
                        {selectedLocationTest ? ( // substituir o selectedLocationsTest por selectedLocation e descomentar campos
                            <div>
                                {/* <img src={selectedLocation!.image} alt="" /> */}
                                <h3>{selectedLocationTest.name}</h3>      {/* substituir o selectedLocationsTest por selectedLocation */}
                                <h5>{selectedLocationTest.position}</h5>  {/* substituir o selectedLocationsTest por selectedLocation */}
                                {/* <p>Endereço: N° {selectedLocation!.address.number}, {selectedLocation!.address.street}, {selectedLocation!.address.city} - {selectedLocation!.address.state}</p> */}
                                {/* <p>Telefone: {selectedLocation!.phone}</p> */}
                                <p>{selectedLocationTest.description}</p> {/* substituir o selectedLocationsTest por selectedLocation */}
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