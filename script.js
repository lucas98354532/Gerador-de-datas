
// 1. Dias: Contagem progressiva (1 até 31)
const diaSelect = document.getElementById("dia");

for (let i = 1; i <= 31; i++) {
    let opt = document.createElement('option');
    opt.textContent = i;
    diaSelect.appendChild(opt);
}
const mesSelect = document.getElementById("mes");
const meses = ["Janeiro", "Fevereiro", "Março", "Abril" , "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for (let i = 0; i < meses.length; i++) {
    // Lógica de criação e anexação das opções de mês...
    let opt = document.createElement('option');
    opt.textContent = meses[i];
    mesSelect.appendChild(opt);
    

const anoSelect = document.getElementById("ano");
anoSelect.innerHTML = ""; // Limpa as opções existentes
for (let a = 2026; a >= 1976; a--) {
 
    // Lógica de criação e anexação das opções de ano...
    let opt = document.createElement('option');
    opt.value = a;
    opt.textContent = a;
    anoSelect.appendChild(opt);
  
}




} 
