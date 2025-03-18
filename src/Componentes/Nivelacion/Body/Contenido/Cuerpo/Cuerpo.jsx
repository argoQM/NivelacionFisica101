import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";
import Teoria from "./Teoria/Teoria";
import VerdaderoFalso from "./TarjetasVF/VerdaderoFalso";
import MultipleOpcion from "./TarjetasMO/MultipleOpcion";
import Desarrollo from "./Desarrollo/Desarrollo";
import Bibliografia from "./Resumen/Bibliografia";
function Cuerpo() {
  const { seccionActivo } = useContext(Contexto);
  const componentes = {
    Teoria: Teoria,
    VerdaderoFalso: VerdaderoFalso,
    MultipleOpcion: MultipleOpcion,
    Desarrollo: Desarrollo,
    Bibliografia: Bibliografia,
  };
  const ComponenteSeleccionado = componentes[seccionActivo] || null;
  return (
    <div className="block">
      {ComponenteSeleccionado && <ComponenteSeleccionado />}
    </div>
  );
}

export default Cuerpo;
