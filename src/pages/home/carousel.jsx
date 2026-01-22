// components/CarruselAliados.jsx
import React from 'react';

const aliados = [
  '/images/vanti.png',
  '/images/exito-77.jpg',
  '/images/credicol.png',
  '/images/progreser..png',
];

const CarruselAliados = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center text-center">
        {aliados.map((img, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <img
              src={img}
              alt={`Aliado ${index + 1}`}
              className="img-fluid carrusel__aliados__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselAliados;
