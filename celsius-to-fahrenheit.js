/* celsius-to-fahrenheit.js */
const converters = require ('./converters.js');
return celsius * (9/5) + 32;
 
 // Pega a 3ª entrada de uma lista de argumentos
const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} graus Celsius = ${fahrenheitValue} graus Fahrenheit`);