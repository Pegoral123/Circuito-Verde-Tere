import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, Footprints } from 'lucide-react';
import type { Parque } from '../types';
import StatusBadge from './StatusBadge';

interface ParqueCardProps {
  parque: Parque;
}

export default function ParqueCard({ parque }: ParqueCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{parque.nome}</h3>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{parque.descricao}</p>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{parque.localizacao}</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
        >
          <Footprints className="w-5 h-5" />
          Ver Trilhas ({parque.trilhas.length})
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-3 border-t pt-4">
            {parque.trilhas.map((trilha) => (
              <div
                key={trilha.id}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{trilha.nome}</h4>
                  <StatusBadge status={trilha.status} />
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>📏 {trilha.extensao_km} km</span>
                  <span>⛰️ {trilha.dificuldade}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
