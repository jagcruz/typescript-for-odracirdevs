import readline from 'node:readline';

import type { OneParamVoidFunction } from './common.types.js';

/**
 * Crea una interfaz de lectura y escritura para la entrada y salida estándar.
 *
 * @returns Interfaz de lectura y escritura.
 */
export function createReadlineInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

/**
 * Muestra un mensaje en la consola y solicita un valor al usuario, el cual es
 * procesado por una función dada.
 *
 * @param question Mensaje a mostrar.
 * @param cb Función que procesa la respuesta del usuario.
 */
export function promptAndProcess(
    question: string,
    cb: OneParamVoidFunction<string>
) {
    const rl = createReadlineInterface();
    rl.question(`${question} `, value => {
        cb(value);
        rl.close();
    });
}

/**
 * Función de atajo para mostrar mensajes en la consola.
 *
 * @param message Mensaje a mostrar.
 * @param optionalParams Parámetros adicionales a mostrar.
 */
export function log(message?: unknown, ...optionalParams: unknown[]) {
    console.log(message, ...optionalParams);
}

/**
 * Función de atajo para mostrar mensajes de error en la consola.
 *
 * @param message Mensaje a mostrar.
 * @param optionalParams Parámetros adicionales a mostrar.
 */
export function error(message?: unknown, ...optionalParams: unknown[]) {
    console.error(message, ...optionalParams);
}

/**
 * Función de atajo para mostrar mensajes de advertencia en la consola.
 *
 * @param message Mensaje a mostrar.
 * @param optionalParams Parámetros adicionales a mostrar.
 */
export function warning(message?: unknown, ...optionalParams: unknown[]) {
    console.warn(message, ...optionalParams);
}
