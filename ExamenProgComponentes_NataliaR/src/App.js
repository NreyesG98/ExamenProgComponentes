import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Formulario from './componentes/Formulario';

import ListaProductos from './componentes/ListaProductos';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">

                <header className="text-center">

                    <h1>Tienda</h1>

                </header>

                <main>
                    <Routes>


                        <Route path="/" element={<Formulario />} />

                        <Route path="/productos" element={<ListaProductos />} />


                    </Routes>

                </main>

            </div>
            
        </Router>

    );
    
};

export default App;
