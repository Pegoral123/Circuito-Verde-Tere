import type { Parque, Evento, Novidade, Trilha } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api';

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { 'Accept': 'application/json' },
  });
  if (!response.ok) throw new Error(`Erro ao buscar ${url}: ${response.status}`);
  return response.json();
}

export const api = {
  async getParques(): Promise<Parque[]> {
    return fetchJson<Parque[]>(`${API_BASE_URL}/parques/`);
  },

  async getTrilhas(): Promise<Trilha[]> {
    return fetchJson<Trilha[]>(`${API_BASE_URL}/trilhas/`);
  },

  async getEventos(): Promise<Evento[]> {
    return fetchJson<Evento[]>(`${API_BASE_URL}/eventos/`);
  },

  async getNovidades(): Promise<Novidade[]> {
    return fetchJson<Novidade[]>(`${API_BASE_URL}/novidades/`);
  },
};
