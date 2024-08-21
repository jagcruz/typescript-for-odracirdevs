type StrNumbArray = (string | number)[];

const array1 = ['Ricardo', 123];

function stringNumbers(array: StrNumbArray) {
    array.forEach(item => {
        if (typeof item === 'string') {
            console.log('Es un string:', item);
        } else {
            console.log('Es un number:', item);
        }
    });
}

stringNumbers(array1);
