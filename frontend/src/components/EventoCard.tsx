import { Calendar, MapPin } from 'lucide-react';
import type { Evento } from '../types';

interface EventoCardProps {
  evento: Evento;
}

export default function EventoCard({ evento }: EventoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{evento.titulo}</h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
          <span className="text-sm">{formatDate(evento.data)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
          <span className="text-sm">{evento.local}</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm">{evento.descricao}</p>
    </div>
  );
}
