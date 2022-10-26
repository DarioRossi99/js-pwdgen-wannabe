const nomeSoggetto = prompt("nome");

const cognomeSoggetto = prompt("cognome");

const coloreSoggetto = prompt("colore");

const etaSoggetto = prompt("età");

const upDateUtente = document.getElementById("info-utente");

upDateUtente.innerHTML = (nomeSoggetto + cognomeSoggetto + coloreSoggetto + etaSoggetto)