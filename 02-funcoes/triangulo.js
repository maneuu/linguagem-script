function verificaTriangulo(a, b, c) {
  if (!(a + b > c && a + c > b && b + c > a)) {
    return null;
  } else if (a == b && a == c) {
    return "equilateral";
  } else if (a != b && a != c && b != c) {
    return "escaleno";
  } else {
    return "isosceles";
  }
}

console.log(verificaTriangulo(3, 3, 3));
console.log(verificaTriangulo(4, 4, 5));
console.log(verificaTriangulo(5, 6, 7));

console.log(verificaTriangulo(0, 0, 0));
console.log(verificaTriangulo(-1, 2, 3));
console.log(verificaTriangulo(1, -2, 3));
console.log(verificaTriangulo(1, 2, -3));

console.log(verificaTriangulo(1, 2, 3));
