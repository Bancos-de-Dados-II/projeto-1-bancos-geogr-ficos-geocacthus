import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import "./profile.css"

import touristServices, { ITouristLocationBase } from "../../../../service/touristLocation"

function Profile() {
    const [locations, setLocations] = useState<ITouristLocationBase[]>([]);
    const my_token = "meu_token";

    const fetchLocations = async () => {
        const response = await touristServices.fetchTouristLocations();
        if (response) setLocations(response);
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm("Deseja realmente excluir este local turístico?");
        if (confirmDelete) {
            await touristServices.deleteTouristLocation(id, my_token);
            setLocations(locations.filter((location) => location.id !== id));
        }
    }

    useEffect(() => {
        fetchLocations();
    }, []);

    return (
        <div className="container-profile">
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
                        <a href="/agent/home-agent">
                            <h3>Home</h3>
                        </a>
                    </div>
                    <div className="action-element">
                        <a href="/">
                            <h3>Logout</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div id="main-profile" className="content-main">
                {/* Implementar formulário para edição de dados */}
                {/* <ProfileForm /> */}
                <div className="title-section">
                    <h3>My Tourist Location</h3>
                </div>
                <div className="container-locations">
                    <div className="section-locations">
                        {locations && locations.length > 0 ? (
                            locations.map(locate => (
                                <div className="content-card" key={locate.id}>
                                    <h4 className="title-card">{locate.name}</h4>
                                    <h6 className="coodinates">{locate.position.join(", ")}</h6>
                                    <div className="card-actions">
                                        <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                        <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" onClick={() => handleDelete(locate.id)} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Usuario não possui locais turisticos cadastrados</p>
                        )}

                        {/*
                        <div className="content-card">
                            <h4 className="title-card">Cristo Redentor</h4>
                            <h6 className="coodinates">-38.783, -78.374</h6>
                            <div className="card-actions">
                                <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" />
                            </div>
                        </div>
                        <div className="content-card">
                            <h4 className="title-card">card 2</h4>
                            <h6 className="coodinates">-38.783, -78.374</h6>
                            <div className="card-actions">
                                <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" />
                            </div>
                        </div>
                        <div className="content-card">
                            <h4 className="title-card">card 3 widhww dwhd</h4>
                            <h6 className="coodinates">-38.783, -78.374</h6>
                            <div className="card-actions">
                                <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" />
                            </div>
                        </div>
                        <div className="content-card">
                            <h4 className="title-card">card 4 dhwhw dwdhdwidhwhd wdwidhww dwhd</h4>
                            <h6 className="coodinates">-38.783, -78.374</h6>
                            <div className="card-actions">
                                <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" />
                            </div>
                        </div>
                        <div className="content-card">
                            <h4 className="title-card">card 5 dhwhwwidh sdjhddw n w3e3 r rwhd wdwidhww dwhd</h4>
                            <h6 className="coodinates">-38.783, -78.374</h6>
                            <div className="card-actions">
                                <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" />
                                <FontAwesomeIcon icon={faTrash} className="icon delete-icon" title="Delete" />
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Profile