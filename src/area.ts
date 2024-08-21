import { type Poligono, Figura } from './utils/common.types.js';

function area(base: number, altura: number, poli: Figura) {
    if (poli === Figura.CUADRADO && base !== altura) {
        return Number.NaN;
    }

    if (poli === Figura.CUADRADO || poli === Figura.RECTANGULO) {
        return base * altura;
    }

    if (poli === Figura.TRIANGULO) {
        return (base * altura) / 2;
    }

    return Number.NaN;
}

console.log('Area:', area(10, 10, Figura.CUADRADO));
