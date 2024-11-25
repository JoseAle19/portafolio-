import React from "react";

export const Header = () => {
  return (
    <header
      className="
      z-40
      py-4
      flex 
      flex-wrap
      justify-evenly
      w-full
      flex-col
      items-center 
      gap-y-4
      md:flex-row 
      xl:flex-row 
      bg-black/20
      backdrop-blur-xl
      fixed 
      "
    >
      <img
        className="rounded-full size-12 xl:block md:block lg:block hidden "
        src="https://www.shutterstock.com/image-vector/programmer-computer-expert-black-linear-600nw-2033137370.jpg"
        alt="Avatar"
      />
      <nav className="flex   justify-center gap-x-10 opacity-90 flex-wrap text-white">
        <a href="#top">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#experience">Experiencia</a>
      </nav>
    </header>
  );
};
