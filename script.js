const dataInicio = new Date("2025-08-07T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas} horas e ${minutos} minutos ao seu lado ❤️`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function tocarMusica() {
  document.getElementById("musica").play();
}

function abrirCarta() {
  document.querySelector(".envelope-container").style.display = "none";
  document.getElementById("carta").style.display = "block";
}
