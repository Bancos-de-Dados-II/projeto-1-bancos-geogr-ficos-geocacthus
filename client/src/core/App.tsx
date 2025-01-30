import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../routes/router'
import { AuthProvider } from '../context/AuthContext'

function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
