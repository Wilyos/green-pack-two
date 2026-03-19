import { motion } from 'framer-motion';

const VisualComparisonSection = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Cuando sigues usando icopor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Dos empaques,{' '}
            <span className="text-primary">dos historias muy distintas</span>.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            La caja de icopor cumple una funcion basica, pero tambien deja una huella: visual, en la mente de tu cliente y en el entorno. El empaque de papel puede contar otra historia, pero primero vale la pena ver que estas comunicando hoy.
          </p>
          <div className="mt-4 rounded-3xl border border-border bg-background/80 p-5 md:p-6 shadow-elegant">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Lo que pasa cuando sigues con icopor</p>
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              <li>Se ve generico: tu marca casi no aparece o se pierde.</li>
              <li>Transmite menos cuidado y puede percibirse como "mas de lo mismo".</li>
              <li>Termina mayoritariamente como residuo de dificil aprovechamiento.</li>
              <li>No conecta con clientes que ya buscan opciones menos contaminantes.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl border border-border/80 bg-card/80 shadow-elegant overflow-hidden"
        >
          <img
            src="/comparativa.png"
            alt="Comparacion visual entre caja de icopor y empaque de papel personalizado"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60" />
          <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
            Icopor
          </div>
          <div className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-glow">
            Empaque de papel protagonista
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualComparisonSection;
