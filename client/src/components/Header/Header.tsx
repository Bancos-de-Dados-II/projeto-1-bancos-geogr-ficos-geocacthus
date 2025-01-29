import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem("authToken"); // Certifique-se de que o nome da chave está correto
        setIsLoggedIn(!!userToken);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove o token
        setIsLoggedIn(false); // Atualiza o estado
        navigate("/"); // Redireciona para a página inicial
    };

    return (
        <header className="main-header">
            <div className="header-logo">
                <Link to="/">
                    <h1>Tourist Map</h1>
                </Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/create/tourist-place">Create Tourist Location</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li onClick={handleLogout} className="logout-link">
                                Logout
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
