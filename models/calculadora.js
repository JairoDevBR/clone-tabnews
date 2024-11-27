function somar(numero1, numero2) {
  if (typeof numero1 === "string" || numero2 === "string") {
    return "Error";
  } else {
    return numero1 + numero2;
  }
}

exports.somar = somar;
