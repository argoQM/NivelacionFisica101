import React from "react";

function Footer() {
  return (
    <div className=" h-40 relative flex justify-center">
      <div className="h-20 w-full max-w-300 mx-auto flex justify-evenly bg-white rounded-t-3xl select-none overflow-hidden absolute bottom-0  ">
        <img
          className="h-full hidden sm:flex"
          src="https://www.fq.edu.uy/sites/default/files/archivos/identidad_grafica/Logotipos_Facultad%20de%20Quimica_Vertical_Color_Texto%20negro.png"
          alt="Logo FQ"
        />
        <div className="flex justify-center items-center text-[#0e0036] text-2xl">
          Proyecto <strong>Tendiendo Puentes</strong>
        </div>
        <img
          className="h-full hidden md:flex"
          src="images\logos\detema.png"
          alt="Logo DETEMA"
        />
      </div>
    </div>
  );
}

export default Footer;
