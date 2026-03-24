// ============================================================
// Funções utilitárias gerais do projeto
// Adicione aqui funções reutilizáveis
// ============================================================

/**
 * Formata um número como moeda brasileira (R$)
 * Exemplo: 1990.5 → "R$ 1.990,50"
 */
export function formatarPreco(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/**
 * Gera um ID único simples com base em timestamp + número aleatório
 */
export function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Retorna a data atual formatada no padrão brasileiro
 * Exemplo: "24/03/2025"
 */
export function dataAtualFormatada(): string {
  return new Date().toLocaleDateString('pt-BR');
}
