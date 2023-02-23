export function capitalize(str) {
  if (!str.length || typeof str !== 'string') return;
  return str[0].toUpperCase();
}

export function reverseString(str) {
  if (!str.length || typeof str !== 'string') return;
  return str.split('').reverse().join('');
}
