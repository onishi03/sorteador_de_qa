const list = [
  "Adilson",
  "Amanda",
  "Assíria",
  "Caio",
  "Crislaine",
  "Deborah",
  "Edna",
  "Eduardo",
  "Felipe",
  "Gabriel",
  "Guilherme",
  "Gustavo",
  "Juan",
  "Kleiton",
  "Lizandra",
  "Onishi",
  "Roger",
  "Joice",
  "Sabrina",
  "Stephany",
  "Sheila",
  "Wallace",
];

let escreverVencedor = document.getElementById("vencedor");

function qaNames() {
  const len = list.length;
  //   console.log(len);
  let result = Math.floor(Math.random() * len);
  //   console.log(result);
  escreverVencedor.innerHTML = `
        
    <div class="animate-bottom">
       <h2>Parabéns,</h2>
       <p>${list[result]}</p>
   </div>        
   `;
}
