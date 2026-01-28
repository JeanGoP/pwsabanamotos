import React, { useEffect, useState, useContext } from "react";
import "./posventa.css"
import { LanguageContext } from '../../context/context';

export function Posventa() {
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);


    const descripcionPosventa = 'Tenemos múltiples centros de servicio técnico autorizado a lo amplio del territorio nacional, también contamos con miles de repuestos originales a tu disposición y cientos de accesorios para disfrutar al máximo cada experiencia con tu moto.Te invitamos a que agendes tu cita de revisión especializada llenando nuestro formulario, o conoce donde se ubican nuestros Talleres Autorizados y sus números de contacto para mayor información.'
    return (
        <div className="fondoImmagen">
            <div className="container contenido__posventa">
                <div className="row ">
                    <div className="col-md-12 coll-sm-12 container__row__Posventa"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaPosventa}')`
                        }}
                    >
                        <label className="label__row__Posventa">  POSTVENTA </label>
                    </div>
                </div>

                <div className="row row__Posventa__">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="title-line">
                            <span className="line"></span>
                            <h2>SabanaMotos</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <p className="titulo__Posventa " style={{ color: '#000' }}>TALLERES AUTORIZADOS, REPUESTOS Y ACCESORIOS.</p><br></br>
                        <p className="descripcion__Posventa" style={{ color: '#000' }}>{descripcionPosventa
                            ?.split(".")
                            .filter(x => x.trim() !== "")
                            .map((texto, index) => (
                                <p
                                    key={index}
                                    className="descripcion__Posventa"
                                    style={{ color: '#000' }}
                                >
                                    {texto}.
                                </p>
                            ))
                        }</p>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="card card__Posventa">
                            <div className="card-body contenido__card__Posventa">
                                <p className="titulo__card__Posventa fs-1 fs-md-2 fs-sm-4">¿NECESITAS UN REPUESTO?</p>
                                <p className="subtitulo__card__Posventa">Llena el formulario y nos pondremos en contacto</p><br></br>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Nombre" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Celular" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Motocicleta" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Modelo" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Repuesto" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Ciudad" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Departamento" aria-label=""></input>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Al enviar este formulario autorizo el tratamiento de datos personales en los términos descritos.
                                    </label>
                                </div>

                            </div>
                            <div className="contenido__btn__card__Posventa">
                                <button type="button" className="btn btn-primary btn__card__Posventa">Solicitar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

