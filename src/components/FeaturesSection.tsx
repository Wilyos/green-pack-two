import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Recycle } from 'lucide-react';

const features = [
  { icon: <Leaf />, title: "Menos residuos que pesan en la conciencia", desc: "Sabes que el icopor casi siempre termina en la basura o en el entorno. Al migrar tu empaque principal a kraft o maulle, das un paso concreto hacia una gestion mas responsable y menos contaminante." },
  { icon: <Recycle />, title: "Un empaque que puede tener segunda vida", desc: "El papel kraft o maulle puede entrar a rutas de reciclaje cuando esta limpio y seco, lo que aumenta las posibilidades de que el material se aproveche y no se pierda como residuo." },
  { icon: <ShieldCheck />, title: "Tu cliente siente que eligio mejor", desc: "Cada empaque habla por tu marca. Un empaque de papel comunica cuidado, preocupacion por el planeta y te diferencia de quienes siguen entregando en icopor." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Por que usar menos icopor y pasar a papel</h2>
          <p className="text-muted-foreground mt-3">Cambiar icopor por empaque de papel no es solo una decision tecnica: es la forma en que tu negocio le dice a clientes y equipo interno que quiere contaminar menos y hacer las cosas distinto.</p>
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
