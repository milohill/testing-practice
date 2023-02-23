import { capitalize, reverseString } from './funcs';

// A capitalize function that takes a string and returns it with the first character capitalized.
test('capitalize function', () => {
  expect(capitalize('hello')).toBe('H');
});

// A reverseString function that takes a string and returns it reversed.
test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
});
