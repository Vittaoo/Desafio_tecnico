
const faturamentoJson = `
[
  { "dia": 1, "faturamento": 150.00 },
  { "dia": 2, "faturamento": 0 },
  { "dia": 3, "faturamento": 200.00 },
  { "dia": 4, "faturamento": 0 },
  { "dia": 5, "faturamento": 250.00 },
  { "dia": 6, "faturamento": 0 },
  { "dia": 7, "faturamento": 300.00 },
  { "dia": 8, "faturamento": 0 },
  { "dia": 9, "faturamento": 350.00 },
  { "dia": 10, "faturamento": 0 },
  { "dia": 11, "faturamento": 400.00 }
]
`


function Faturamento(faturamentoJson) {
  
  const faturamento = JSON.parse(faturamentoJson)

  const diasComFaturamento = faturamento.filter(dia => dia.faturamento > 0);
  
  const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento))
  const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento) )
  
  const totalFaturamento = diasComFaturamento.reduce((total, dia ) => total+ dia.faturamento, 0);
  const media = totalFaturamento / diasComFaturamento.length

  const diasAcimaMedia = diasComFaturamento.filter(dia => dia.faturamento > media).length
  return menorFaturamento,maiorFaturamento, diasAcimaMedia

}

const resultado = Faturamento(faturamentoJson)
console.log('MENOR FATURAMENTO: '+resultado.menorFaturamento)
console.log('MAIOR FATURAMENTO: '+ resultado.maiorFaturamento)
console.log('DIAS ACIMA DA MEDIA: ' + resultado.diasAcimaMedia)
