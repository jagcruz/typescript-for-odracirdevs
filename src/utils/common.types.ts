export type Poligono = 'cuadrado' | 'rectangulo' | 'triangulo';
export enum Figura {
    CUADRADO = 'cuadrado',
    RECTANGULO = 'rectangulo',
    TRIANGULO = 'triangulo'
}

/**
 * Tipo de dato para funciones que reciben un solo parámetro y no devuelven nada.
 *
 * @param value Valor del parámetro.
 *
 * @template T Tipo de dato del parámetro.
 */
export type OneParamVoidFunction<T> = (value: T) => void;

/**
 * Tipo de dato para funciones que reciben varios parámetros y no devuelven nada.
 *
 * @param values Valores de los parámetros.
 *
 * @template T Tipo de dato de los parámetros.
 */
export type MultiParamVoidFunction<T> = (...values: T[]) => void;

/**
 * Tipo de dato para funciones que reciben parámetros de tipo `T` y devuelven un valor de tipo `U`.
 *
 * @template T Tipo de dato de los parámetros.
 * @template U Tipo de dato del valor de retorno.
 */
export type GenericFunction<T, U> = (...args: T[]) => U;

/**
 * Tipo de dato para crear diccionarios con claves de tipo `string`.
 *
 * @template T Tipo de dato de los valores.
 */
export type Dictionary<T = unknown> = Record<string, T>;

/**
 * Tipo de dato para valores que pueden ser `null`.
 *
 * @template T Tipo de dato del valor.
 */
export type Nullable<T> = T | null;

/**
 * Tipo de dato para valores que pueden ser `undefined`.
 *
 * @template T Tipo de dato del valor.
 */
export type Optional<T> = T | undefined;

/**
 * Tipo de dato para valores que pueden ser `null` o `undefined`.
 *
 * @template T Tipo de dato del valor.
 */
export type Maybe<T> = Optional<Nullable<T>>;
