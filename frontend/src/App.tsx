import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ParqueCard from './components/ParqueCard';
import EventoCard from './components/EventoCard';
import NovidadeCard from './components/NovidadeCard';
import Footer from './components/Footer';
import { api } from './services/api';
import type { Parque, Evento, Novidade } from './types';
import { Loader2 } from 'lucide-react';

function App() {
  const [parques, setParques] = useState<Parque[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [novidades, setNovidades] = useState<Novidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [parquesData, eventosData, novidadesData] = await Promise.all([
          api.getParques(),
          api.getEventos(),
          api.getNovidades(),
        ]);

        setParques(parquesData);
        setEventos(eventosData);
        setNovidades(novidadesData);
      } catch (err) {
        setError('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
        console.error('Erro ao buscar dados:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="parques" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Parques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os parques nacionais e suas trilhas deslumbrantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parques.map((parque) => (
              <ParqueCard key={parque.id} parque={parque} />
            ))}
          </div>
        </section>

        <section id="eventos" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Participe das atividades e eventos especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventos.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        </section>

        <section id="novidades" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Novidades e Avisos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das últimas atualizações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novidades.map((novidade) => (
              <NovidadeCard key={novidade.id} novidade={novidade} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
