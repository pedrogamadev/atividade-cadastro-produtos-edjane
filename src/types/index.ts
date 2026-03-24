// ============================================================
// Tipos globais do projeto
// Adicione aqui os tipos compartilhados entre telas e componentes
// ============================================================

// Parâmetros de navegação (rotas disponíveis no app)
export type RootStackParamList = {
  Home: undefined;
  // Exemplo: AddProduct: { productId?: string };
};

// Modelo de dados de um Produto
export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUri?: string;
  criadoEm: string;
};

// Categorias disponíveis
export type Categoria = {
  id: string;
  nome: string;
};
