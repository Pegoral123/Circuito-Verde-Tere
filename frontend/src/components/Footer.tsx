import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold">Parques Nacionais</span>
            </div>
            <p className="text-gray-400">
              Explore a natureza e conecte-se com as maravilhas dos nossos parques nacionais.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#parques" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Parques
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#novidades" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Novidades
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">
              Av. Rotariana, s/n<br />
              Serra dos Órgãos<br />
              contato@parquesnacionais.gov.br
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Parques Nacionais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
