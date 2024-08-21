/**
 * Devuelve true si las palabras son anagramas
 *
 * @param word1 Palabra 1
 * @param word2 Palabra 2
 * @returns `true` si es un anagrama, `false` si no lo es
 */
export function isAnagram(word1: string, word2: string) {
    if (word1 === word2) return false;

    let sortWord1 = word1.toLowerCase().split('').sort().join('');
    let sortWord2 = word2.toLowerCase().split('').sort().join('');

    return sortWord1 === sortWord2;
}
