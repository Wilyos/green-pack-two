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
            <span className="text-primary">dos sensaciones para tu cliente</span>.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            La caja de icopor cumple una funcion basica, pero casi nunca dice nada de tu marca. Un empaque de papel bien diseñado puede convertir la entrega en un momento que tus clientes quieren recordar, fotografiar y comentar.
          </p>
          <div className="mt-4 rounded-3xl border border-border bg-background/80 p-5 md:p-6 shadow-elegant">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Lo que pasa cuando sigues con icopor</p>
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              <li>Se ve generico: tu marca casi no aparece o se pierde.</li>
              <li>Da sensacion de bajo costo y poco cuidado en los detalles.</li>
              <li>Es un empaque que el cliente tira rapido; casi nadie quiere mostrarlo.</li>
              <li>Pierdes una oportunidad de reforzar tu marca en cada entrega.</li>
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
            src="/box/box5.png"
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
