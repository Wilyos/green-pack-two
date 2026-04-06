import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, ArrowRight, Palette, Layers3, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const heroProduct = '/box/box2.png';
const WHATSAPP_NUMBER = '573116111687';

const pricingTiers = [
  { qty: 1000,  price: 900000,  originalPrice: null,    discount: null },
  { qty: 2000,  price: 1440000, originalPrice: 1800000, discount: 20   },
  { qty: 3000,  price: 1890000, originalPrice: 2700000, discount: 30   },
  { qty: 4000,  price: 1800000, originalPrice: 3600000, discount: 50   },
];

const formatCOP = (n: number) =>
  '$' + n.toLocaleString('es-CO');

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sellingPoints = [
    {
      icon: Layers3,
      mobile: 'Nadie postea icopor',
      desktop: 'Nadie postea un icopor: pierdes alcance organico con cada entrega',
    },
    {
      icon: Sparkles,
      mobile: 'Tu marca parece barata',
      desktop: 'El icopor le dice a tu cliente que tu marca no invierte en si misma',
    },
    {
      icon: Palette,
      mobile: 'Tu competencia ya cambio',
      desktop: 'Mientras sigues con icopor, tu competencia ya fideliza con caja personalizada',
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/box/bannerBox2.jpeg"
          alt="Banner de empaque de papel de calidad"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-background" />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-7 max-md:order-2"
        >
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-white/10 text-foreground text-[10px] sm:text-sm font-bold tracking-[0.08em] sm:tracking-wide uppercase shadow-elegant whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="sm:hidden">El icopor le esta costando clientes</span>
            <span className="hidden sm:inline">Cada caja de icopor que entregas es una marca que se ve barata y olvidable</span>
          </div>
          <h1 className="text-[2.25rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.98] [text-wrap:pretty]">
            <span className="block sm:hidden">
              El icopor arruina lo que vendes.
              <span className="text-primary block">Haz que tu marca por fin se vea lo que vale.</span>
            </span>
            <span className="hidden sm:inline">
              El icopor hace ver tu producto barato.{' '}
              <span className="text-primary inline">Deja de regalar mal la primera impresion.</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            <span className="sm:hidden">
              Nadie postea un icopor. Nadie recuerda la marca que llega en un bloque blanco. Tu competencia ya cambio. ¿Tu sigues igual?
            </span>
            <span className="hidden sm:inline">
              Tu cliente decide si vuelve o no en los primeros 10 segundos de abrir el pedido. Si lo que ve es icopor, la respuesta es clara: no vuelve, no postea, no recomienda. Una caja de papel personalizada lo cambia todo.
            </span>
          </p>
          <div className="hidden sm:grid grid-cols-2 gap-3 md:grid-cols-3">
            {sellingPoints.map(({ icon: Icon, mobile, desktop }) => (
              <div
                key={desktop}
                className="rounded-2xl border border-border bg-background/80 backdrop-blur-md px-4 py-4 shadow-elegant"
              >
                <Icon className="text-primary mb-3" size={18} />
                <p className="text-sm font-semibold leading-snug text-foreground">
                  <span className="sm:hidden">{mobile}</span>
                  <span className="hidden sm:inline">{desktop}</span>
                </p>
              </div>
            ))}
          </div>
          {/* Pricing cards — solo mobile */}
          <div className="sm:hidden grid grid-cols-2 gap-2.5">
            {pricingTiers.map(({ qty, price, originalPrice, discount }) => {
              const msg = `Hola estoy interesado en adquirir la promo de ${qty.toLocaleString('es-CO')} empaques de la C1 de papel`;
              const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
              return (
                <div
                  key={qty}
                  className="rounded-2xl border border-white/10 bg-card/90 backdrop-blur-md px-4 py-4 flex flex-col gap-2 shadow-elegant"
                >
                  {discount !== null && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                      -{discount}% off
                    </span>
                  )}
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground leading-tight">
                    {qty.toLocaleString('es-CO')} empaques
                  </p>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Desde</p>
                    <p className="text-[1.35rem] font-bold leading-none text-foreground">
                      {formatCOP(price)}
                    </p>
                    {originalPrice !== null && (
                      <p className="text-xs line-through text-muted-foreground/55 mt-0.5">
                        {formatCOP(originalPrice)}
                      </p>
                    )}
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:brightness-95 transition-all"
                  >
                    Comprar <ArrowRight size={12} />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-glow hover:brightness-95 transition-all flex items-center justify-center gap-2 text-base whitespace-nowrap"
            >
              <span className="sm:hidden">Quiero salvar mi marca</span>
              <span className="hidden sm:inline">Dejar el icopor hoy</span>
              <ArrowRight size={20} />
            </motion.button>
            <div className="flex items-center gap-4 px-2 sm:px-6 text-sm font-medium text-muted-foreground">
              <Plane className="text-primary" size={20} /> Envios nacionales e internacionales
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={targetRef}
          style={{ y: isMobile ? 0 : y }}
          className="relative mt-1 md:mt-0 aspect-[5/6] sm:aspect-square bg-card/70 backdrop-blur-sm rounded-[2rem] md:rounded-4xl flex items-center justify-center overflow-hidden border border-white/10 shadow-elegant max-md:order-1"
        >
          <motion.img
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            src={heroProduct}
            alt="Empaque de papel de calidad personalizable"
            className="absolute inset-0 h-full w-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/28 via-black/8 to-black/30 pointer-events-none" />
          {/* Recuadro de medidas solo en mobile */}
          <div className="absolute inset-x-4 bottom-4 z-30 sm:hidden pointer-events-none">
            <div className="pointer-events-auto rounded-2xl border border-white/18 bg-black/70 px-4 py-3 backdrop-blur-xl shadow-[0_16px_35px_rgba(0,0,0,0.55)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">Medidas de la caja</p>
              <p className="mt-1 text-sm font-semibold text-white leading-snug">
                12 ancho · 13 largo · 8 profundidad
              </p>
            </div>
          </div>
          <div className="absolute left-4 right-4 top-4 z-20 rounded-[1.6rem] border border-white/12 bg-black/62 px-4 py-3 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.35)] sm:left-6 sm:right-auto sm:top-6 sm:max-w-[20rem] sm:px-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgba(34,197,94,0.65)]" />
              El icopor te delata
            </div>
            <p className="mt-2 text-sm sm:text-[15px] font-semibold leading-tight text-white">
              <span className="sm:hidden">Con icopor, tu primera impresion es un fracaso</span>
              <span className="hidden sm:inline">Tu cliente te juzga antes de probar el producto: el icopor les dice que no te importa</span>
            </p>
          </div>
          <div className="hidden md:grid absolute bottom-5 left-5 right-5 z-20 grid-cols-2 gap-3 md:w-64 md:left-auto md:right-6 md:bottom-6">
            <div className="rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md shadow-elegant">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Icopor</div>
              <div className="mt-1 text-sm font-semibold">Te hace ver barato</div>
            </div>
            <div className="rounded-2xl bg-secondary px-4 py-3 text-secondary-foreground shadow-elegant">
              <div className="text-xs uppercase tracking-[0.18em] text-primary/80">C1 de papel</div>
              <div className="mt-1 text-sm font-semibold">Tu marca al nivel que merece</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
