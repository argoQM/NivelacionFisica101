import React from "react";
import Body from "./Body2";
import Footer from "../Nivelacion/Footer/Footer";
import Header from "./Header2";
import { Datos } from "./ContextoFisica101";

function Fisica101() {
  return (
    <div className="bg-fondoPrincipal">
      <Datos>
        <Header />
        <Body />
        <Footer />
      </Datos>
    </div>
  );
}

export default Fisica101;
