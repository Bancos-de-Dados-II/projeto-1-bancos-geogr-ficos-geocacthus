import { useNavigate } from "react-router-dom";
import "./createTouristLocation.css"

function CreateTouristLocation() {
    const navigate = useNavigate();

    const handleSave = () => {
        // Aqui você pode adicionar a lógica para salvar os dados.
        // Após salvar, redirecione para a página Home.
        navigate("/home");
    }
    return (
        <div className="container-form">
            <form className="form-modal">
                <div className="data-event">
                    <h2>Cadastrar Local Turistico</h2>
                </div>
                <div className="element-modal">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome-imput" type="text" name="nome" placeholder="Nome" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao-imput" name="descricao" rows={5} placeholder="Descrição" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="category">Categoria</label>
                    <input id="category-imput" type="text" name="category" placeholder="Categoria" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="imagem">Imagem</label>
                    <input id="imagem-imput" type="text" name="imagem" placeholder="Url da imagem" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="phone">Telefone</label>
                    <input id="phone-imput" type="text" name="phone" placeholder="(00) 00000-0000" required />
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="street">Rua</label>
                        <input id="street-imput" type="text" name="street" placeholder="Rua/Av" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="number">Número</label>
                        <input id="number-imput" type="text" name="number" placeholder="000" required />
                    </div>
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="city">Cidade</label>
                        <input id="city-imput" type="text" name="city" placeholder="Cidade" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="state">Estado</label>
                        <input id="state-imput" type="text" name="state" placeholder="SP" required />
                    </div>
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="country">Pais</label>
                        <input id="country-imput" type="text" name="country" placeholder="Pais" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="postalcode">CEP</label>
                        <input id="postalcode-imput" type="text" name="postalcode" placeholder="00000-000" required />
                    </div>
                </div>

                <div className="element-submit-modal">
                    <input type="button" value="Salvar" onClick={handleSave}/>
                </div>
            </form>
        </div>
    )
}

export default CreateTouristLocation