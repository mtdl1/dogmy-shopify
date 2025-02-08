import { ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function Beneficios() {
  return (
    <section className="container mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
      <div className="border border-orange-400 rounded-lg p-4 flex items-start justify-center flex-wrap gap-2">
        <TruckIcon className="h-8 w-full" />
        <div>
          <h2 className="text-xl text-center font-semibold">Frete Grátis</h2>
          <p className="text-base text-center">Para todo o Brasil</p>
        </div>
      </div>
      <div className="border border-orange-400 rounded-lg p-4 flex items-start justify-center flex-wrap gap-2">
        <ShieldCheckIcon className="h-8 w-full" />
        <div>
          <h2 className="text-xl text-center font-semibold">5% off no Pix</h2>
          <p className="text-base text-center">Economize ainda mais</p>
        </div>
      </div>
      <div className="border border-orange-400 rounded-lg p-4 flex items-start justify-center flex-wrap gap-2">
        <ShieldCheckIcon className="h-8 w-full" />
        <div>
          <h2 className="text-xl text-center font-semibold">Compras 100% seguras</h2>
          <p className="text-base text-center">Proteção de dados garantida</p>
        </div>
      </div>
    </section>
  );
}