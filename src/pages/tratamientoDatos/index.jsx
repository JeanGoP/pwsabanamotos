import React, { useContext } from "react";
import "./tratamientoDatos.css"
import { LanguageContext } from '../../context/context';
import { useEffect } from "react";

export function TratamientoDatos() {
    const { configuracionData = {} } = useContext(LanguageContext);
    const { empresa } = useContext(LanguageContext);
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div style={{ paddingTop: '150px' }}>
            <div className="container">
                <div className="row row__Posventa">
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <img src={empresa.url_logo} alt="" height="100" className="me-5" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <p className="p_tituloTratamiento" >GESTIÓN DE RIESGO</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >MANUAL DE TRATAMIENTO DE DATOS</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <p className="p_tituloTratamiento" >Código:</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >Versión: V01</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >Vigencia: 2023-08-31</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 div__row__TratamientoDato">
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES SABANAMOTOS S.A.S</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >CAPÍTULO I</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >1. ASPECTOS GENERALES</p>
                    <p className="p_textoTratamiento"  >
                        Por medio del presente manual, <b>SABANAMOTOS S.A.S</b> da cumplimiento a lo establecido en el literal k del artículo 17 de la Ley 1581 de 2012, que regula los deberes a los que están sometidos los responsables del tratamiento de los datos personales. Este manual establece políticas y procedimientos para garantizar el adecuado cumplimiento de dicha ley, especialmente para la atención de consultas y reclamos.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >2. MARCO JURÍDICO</p>
                    <p className="p_textoTratamiento"  >
                    Este documento ha sido redactado en respeto a lo establecido en la Ley 1581 de 2012, el Decreto 1377 de 2013 y la Sentencia C-748 de 2011. Su interpretación se basa en estos elementos normativos y en criterios de autonomía y buena fe.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >3. APLICACIÓN POLÍTICA PROTECCIÓN DE DATOS PERSONALES</p>
                    <p className="p_textoTratamiento"  >
                    <b>SABANAMOTOS S.A.S</b>, en calidad de responsable de la información recolectada de sus clientes, empleados, proveedores, contratistas y demás, cumple con la Ley 1581 de 2012, Decreto 1377 de 2013 y la Política de Protección de Datos Personales de la empresa, la cual puede consultarse en la dirección física de la compañía ubicada en [inserte dirección].
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >4. OBJETIVO</p>
                    <p className="p_textoTratamiento"  >
                    Este documento tiene como objetivo establecer las políticas de <b>SABANAMOTOS S.A.S</b> para el tratamiento de los datos personales de todos sus clientes, empleados, candidatos a empleados y proveedores, conforme a la ley y la Constitución Nacional.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >5. IDENTIFICACIÓN DEL RESPONSABLE DE TRATAMIENTO DE DATOS PERSONALES</p>
                    <p className="p_textoTratamiento"  >Dirección:Cra. 22 #8 -32, Centro, San José Del Guaviare, Guaviare</p>
                    <p className="p_textoTratamiento"  >Teléfono: 57 317 264778</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >6. DEFINICIONES</p>
                 
                        <ul>
                            <li>
                                <p className="p_textoTratamiento">
                                     <b>Autorización:</b> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b> Base de Datos:</b> Conjunto organizado de datos personales que sea objeto de Tratamiento.
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b> Dato Personal:</b> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b>Encargado del Tratamiento:</b> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del responsable del Tratamiento. 
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b>Responsable del Tratamiento:</b> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos.
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b>Titular:</b> Persona natural cuyos datos personales sean objeto de Tratamiento.
                                </p>
                            </li>
                            <li>
                                <p className="p_textoTratamiento">
                                <b> Tratamiento:</b> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.
                                </p>
                            </li>
                        </ul>
                  
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >7. VIGENCIA</p>
                    <p className="p_textoTratamiento"  >
                         La presente Política para el Tratamiento de Datos Personales rige a partir del [fecha de inicio]. Las bases de datos en las que se registran los datos personales tendrán una vigencia igual al tiempo en que se mantenga y utilice la información para las finalidades descritas en esta política. Una vez se cumplan esas finalidades y siempre que no exista un deber legal o contractual de conservar la información, se suspenderá el uso de los datos.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >CAPÍTULO II</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >1. DEBERES DE SABANAMOTOS S.A.S. COMO RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES</p>
                    <p className="p_textoTratamiento"  >
                         <b>SABANAMOTOS S.A.S</b> actuará como responsable del tratamiento de datos personales y cumplirá con los deberes establecidos en el artículo 17 de la Ley 1581 de 2012.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >2. DEBERES DE LOS FUNCIONARIOS DESIGNADOS PARA EL TRATAMIENTO DE LA INFORMACIÓN</p>
                    <p className="p_textoTratamiento"  >Los empleados encargados para el tratamiento de datos tendrán las siguientes obligaciones principales:</p>
                    <ul>
                        <li>
                            <p className="p_textoTratamiento">
                                Garantizar al titular el pleno y efectivo ejercicio del derecho de Hábeas Data.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Conservar la información bajo condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos de la ley.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Tramitar las consultas y reclamos formulados por los titulares en los términos señalados en la ley.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Informar a la Superintendencia de Industria y Comercio sobre violaciones a los códigos de seguridad y riesgos en la administración de la información.
                            </p>
                        </li>
                    </ul>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >3. TITULARES DE DATOS PERSONALES</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >3.1. AUTORIZACIONES Y CONSENTIMIENTO</p>
                    <p className="p_textoTratamiento"  >
                        Para obtener la autorización del titular de los datos personales, se pondrá en conocimiento del titular las consideraciones respecto a la importancia de manifestar su autorización para el uso de sus datos personales. La autorización podrá ser física o electrónica.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >3.2. DERECHOS DE LOS TITULARES DE DATOS</p>
                    <p className="p_textoTratamiento"  >
                        Los titulares podrán presentar solicitudes ante SABANAMOTOS S.A.S, atendiendo a los siguientes derechos:
                    </p>
                    <ul>
                        <li>
                            <p className="p_textoTratamiento">
                            Acceder, conocer, rectificar y actualizar sus datos personales.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Recibir información respecto al uso que se le ha dado a sus datos personales.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Acudir ante las autoridades y presentar quejas por infracciones a la normatividad vigente. 
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Modificar y revocar la autorización y/o solicitar la supresión del dato personal.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Tener conocimiento y acceder en forma gratuita a sus datos personales.
                            </p>
                        </li>
                    </ul>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >3.3. PROCEDIMIENTOS PARA HACER EFECTIVOS LOS DERECHOS DE LOS TITULARES</p>
                    <p className="p_textoTratamiento"  >
                        Los titulares podrán consultar la información personal que repose en cualquier base de datos de SABANAMOTOS S.A.S, la cual será atendida en un máximo de diez (10) días hábiles contados desde la fecha de recibo. Si no es posible atender la consulta dentro de este término, se informará al interesado con dos (2) días hábiles previos al vencimiento, indicando los motivos de la demora y la fecha en que se atenderá la consulta.
                    </p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >3.4. RECTIFICACIÓN, ACTUALIZACIÓN Y SUPRESIÓN DE DATOS</p>
                    <p className="p_textoTratamiento"  >
                     La solicitud de rectificación, actualización o supresión deberá ser presentada a través de los medios descritos anteriormente y contendrá:
                    </p>
                    <ul>
                        <li>
                            <p className="p_textoTratamiento">
                            El nombre y domicilio del titular o cualquier otro medio para recibir la respuesta.
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Los documentos que acrediten la identidad del titular o su representante. 
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            La descripción clara y precisa de los datos personales respecto de los cuales el titular busca ejercer alguno de los derechos. 
                            </p>
                        </li>
                        <li>
                            <p className="p_textoTratamiento">
                            Otros elementos o documentos que faciliten la localización de los datos personales.
                            </p>
                        </li>
                    </ul>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >CAPÍTULO III</p>
                    <p className="p_tituloTratamiento" style={{fontSize:'20px'}} >1. DISPOSICIONES FINALES</p>
                    <p className="p_textoTratamiento"  >
                    Esta política será comunicada a todos los empleados de <b>SABANAMOTOS S.A.S</b> y estará disponible en la dirección física de la empresa. Cualquier modificación a la presente política será notificada a los titulares de los datos personales.
                    </p>
                    
                    <p className="p_tituloTratamiento" style={{fontSize:'20px', paddingTop:'30px'}} >2. VIGENCIA</p>
                    <p className="p_textoTratamiento"  >
                    La presente Política para el Tratamiento de Datos Personales entra en vigencia a partir de su publicación en la página web de <b>SABANAMOTOS S.A.S</b> y estará vigente mientras se mantenga la relación comercial o contractual con los titulares de los datos personales.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

