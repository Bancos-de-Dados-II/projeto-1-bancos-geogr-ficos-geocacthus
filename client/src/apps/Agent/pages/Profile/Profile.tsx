import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import "./profile.css"

import touristServices, { ITouristLocationBase } from "../../../../service/touristLocation"

function Profile() {
    const my_token = "meu_token";
    const [locations, setLocations] = useState<ITouristLocationBase[]>([]);
    const [editingLocation, setEditingLocation] = useState<ITouristLocationBase | null>(null);


    const fetchLocations = async () => {
        const response = await touristServices.fetchTouristLocations();
        if (response) setLocations(response);
    };

    const handleEdit = (location: ITouristLocationBase) => {
        setEditingLocation(location);
    };

    const handleSave = async () => {
        if (editingLocation) {
            await touristServices.updateTouristLocation(editingLocation, my_token);
            setLocations(prev => prev.map(locate => (locate.id === editingLocation.id ? editingLocation : locate)));
            setEditingLocation(null);
        }
    }

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
                <div className="title-section">
                    <h3>My Tourist Location</h3>
                </div>
                <div className="container-locations">
                    <div className="section-locations">
                        {editingLocation ? (
                            <form className="form-modal" onSubmit={event => event.preventDefault()}>
                                <div className="data-event">
                                    <h2>Editar Local Turistico</h2>
                                </div>
                
                                <div className="element-modal">
                                    <label htmlFor="name">Nome</label>
                                    <input id="name-imput" type="text" name="name" value={editingLocation.name || ""} 
                                        onChange={(event) => setEditingLocation((prev) => (prev ? { ...prev, name: event.target.value } : null))} 
                                        placeholder="Nome" required 
                                    />
                                </div>
                                <div className="element-modal">
                                    <label htmlFor="description">Descrição</label>
                                    <textarea id="description-imput" name="description" value={editingLocation.description || ""} 
                                        onChange={(event) => setEditingLocation((prev) => (prev ? { ...prev, description: event.target.value } : null))} 
                                        rows={5} placeholder="Descrição" required 
                                    />
                                </div>
                                <div className="element-modal">
                                    <label htmlFor="category">Categoria</label>
                                    <input id="category-imput" type="text" name="category" value={editingLocation.category || ""} 
                                        onChange={(event) => setEditingLocation((prev) => (prev ? { ...prev, category: event.target.value } : null))} 
                                        placeholder="Categoria" required 
                                    />
                                </div>
                                <div className="element-modal">
                                    <label htmlFor="image">Imagem</label>
                                    <input id="image-imput" type="text" name="image" value={editingLocation.image || ""} 
                                        onChange={(event) => setEditingLocation((prev) => (prev ? { ...prev, image: event.target.value } : null))} 
                                        placeholder="Url da imagem" required 
                                />
                                </div>
                                <div className="element-modal">
                                    <label htmlFor="phone">Telefone</label>
                                    <input id="phone-imput" type="text" name="phone" value={editingLocation.phone || ""} 
                                        onChange={(event) => setEditingLocation((prev) => (prev ? { ...prev, phone: event.target.value } : null))} 
                                        placeholder="(00) 00000-0000" required 
                                    />
                                </div>
                                <div className="element-date-modal">
                                    <div className="element-modal">
                                        <label htmlFor="address.street">Rua</label>
                                        <input id="street-imput" type="text" name="address.street" value={editingLocation.address.street || ""} 
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: { ...prev.address, street: event.target.value },
                                            } : null)} 
                                            placeholder="Rua/Av" required 
                                        />
                                    </div>
                                    <div className="element-modal">
                                        <label htmlFor="address.number">Número</label>
                                        <input id="number-imput" type="text" name="address.number" value={editingLocation.address.number || ""} 
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: {...prev.address, number: event.target.value },
                                            } : null)} 
                                            placeholder="000" required 
                                        />
                                    </div>
                                </div>
                                <div className="element-date-modal">
                                    <div className="element-modal">
                                        <label htmlFor="address.city">Cidade</label>
                                        <input id="city-imput" type="text" name="address.city" value={editingLocation.address.city || ""} 
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: {...prev.address, city: event.target.value },
                                            } : null)} 
                                            placeholder="Cidade" required 
                                        />
                                    </div>
                                    <div className="element-modal">
                                        <label htmlFor="address.state">Estado</label>
                                        <input id="state-imput" type="text" name="address.state" value={editingLocation.address.state || ""}
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: {...prev.address, state: event.target.value },
                                            } : null)} 
                                            placeholder="SP" required 
                                        />
                                    </div>
                                </div>
                                <div className="element-date-modal">
                                    <div className="element-modal">
                                        <label htmlFor="address.country">Pais</label>
                                        <input id="country-imput" type="text" name="address.country" value={editingLocation.address.country || ""} 
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: {...prev.address, country: event.target.value },
                                            } : null)} 
                                            placeholder="Pais" required 
                                        />
                                    </div>
                                    <div className="element-modal">
                                        <label htmlFor="address.postalcode">CEP</label>
                                        <input id="postalcode-imput" type="text" name="address.postalcode" value={editingLocation.address.postalcode || ""} 
                                            onChange={(event) => setEditingLocation((prev) => prev ? {
                                                ...prev, address: {...prev.address, postalcode: event.target.value },
                                            } : null)} 
                                            placeholder="00000-000" required 
                                        />
                                    </div>
                                </div>
                
                                <div className="element-submit-modal">
                                    <input type="button" value="Salvar" onClick={handleSave} />
                                </div>
                            </form>
                        ) : locations && locations.length > 0 ? (
                            locations.map(locate => (
                                <div className="content-card" key={locate.id}>
                                    <h4 className="title-card">{locate.name}</h4>
                                    <h6 className="coodinates">{locate.position.join(", ")}</h6>
                                    <div className="card-actions">
                                        <FontAwesomeIcon icon={faEdit} className="icon edit-icon" title="Edit" onClick={() => handleEdit(locate)} />
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