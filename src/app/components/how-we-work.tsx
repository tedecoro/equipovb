'use client';

import { motion } from 'framer-motion';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Escuchamos',
      desc: 'Diagnosticamos las necesidades de tu consorcio'
    },
    {
      number: '02',
      title: 'Planificamos',
      desc: 'Diseñamos un plan de trabajo personalizado'
    },
    {
      number: '03',
      title: 'Gestionamos',
      desc: 'Coordinamos con profesionales y proveedores'
    },
    {
      number: '04',
      title: 'Informamos',
      desc: 'Reportes claros y comunicación constante'
    }
  ];

  return (
    <section className="py-20 bg-white" id="como-trabajamos">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
            CÓMO TRABAJAMOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Un proceso claro y simple
          </h2>
          <p className="text-sm text-gray-500">
            Así como gestionamos su tranquilidad
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-gray-900">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
