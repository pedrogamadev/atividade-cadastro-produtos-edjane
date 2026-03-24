import AsyncStorage from '@react-native-async-storage/async-storage';

// ============================================================
// Funções genéricas de leitura e gravação no AsyncStorage
// ============================================================

/**
 * Salva um valor serializado como JSON no AsyncStorage
 */
export async function salvar<T>(chave: string, valor: T): Promise<void> {
  const json = JSON.stringify(valor);
  await AsyncStorage.setItem(chave, json);
}

/**
 * Lê e desserializa um valor do AsyncStorage
 * Retorna null se a chave não existir
 */
export async function ler<T>(chave: string): Promise<T | null> {
  const json = await AsyncStorage.getItem(chave);
  if (json === null) return null;
  return JSON.parse(json) as T;
}

/**
 * Remove um item do AsyncStorage pela chave
 */
export async function remover(chave: string): Promise<void> {
  await AsyncStorage.removeItem(chave);
}
