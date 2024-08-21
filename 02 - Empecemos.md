# Empecemos con TypeScript

Dejemos de lado la teoría y comencemos con lo divertido: escribir código. Para ello, a partir de ahora, haremos una pequeña aplicación de Node.js para algunos [retos de JavaScript](https://github.com/odracirdev/retos) hechos en el pasado.

## Creemos nuestro primer proyecto

Para comenzar, crearemos un nuevo proyecto de Node.js utilizando TypeScript. Para ello, abriremos una terminal y ejecutaremos los siguientes comandos:

```bash
pnpm init
pnpm add -D typescript
```

Verificamos que TypeScript se haya instalado correctamente ejecutando alguno de los siguientes comandos:

```bash
pnpm list typescript
pnpm tsc --version
pnpm tsc
```

Si todo ha ido bien, deberíamos ver la versión de TypeScript instalada. Ahora, crearemos un archivo `tsconfig.json` en el directorio raíz del proyecto para ello, ejecutaremos el siguiente comando:

```bash
pnpm tsc --init
```

Este comando creará un archivo `tsconfig.json` con la configuración por defecto. Ahora, crearemos un directorio `src` en el directorio raíz del proyecto y dentro de este directorio crearemos un archivo `index.ts` con el siguiente contenido:

```ts
console.log('Hello, World!');
```

Para compilar el archivo `index.ts`, ejecutaremos el siguiente comando:

```bash
pnpm tsc
```

Este comando compilará el archivo `index.ts` y generará un archivo `index.js` en el directorio `src`. Ahora, ejecutaremos el archivo `index.js` con el siguiente comando:

```bash
node src/index.js
```

Si todo ha ido bien, deberíamos ver el mensaje `Hello, World!` en la terminal. Ahora, hemos creado un proyecto de Node.js utilizando TypeScript.

## Configuraciones finales: Entorno de desarrollo

Para finalizar, configuraremos nuestro entorno de desarrollo para que sea más cómodo trabajar con TypeScript. Para ello, haremos posible que TypeScript compile automáticamente nuestros archivos cada vez que guardemos un cambio. Para ello, abriremos el archivo `tsconfig.json` y agregaremos la siguiente configuración:

```json
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

Con esta configuración, TypeScript compilará los archivos `.ts` del directorio `src` y generará los archivos `.js` en el directorio `dist`. Además, generará los archivos `.map` para poder depurar el código TypeScript. Ahora, para compilar automáticamente los archivos cada vez que guardemos un cambio, ejecutaremos el siguiente comando:

```bash
pnpm tsc --watch
```

Este comando compilará automáticamente los archivos cada vez que guardemos un cambio. Ahora, cada vez que guardemos un cambio en un archivo `.ts`, TypeScript compilará automáticamente el archivo y generará el archivo `.js` correspondiente. Por último, para ejecutar el archivo `index.js`, ejecutaremos el siguiente comando en una terminal diferente:

```bash
node --watch dist/index.js
```

Con esto, Node.js ejecutará el archivo `index.js` y se mantendrá en espera de cambios. Cada vez que guardemos un cambio en un archivo `.ts`, Node.js se reiniciará automáticamente y ejecutará el archivo `index.js` con los cambios realizados. Pero, es muy molesto tener que ejecutar dos comandos cada vez que queremos trabajar en nuestro proyecto. Para solucionar esto, crearemos un script en el archivo `package.json` que nos permitirá ejecutar ambos comandos con un solo comando. Para ello instalarémos el paquete [TSX](https://tsx.is/) con el siguiente comando:

```bash
pnpm add -D tsx
```

Luego abriremos el archivo `package.json` y agregaremos las siguientes configuraciones:

```json
{
  "main": "dist/index.js",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "dev": "node --watch --import tsx src/index.ts",
    "start": "tsc & node dist/index.js",
    "start:alt": "node --import tsx src/index.ts"
  }
}
```

Esto nos resultará en los siguientes comandos:

- `pnpm run build`: Compilará los archivos `.ts` y generará los archivos `.js` en el directorio `dist`.
- `pnpm run dev`: Compilará automáticamente los archivos cada vez que guardemos un cambio y ejecutará el archivo `index.js` con los cambios realizados.
- `pnpm start`: Compilará los archivos `.ts` y generará los archivos `.js` en el directorio `dist`, luego ejecutará el archivo `index.js`.
- `pnpm start:alt`: Ejecutará el archivo `index.js` sin compilar los archivos `.ts`.

Para finalizar, ejecutaremos el siguiente comando para instalar los tipos de Node.js:

```bash
pnpm add -D @types/node
```

Con esto, hemos configurado nuestro entorno de desarrollo para trabajar con TypeScript de una manera más cómoda. Ahora, estamos listos para comenzar a escribir código.
