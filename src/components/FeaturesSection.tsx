import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Palette } from 'lucide-react';

const features = [
  { icon: <Gift />, title: "Tu caja parece un regalo", desc: "Un empaque de papel bien diseñado se siente como un detalle pensado, no como algo para salir del paso. El momento de abrir la caja genera expectativa y mejora la experiencia." },
  { icon: <Palette />, title: "Tu marca entra a cada casa", desc: "Al imprimir logo, colores y mensajes en la caja, tu marca se queda en la mesa, en la foto y en la memoria del cliente mucho despues de la entrega." },
  { icon: <ShieldCheck />, title: "Mejor percepcion, mejores conversaciones", desc: "Un empaque pensado comunica que te importan los detalles. Eso se traduce en mas reseñas positivas, recomendaciones y ganas de volver a comprar." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Por que tu empaque debe verse de marca</h2>
          <p className="text-muted-foreground mt-3">Tu producto ya hace el trabajo. Ahora el empaque puede hacer algo mas: subir la percepcion de valor, reforzar tu marca en cada entrega y dejar una sensacion que tus clientes quieran compartir.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden p-8 md:p-10 bg-background rounded-[2rem] shadow-elegant border border-border transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0" />
              <div className="absolute right-5 top-5 text-[11px] font-bold tracking-[0.22em] text-muted-foreground">0{i + 1}</div>
              <div className="w-14 h-14 bg-primary/15 text-primary border border-primary/35 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
