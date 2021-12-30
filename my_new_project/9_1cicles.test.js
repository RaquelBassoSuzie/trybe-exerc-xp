// let cities = [];

// const addCity = (city) => {
//     cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city)
// };
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// describe('Agrupa o primeiro bloco de testes', () => {
//     beforeEach(() => {
//       cities = ['Pindamonhangaba'];
//     });
    
//     afterEach(() => {
//       cities = [];
//     });
    
//     test('Testa a função addCity dentro do primeiro bloco de testes', () => {
//       expect.assertions(3);
//       addCity('Piraporinha');
//       expect(cities).toHaveLength(2);
//       expect(cities).toContain('Pindamonhangaba');
//       expect(cities).toContain('Piraporinha');
//     });
    
//     test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
//       expect.assertions(2);
//       removeCity('Pindamonhangaba');
//       expect(cities).not.toContain('Pindamonhangaba');
//       expect(cities).toHaveLength(0);
//     });
//   });
  
//   describe('Agrupa o segundo bloco de testes', () => {
//     beforeEach(() => {
//       cities = ['Tangamandapio'];
//     });
    
//     afterEach(() => {
//       cities = [];
//     });
    
//     test('Testa a função addCity dentro do segundo bloco de testes', () => {
//       expect.assertions(3);
//       expect(cities).toHaveLength(1);
//       expect(cities).not.toContain('Pindamonhangaba');
//       expect(cities).toContain('Tangamandapio');
//     });
    
//     test('Testa a função removeCity dentro do segundo bloco de testes', () => {
//       expect.assertions(2);
//       removeCity('Tangamandapio');
//       expect(cities).not.toContain('Pindamonhangaba');
//       expect(cities).toHaveLength(0);
//     });
//   });

 

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(
//       () => console.log("Returned planet: ", mars),
//     4000);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

