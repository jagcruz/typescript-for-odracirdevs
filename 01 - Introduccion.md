# TypeScript: JavaScript con tipos

![typescript](https://upload.wikimedia.org/wikipedia/commons/thumb/archive/4/4c/20210506173340%21Typescript_logo_2020.svg/120px-Typescript_logo_2020.svg.png)

## ¿Qué es TypeScript?

[TypeScript](https://www.typescriptlang.org) es un lenguaje de programación desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, lo que significa que cualquier programa JavaScript es un programa TypeScript válido. TypeScript añade a JavaScript características como el tipado estático, interfaces, clases, entre otras.

## ¿Por qué TypeScript?

TypeScript añade tipado estático a JavaScript, lo que permite detectar errores en tiempo de compilación. Esto es especialmente útil en proyectos grandes, donde el código es mantenido por muchas personas y es difícil seguir el flujo de datos. Además, TypeScript añade características que no están presentes en JavaScript, como las interfaces y las clases.

## ¿Cómo se compila TypeScript?

TypeScript es un lenguaje de programación que se compila a JavaScript. Esto significa que el código TypeScript es transformado a código JavaScript, que es el que se ejecuta en el navegador. Es importante tener en cuenta que TypeScript no se ejecuta en el navegador, sino que es transformado a JavaScript antes de ser ejecutado. Para compilar un archivo TypeScript, se utiliza el comando `tsc` seguido del nombre del archivo. Por ejemplo, para compilar el archivo `app.ts`, se utiliza el comando `tsc app.ts`.

## ¿Cómo se instala TypeScript?

Primero, es necesario tener instalado Node.js en el sistema. Luego, se instala TypeScript utilizando un gestor de paquetes como `npm`, `yarn` o `pnpm` (este será el que usaremos). Para instalar TypeScript, se utiliza el comando `pnpm add -g typescript`. El flag `-g` indica que TypeScript se instalará de forma global, es decir, estará disponible en todo el sistema. Una vez instalado TypeScript, se puede comprobar la versión instalada utilizando el comando `tsc --version`. Si todo ha ido bien, se mostrará la versión de TypeScript instalada.

También es posible instalar TypeScript de forma local, es decir, que esté disponible solo en el proyecto en el que se está trabajando. Para ello, se utiliza el comando `pnpm add typescript`. En este caso, no se utiliza el flag `-g`, ya que se instalará de forma local en el proyecto. Normalmente se instala como dependencia de desarrollo, por lo que se añade el flag `-D` al comando. Una vez instalado TypeScript de forma local, se puede comprobar la versión instalada utilizando el comando `pnpm list typescript`. Si todo ha ido bien, se mostrará la versión de TypeScript instalada. También se puede comprobar la versión de TypeScript instalada en el proyecto comprobando el archivo `package.json`.

Normalmente, se instala TypeScript de forma local en el proyecto en el que se está trabajando, ya que cada proyecto puede tener una versión diferente de TypeScript. Sin embargo, para propósitos de esta guía, iniciaremos con la instalación global de TypeScript para simplificar el proceso y luego profundizaremos en el uso de forma local.

## ¿Cómo se compila un archivo TypeScript?

Seguro ya te diste cuenta anteriormente o ya sabias que los archivos TypeScript tienen la extensión `.ts`. Para compilar un archivo TypeScript, se utiliza el comando `tsc` seguido del nombre del archivo. Por ejemplo, para compilar el archivo `app.ts`, se utiliza el comando `tsc app.ts`. Si no se especifica un nombre de archivo, TypeScript buscará un archivo llamado `tsconfig.json` en el directorio actual y compilará todos los archivos TypeScript que encuentre en el directorio y sus subdirectorios. El archivo `tsconfig.json` es un archivo de configuración de TypeScript que permite especificar opciones de compilación, como el directorio de salida, los módulos a utilizar, entre otras. Normalmente, se crea un archivo `tsconfig.json` en el directorio raíz del proyecto para especificar las opciones de compilación. No es objetivo de esta guía profundizar en el archivo `tsconfig.json`, pero se recomienda leer la [documentación oficial](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) para más información.

## ¿Cómo se ejecuta un archivo TypeScript?

Una vez que se ha compilado un archivo TypeScript, se obtiene un archivo JavaScript que se puede ejecutar en el navegador o en Node.js. Para ejecutar un archivo JavaScript en el navegador, se puede incluir el archivo en un archivo HTML utilizando la etiqueta `<script>`. Por ejemplo, para incluir el archivo `app.js` en un archivo HTML, se utiliza la siguiente etiqueta:

```html
<script src="app.js"></script>
```

Para ejecutar un archivo JavaScript en Node.js, se utiliza el comando `node` seguido del nombre del archivo. Por ejemplo, para ejecutar el archivo `app.js` en Node.js, se utiliza el comando `node app.js`.
