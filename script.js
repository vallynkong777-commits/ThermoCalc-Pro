let chart;

function calculer(){

let s = +document.getElementById("surface").value;
let u = +document.getElementById("u").value;
let t = +document.getElementById("temp").value;
let d = +document.getElementById("debit").value;
let p = +document.getElementById("ponts").value;

let parois = s*u*t;
let vent = d*0.34*t;
let total = parois + vent + p;

document.getElementById("total").innerText = total + " W";

/* GRAPH */
let ctx = document.getElementById("chart");

if(chart) chart.destroy();

chart = new Chart(ctx,{
type:"doughnut",
data:{
labels:["Parois","Ventilation","Ponts"],
datasets:[{
data:[parois,vent,p]
}]
}
});

}

/* CHAT */
document.getElementById("chatBtn").onclick = () => {
let box = document.getElementById("chatBox");
box.style.display = box.style.display==="none"?"block":"none";
};

function send(){
let msg = document.getElementById("msg").value;
let chat = document.getElementById("chatContent");

chat.innerHTML += "<p>Toi: "+msg+"</p>";
chat.innerHTML += "<p>IA: Vérifie isolation + ventilation.</p>";
}
