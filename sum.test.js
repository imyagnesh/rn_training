const sum = (a, b) => a + b;

test('should return 3 when i pass a as 1 and b as 2', () => {
  expect(sum(1, 2)).toBe(3);
});
