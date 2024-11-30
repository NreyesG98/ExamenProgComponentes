import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const Formulario = () => {

    const [error, setError] = useState('');

    const [modoRegistro, setModoRegistro] = useState(false);

    const navigate = useNavigate();

    const [datos, setDatos] = useState({ email: '', password: '' });

    const auth = getAuth();

    const manejarCambio = (e) => {

        setDatos({ ...datos, [e.target.name]: e.target.value });

    };

    const manejarEnvio = async (e) => {

        e.preventDefault();
        
        setError(''); 

        try {
            await setPersistence(auth, browserLocalPersistence);

            if (modoRegistro) {

                await createUserWithEmailAndPassword(auth, datos.email, datos.password);

                console.log("Usuario registrado de manera exitosa ");

            } else {

                await signInWithEmailAndPassword(auth, datos.email, datos.password);

                console.log("inicio de sesion correctamente");

            }

            navigate('/productos');

        } catch (error) {

            console.error("Error", error.message);

            setError(error.message);

        }
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow-lg">

                        <div className="card-body">

                            <h2 className="text-center mb-4">{modoRegistro ? "Registrar Usuario" : "iniciar sesion"}</h2>

                            {error && <p className="text-danger text-center">{error}</p>}

                            <form onSubmit={manejarEnvio}>

                                <div className="mb-3">

                                    <label className="form-label">Correo : </label>
                                    <input
                                        type="email"

                                        className="form-control"

                                        value={datos.email}

                                        onChange={manejarCambio}

                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Clave : </label>
                                    <input

                                        type="password"
                                       
                                        className="form-control"

                                        value={datos.password}

                                        onChange={manejarCambio}

                                        required
                                    />
                                </div>
                                <div className="d-grid">

                                    <button type="submit" className="btn btn-primary">

                                        {modoRegistro ? "Registrar" : "iniciar sesion"}

                                    </button>

                                </div>
                            </form>
                            <div className="text-center mt-3">

                                <button
                                    onClick={() => setModoRegistro(!modoRegistro)}

                                    className="btn btn-link"
                                >
                                    {modoRegistro ? "inicia Sesion" : "Registrarse"}

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Formulario;
