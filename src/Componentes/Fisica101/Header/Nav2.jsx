import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-evenly w-19/20 text-texto ">
        <NavLink
          target="_blank"
          className={"hidden lg:block min-w-60 "}
          to={"https://detema.fq.edu.uy/"}
        >
          <img
            className="h-full bg-white rounded-2xl p-1 "
            src="images\logos\detema.png"
            alt="Logo DETEMA"
          />
        </NavLink>
        <NavLink
          className=" flex items-center justify-center max-w-30"
          to={"https://moodle3.fq.edu.uy/enrol/index.php?id=33"}
        >
          <a
            className="h-full  flex items-center min-w-full"
            target="_blank"
            href="https://moodle3.fq.edu.uy/enrol/index.php?id=33"
          >
            <img
              className=" bg-white rounded-2xl p-1 "
              src="public\images\logos\moodle.png"
              alt="Logo Moodle"
            />
          </a>
        </NavLink>
        <NavLink
          target="_blank"
          className={" min-w-50"}
          to={"https://www.fq.edu.uy/"}
        >
          <img
            className="h-full bg-white rounded-2xl p-1 "
            src="https://www.fq.edu.uy/sites/default/files/archivos/identidad_grafica/Logotipos_Facultad%20de%20Quimica_Horizontal%20reducido_Color_Texto%20negro.png"
            alt="logo FQ"
          />
        </NavLink>
        <NavLink
          className={" hidden xl:flex "}
          to={"https://bedelias.udelar.edu.uy/"}
        >
          <a
            target="_blank"
            className="flex items-center  h-full text-[#0e0036]"
            href="https://bedelias.udelar.edu.uy/"
          >
            Bedelias Central
          </a>
        </NavLink>
        <NavLink className={"hidden sm:flex"} to={"/"}>
          <span className="flex items-center h-full text-[#0e0036] hover:text-enfasis">
            Curso de Nivelación
          </span>
        </NavLink>
      </nav>
    </>
  );
}
