import React, { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  // Guardamos cuál sección está activa
  const [activeSection, setActiveSection] = useState("#inicio");

  const menuItems = [
    { id: "#inicio", label: "Inicio" },
    { id: "#contenido", label: "Contenido" },
    { id: "#servicios", label: "Servicios" },
    { id: "#contactos", label: "Contactos" },
    { id: "#acerca", label: "Acerca de" },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
  };

  return (
    <header>
      <nav className="menu-bar" aria-label="Menú principal">
        <div className="logo">
          Trufinder
        </div>

        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
