import React from "react";
import "../App.css";
class PiePagina extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* <div class="container"> */}
          <div class="row">
            <div class="col-xs-12 col-md-6 text-left"></div>

            <div class="col-xs-12 col-md-6 text-right"></div>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <p class="text-muted small">
                vgrana @2021.
                <br /> Todos los derechos reservados.
                <br />
                vgrana873@gmail.com
              </p>
            </div>
          {/* </div> */}
        </div>
      </footer>
    );
  }
}
export default PiePagina;
