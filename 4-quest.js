
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  
  function calcularPercentuais(faturamentoPorEstado) {
    
    let faturamentoTotal = 0;
    for (const estado in faturamentoPorEstado) {
      faturamentoTotal += faturamentoPorEstado[estado];
    }
  
    
    const percentual = {};
    for (const estado in faturamentoPorEstado) {
      percentual[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
    }
  
    return percentual;
  }
  const percentual = calcularPercentuais(faturamentoPorEstado);
  for (const estado in percentual) {
    console.log(`${estado}: ${percentual[estado]}%`);
  }
  