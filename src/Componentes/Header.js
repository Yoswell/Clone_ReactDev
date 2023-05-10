import React from "react"; import { useState, useEffect } from "react";
import "../Css/Nav.css";
import "../Css/SectionMenu.css";
import "../Css/Main.css";
import logo from "../Logo/react.png";
import Inicio from "../Componentes/Inicio.js";
import Tutorial from "../Componentes/Tutorial.js";
import Opcion from "../Componentes/Opciones.js";

import { HiOutlineSearch } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLightMode } from "react-icons/md"
import { AiFillGithub} from "react-icons/ai";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [borderStyle1, setBorderStyle1] = useState({});
    const [borderStyle2, setBorderStyle2] = useState({});
    const [searchStyle, setSearchStyle] = useState({});
    const [selectedButton, setSelectedButton] = useState(0);
    const [themeModeCount, setThemeModeCount] = useState(0);
    const [Count, setCount] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [selectedButtonMenu, setSelectedButtonMenu] = useState(0);
    const [mostrarSection, setMostrarSection] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050);

    const handleBlur = () => { 
        setSearchStyle({});
    };
    const handleClick = () => { setSearchStyle({ border: "2px solid #149cc8" }); };
    const handleButtonClick_MenuDesplegate = (index) => { setSelectedButtonMenu(index); };
    const mostrar = (index) => { setMostrarSection(index); };
    
    const handleClickMenu = () => {
        setClickCount(clickCount + 1);
        setMenuOpen(!menuOpen);
    };

    const handleClickThemeMode = () => {
        setThemeModeCount(themeModeCount + 1);
        setCount(true);
        if (themeModeCount === 1) {
            setCount(false);
            setThemeModeCount(0);
        }
    };

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 1050);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let menuStyleOne, menuStyleTwo, menuStyleThree, ocultarMenu = {};

    if (clickCount === 1) {
        menuStyleOne = { transform: 'rotate(45deg)', marginTop: "4px", backgroundColor: "#149cc8" }
        menuStyleTwo = { display: "none" }
        menuStyleThree = { transform: 'rotate(-45deg)', marginTop: "-4px", backgroundColor: "#149cc8" }
        ocultarMenu = { position: "fixed" }
    } else if (clickCount === 2) {
        menuStyleOne = { transform: 'rotate(0deg)', marginTop: "0px" }
        menuStyleTwo = { display: "none", }
        menuStyleThree = { transform: 'rotate(0deg)', marginTop: "0px" }
        ocultarMenu = { position: "fixed" }
        setClickCount(0);
    }

    useEffect(() => {
        if(Count === true) {
            document.querySelector('.title-spacing').classList.add('ligth-border-top');
            document.querySelector('.nav').classList.add('ligth');
            document.querySelector('.menu').classList.add('ligth');
            document.querySelector('.menu').classList.add('ostia');
            document.querySelector('.container').classList.add('ligth');
            document.querySelector('.mi-input').classList.add('ligth-one');

            document.querySelectorAll('.container-fluid').forEach((element) => {
                element.classList.add('ligth');
            });
            document.querySelectorAll('.link').forEach((element) => {
                element.classList.add('ligth');
                element.classList.add('ostia');
                element.classList.add('dark-text');
            });
            document.querySelectorAll('.accesoRapido').forEach((element) => {
                element.classList.add('ligth');
            });
            document.querySelectorAll('.extras').forEach((element) => {
                element.classList.add('ligth');
                element.classList.add('ostia');
            });
            document.querySelectorAll('.linksNav').forEach((element) => {
                element.classList.add('ligth');
                element.classList.add('ostia');
                element.classList.add('dark-text');
            });
        } else if(Count === false) {
            document.querySelector('.title-spacing').classList.remove('ligth-border-top');
            document.querySelector('.nav').classList.remove('ligth');
            document.querySelector('.menu').classList.remove('ligth');
            document.querySelector('.menu').classList.remove('ostia');
            document.querySelector('.container').classList.remove('ligth');
            document.querySelector('.mi-input').classList.remove('ligth-one');

            document.querySelectorAll('.container-fluid').forEach((element) => {
                element.classList.remove('ligth');
            });
            document.querySelectorAll('.link').forEach((element) => {
                element.classList.remove('ligth');
                element.classList.remove('ostia');
                element.classList.remove('dark-text');
            });
            document.querySelectorAll('.accesoRapido').forEach((element) => {
                element.classList.remove('ligth');
            });
            document.querySelectorAll('.extras').forEach((element) => {
                element.classList.remove('ligth');
                element.classList.remove('ostia');
            });
            document.querySelectorAll('.linksNav').forEach((element) => {
                element.classList.remove('ligth');
                element.classList.remove('ostia');
                element.classList.remove('dark-text');
            });
        }
    }, [Count]);

    useEffect(() => {
        if (isMobile === true) {
            document.querySelectorAll('.link').forEach((element) => {
                element.style.borderRadius = '0%';
            });
        } else if (isMobile === false) {
            document.querySelectorAll('.link').forEach((element) => {
                element.style.borderRadius = '0 15px 15px 0';
            });
        }
    }, [isMobile]);

    return (
        <><><nav className="nav">
            <div className="hamburger-menu">
                <button className="menu" onClick={handleClickMenu}>
                    <span className="hamburguer" style={menuStyleOne}></span>
                    <span className="hamburguer" style={menuStyleTwo}></span>
                    <span className="hamburguer" style={menuStyleThree}></span>
                </button>
            </div>
            <div className="icon"> <img src={logo} /> </div>
            <div className={`search ${Count === true ? "ligth-one borde-one" : "dark-one"}`} style={searchStyle}>
                <div className="iconSearch"><HiOutlineSearch /></div>
                <input className="mi-input" type="text" placeholder="Búsqueda" onClick={handleClick} onBlur={handleBlur} />
                <div className="cont-accesoRapido">
                    <button className="accesoRapido">Ctrl</button>
                    <button className="accesoRapido">K</button>
                </div>
            </div>
            <div className="nav-list display">
                <button className={`linksNav ${selectedButton === 0 ? "active scale" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick(0)}>Aprende</button>
                <button className={`linksNav ${selectedButton === 1 ? "active scale" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick(1)}>Preferencias</button>
                <button className={`linksNav ${selectedButton === 2 ? "active scale" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick(2)}>Comunidad</button>
                <button className={`linksNav ${selectedButton === 3 ? "active scale" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick(3)}>Blog</button>
            </div>
            <div className="nav-list op">
                <button className="extras buttonSearch"><HiOutlineSearch /></button>
                <button className="extras" onClick={handleClickThemeMode}><MdLightMode /></button>
                <button className="extras"><AiFillGithub /></button>
            </div>
        </nav>
        <div className="container">
            <div className={`section-menu ${menuOpen ? "mostrar-menu" : ""}`} style={ocultarMenu}>
                {isMobile ? (
                    <nav className={`menu-desplegate abrirMenu ${themeModeCount === 1 ? "ligth" : "dark"}`}>
                        <h2 className="title">Introducción</h2>
                        <div className="container-fluid">
                            <button className={`link ${selectedButtonMenu === 0 ? "active rotate efect-level3" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => {handleButtonClick_MenuDesplegate(0); mostrar(0)}}> Inicio rápido<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 0 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => {handleButtonClick_MenuDesplegate(0); mostrar(1)}}> Tutorial: Tres en línea</button>
                            <button className={`link desplegate ${selectedButtonMenu === 0 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(0)}> Pensar en React</button>
                            <button className={`link ${selectedButtonMenu === 1 ? "active rotate efect-level3" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Instalación<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Iniciar un nuevo proyecto</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Añadir React a un proyecto existente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Configurar un editor</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Herramientas de desarrollo de React</button>
                        </div>
                        <h2 className="title title-spacing">Aprende React</h2> 
                        <div className="container-fluid">
                            <button className={`link ${selectedButtonMenu === 2 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Describir la UI<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Tu primer componente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Importar y exportar componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Escribir marcado con JSX</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Javascript en JSX con llaves</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Pasar props a componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Renderizado condicional</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Renderizado de listas</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Mantener los componentes puros</button>
                            <button className={`link ${selectedButtonMenu === 3 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Añadir interactividad<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Responder eventos</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> El estado: memoria de un componente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Renderizado y confirmación</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> El estado como instantánea</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Poner en cola una serie de actualizaciones del estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Actualizar objetos en el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Actualizar arrays en el estado</button>
                            <button className={`link ${selectedButtonMenu === 4 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Gestión del estado<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Reaccionar a entradas con el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Elección de la estructura del estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Compartir estado entre componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Conservar y reiniciar el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Extraer lógica de estado en un render</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Passing Data Deeply with Context</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Escalar con reducer y contexto</button>
                            <button className={`link ${selectedButtonMenu === 5 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Puertas de escape<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Referenciar valores con refs</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Manipuling the DOM with refs</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Synchronizing with Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> You Might Not Need an Effect</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Lifecycle of Reactive Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Separating Events from Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Eliminar dependencias de los Efectos</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Reutilización de lógica con Hooks personalizados</button>
                        </div>
                    </nav>
                ) : (
                    <nav className={`menu-desplegate abrirMenu ${themeModeCount === 1 ? "ligth" : "dark"}`}>
                        <h2 className="title">Introducción</h2>
                        <div className="container-fluid">
                            <button className={`link ${selectedButtonMenu === 0 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => {handleButtonClick_MenuDesplegate(0); mostrar(0)}}> Inicio rápido<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 0 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => {handleButtonClick_MenuDesplegate(0); mostrar(1)}}> Tutorial: Tres en línea</button>
                            <button className={`link desplegate ${selectedButtonMenu === 0 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(0)}> Pensar en React</button>
                            <button className={`link ${selectedButtonMenu === 1 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Instalación<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Iniciar un nuevo proyecto</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Añadir React a un proyecto existente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Configurar un editor</button>
                            <button className={`link desplegate ${selectedButtonMenu === 1 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(1)}> Herramientas de desarrollo de React</button>
                        </div>
                        <h2 className="title title-spacing">Aprende React</h2>
                        <div className="container-fluid">
                            <button className={`link ${selectedButtonMenu === 2 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Describir la UI<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Tu primer componente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Importar y exportar componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Escribir marcado con JSX</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Javascript en JSX con llaves</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Pasar props a componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Renderizado condicional</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Renderizado de listas</button>
                            <button className={`link desplegate ${selectedButtonMenu === 2 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(2)}> Mantener los componentes puros</button>
                            <button className={`link ${selectedButtonMenu === 3 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Añadir interactividad<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Responder eventos</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> El estado: memoria de un componente</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Renderizado y confirmación</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> El estado como instantánea</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Poner en cola una serie de actualizaciones del estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Actualizar objetos en el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 3 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(3)}> Actualizar arrays en el estado</button>
                            <button className={`link ${selectedButtonMenu === 4 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Gestión del estado<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Reaccionar a entradas con el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Elección de la estructura del estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Compartir estado entre componentes</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Conservar y reiniciar el estado</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Extraer lógica de estado en un render</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Passing Data Deeply with Context</button>
                            <button className={`link desplegate ${selectedButtonMenu === 4 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(4)}> Escalar con reducer y contexto</button>
                            <button className={`link ${selectedButtonMenu === 5 ? "active rotate" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Puertas de escape<i><MdKeyboardArrowRight /></i></button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Referenciar valores con refs</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Manipuling the DOM with refs</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Synchronizing with Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> You Might Not Need an Effect</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Lifecycle of Reactive Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Separating Events from Effects</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Eliminar dependencias de los Efectos</button>
                            <button className={`link desplegate ${selectedButtonMenu === 5 ? "agregar" : ""} ${Count === true ? "ligth ostia" : "dark huv"}`} onClick={() => handleButtonClick_MenuDesplegate(5)}> Reutilización de lógica con Hooks personalizados</button>
                        </div>
                    </nav>
                )}
            </div>
        </div></>
            <><div className="container-fluid d-flex">
                <div className={`section-inicio ${mostrarSection === 0 ? "mostrarInicio" : "noMostrarInicio"} ${themeModeCount === 1 ? "ligth" : "dark"}`} onClick={() => mostrar(0)}>
                    <Inicio estado={Count}/>
                </div>
                <div className={`section-tutorial ${mostrarSection === 1 ? "mostrarTutorial" : "noMostrarTutorial"} ${themeModeCount === 1 ? "ligth" : "dark"}`} onClick={() => mostrar(1)}>
                    <Tutorial estado={Count}/>
                </div>
                <div className={`opcion ${themeModeCount === 1 ? "ligth" : "dark"}`}>
                    <Opcion estado={Count}/>
                </div>
           </div></>
        </>
    );
}

export default Header;