const list = [
  "Adilson",
  "Amanda",
  "Assiria",
  "Caio",
  "Crislaine",
  "Deborah",
  "Edna",
  "Eduardo",
  "Filipe",
  "Gabriel",
  "Guilherme",
  "Gustavo",
  "Joice",
  "Juan",
  "Kleiton",
  "Lizandra",
  "Onishi",
  "Rogger",
  "Joice",
  "Sabrina",
  "Stephany",
  "Sheila",
  "Steve",
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
       <h2>Parabéns</h2>
       <p>${list[result]}</p>
   </div>        
   `;
}
