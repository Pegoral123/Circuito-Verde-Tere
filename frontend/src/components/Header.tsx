import { Mountain, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Parques Nacionais</h1>
              <p className="text-xs text-gray-600">Serra dos Órgãos</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#parques" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Parques
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Eventos
            </a>
            <a href="#novidades" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Novidades
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
