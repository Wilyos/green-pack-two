import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Sube mucho el costo si paso de icopor a papel?',
    answer:
      'Depende de tu configuracion, pero en muchos casos el cambio no es tan grande como se piensa. Lo que si cambia de forma clara es la percepcion: un empaque de papel bien diseñado se siente mas cuidado, justifica mejor tu precio y puede ayudarte a construir lealtad en el tiempo.',
  },
  {
    question: '¿El papel realmente se recicla?',
    answer:
      'El papel kraft o maulle puede ser reciclado cuando llega a los puntos de aprovechamiento. No podemos garantizar lo que hace cada operador de residuos, pero elegir un material que puede entrar a estas rutas ya es un paso concreto frente a usar icopor, que tiene opciones mucho mas limitadas.',
  },
  {
    question: '¿Resiste igual que el icopor?',
    answer:
      'Diseñamos el empaque pensando en tu uso real. Para muchos productos, el papel kraft o maulle ofrece una resistencia adecuada para domicilios y punto de venta, con la ventaja adicional de que se ve mejor y se puede personalizar a tu medida.',
  },
  {
    question: '¿Que hago con el inventario de cajas de icopor que ya tengo?',
    answer:
      'No tienes que botarlo ni cambiar de un dia para otro. Podemos ayudarte a planear una transicion ordenada: usas tu inventario actual mientras defines la imagen de tu nuevo empaque de papel y programas el primer pedido minimo.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background/80 border-t border-border/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas frecuentes sobre el cambio a papel</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Resolvemos las dudas mas comunes para que puedas decidir con tranquilidad si es el momento de dejar el icopor y usar mas papel.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-2xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
