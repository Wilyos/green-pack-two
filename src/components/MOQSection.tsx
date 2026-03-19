import { motion } from 'framer-motion';

const MOQSection = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto bg-secondary rounded-4xl p-12 md:p-20 text-center text-secondary-foreground relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[120px] opacity-20" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Icopor vs papel: que quieres que cuente tu empaque</h2>
        <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-3xl mx-auto">
          Detras de cada caja que sale de tu negocio hay una historia. Esta comparacion te ayuda a elegir si esa historia habla de icopor que se acumula y contamina o de papel que se percibe mas responsable.
        </p>

        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary-foreground/60">Cajas de icopor</p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-secondary-foreground/90">
              <li>Reciclaje posconsumo limitado en la mayoria de contextos.</li>
              <li>No es biodegradable y suele terminar en acumulacion o disposicion final.</li>
              <li>Transmite una imagen menos alineada con practicas responsables y con lo que muchos clientes ya esperan ver de una marca.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/10 p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Empaque kraft o maulle</p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-secondary-foreground">
              <li>Reciclable cuando esta limpio y seco.</li>
              <li>Facilita la separacion en la fuente y la recuperacion de material.</li>
              <li>Fortalece la imagen de marca responsable y moderna, y te acerca al tipo de empaque que tus clientes quieren ver.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 w-full max-w-xs mx-auto px-8 py-4 bg-secondary-foreground/10 backdrop-blur-md rounded-2xl border border-secondary-foreground/10">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Pedido minimo para migrar</span>
          <div className="text-4xl md:text-5xl font-black mt-2">1.000 unidades</div>
        </div>
      </motion.div>
    </section>
  );
};

export default MOQSection;
