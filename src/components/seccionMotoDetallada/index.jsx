import React from "react";
import { mix } from 'polished';
import './seccionMotoDetallada.css'
function isValidHex(color) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

const SeccionMotoDetallada = ({ImagenMoto, Titulo, Subtitulo, Descripcion_1, Descripcion_2, Motor,Cilindraje, Transmision, ColorTitulo, ColorCuerpo}) =>{
  const gray = '#808080';
  let newColor = ColorCuerpo;
  if (ColorCuerpo && isValidHex(ColorCuerpo)) {
    newColor = mix(0.5, gray, ColorCuerpo);
  } 
    return (
    <div className="row contenido__seccionMotoDetallada h-100">
      <div className="contenidoTituloMoto"><p className="pContenidoTituloM">DOMINAR 400</p></div>
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 h-100">
      <div className="card__SeccionMotoDetallada">
        <img src={ImagenMoto} className="card-img-top imagen__seccionMotoDetallada" alt="..." />
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="row footer__descripcion__seccionMotoDetallada div__detalle__border h-100">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" >Cilindraje</label>
            <p className="footer__p__seccionMotoDetallada" >{Cilindraje}</p>
            <div className="footer__div__seccionDetallada"></div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" >Potencia máxima</label>
            <p className="footer__p__seccionMotoDetallada" >{Motor}</p>
            <div className="footer__div__seccionDetallada"></div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" >Peso</label>
            <p className="footer__p__seccionMotoDetallada" >{Transmision}</p>
            <div className="footer__div__seccionDetallada-"></div>
        </div>
      </div>

    </div>
  </div>

    )

}

export default SeccionMotoDetallada;