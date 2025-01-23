import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import "./profile.css"

import touristServices, { ITouristLocationBase } from "../../../../service/touristLocation"
import Header from "../../../Turist/components/Header/Header"

function Profile() {
    const [locations, setLocations] = useState<ITouristLocationBase[]>([]);
    const my_token = localStorage.getItem("authToken");

    const fetchLocations = async () => {
        try {
            const response = await touristServices.fetchTouristLocationsByUser(my_token);
            if (response) {
                setLocations(response);
            }
        } catch (error) {
            console.error("Erro ao buscar locais turísticos:", error);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm("Deseja realmente excluir este local turístico?");
        if (confirmDelete) {
            try {
                await touristServices.deleteTouristLocation(id);
                setLocations(locations.filter((location) => location.id !== id));
            } catch (error) {
                console.error("Erro ao excluir local turístico:", error);
            }
        }
    };


    useEffect(() => {
        fetchLocations();
    }, []);

    return (
        <div className="container-profile">
            <Header />
            <div id="main-profile" className="content-main">
                <div className="title-section">
                    <h3>My Tourist Locations</h3>
                </div>
                <div className="container-locations">
                    {locations.length > 0 ? (
                        <div className="section-locations">
                            {locations.map((location) => (
                                <div className="content-card" key={location.id}>
                                    <h4 className="title-card">{location.name}</h4>
                                    <h6 className="coordinates">
                                        {location.location.coordinates[1]}, {location.location.coordinates[0]}
                                    </h6>
                                    <p className="description">{location.description}</p>
                                    <div className="card-actions">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="icon edit-icon"
                                            title="Edit"
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="icon delete-icon"
                                            title="Delete"
                                            onClick={() => handleDelete(location.id)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-locations">Nenhum local turístico encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
    }

export default Profile