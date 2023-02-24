import {
  capitalize,
  reverseString,
  calculator,
  encodeInCaesarCipher,
} from './modules';

// A capitalize function that takes a string and returns it with the first character capitalized.
test('capitalize function', () => {
  expect(capitalize('hello')).toBe('H');
});

// A reverseString function that takes a string and returns it reversed.
test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
test('calculator object', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(2, 2)).toBe(1);
});

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
test('caesarCipher function', () => {
  expect(
    encodeInCaesarCipher(
      'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.',
      7
    )
  ).toBe(
    'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.'
  );
});

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.