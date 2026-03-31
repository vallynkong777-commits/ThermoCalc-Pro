function calculer() {

  let surface = document.getElementById("surface").value;
  let u = document.getElementById("u").value;
  let temp = document.getElementById("temp").value;
  let debit = document.getElementById("debit").value;
  let ponts = document.getElementById("ponts").value;

  let parois = surface * u * temp;
  let ventilation = debit * 0.34 * temp;
  let total = parois + ventilation + Number(ponts);

  document.getElementById("resParois").innerText =
    "Parois : " + parois + " W";

  document.getElementById("resVent").innerText =
    "Ventilation : " + ventilation + " W";

  document.getElementById("resTotal").innerText =
    "Total : " + total + " W";
}

/* CHAT */
function toggleChat() {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function envoyer() {
  let input = document.getElementById("userInput");
  let chat = document.getElementById("chatContent");

  chat.innerHTML += "<p><b>Toi:</b> " + input.value + "</p>";
  chat.innerHTML += "<p><b>IA:</b> Vérifie ton isolation et ton débit d’air.</p>";

  input.value = "";
    }
