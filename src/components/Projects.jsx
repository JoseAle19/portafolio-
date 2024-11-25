import { Carousel } from "flowbite-react";

import CodeFlicks from "../assets/projetcs/codeflicks.webp"; 
import CodeFlicks2 from "/assets/projetcs/CodeFlicks2.webp";
import CodeFlicks3 from "../assets/projetcs/codeflicks3.webp";
import DevJoseStore from "../assets/projetcs/devstore.webp";
import Coffe from "../assets/projetcs/coffe.webp";
import Debo from "../assets/projetcs/debounce.webp";
import Cono from "../assets/projetcs/conoweb.webp";
import Cono1 from "../assets/projetcs/cono1.webp";
import Cono2 from "../assets/projetcs/cono2.webp";
import Cono3 from "../assets/projetcs/cono3.webp";
import Cono4 from "../assets/projetcs/cono4.webp";
import Cono5 from "../assets/projetcs/cono5.webp";
import Cono6 from "../assets/projetcs/cono6.webp";
import Cono7 from "../assets/projetcs/cono7.webp";
import Cono8 from "../assets/projetcs/cono8.webp";
import Cono9 from "../assets/projetcs/cono9.webp";

import { JS } from "../icons/JS";
import { React } from "../icons/React";
import { Tailwinds } from "../icons/Tailwinds";
import { Stripe } from "../icons/Stripe";
import { Express } from "../icons/Express";
import { Node } from "../icons/Node";
import { Html } from "../icons/Html";
import { Css } from "../icons/Css";
import { SocialPill } from "./SocialPill";
import { Link } from "../icons/Link";
import { GitHub } from "../icons/GitHub";
import { Mysql } from "../icons/Mysql";
import { Flutter } from "../icons/Flutter";
import { Dart } from "../icons/dart";
import { Firebase } from "../icons/firebase";
import { Jwt } from "../icons/jwt";

const TAGS = {
  JS: {
    name: "Javascript",
    class: "bg-yellow-300 text-black",
    icon: JS,
  },
  TAILWIND: {
    name: "Tailwind css",
    class: "bg-blue-900/80 text-white",
    icon: Tailwinds,
  },
  REACT: {
    name: "React js",
    class: "bg-white text-[#00D8FF]",
    icon: React,
  },
  STRIPE: {
    name: "Stripe",
    class: "bg-white text-blue-500",
    icon: Stripe,
  },
  NODE: {
    name: "Node js",
    class: "bg-black text-white",
    icon: Node,
  },
  EXPRESS: {
    name: "Express js",
    class: "bg-black text-white",
    icon: Express,
  },
  HTML: {
    name: "Html",
    class: "bg-orange-500/80 text-white",
    icon: Html,
  },
  CSS: {
    name: "Css",
    class: "bg-[#30a9dc] text-white",
    icon: Css,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#00546B] text-white text-bold ",
    icon: Mysql,
  },
  FLUTTER: {
    name: "flutter",
    class: "bg-[#fff] text-black text-bold ",
    icon: Flutter,
  },
  DART: {
    name: "Dart",
    class: "bg-[#fff] text-black text-bold ",
    icon: Dart,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#fff] text-black text-bold ",
    icon: Firebase,
  },
  JWT: {
    name: "Jwt",
    class: "bg-[#fff] text-black text-bold ",
    icon: Jwt,
  },
};
const PROJECTS = [

  {
    title: "Clone spotify",
    description:
      "Aplicación móvil diseñada como un clon de Spotify, desarrollada con Flutter para garantizar una experiencia fluida y moderna. La app implementa Arquitectura Limpia, maximizando la escalabilidad y el mantenimiento del código. Utiliza los servicios de Firebase como Authentication, Storage y Firestore, entre otros, para ofrecer características avanzadas de gestión de usuarios, almacenamiento y sincronización de datos en tiempo real. Ideal como ejemplo práctico para comprender el desarrollo de apps móviles profesionales con tecnologías modernas.",
    link: "/spotify/s1.mp4",
    gitHub: "https://github.com/JoseAle19/clon-spotify-firebase",
    images: [
      '/spotify/s1.png',
      '/spotify/s2.png',
      '/spotify/s3.png',
      '/spotify/s4.png',
    ],
    tags: [TAGS.FLUTTER, TAGS.DART, TAGS.FIREBASE],
    isMobile:true

  },
  {
    title: "Fruti App",
    description:
      "Demo de un a tienda en linea, como gestor de estados uso provider para poder manejar el estado de la aplicacion, cuenta con funciones de una tineda, carrito de compras, favoritos, descripcion de los productos, lista de los productos",
    link: "/fruit/f1.mp4",
    gitHub: "https://github.com/JoseAle19/Fruit-App",
    images: [
      '/fruit/f1.png',
      '/fruit/f2.png',
      '/fruit/f3.png',
    ],
    tags: [TAGS.FLUTTER, TAGS.DART],
    isMobile:true

  },
  {
    title: "Nitro App",
    description:
      "Aplicación móvil para una tienda interna de la empresa, que muestra productos en tarjetas con precio, descripción e imágenes ampliadas. Incluye un carrito de compras con gestión de cantidades y cálculos de subtotales, además de un formulario de cliente y pago integrado con Stripe. Los productos se obtienen mediante scraping y se almacenan en JSON. En desarrollo, con planes de futuras mejoras.",
    link: "/tienda/t1.mp4",
    gitHub: "https://github.com/JoseAle19/nitroapp",
    images: [
      '/tienda/t1.png',
      '/tienda/t2.png',
      '/tienda/t3.png',
    ],
    tags: [TAGS.FLUTTER, TAGS.DART, TAGS.STRIPE],
    isMobile:true

  },


  {
    title: "CodeFlicks",
    description:
      "CodeFlicks Desde sinopsis cautivadoras hasta información sobre el reparto, puntajes, y fechas de lanzamiento, CodeFlicks proporciona una visión completa de cada película. Los usuarios pueden explorar y marcar sus películas favoritas.",
    link: "https://devjose-movies.netlify.app/",
    gitHub: "https://github.com/JoseAle19/MovieDb-clone",
    images: [CodeFlicks, CodeFlicks3, CodeFlicks2],
    tags: [TAGS.JS, TAGS.TAILWIND, TAGS.REACT],
  },
  {
    title: "Cono web",
    description:
      "Una aplicación estilo ecommerce diseñada para mejorar las ventas de materia prima  para helados. Con una interfaz intuitiva y  funcionalidades personalizadas, esta aplicación está diseñada para hacer que la gestión de pedidos y la compra de ingredientes sean una experiencia sin esfuerzo.",
    link: "#",
    gitHub: "#",
    images: [Cono, Cono1, Cono2, Cono3, Cono4, Cono5, Cono6, Cono7, Cono8, Cono9],
    tags: [
      TAGS.REACT,
      TAGS.EXPRESS,
      TAGS.NODE,
      TAGS.TAILWIND,
      TAGS.CSS,
      TAGS.JS,
      TAGS.MYSQL,
      TAGS.JWT,
    ],
    IsPrivate: true,
  },
  {
    title: "DevJoseStore",
    description:
      "DevJoseStore es una aplicación esencial para la compra de productos electrónicos de última generación. Con una interfaz intuitiva y funcionalidades de vanguardia, esta aplicación te permite explorar y adquirir una amplia gama de productos electrónicos con facilidad. Todo esto ligado a una pasarela de pago la cual es stripe (Modo desarrollo)",
    link: "https://appcart.fly.dev/",
    gitHub: "https://github.com/JoseAle19/vanilla-shopping-cart-",
    images: [DevJoseStore],
    tags: [
      TAGS.JS,
      TAGS.TAILWIND,
      TAGS.HTML,
      TAGS.NODE,
      TAGS.EXPRESS,
      TAGS.STRIPE,
    ],
  },
  {
    title: "Coffe App",
    description: "Blog de cafe con varios consejos y recursos.",
    link: "https://devjoses.netlify.app/",
    gitHub: "https://github.com/JoseAle19/RappiCoffee",
    images: [Coffe],
    tags: [TAGS.HTML, TAGS.CSS],
  },
  {
    title: "Search Movie - debouncer",
    description:
      "Aplicación de búsqueda de películas diseñada para cinéfilos apasionados. Search Movie - debouncer no es solo un buscador común, sino una experiencia optimizada que pone el poder del cine al alcance de tus dedos.",
    link: "https://spiffy-tartufo-40c1d8.netlify.app/",
    gitHub: "https://github.com/JoseAle19/MovieDb-clone",
    images: [Debo],
    tags: [TAGS.JS, TAGS.REACT, TAGS.TAILWIND],
  },
];

export const Projects = () => {
  return (
    <>
      {PROJECTS.map(
        ({ title, description, link, gitHub, images, tags, IsPrivate,isMobile}) => {
          return (
            <article className="pb-10 " key={title}>
              <h3 className="  text-3xl font-semibold  text-yellow-300 mb-2 ">
                {title}
              </h3>
              <p className="text-lg mb-4 text-pretty">{description}</p>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap mb-4">
                {tags.map((tag, i) => (
                  <li key={i}>
                    <span
                      className={` flex gap-x-2 rounded-full text-sm ${tag.class} py-1 px-2 items-center`}
                    >
                      <tag.icon style={"size-4"} />
                      <p className="hidden xl:block md:block lg:block">
                        {tag.name}
                      </p>
                    </span>
                  </li>
                ))}
              </ul>
              <span className="flex  gap-x-2 justify-start w-full py-4">
                <SocialPill
                  style="size-10 text-elipsis"
                  url={link}
                  isPrivate={IsPrivate}
                  isMobile={isMobile}
                >
                  <Link isMobile={isMobile} style="size-5 " />
                  {IsPrivate ? "No disponible" : 
                  isMobile? 'Descargar video Demostrativo':
                  "Ir al sitio web"}
                </SocialPill>
                <SocialPill
                  style="size-10 text-elipsis"
                  url={gitHub}
                  isPrivate={IsPrivate}
                >
                  <GitHub style="size-5 " />
                  {IsPrivate ? "No disponible" : "Repositorio"}
                </SocialPill>
              </span>
              <div className="h-56 sm:h-96 xl:h-96 2xl:h-96 p-2">
                <Carousel>
                  {images.map((image, i) => {
                    return <img key={i} src={image} alt="imagen" />;
                  })}
                </Carousel>
              </div>
            </article>
          );
        }
      )}
    </>
  );
};
