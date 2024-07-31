

Apuntes de clase
Node.js: Uso de Módulos
Módulos Locales

Para utilizar módulos locales en Node.js, disponemos de dos enfoques principales dependiendo del sistema de módulos:

Con CommonJS: const nombre = require('ruta_del_archivo')
Usando módulos ES (necesario configurar en package.json): import nombre from 'ruta_del_archivo_con_extensión'
Módulos Nativos

Node.js viene equipado con una serie de módulos nativos (por ejemplo, os, fs, path, process, http), que están listos para usarse sin necesidad de instalación previa. Para importarlos eficientemente, es recomendable emplear el prefijo node: al requerirlos o importarlos, mejorando la claridad del código.

Módulos de NPM

La instalación de módulos externos se facilita mediante el comando npm i nombre_de_la_libreria, lo cual:

Crea la carpeta node_modules.
Agrega la sección de dependencias en package.json.
Para instalaciones globales, se utiliza npm install -g nombre_de_la_libreria.
Trabajando con GitHub y Node.js

Es crucial evitar subir la carpeta node_modules a repositorios de GitHub debido a su tamaño. Para ello:

Crea un archivo .gitignore.
Especifica las carpetas y archivos a omitir, como documentos personales o node_modules.
Uso del Caret en package.json

Al instalar un paquete, verás una notación como "inquirer": "^9.2.17". El símbolo ^ indica la aceptación de versiones superiores del paquete. Para mayor control, se recomienda eliminarlo y trabajar con versiones específicas.

Instalación de Dependencias

Las dependencias se deben instalar por proyecto. Cuando se trabaja con proyectos descargados de GitHub o se comparten, es esencial ejecutar npm i para instalar las dependencias necesarias desde node_modules.

Preparando un Proyecto de Node.js para GitHub

Para subir un proyecto a GitHub:

Inicializa el repositorio con git init.
Crea un nuevo repositorio en GitHub y sigue los pasos proporcionados por la plataforma.
Agrega, haz commit y sube tu proyecto con los comandos de Git proporcionados.
En algunos casos, GitHub solicitará tu token de acceso para completar el proceso.
Tarea
Proyecto uno: NODEJ
Proyecto dos: NPM
La Extensión de Archivo .mjs
La extensión .mjs se emplea para archivos de JavaScript que utilizan la sintaxis de módulos ES6 (ECMAScript 2015) o superior. Esta distinción busca ofrecer una señal clara al entorno de ejecución y a los desarrolladores de que el archivo se debe tratar como un módulo ES, facilitando así la organización y el manejo de dependencias en aplicaciones modernas.

Presentaciones
Introduccion
Que es node
Estructura de datos
Arreglos