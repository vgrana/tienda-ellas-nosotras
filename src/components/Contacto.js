import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";

import face from "./image/face.jpg";
// import instagram from "./image/instagram.jpg";
import "../containers/Gallery.css";
import Ubicacion from "./Ubicacion";
class Contacto extends React.Component {
  //mapa a la izquierda, mail, direccion y face y instagram a la derecha

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <div>
              <Ubicacion />
            </div>
          </div>
          <div class="col-sm-6">
            <div>
              <h3>D&oacute;nde estamos</h3>
              <p>Juan Manuel de Rosas 315</p>
              <p>(2752)Capit&aacute;n Sarmiento</p>
              <p>prov. de Bs.As.</p>
            </div>
            <h3>Info</h3>
            <p

            // style="black-text"
            >
              ellasYNosotras.com
            </p>

            <div>
              <p class="black-text">
                Chate&aacute; con nosotros, estamos a tu disposici&oacute;n!!
                <a
                  //  ="_blank"
                  alt=" "
                  href="https://api.whatsapp.com/send?phone=[54][2478420091]&text=Hola!,%20necesito%20precio%20de%20una%20prenda"
                >
                <button 
                // style="padding-top: 0px;
                //                 padding-right: 0px;
                //                 padding-left: 0px;"
                                > 
                  <img
                    src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-5.png"
                    alt="whatsapp-logo-5"
                  />
                  </button>
                </a>

              </p>
            </div>
            <div>
              <h3>Seguinos</h3>

              <div class="col-sm-1 ">
                {/* <a
                  // target="_blank"
                  // href="https://www.facebook.com/Ellas-Y-Nosotras-1847582892219597"
                >
                  {" "}
                  <img src={face}></img>
                </a> */}
                <button onClick = { face }> Realizar acción </button>

              </div>
              <div class="col-sm-3 ">
                {/* <a
                  // target="_blank"
                  // href="https://www.instagram.com/ellasy_nosotras"
                >
                  <img src={instagram}></img>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contacto;
