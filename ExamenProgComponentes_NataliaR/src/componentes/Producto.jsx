import React from 'react';


const Producto = ({ producto, agregarAlCarro }) => {

    return (

        <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>

            <img

                src={producto.imagen}

                alt={producto.nombre}

                style={{ width: '170px', height: '170px', objectFit: 'cover' }}

            />

            <h3>{producto.nombre}</h3>

            <p>Precio: ${producto.precio}</p>

            <button onClick={() => agregarAlCarro(producto)}>Agregar al Carro</button>

        </div>

    );

    
};

export default Producto;