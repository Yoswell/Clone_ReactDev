import React from "react";
import { useEffect } from "react";
import "../Css/SectionInicio.css";

import { MdKeyboardArrowRight } from "react-icons/md";

function Inicio(props) {
    const { estado } = props;

    useEffect(() => {
        if (estado === true) {
            document.querySelector('.inicio').classList.add('ligth');
            document.querySelector('.learn').classList.add('ligth-one');

            document.querySelectorAll('h1').forEach((element) => {
                element.classList.add('dark-text');
            });
            document.querySelectorAll('h2').forEach((element) => {
                element.classList.add('dark-text');
            });
            document.querySelectorAll('h3').forEach((element) => {
                element.classList.add('dark-text');
            });
            document.querySelectorAll('.app').forEach((element) => {
                element.classList.add('muestra-title');
                element.classList.add('ligth-two');
            });
            document.querySelectorAll('.codigo').forEach((element) => {
                element.classList.add('ligth-one');
            });
            document.querySelectorAll('.codigo-muestra').forEach((element) => {
                element.classList.add('ligth');
                element.classList.add('ligth-border');
            });
            document.querySelectorAll('.salida').forEach((element) => {
                element.classList.add('ligth-border');
            });
            document.querySelectorAll('.cont').forEach((element) => {
                element.classList.add('ligth-one');
            });
            document.querySelectorAll('.p').forEach((element) => {
                element.classList.add('dark-text');
            });
            
        } else if (estado === false) {
            document.querySelector('.inicio').classList.remove('ligth');
            document.querySelector('.learn').classList.remove('ligth-one');

            document.querySelectorAll('h1').forEach((element) => {
                element.classList.remove('dark-text');
            });
            document.querySelectorAll('h2').forEach((element) => {
                element.classList.remove('dark-text');
            });
            document.querySelectorAll('h3').forEach((element) => {
                element.classList.remove('dark-text');
            });
            document.querySelectorAll('.app').forEach((element) => {
                element.classList.remove('muestra-title');
                element.classList.remove('ligth-two');
            });
            document.querySelectorAll('.codigo').forEach((element) => {
                element.classList.remove('ligth-one');
            });
            document.querySelectorAll('.codigo-muestra').forEach((element) => {
                element.classList.remove('ligth');
                element.classList.remove('ligth-border');
            });
            document.querySelectorAll('.salida').forEach((element) => {
                element.classList.remove('ligth-border');
            });
            document.querySelectorAll('.cont').forEach((element) => {
                element.classList.remove('ligth-one');
            });
            document.querySelectorAll('.p').forEach((element) => {
                element.classList.remove('dark-text');
            });
        }
    }, [estado]);

    return (
        <div className="inicio">
            <div className="referencias paddingB">
                <a className="underline">Aprende react<i><MdKeyboardArrowRight /></i></a>
                <a className="underline">Inicio rápido<i><MdKeyboardArrowRight /></i></a>
            </div>
            <div className="contenedor">
                <h1 className="title-inicio paddingT paddingB">Inicio rápido</h1>
                <h3 className="text paddingT paddingB2">¡Bienvenido a la documentación de React! Esta página te dará una introducción al 80% de los conceptos de React que usarás a diario.</h3>
                <div className="learn">
                    <h2 className="paddingT">Aprenderás</h2>
                    <ul>
                        <li>Cómo crear y anidar componentes</li>
                        <li>Cómo añadir marcado y estilos</li>
                        <li>Cómo mostrar datos</li>
                        <li>Cómo renderizar condicionales y listas</li>
                        <li>Cómo responder a eventos y actualizar la pantalla</li>
                        <li>Cómo compartir datos entre componentes</li>
                    </ul>
                </div>
                <h1 className="title-sm paddingT2 paddingB">Crear y anidar componentes</h1>
                <h3 className="text-sm">Las aplicaciones de React están hechas a partir de componentes. Un componente es una pieza de UI (siglas en inglés de interfaz de usuario) que tiene su propia lógica y apariencia. Un componente puede ser tan pequeño como un botón, o tan grande como toda una página
                </h3>
                <h3 className="text-sm paddingT paddingB2">Los componentes de React son funciones de JavaScript que retornan marcado (markup):</h3>
                <div className="codigo">
                    <p className="p"><span className="azul">function&nbsp;</span><span className="verde">MyButton</span><span>() {'{'}</span></p>
                    <p className="p">&nbsp;&nbsp;<span className="azul">return</span> (</p>
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<button>'}</span>I am a button<span className="amarillo">{'</button>'}</span></p>
                    <p className="p">&nbsp;&nbsp;);</p>
                    <p className="p">{'}'}</p>
                </div>
                <h3 className="text-sm paddingT2 paddingB2">Ahora que has declarado <span className="gris">MyButton</span>, puedes anidarlo en otro componente:</h3>
                <div className="codigo">
                    <p className="p"><span className="azul">export default function</span><span className="verde">&nbsp;MyApp</span>() {'{'}</p>
                    <p className="p">&nbsp;&nbsp;<span className="azul">return</span> (</p>
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<div>'}</span></p>
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<h1>'}</span>Welcome to my app<span className="amarillo">{'</h1>'}</span></p>
                    <p className="p resalto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="verde">{'<MyNutton />'}</span></p> 
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'</div>'}</span></p>
                    <p className="p">&nbsp;&nbsp;);</p>
                    <p className="p">{'}'}</p>
                </div>
                <h3 className="text-sm paddingT2 paddingB">Nota que <span className="gris">{'<MyButton/>'}</span>, empieza con mayúscula. Así es como sabes que es un componente de React. Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.</h3>
                <h3 className="text-sm paddingB2">Mira el resultado:</h3>
                <div className="muestra">
                    <div className="cont-app"><h3 className="paddingL app">App.js</h3></div>
                    <div className="separador">
                        <div className="codigo-muestra">
                            <p className="p">1&nbsp;&nbsp;<span className="azul">function&nbsp;</span><span className="verde">MyButton</span><span>() {'{'}</span></p>
                            <p className="p">2&nbsp;&nbsp;&nbsp;&nbsp;<span className="azul">return</span> (</p>
                            <p className="p">3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<button>'}</span>I am a button<span className="amarillo">{'</button>'}</span></p>
                            <p className="p">4&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                            <p className="p">5&nbsp;&nbsp;{'}'}</p>
                            <p className="p">6&nbsp;&nbsp;</p>
                            <p className="p">7&nbsp;&nbsp;<span className="azul">export default function</span><span className="verde">&nbsp;MyApp</span>() {'{'}</p>
                            <p className="p">8&nbsp;&nbsp;&nbsp;&nbsp;<span className="azul">return</span> (</p>
                            <p className="p">9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<div>'}</span></p>
                            <p className="p">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<h1>'}</span>Welcome to my app<span className="amarillo">{'</h1>'}</span></p>
                            <p className="p">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="verde">{'<MyNutton />'}</span></p> 
                            <p className="p">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'</div>'}</span></p>
                            <p className="p">13&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                            <p className="p">14&nbsp;&nbsp;{'}'}</p>
                        </div>
                        <div className="salida">
                            <div className="cont">
                                <h1>Welcome to my app</h1>
                                <button>I am a button</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-sm paddingT2">Las palabras clave <span className="gris">export default</span> especifican el componente principal en el archivo. Si no estás familiarizado con alguna parte de la sintaxis de JavaScript, <span className="azulin">MDN</span> y <span className="azulin">javascript.info</span> tienen magníficas referencias.</h3>
                <h1 className="title-sm paddingT paddingB">Escribir marcado con JSX</h1>
                <h3 className="text-sm">La sintaxis de marcado que viste arriba se llama JSX. Es totalmente opcional, pero la mayoría de los proyectos de React usan JSX por la comodidad que ofrece. Todas las <span className="azulin">herramientas que recomendamos para el desarrollo local</span> son compatibles con JSX sin ningún tipo de configuración.</h3>
                <h3 className="text-sm paddingT paddingB2">JSX es más estricto que HTML. Tienes que cerrar etiquetas como <span className="gris">{'<br />'}</span>. Tu componente tampoco puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como <span className="gris">{'<div>...</div>'}</span> o en un envoltorio vacío <span className="gris">{'<>...</>'}</span>:</h3>
                <div className="codigo">
                    <p className="p"><span className="azul">function</span><span className="verde">&nbsp;AboutPage</span>() {'{'}</p>
                    <p className="p">&nbsp;&nbsp;<span className="azul">return</span> (</p>
                    <p className="p resalto">&nbsp;&nbsp;&nbsp;&nbsp;{'<>'}</p>
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<h1>'}</span>Welcome to my app<span className="amarillo">{'</h1>'}</span></p>
                    <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="amarillo">{'<p>'}</span>Hello there.<span className="amarillo">{'<br />'}</span>How do you do?<span className="amarillo">{'</p>'}</span>&nbsp;&nbsp;</p> 
                    <p className="p resalto">&nbsp;&nbsp;&nbsp;&nbsp;{'</>'}</p>
                    <p className="p">&nbsp;&nbsp;);</p>
                    <p className="p">{'}'}</p>
                </div>
                <h3 className="text-sm paddingT2">Si tienes mucho HTML que convertir a JSX, puedes utilizar un <span className="azulin">convertidor en línea</span>.</h3>
            </div>
        </div>
    );
}

export default Inicio;