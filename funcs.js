export function capitalize(str) {
  if (!str.length || typeof str !== 'string') return;
  return str[0].toUpperCase();
}

export function reverseString(str) {
  if (!str.length || typeof str !== 'string') return;
  const temp1 = str.split(' ');
  const temp2 = temp1.reverse();
  const temp3 = temp2.join(' ');
  return temp3;
}
