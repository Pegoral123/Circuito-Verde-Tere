import { Clock } from 'lucide-react';
import type { Novidade } from '../types';

interface NovidadeCardProps {
  novidade: Novidade;
}

export default function NovidadeCard({ novidade }: NovidadeCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
        <Clock className="w-4 h-4" />
        <span>{formatDate(novidade.data_publicacao)}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{novidade.titulo}</h3>
      <p className="text-gray-700">{novidade.conteudo}</p>
    </div>
  );
}
