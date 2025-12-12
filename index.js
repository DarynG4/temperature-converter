/**
 * celsius = (fahrenheit - 32) * (5 / 9)
 * @param {number} temperature in fahrenheit
 * @returns {number} the given temperature now converted to celsius
 */
function convertToCelsius(fahrenheit) {
  //   let celsius = (fahrenheit - 32) * (5 / 9);
  return (fahrenheit - 32) * (5 / 9);
}
/**
 * if temperature in celsius is < 0 then it is very cold
 * if temperature in celsius is < 20 then it is cold
 * if temperature in celsius is < 30 then it is warm
 * if temperature in celsius is < 40 then it is hot
 * if temperature in celsius is >= 40 then it is very hot
 * @param {number} temperature in fahrenheit
 * @returns {string} a description of the temperature according to celsius
 */
function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);
  let description = "";
  if (celsius < 0) {
    description = `It is very cold`;
  } else if (celsius < 20) {
    description = `It is cold`;
  } else if (celsius < 30) {
    description = `It is warm`;
  } else if (celsius < 40) {
    description = `It is hot`;
  } else if (celsius >= 40) {
    description = `It is very hot`;
  }
  return `${fahrenheit}°F is ${celsius}°C. ${description}`;
}

let fahrenheit = prompt("What is your current temperature in Fahrenheit?");
let description = describeTemperature(fahrenheit);
alert(description);
