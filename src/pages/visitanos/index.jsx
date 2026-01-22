import React, { useEffect, useState, useContext } from "react";
import "./visitanos.css"
import CardPuntosVentas from "../../components/cardPuntosVentas";
import {jsonPuntosVentas} from "../../constants/constants"
import { LanguageContext } from '../../context/context';
export function Visitanos(){
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [],getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
      if (configuracionData) {
        getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        
      }
    }, []);

    let sucursales = [];

    try {
        if (configuracionData?.sucursal) {
            sucursales = JSON.parse(configuracionData.sucursal);
        }
    } catch (error) {
        console.error("Error al parsear sucursal:", error);
        sucursales = [];
    }
 // sucursales= jsonPuntosVentas
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
    return(
        <div className="fondoImmagen">
            
            {/* <div className="container">
                    <div className="row row__Visitanos">
                        <div className="col-md-12 coll-sm-12 container__row__Visitanos"
                         style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaVisitanos}')`
                            }}
                        >
                            <label className="label__row__Visitanos"> ENCUENTRA TU PUNTO DE VENTA </label>
                        </div>
                    </div>
            </div> */}
           <div className="container">
                        <div className="row row__Promociones">
                            <div className="col-md-12 coll-sm-12 container__row__Promociones"
                              style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaVisitanos}')`
                                }}
                            >
                                <label className="label__row__Promociones">ENCUENTRA TU PUNTO DE VENTA</label>
                            </div>
                        </div>

                </div>

            <div className="row row__Visitanos__ubicacion">
              <div className="row" style={{justifyItems:'center', alignItems:'center', textAlign:'center'}}>
                  <p className="titulovisitanos">EXPLORA TODAS NUESTRAS SEDES</p>               

              </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ratio ratio-4x3 custom-map">
                        <iframe id="iframeMaps" 
                                src='https://www.google.com/maps/d/embed?mid=1j3L20Y_CkQpBTAFxyb3NCDjbZwLLIqI&amp;ehbc=2E312F'
                              //  src={configuracionData?.rutaGoogleMaps}  
                                allowFullScreen>

                        </iframe>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
                  <div className="container">
                    {sucursales.map((item, indice)=>(
                            <CardPuntosVentas 
                                key={indice}
                                Nombre={item.nombre}
                                Direccion={item.direccion}
                                Telefono={item.telefono}
                               // RutaGoogleMaps = {item.rutaSucursalGoogle}
                               RutaGoogleMaps = {item.ruta}
                                // ColorCard={configuracionData?.colorCard}
                                // ColorLetras={configuracionData?.colorLetras}
                                ColorCard='#ffff'
                                ColorLetras='#000000'
                            />
                    ))}
                  </div>  
                </div>
            </div>
        </div>
    )
} 