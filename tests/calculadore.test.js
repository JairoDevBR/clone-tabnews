const calculadora = require("../models/calculadora");

test("somar 5 + 100 deveria retornar 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar string + 100 deveria retornar Error", () => {
  const resultado = calculadora.somar("string", 100);
  expect(resultado).toBe("Error");
});
