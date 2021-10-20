let produtos = [[100,101,102,103,104,105],[1.2, 1.3, 1.5, 1.2, 1.3, 1]] 

let prod = document.getElementById("btn")

prod.onclick = function() {
  let cod = parseFloat(document.getElementById("codProd").value)
  let qtd = parseFloat(document.getElementById("qtd").value)
  let preco
  for(let i = 0; i < produtos[0].length; i++) {
    if(cod == produtos[0][i]) {
      preco = produtos[1][i] * qtd
    }
  }
  msg = "O preço a pagar é de " + preco.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " reais."
  document.getElementById("resultado").textContent = msg
}