¿Qué es Docker?
Docker es una herramienta de creación y administración de “containers” (containerization engine). Lo que nos permite es encapsular nuestra junto a todo lo que necesita para funcionar (aplicaciones externas, base de datos, configuraciones, bibliotecas, entornos, etc) y así ser compatible en todos los sistemas y entornos.
Generalmente se utiliza al momento de pasar al ambiente de producción de una app, o cuando, en etapa de desarrollo, queremos trabajar entre varios desarrolladores.
La que nos propone y provee Docker es correr cualquier software en cualquier hardware.

En esencia tiene el mismo propósito que una “Máquina Virtual” pero con mejor performance.

También, Docker nos permite “aislar entornos” para tener múltiples aplicaciones corriendo en un único servidor, aprovechando mejor los recursos y mejorando la seguridad.

Docker :
Se basa en la virtualización de UN sistema operativo.
Los contenedores son ligeros y no requieren de muchos recursos.
Escalabilidad y aprovisionamiento \* en tiempo real.
Rendimiento nativo.
Aislamiento a nivel de proceso y por lo tanto menos seguro.

Aprovisionamiento : “Proporcionar o poner al alcance de una persona una cosa que necesita.”

Para instalar Docker en Windows nos dirigimos a :
https://docs.docker.com/desktop/windows/install/

Creando un ejemplo sencillo en Node JS
Primero crearemos un proyecto de node vacío con el comando "npm init -y"
Sera importante ya que Docker utilizara el fichero package.json y package.lock.json para conocer que librerias, tecnologias y versiones se estan utilizando en la aplicación.

Para este ejmeplo instalaremos algunas dependencias sencillas :

- Express
- Morgan

Crearemos la carpeta src para desarrollar alli todo lo necesario para que nuestro servidor funcione (index.js,app.js, la carpeta routes y sus utilidades).

Una vez creado una rest api simple comenzaremos a crear nuestro contenedor de Docker.
El primer paso es crear una imagen, pero, ¿qué es una imagen?.
Una imagen es en sí, todo nuestro proyecto guardado con todo lo que necesita para funcionar (comandos, librerias, etc)
Para esto crearemos un fichero de Docker llamado Dockerfile

**_Exitse una extension llamada Docker que nos permitira administar nuestros fickeros Docker con mayor facilidad, otorgandonos autocompletado y ayudas extras_**

Dentro del fichero, debemos especificar todo lo que necesita la app para funcionar en cualquier sistema, iremos enumerandolos con las respectivas sintaxis para que esto funcione.

Entonces, ¿qué necesita nuestra aplicación y como lo especificaremos?

Primero debemos crear un directorio (con la regla WORKDIR /the/workdir/path ) donde se guardara todo lo necesario.

Lo principal para que nuestro proyecto funcione son los ficheros package.json y package-lock.json (si recordamos, allí se alojan todas las especificaciones de nuestro proyecto). Para esto utilizaremos el comando COPY, seguido de los ficheros a copiar.

COPY package*.json ./
(Utilizamos * para que se copien todos los archivos que empiecen por "package" ... y terminen en ".json")
(./ => especificamos que se copiaran en el directorio principal del proyecto)

- Node : FROM node:12
  (Especificamos que nuestro proyecto necesita de node, pero ademas de eso, debemos aclarar EN DONDE LO NECESITA)

Luego de esto, buscamos que mediante "npm install", se instalen todas las dependencias y los "@types/" en caso de estar usando TS

RUN npm install

El siguiente paso es copiar todos los archivos dentro de la carpeta source a nuestro fichero Docker.

COPY . .
(este comando especifica que, se debe copiar todo lo que se encuentre en la carpeta dentro del directorio (WORKDIR /app))

Pero claro, ¿qué debemos hacer con la carpeta de node_modules?
Como es costumbre, la carpeta node_modules debe ser excluida del contenedor, ya que se crea al ejecutar "npm install"
Para esto crearemos otro fichero llamado .dockerignore
Dentro de este, especificaremos todos aquellos archivos que no deseamos subir al contenedor

node_modules
npm-debug.log

Finalmente, queremos que el proyecto se ejecute, para esto utilizaremos un comando llamado "CMD" que recibira una lista "["comando","parametros"]"
Para facilitar la ejecución, crearemos el comando "start" dentro del package.json

"start":"node src/index.js"

Ahora si, llego el momento de crear la imagen del proyecto, para esto, en consola, ejecutaremos el comando "docker build -t node-rest-api ."
(-t => nombre del proyecto, . => que queremos copiar (todo lo que se encuentra en el directorio principal exceptuando lo que se encuentre en .dockerignore))

Esto ejecutara la sentencias que especificamos en el fichero docker, descargando todo lo necesario para que nuestra aplicación funcione.

Nos devolvera el id de la imagen para poder reconocerla facilmente.
Para comprobar si la imagen fue creada correctamente usaremos el comando "docker images", el cual nos devolvera todas las imagenes que hayamos cargado.

Para correr el proyecto usaremos otro comando :
"docker run -it -p 4000:3000 node-rest-api"
(-it => para que nos muestre el proceso de ejecución,

- p4000:3000 => nuestro proyecto se ejecuta en el puerto 3000 por defect, pero especificamos que preferimos el 4000)

¿Cuál es el beneficio de todo esto? Cuando nos encontremos en otro pc que tenga instalado Docker, podremos ejecutar este proyecto incluso si no tenemos instalado node en el mismo (como si de una maquina virtual se tratase).

Algunos comandos extra que pueden ser de utilidad:

- Si quisiera ejecutar el proyecto como servicio (por detras, sin mensajes en consola), utilizaremos "docker run -d -p 4000:3000 node-rest-api".
- Para conocer que servicios o procesos estamos ejecutando usaremos "docker ps".
- Para detener el proceso usaremos "docker stop [id]" => podemos simplemente tipear los primeros tres caracteres del id.
- Para ver el historial de procesos usaremos "docker ps -a".

Docker nos provee documentación parecida a la de npm para cada modulo:
https://hub.docker.com/
