import MenuBar from "./components/MenuBar";

function App() {
  return (
    <>
      <MenuBar />

      {/* INICIO */}
      <section id="inicio">
        <h1>TruFinder</h1>
        <p>
          TruFinder es una aplicación web y móvil para la geolocalización de
          trufis y micros en Cochabamba. Permite a los usuarios ver en tiempo
          real las rutas, paradas y tiempos estimados de llegada.
        </p>
        <p>
          El objetivo es mejorar la movilidad urbana ofreciendo información
          clara, rápida y accesible sobre el transporte público.
        </p>
      </section>

      {/* CONTENIDO / DESCRIPCIÓN GENERAL */}
      <section id="contenido">
        <h1>Descripción del Proyecto</h1>
        <p>
          El sistema está desarrollado como un proyecto informático utilizando
          tecnologías modernas de desarrollo web. Se compone de:
        </p>
        <ul>
          <li>Aplicación web para los pasajeros (consulta de rutas y paradas).</li>
          <li>Panel de administración para gestionar líneas, vehículos y choferes.</li>
          <li>Módulo de geolocalización para visualizar la posición de los trufis.</li>
        </ul>
        <p>
          La información se almacena en una base de datos centralizada y se
          actualiza en tiempo real mediante servicios web.
        </p>
      </section>

      {/* SERVICIOS / FUNCIONALIDADES */}
      <section id="servicios">
        <h1>Funcionalidades principales</h1>
        <ul>
          <li>Búsqueda de rutas por origen y destino.</li>
          <li>Visualización de trufis y micros en un mapa en tiempo real.</li>
          <li>Detalle de paradas, horarios y tiempos estimados de llegada.</li>
          <li>Registro y administración de líneas, vehículos y conductores.</li>
          <li>Gestión de alertas o incidencias reportadas por los usuarios.</li>
        </ul>
        <p>
          Estas funcionalidades buscan reducir el tiempo de espera, mejorar la
          planificación de viajes y ofrecer mayor seguridad al usuario.
        </p>
      </section>

      {/* CONTACTOS */}
      <section id="contactos">
        <h1>Usuarios y Contacto</h1>
        <p>
          El sistema está pensado para tres tipos de usuarios principales:
        </p>
        <ul>
          <li><strong>Pasajeros:</strong> consultan rutas, tiempos y paradas.</li>
          <li><strong>Conductores:</strong> reportan su ubicación y estado del servicio.</li>
          <li><strong>Administrador:</strong> gestiona líneas, vehículos y usuarios.</li>
        </ul>
        <p>
          Para más información o sugerencias, puedes imaginar un formulario de
          contacto donde los usuarios envíen comentarios, dudas o reportes
          sobre el servicio.
        </p>
      </section>

      {/* ACERCA DE */}
      <section id="acerca">
        <h1>Acerca del Proyecto</h1>
        <p>
          Este proyecto de trufis forma parte de un desarrollo informático
          orientado a mejorar el transporte público en Cochabamba, integrando
          conceptos de geolocalización, bases de datos y desarrollo web.
        </p>
        <p>
          TruFinder puede escalarse a más ciudades, integrar métodos de pago,
          notificaciones en tiempo real y análisis de datos para la toma de
          decisiones sobre movilidad urbana.
        </p>
        <p>
          Desarrollado como proyecto académico, con visión de convertirse en
          una solución real para la ciudad.
        </p>
      </section>
    </>
  );
}

export default App;
