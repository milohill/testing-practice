export function capitalize(str) {
  if (!str.length || typeof str !== 'string') return;
  return str[0].toUpperCase();
}

export function reverseString(str) {
  if (!str.length || typeof str !== 'string') return;
  return str.split('').reverse().join('');
}

export const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

function convertToUnicode(str) {
  return str.split('').map((el) => el.charCodeAt(0));
}

function shiftUnicode(arr, shiftNumber) {
  const n = shiftNumber % 26; // sanitize
  return arr.map((unicode) => {
    const num = unicode + n;
    if (unicode >= 97 && unicode <= 122) {
      // lower case letters
      return num > 122 ? num - 26 : num;
    }
    if (unicode >= 65 && unicode <= 90) {
      // upper case letters
      return num > 90 ? num - 26 : num;
    }
    return unicode; // skip otherwise such as white space, period, comma, etc
  });
}

function convertToString(arr) {
  return arr.map((el) => String.fromCharCode(el)).join('');
}

export function encodeInCaesarCipher(str, shiftNumber) {
  const unicodeArr = convertToUnicode(str);
  const shiftedArr = shiftUnicode(unicodeArr, shiftNumber);
  const convertedStr = convertToString(shiftedArr);

  return convertedStr;
}

export function analyzeArray(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
