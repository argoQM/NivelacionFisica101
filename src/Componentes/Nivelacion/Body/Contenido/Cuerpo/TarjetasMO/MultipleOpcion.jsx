import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../../../../Contexto/Contexto";
import App from "./App";

function MultipleOpcion() {
  const {
    listaTemas,
    listaSubTemas,
    listaPreguntasMO,
    temaActivo,
    subTemaActivo,
    actualizarVF,
    setCorregirVF,
    setActualizarVF,
  } = useContext(Contexto);
  const [conten, setConten] = useState([]);

  const seleccionarPregunta = () => {
    let indiceTemas = listaTemas.indexOf(temaActivo);
    let subTemaIndex = listaSubTemas[indiceTemas]?.indexOf(subTemaActivo);
    if (indiceTemas === -1 || subTemaIndex === -1) return;
    let nuevasPreguntas = [];
    for (let i = 0; i < 1; i++) {
      let indicePregunta = Math.floor(
        Math.random() * listaPreguntasMO[indiceTemas][subTemaIndex]?.length
      );
      let nuevaPregunta =
        listaPreguntasMO[indiceTemas][subTemaIndex][indicePregunta];
      nuevasPreguntas.push(nuevaPregunta);
    }
    setConten(nuevasPreguntas);
  };

  useEffect(() => {
    if (actualizarVF || conten.length === 0) {
      seleccionarPregunta();
      setActualizarVF(false);
    }
  }, [
    actualizarVF,
    listaTemas,
    listaSubTemas,
    listaPreguntasMO,
    temaActivo,
    subTemaActivo,
  ]);

  return (
    <div className="w=full max-w-300 h-150 flex justify-center">
      {conten.length > 0 && (
        <App conten={conten} seleccionarPregunta={seleccionarPregunta} />
      )}
    </div>
  );
}

export default MultipleOpcion;
