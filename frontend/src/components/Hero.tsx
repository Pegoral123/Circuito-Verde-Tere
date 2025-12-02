export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Descubra a Beleza dos
          <br />
          <span className="text-emerald-300">
            Parques Nacionais de Teresópolis
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Explore trilhas incríveis, conecte-se com a natureza e viva aventuras
          inesquecíveis
        </p>
      </div>
    </section>
  );
}
