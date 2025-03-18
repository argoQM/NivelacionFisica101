import React, { useContext } from "react";
import { ContextoFisica101 } from "../ContextoFisica101";

function VideoActivo() {
  const { videoActivo } = useContext(ContextoFisica101);
  return (
    <div id="video" className="w-full h-full">
      {videoActivo}
    </div>
  );
}

export default VideoActivo;
