import { Badge } from "./components/Badge";
import { GitHub } from "./icons/GitHub";
import { Linkedin } from "./icons/Linkedin";
import { SocialPill } from "./components/SocialPill";
import { Mail } from "./icons/Mail";
import { SectionContainer } from "./components/SectionContainer";
import { Code } from "./icons/Code";
import { Projects } from "./components/Projects";
import { User } from "./icons/User";
import { TimeLine } from "./components/TimeLine";
import { Brief } from "./icons/Brief";
import "./App.css";
import GeminiBot from "./components/GeminiBot";
export const App = () => {
  return (
    <>
      <main className="px-10  ">
        <SectionContainer id={"top"} styles={"py-24 xl:py-[15rem]"}>
          <div className="flex flex-row text-balance gap-x-2   pb-3">
            <h1
              className="text-white 
          text-2xl 
          md:text-4xl 
          xl:text-5xl 
          font-bold 
          "
            >
              Hola, soy José
            </h1>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-alejandro-cruz-p%C3%A9rez-34694123a"
              target="_blank"
              rel="noopener"
              className="cursor-pointer flex justify-center items-center "
            >
              <Badge>Ing. Sistemas Computacionales </Badge>
            </a>
          </div>
          <h2 className="text-2xl text-wrap max-w-[700px] text-white">
            +4 años inmerso en el mundo del desarrollo de software.
            <span className="text-yellow-200 opacity-80">
              {" "}
              Desarrollador.
            </span>{" "}
            <span className=" text-blue-300 opacity-80">De Chiapas Mexico</span>
            . Destaco por ser creador de aplicaciones web y moviles
            personalizadas.{" "}
          </h2>
          <div className="flex flex-col   xl:flex-row md:flex-row  gap-2 py-4  text-white">
            <SocialPill
              url={
                "https://www.linkedin.com/in/jos%C3%A9-alejandro-cruz-p%C3%A9rez-34694123a/"
              }
            >
              <Linkedin />
              Linkedin
            </SocialPill>
            <SocialPill url={"https://github.com/JoseAle19"}>
              <GitHub />
              GitHub
            </SocialPill>
            <SocialPill
              url={
                "https://mail.google.com/mail/u/?authuser=josedeveloperxd@gmail.com"
              }
            >
              <Mail />
              josedeveloperxd@gmail.com
            </SocialPill>
          </div>
        </SectionContainer>

        <SectionContainer id={"experience"} styles={"py-20"}>
          <h2 className=" flex gap-3 text-2xl font-semibold mb-6 text-wrap max-w-[700px] text-blue-400">
            <Brief />
            Experiencia
          </h2>
          <TimeLine />
        </SectionContainer>

        <SectionContainer id={"projects"} styles={"text-white py-20"}>
          <h2 className=" flex gap-3 text-2xl font-semibold mb-6 text-wrap max-w-[700px] text-blue-400">
            <Code />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>

        <SectionContainer id={"about"} styles={"text-white py-24  xl:pb-20"}>
          <h2 className=" flex gap-3 text-2xl font-semibold mb-6 text-wrap max-w-[700px] text-blue-400">
            <User />
            Sobre mi
          </h2>
          <div className="text-pretty flex flex-col justify-center items-center text-xl">
            <h3 className="pb-5">
              José Alejandro Cruz Pérez <br />
              Ing. Sistemas Computacionales y programador con más de 4 años de
              experiencia en el área y 2 años de experiencia laboral
              <span className="text-yellow-200 text-balance">
                . He colaborado en proyectos gurnamentales, proyectos internos para Perú y colombia.
                <span className="text-purple-500/80">
                . 
                </span>
              </span>
            </h3>
            <h3 className="pb-5">
              Uno de los desafíos más desafiantes en los que he trabajado fue el desarrollo de una tienda en línea, donde pude implementar funcionalidades clave como notificaciones push, reportes de auditoría y un sistema de mensajería interna. 
              {/* <span className="text-yellow-200 text-balance">
                . Fue un proyecto de residencia profesional de la universidad
              </span> */}
            </h3>
          </div>
        </SectionContainer>

        <GeminiBot />
      </main>
    </>
  );
};
