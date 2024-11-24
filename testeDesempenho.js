function medirTempoExecucao(func) {
    const inicio = performance.now();
    func();
    const fim = performance.now();
    return fim - inicio;
}

// Executa ambos os algoritmos
const tempoOriginal = medirTempoExecucao(() => /* algoritmo original */);
const tempoOtimizado = medirTempoExecucao(gerarNumerosMegaSena);

const economia = ((tempoOriginal - tempoOtimizado) / tempoOriginal) * 100;
console.log(`A versão otimizada é ${economia.toFixed(2)}% mais rápida.`);
