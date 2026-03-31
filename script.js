// Calcul thermique
function calculer() {
  let surface = document.getElementById("surface").value;
  let u = document.getElementById("u").value;
  let temp = document.getElementById("temp").value;

  let perte = surface * u * temp;

  document.getElementById("resultat").innerText =
    "Déperdition thermique : " + perte + " W";
}

// Ouvrir/Fermer chat
function toggleChat() {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

// Simulation IA
function envoyer() {
  let input = document.getElementById("userInput");
  let chat = document.getElementById("chatContent");

  let userMsg = input.value;

  chat.innerHTML += "<p><b>Toi:</b> " + userMsg + "</p>";

  let reponse = "Je suis ton assistant thermique 🤖. Vérifie les coefficients U et la ventilation.";

  chat.innerHTML += "<p><b>IA:</b> " + reponse + "</p>";

  input.value = "";
}
