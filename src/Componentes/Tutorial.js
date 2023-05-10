import React from "react";
import { useEffect } from "react";
import "../Css/SectionTutorial.css";
import code from "../Logo/codeSans.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";

function Tutorial(props) {
    const { estado } = props;

    useEffect(() => {
        if (estado === true) {
            document.querySelector('.tutorial').classList.add('ligth');
            document.querySelector('.learn').classList.add('ligth-one');
            document.querySelector('.cont-mostrar').classList.add('ligth-one');
            document.querySelector('.bold').classList.add('ligth-one');
            document.querySelectorAll('.learnTutorial').forEach((element) => {
                element.classList.add('ligth-three');
            });
            document.querySelectorAll('.nota').forEach((element) => {
                element.classList.add('verde-text');
            });
            document.querySelectorAll('.list').forEach((element) => {
                element.classList.add('dark-text');
            });
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
            document.querySelectorAll('.muestra').forEach((element) => {
                element.classList.add('ligth');
                element.classList.add('ligth-border');
            });
            document.querySelectorAll('.cont').forEach((element) => {
                element.classList.add('ligth-one');
            });
            document.querySelectorAll('.p').forEach((element) => {
                element.classList.add('dark-text');
            }); 
        } else if (estado === false) {
            document.querySelector('.tutorial').classList.remove('ligth');
            document.querySelector('.learn').classList.remove('ligth-one');
            document.querySelector('.cont-mostrar').classList.remove('ligth-one');
            document.querySelector('.bold').classList.remove('ligth-one');
            document.querySelectorAll('.learnTutorial').forEach((element) => {
                element.classList.remove('ligth-three');
            });
            document.querySelectorAll('.nota').forEach((element) => {
                element.classList.remove('verde-text');
            });
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
            document.querySelectorAll('.muestra').forEach((element) => {
                element.classList.remove('ligth');
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
        <div className="tutorial">
            <div className="referencias paddingB">
                <a className="underline">Aprende react<i><MdKeyboardArrowRight /></i></a>
                <a className="underline">Inicio rápido<i><MdKeyboardArrowRight /></i></a>
                <a className="underline">Tres en linea<i><MdKeyboardArrowRight /></i></a>
            </div>
            <h1 className="title-tutorial paddingT paddingB">Tutorial: Tres en línea</h1>
            <h3 className="text paddingT paddingB2">En este tutorial construirás un pequeño juego de Tres en linea. Este tutorial no asume ningún conocimiento previo de React. Las técnicas que aprenderás en el tutorial son fundamentales para crear cualquier aplicación de React, y comprenderlas por completo te dará una comprensión profunda de React.</h3>
            <div className="learnTutorial">
                <div><h2 className="nota"><i className="i"><MdOutlineLibraryBooks /></i>Nota</h2></div>
                <h3 className="title-tutorial-sm">Este tutorial fue diseñado para personas que prefieren aprender haciendo y quieren ver algo tangible de manera rápida. Si prefieres aprender cada concepto paso a paso, comienza con <span className="azulin">Describir la UI.</span></h3>
            </div>
            <div className="contenedor lista">
                <h2 className="text-sm paddingT2">El tutorial se divide en varias secciones:</h2>
                <ul>
                    <li className="text-sm list"><span className="azulin">Configuración para el tutorial</span> te dará un punto de partida para seguir el tutorial.</li>
                    <li className="text-sm list"><span className="azulin">Descripción general</span> te enseñará los fundamentos de React: componentes, props y estado.</li>
                    <li className="text-sm list"><span className="azulin">Completar el juego</span> te enseñará las técnicas más comunes en el desarrollo de React.</li>
                    <li className="text-sm list"><span className="azulin">Agregar viajes en el tiempo</span> te brindará una visión más profunda de las fortalezas únicas de React.</li>
                </ul>
            </div>
            <div className="contenedor">
                <h2 className="title-sm paddingT paddingB">¿Qué estás construyendo?</h2>
                <h2 className="text-sm paddingB">En este tutorial, crearás un juego interactivo de Tres en línea con React.</h2>
            </div>
            <div className="configuración">
                <h2 className="title-sm paddingB">Configuración para el tutorial</h2>
                <h2 className="text-sm paddingB2">En el editor de código en vivo a continuación, haz clic en Fork en la esquina superior derecha para abrir el editor en una nueva pestaña usando el sitio web CodeSandbox. CodeSandbox te permite escribir código en su navegador e inmediatamente ver cómo sus usuarios verán la aplicación que ha creado. La nueva pestaña debería mostrarte un cuadrado vacío y el código de inicio para este tutorial.</h2>
            </div>
            <div className="muestra">
                <div><h3 className="paddingL app">App.js</h3></div>
                <div className="separador">
                    <div className="codigo-muestra">
                        <p className="p">1&nbsp;&nbsp;
                            <span className="azul">export default function&nbsp;</span>
                            <span className="verde">Square</span>{'() {'}
                        </p>
                        <p className="p">2&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="azul">return&nbsp;</span>
                            <span className="amarillo">{'<button'}&nbsp;</span>
                            <span className="azul">className</span>=
                            <span className="morado">"square"</span><span className="amarillo">{'>'}</span>X
                            <span className="amarillo">{'</button>'}</span>;&nbsp;&nbsp;
                        </p>
                        <p className="p">3&nbsp;&nbsp;{'}'}</p>
                        <p></p><p></p><p></p><p></p><p></p>
                    </div>
                    <div className="salida">
                        <div className="cont">
                            <button className="square">X</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor paddingT2 paddingB2">  
                <div className="learnTutorial">
                    <div><h2 className="nota"><i><MdOutlineLibraryBooks /></i>Nota</h2></div>
                    <h3 className="title-tutorial-sm">También puedes seguir este tutorial utilizando tu entorno de desarrollo local. Para hacer esto, necesitas:</h3>
                    <h3 className="text-sm paddingL">1. Instalar <span className="azulin">Node.js</span></h3>
                    <h3 className="text-sm paddingL">2. En la pestaña CodeSandbox que abriste anteriormente, presiona el botón de la esquina superior izquierda para abrir el menú y luego selecciona Archivo {'>'} Exportar a ZIP en ese menú para descargar un archivo comprimido de los archivos que necesitaras para realizar este tutorial.</h3>
                    <h3 className="text-sm paddingL">3. Descomprime el archivo, luego abre la terminal y digita cd en el directorio que descomprimiste</h3>
                    <h3 className="text-sm paddingL">4. Instala las dependencias con el comando <span className="gris">npm install</span></h3>
                    <h3 className="text-sm paddingL">5. Ejecuta el comando <span className="gris">npm start</span> para iniciar un servidor local y sigue las indicaciones para ver el código que se ejecuta en un navegador</h3>
                    <h3 className="text-sm paddingT">Si te quedas atascado, ¡no dejes que esto te detenga! Siga en línea en su lugar e intenta una configuración local nuevamente más tarde.</h3>
                </div>
            </div>
            <div className="contenedor">
                <h2 className="title-sm paddingB">Descripción general</h2>
                <h2 className="text-sm paddingBb">Ahora que está configurado, veamos una descripción general de React.</h2>
            </div>
            <div className="contenedor">
                <h2 className="title-sm paddingT">Inspeccionar el código de inicio </h2>
                <h2 className="text-sm paddingT">En CodeSandbox verás tres secciones principales:</h2>
            </div>
            <div className="contenedor paddingT paddingB2">
                <img src={code}></img>
                <h3 className="text-sm paddingL paddingT">1. La sección <em>Files</em> con una lista de archivos como <span className="gris">App.js</span>, <span className="gris">index.js</span>, <span className="gris">styles.css</span> y una carpeta llamada <span className="gris">public</span></h3>
                <h3 className="text-sm paddingL">2. El code <em>editor</em> donde verás el código fuente de tu archivo seleccionado</h3>
                <h3 className="text-sm paddingL">3. La sección browser donde verás cómo se mostrará el código que has escrito</h3>
                <h3 className="text-sm paddingL">4. Instala las dependencias con el comando <span className="gris">npm install</span></h3>
                <h3 className="text-sm paddingT">El archivo <span className="gris">App.js</span> debe seleccionarse en la sección Files. El contenido de ese archivo en el  code editor debería ser:</h3>
            </div>
            <div className="codigo">
                <p className="p">
                    <span className="azul">export default function&nbsp;</span>
                    <span className="verde">Square</span>{'() {'}
                </p>
                <p className="p">&nbsp;&nbsp;
                    <span className="azul">return&nbsp;</span>
                    <span className="amarillo">{'<button'}&nbsp;</span>
                    <span className="azul">className</span>=
                    <span className="morado">"square"</span><span className="amarillo">{'>'}</span>X
                    <span className="amarillo">{'</button>'}</span>;&nbsp;&nbsp;
                </p>
                <p className="p">{'}'}</p>
            </div>
            <h3 className="text-sm paddingT2">La sección del <em>browser</em> debería mostrarte un cuadrado con una X como esta:</h3>
            <div className="contenedor paddingT">
                <div className="cont-mostrar">
                    <button className="square">X</button>
                </div>
            </div>
            <h3 className="text-sm paddingT">Ahora echemos un vistazo a los archivos en el código de inicio.</h3>
            <h3 className="text-sm paddingT"><span className="bold">App.js</span></h3>
            <h3 className="text-sm paddingT paddingB2">El código en <span className="gris">App.js</span> crea un component. En React, un componente es una pieza de código reutilizable que representa una parte de una interfaz de usuario. Los componentes se utilizan para representar, administrar y actualizar los elementos de la interfaz de usuario en su aplicación. Miremos el componente línea por línea para ver qué está pasando:</h3>
            <div className="codigo">
                <p className="p resalto">
                    <span className="azul">export default function&nbsp;</span>
                    <span className="verde">Square</span>{'() {'}
                </p>
                <p className="p">&nbsp;&nbsp;
                    <span className="azul">return&nbsp;</span>
                    <span className="amarillo">{'<button'}&nbsp;</span>
                    <span className="azul">className</span>=
                    <span className="morado">"square"</span><span className="amarillo">{'>'}</span>X
                    <span className="amarillo">{'</button>'}</span>;&nbsp;&nbsp;
                </p>
                <p className="p">{'}'}</p>
            </div>
        </div>
    );
}

export default Tutorial;