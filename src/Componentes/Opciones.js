import React from "react";
import "../Css/Opciones.css";

function Opcion(props) {
    const { estado } = props;

    return (
        <div className={`opciones ${estado === true ? "ligth" : "dark"}`}>
            <h2 className="title">On this pages</h2>
            <div className="container-fluid">
                <a href="https://devdocs.io/" className={`linkOp active ${estado === true ? "ligth" : "dark huv"}`}>devdocs io</a>
                <a href="https://es.legacy.reactjs.org/docs/fragments.html" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>reactjs</a>
                <a href="https://desarrolloweb.com/manuales/manual-de-react.html" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>desarrollo.web</a>
                <a href="https://learn.microsoft.com/es-es/aspnet/core/client-side/spa/react?view=aspnetcore-7.0&tabs=visual-studio" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>learn.icrosoft</a>
                <a href="https://learn.microsoft.com/es-es/aspnet/core/client-side/spa/react?view=aspnetcore-7.0&tabs=visual-studio" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>developer.mozilla</a>
                <a href="https://www.freecodecamp.org/espanol/news/react-para-principiantes-complete-react-hoja-de-trucos-para-2021/" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>freeCodeCamp</a>
                <a href="https://developero.io/como-pasar-de-junior-a-senior-software-engineer-en-react-js" className={`linkOp ${estado === true ? "ligth ostia" : "dark huv"}`}>developero.io</a>
            </div>
        </div>
    );
}

export default Opcion;