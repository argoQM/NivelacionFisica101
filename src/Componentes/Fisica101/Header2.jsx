import React from "react";
import NavbarEnlaces from "./Header/NavbarEnlaces2";

function Header() {
  const toggleModoNocturno = () => {
    const body = document.querySelector("body");
    body.classList.toggle("activo");
  };

  return (
    <>
      <div className="h-20 w-full max-w-300 mx-auto flex  bg-white rounded-b-3xl select-none  text-xl">
        <NavbarEnlaces />
        <span
          className="flex items-center justify-center w-1/20"
          onClick={toggleModoNocturno}
        >
          <i
            className="fa fa-certificate cursor-pointer text-[#0e0036] hover:text-enfasis"
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </>
  );
}

export default Header;
