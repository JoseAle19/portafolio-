import { Whatsapp } from "../icons/Whatsapp";
import { Linkedin } from "../icons/Linkedin";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center  w-full bg-blue-900/30">
      <div className=" w-full  h-full flex flex-col  items-center  justify-center py-6  gap-y-10 ">
        <div className=" flex items-center justify-center  gap-x-2">
          <Whatsapp style={"text-white "} />
          <Linkedin style={"text-white "} />
        </div>{" "}
        <div className="">
          <ul className="flex flex-col xl:flex-row md:flex-row  items-center  mb-6 xl:text-sm md:text-sm text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#top" className="hover:underline  md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline  md:me-6">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline  md:me-6">
                Experiencia
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline  md:me-6">
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full bg-gray-950 py-2 ">
        <span className="py-2 w-full flex-col   xl:flex-row md:flex-row flex items-center justify-center  text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            José Alejandro Cruz Pérez™
          </a>
          . Todos los derechos reservados
        </span>
      </div>
    </section>
  );
};
