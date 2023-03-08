function calcular() {
    const valorTotal = parseFloat(document.getElementById('valor').value);
    const parcelas = [
      {n: 1, juros: 0},
      {n: 2, juros: 4.51},
      {n: 3, juros: 6.04},
      {n: 4, juros: 7.59},
      {n: 5, juros: 9.15},
      {n: 6, juros: 10.72},
      {n: 7, juros: 12.31},
      {n: 8, juros: 13.92},
      {n: 9, juros: 15.54},
      {n: 10, juros: 17.17},
      {n: 11, juros: 18.82},
      {n: 12, juros: 20.48},
    ];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.style.display = 'block';
    parcelas.forEach((parcela) => {
      const valorParcela = (valorTotal * (1 + parcela.juros / 100)) / parcela.n;
      const valorTotalParcela = valorParcela * parcela.n;
      const div = document.createElement('div');
      div.innerHTML = `Em ${parcela.n}x de ${valorParcela.toFixed(2)} com juros de ${parcela.juros.toFixed(2)}% onde o valor total a ser pago é de R$ ${valorTotalParcela.toFixed(2)}<br><br>`;
      resultado.appendChild(div);
    });
  }