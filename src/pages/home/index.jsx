import React, { useContext } from 'react';
import Carousel from '../../components/carousel';
import CardTecnologia from '../../components/cardTecnologia';
import {
  jsonCardTecnologia,
  jsonSeccionMotoDetallada,
  jsonBarraPorcentaje,
  jsonSeccionBarraPorcentaje,
  jsonTituloSeccionBarraPorcentaje,
  jsonDescripcionTecnica,
  jsonLinkMarcas,
  jsonCardMarcasMotos,
  jsonBlog
} from '../../constants/constants';
import SeccionMotoDetallada from '../../components/seccionMotoDetallada';
import BarraPorcentaje from '../../components/barraPorcentaje';
import SeccionBarraPorcentaje from '../../components/seccionBarraPorcentaje';
import TituloSeccionBarraPorcentaje from '../../components/tituloSeccionBarraPorcentaje';
import DescripcionSeccionBarraPorcentaje from '../../components/descripcionSeccionBarraPorcentaje';
import VideoPublicitario from '../../components/videoPublicitario';
import MarcasPublicitarias from '../../components/marcasPublicitaria';
import CatalogoMoto from '../../components/catalogoMoto';
import './home.css';
import { LanguageContext } from '../../context/context';
import CarruselAliados from './carousel';
import AnimatedCounter from './animator';
import { useEffect } from 'react';
import CardMarcaMoto from '../../components/cardMarcaMoto';
import { backgroundImages } from 'polished';
import CardBlog from '../../components/cardBlog';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
      // console.log(configuracionData)
    }
  }, []);

  const textoCompleto = configuracionData?.descripcionMoto_1 || '';
  const mitad = Math.floor(textoCompleto.length / 2);
  let puntoDivision = textoCompleto.indexOf(' ', mitad);
  if (puntoDivision === -1) puntoDivision = mitad;

  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();

  const jsonItemsTecnicos = [
    {
      titulo: 'ARRANQUE',
      // descripcion: configuracionData?.arranqueMoto_2 || '',
      descripcion: 'Eléctrico'
    },
    {
      titulo: 'TORQUE MÁXIMO',
      //descripcion: configuracionData?.torqueMoto_2 || '',
      descripcion: '21.5 N.m @ 6500 rpm'
    },
    {
      titulo: 'LLANTA DELANTERA',
      //descripcion: configuracionData?.bateriaMoto_2 || '',
      descripcion: '100/80-17 , 52P Tubeless'
    },
    {
      titulo: 'FRENO DELANTERO',
      //descripcion: configuracionData?.transmisionMoto_2 || '',
      descripcion: 'ABS, Disco de 300 mm (Doble Canal)'
    },

    {
      titulo: 'Peso',
      // descripcion: configuracionData?.pesoMoto_2 || '',
      descripcion: '162 KG'
    },
    {
      titulo: 'FRENO TRASERO',
      //descripcion: configuracionData?.tanqueMoto_2 || '',
      descripcion: 'ABS, Disco de 230 mm'
    }
  ];

  const scrollToCatalogoMoto = () => {
    const section = document.getElementById("contenidoMotocicleta");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",  // top
      });
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const handleBlog = () => {
      navigate("/blog");
  }

  return (

    <div style={{ background: "" }}>

      <div className='container-fluid conte--carousel'>
        <div className="row justify-content-center">
          <div className="col-12">
            <Carousel img={configuracionData?.rutaImgCarrousel || ''} />
          </div>

        </div>
      </div>
      <div>
        <div style={{ background: "#000000" }}>
          <div className='container-fluid'>
            <div className="row div__padding__centro " style={{ position: 'relative' }}>
              {/* {jsonSeccionMotoDetallada.map((item, idx) => ( */}
              <SeccionMotoDetallada
                key="UYTZ"
                ImagenMoto="/images/motoSeccion.jpg"
                Titulo={configuracionData?.tituloMoto_1 || ''}
                Subtitulo={configuracionData?.subTituloMoto_1 || ''}
                Descripcion_1={descripcion1}
                Descripcion_2={descripcion2}
                // Transmision={configuracionData?.transmisionMoto_1 || ''}
                // Cilindraje={configuracionData?.cilindrajeMoto_1 || ''}
                // Motor={configuracionData?.motorMoto_1 || ''}
                Transmision='184 KG'
                Motor='39.43 HP'
                Cilindraje='373.27 CC'
                ColorTitulo={configuracionData?.colorTituloHome || ''}
                ColorCuerpo={configuracionData?.colorCuerpo || ''}
              />
              {/* ))} */}
            </div>
          </div>
        </div>
        <main className="container">
          <div
            style={{
              position: 'absolute',
              left: 0,
              width: '100%',

              color: 'white',
              padding: '1rem',
              zIndex: 999,
              display: 'flex',
              justifyContent: 'center',


            }}
            className='FranjaClientes'
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px',
              }}
            >
              {/* <AnimatedCounter target={configuracionData?.tiempoExperiencia || 0} suffix="+" label="Años de Experiencia" />
            <AnimatedCounter target={configuracionData?.clientesFelices || 0} suffix="+" label="Centro de servicio tecnico" />
            <AnimatedCounter target={configuracionData?.ventas || 0} suffix="+" label="Titulo de número" />
            <AnimatedCounter target={configuracionData?.puntosVentas || 0} label="Titulo de número" /> */}
              <AnimatedCounter target='9' suffix="+" label="Años de Experiencia" />
              <AnimatedCounter target='6' suffix="+" label="Centro de servicio tecnico" />
              <AnimatedCounter target='300' suffix="+" label="Titulo de número" />
              <AnimatedCounter target='6' label="Titulo de número" />
            </div>
          </div>
        </main>
        <div style={{ background: "white" }}>
          <div className='container-fluid contenidoCatalogoMoto'>

            <div className="row mb-5" style={{ marginTop: '200px' }} id='contenidoMotocicleta'>
              <CatalogoMoto ColorTitulo={configuracionData?.colorTituloHome || ''} ColorPagina={configuracionData?.colorPagina || ''} />
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: "linear-gradient(360deg, #002D58 0%, #001325 40%)", paddingBottom:'15px' }}>
          <div className='container'>
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                <img src="/images/pulsarns200.png" alt="Moto Pulsar NS200" className="img-fluid " style={{ width: '100%', height: 'auto' }} />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TituloSeccionBarraPorcentaje
                  Titulo='Deportiva'
                  Subtitulo='PULSAR NS 250'
                  // ColorSubtiutlo={configuracionData?.colorTituloHome || ''}
                  // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                  colorCuerpo='#d8d8d8'
                  ColorSubtiutlo='#d8d8d8'
                />

                <div className="row gy-3 my-3">
                  {jsonBarraPorcentaje.map((item, idx) => (
                    <BarraPorcentaje
                      key={item.id || idx}
                      porcentaje={item.porcentaje}

                      titulo={item.titulo}
                      // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                      color={item.color}
                      ColorCuerpo='#d8d8d8'
                    //color='#d8d8d8'
                    />
                  ))}
                </div>

                <div className="row gy-3">
                  {/* {jsonSeccionBarraPorcentaje.map((item, idx) => ( */}
                  <SeccionBarraPorcentaje
                    key="PNTY"
                    Motor='4 tiempos, Monocilíndrico, SOHC'
                    Cilindraje='249.07 cc'
                    potencia='24.16 Hp @ 8750 rpm'
                    // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                    ColorCuerpo='#d8d8d8'
                  />
                  {/* ))} */}
                </div>
              </div>
            </div>

            <section className="row contenido__label__Especificacion text-center my-5">
              {/* <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: configuracionData?.colorCuerpo }}> */}
              <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: '#d8d8d8' }}>
                ESPECIFICACIONES TÉCNICAS
              </label>
            </section>

            <div className="row g-4 mb-5">
              {jsonItemsTecnicos.map((item, idx) => (
                <DescripcionSeccionBarraPorcentaje
                  key={item.titulo || idx}
                  Titulo={item.titulo}
                  Descripcion={item.descripcion}
                  // ColorCuerpo={configuracionData?.colorCuerpo}
                  ColorCuerpo='#d8d8d8'
                />
              ))}
            </div>


          </div>

        </div>
        <div className='conten--video--youtube'>
          <div>
            <div className="row--video--youtube--">
              <VideoPublicitario Link={configuracionData?.rutaYoutube} />
            </div>
          </div></div>
        {/* </main> */}

        <div className='FranjaClientes' >
        <main className="container" style={{ padding: '1px' }}>
          <section className="row contenido__label__Especificacion text-center my-5 m-3">
            <label className="NuestraAliado__Titulo__Home" style={{ color: '#000' }}>
              FINANCIERAS
            </label>
            <CarruselAliados colorTitulo={configuracionData?.colorTituloHome} />
          </section>
        </main>
        </div>
        <div style={{ background: "#eeeeee"}}>
          <div className="contenido__NuestrasMarcas__Home" style={{ background:'#003f74' , paddingTop:'40px'}}>
            <div className="container">
              <section className="row text-center" style={{paddingBottom:'30px'}}>
                <label className="TituloNuestraMarca">NUESTRAS MARCAS</label>
              </section>

              <div className="row g-3 justify-content-center mb-1">
                {jsonLinkMarcas.map((item, idx) => (
                  <MarcasPublicitarias key={item.id || idx} Link={item.url} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='FranjaClientes' >
          <div className='container'  style={{  paddingBottom:'40px'}}>
          <div className='row' style={{paddingTop:'30px'}}>
               <div className='col-12 col-md-6'>
                  <h3 className='ultimoArticulos'>ultimos articulos</h3>
                </div> 
                <div className='col-12 col-md-6' style={{alignContent:'center', alignItems:'center', textAlign:'center'}}>
                <button type="button" className="btn btn-primary btn-todoBlog" onClick={()=> handleBlog()} >TODOS LOS BLOGS</button>
                </div>     
          </div>
          <div className="col-12" style={{paddingTop:'30px'}}>
                    {jsonBlog.map((item,index)=>(
                        <CardBlog 
                            key={index}
                            titulo={item.titulo}
                            fecha={item.fecha}
                            imagen={item.imagen}
                            objecto={item} 
                            opcion='B'
                        />
                    ))}

                </div>

          </div>
        </div>
      </div>
    </div>
  );
}
