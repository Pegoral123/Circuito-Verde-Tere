export interface Trilha {
  id: number;
  nome: string;
  extensao_km: string;
  dificuldade: string;
  status: 'ABERTA' | 'FECHADA' | 'MANUTENÇÃO';
}

export interface Parque {
  id: number;
  nome: string;
  descricao: string;
  localizacao: string;
  trilhas: Trilha[];
}

export interface Evento {
  id: number;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  parque: number;
}

export interface Novidade {
  id: number;
  titulo: string;
  conteudo: string;
  data_publicacao: string;
  parque: number;
}
