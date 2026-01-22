import React from "react";
import "./tituloSeccionBarraPorcentaje.css"

const TituloSeccionBarraPorcentaje = ({Titulo, Subtitulo , ColorSubtiutlo, ColorCuerpo}) =>{
    return(
        <div className="row" style={{paddingTop:'100px'}}>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="titulo__TitluloSeccionBarraPorcentaje" style={{ color: 'white'}}>{Titulo}</label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="subtitulo__TitluloSeccionBarraPorcentaje" style={{ color: ColorSubtiutlo }}>{Subtitulo}</label>
            </div>
        </div>
    )
}

export default TituloSeccionBarraPorcentaje;