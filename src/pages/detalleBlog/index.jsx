import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './detalleBlog.css'
export function DetalleBlog() {
  const location = useLocation();
  const blog = location.state?.blog;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!blog) {
    return <p>No se encontró información del Blog.</p>;
  }

  const tieneContenido =
    blog.html && typeof blog.html === "string" && blog.html.trim() !== "";

  return (
    <div style={{ paddingTop: "170px", paddingBottom: "100px" }}>
      <div className="container contenidoDetalleBlog">
        {tieneContenido ? (
          <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        ) : (
          <p className="text-center">
            La información de este blog no está disponible.
          </p>
        )}

        <div style={{paddingTop:'20px'}}>
            <p class="tituloBlogObjecto">
                 Deja una respuesta 
            </p>
            <p>
            Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *
            </p>
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    <label htmlFor="" className="form-label">Comentario *</label>
                    <textarea
                    id="comentario"
                    rows="4"
                    cols="50"
                    placeholder="Detalle..."
                    className="form-control"
                    name="comentario" 
                    style={{border:'1px solid #000'}}
                />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    <label htmlFor="" className="form-label">Nombre *</label>
                    <input type="text" name="nombre"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing"  style={{border:'1px solid #000'}}/>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    <label htmlFor="" className="form-label">Correo electrónico *</label>
                    <input type="text" name="correo"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing" style={{border:'1px solid #000'}}/>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    <label htmlFor="" className="form-label">Web </label>
                    <input type="text" name="web"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing" style={{border:'1px solid #000'}}/>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    
                    <input class="form-check-input" type="checkbox" value="" id="guardarUsuario" style={{border:'1px solid #000'}}/>
                    <label class="form-check-label" for="guardarUsuario" style={{position:'relative', left:'10px'}}>
                    Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.
                    </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                    <button type="button" className="btn btn-primary btn-comentario" >Publicar el comentario</button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
