import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createTouristLocation.css"

import touristServices from "../../../../service/touristLocation"

function CreateTouristLocation() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        image: "",
        phone: "",
        address: {
            street: "",
            number: "",
            city: "",
            state: "",
            country: "",
            postalcode: "",
        },
    });

    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name.includes("address.")) {
            const addressKey = name.split(".")[1]; // Obtém a chave específica dentro de "address"
            setFormData((prevState) => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressKey]: value, // Atualiza a chave específica de "address"
                },
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState, 
                [name]: value,  // Atualiza diretamente outros campos fora de "address"
            }));
        }
    }

    const handleSave = async () => {
        const token = "eereeyryeieyeiyryreryereyrue"; //informar um token valido
        if (!token) {
            setError("Token inválido.");
            return;
        }

        try {
            setError(null);
            await touristServices.createTouristLocation(formData, token);
            alert("Local turístico cadastrado com sucesso!");

            navigate("/");
        } catch (error) {
            setError("Ocorreu um erro ao cadastrar o local turístico: ");
            console.log(error);
        }
    }
    return (
        <div className="container-form">
            <form className="form-modal" onSubmit={event => event.preventDefault()}>
                <div className="data-event">
                    <h2>Cadastrar Local Turistico</h2>
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="element-modal">
                    <label htmlFor="name">Nome</label>
                    <input id="name-imput" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description-imput" name="description" value={formData.description} onChange={handleInputChange} rows={5} placeholder="Descrição" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="category">Categoria</label>
                    <input id="category-imput" type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Categoria" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="image">Imagem</label>
                    <input id="image-imput" type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Url da imagem" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="phone">Telefone</label>
                    <input id="phone-imput" type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(00) 00000-0000" required />
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="address.street">Rua</label>
                        <input id="street-imput" type="text" name="address.street" value={formData.address.street} onChange={handleInputChange} placeholder="Rua/Av" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="address.number">Número</label>
                        <input id="number-imput" type="text" name="address.number" value={formData.address.number} onChange={handleInputChange} placeholder="000" required />
                    </div>
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="address.city">Cidade</label>
                        <input id="city-imput" type="text" name="address.city" value={formData.address.city} onChange={handleInputChange} placeholder="Cidade" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="address.state">Estado</label>
                        <input id="state-imput" type="text" name="address.state" value={formData.address.state} onChange={handleInputChange} placeholder="SP" required />
                    </div>
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="address.country">Pais</label>
                        <input id="country-imput" type="text" name="address.country" value={formData.address.country} onChange={handleInputChange} placeholder="Pais" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="address.postalcode">CEP</label>
                        <input id="postalcode-imput" type="text" name="address.postalcode" value={formData.address.postalcode} onChange={handleInputChange} placeholder="00000-000" required />
                    </div>
                </div>

                <div className="element-submit-modal">
                    <input type="button" value="Salvar" onClick={handleSave} />
                </div>
            </form>
        </div>
    )
}

export default CreateTouristLocation