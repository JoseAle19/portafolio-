export const TimeLine = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">

<li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none  text-blue-300/90">
          Julio 2024
        </time>
        <h3 className="text-lg font-semibold text-yellow-300/80">
          Desarrollador mobile
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Desarrollo de una aplicación móvil para una tienda interna de la empresa, implementando la visualización de productos en tarjetas con detalles como precio, descripción e imágenes ampliadas. Incluí un carrito de compras funcional que permite gestionar productos con cantidades específicas y calcular subtotales. Además, diseñé un formulario para datos de cliente e integré un método de pago con Stripe como ejemplo. Los datos de los productos se obtuvieron mediante scraping y se estructuraron 
        en un archivo JSON. El proyecto está en desarrollo con planes de implementación futura.
        </p>
      </li>


      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue-300/90">
          Enero 2024
        </time>
        <h3 className="text-lg font-semibold text-yellow-300/80">
          Desarrollador móvil{" "}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Contribuidor en una aplicación móvil hecha con Flutter. Su principal
          función era mantener inspecciones de torres de control. Esta
          aplicación forma parte de una institución gubernamental de Perú.
        </p>
      </li>



      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none  text-blue-300/90">
          Diciembre 2023
        </time>
        <h3 className="text-lg font-semibold text-yellow-300/80">
          Residente en una empresa como desarrollador{" "}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          He desarrollado una aplicación de comercio electrónico centrada en la
          venta de materias primas. Esta aplicación, completamente personalizada
          según las especificaciones del dueño, cuenta con dos roles distintos
          para facilitar la gestión eficiente.
        </p>
      </li>

      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue-300/90">
          Marzo 2023
        </time>
        <h3 className="text-lg font-semibold text-yellow-300/80">
          Desarrollador
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          En mi rol como desarrollador en Factory Apps, trabajé de cerca con mi
          jefe, quien me proporcionaba tareas claras sobre los objetivos a
          alcanzar. Cumplí diligentemente con sus órdenes, liderando el
          desarrollo de una aplicación web que muestra el historial de ventas
          diarias de varias sucursales.
        </p>
      </li>
    </ol>
  );
};
