'use client';

import { motion } from 'framer-motion';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

export default function AboutSection() {
  const bullets = [
    'Comunicación clara y constante',
    'Gestión de pagos y deudas eficiente',
    'Soluciones rápidas y efectivas',
    'Enfoque en calidad de vida'
  ];

  return (
    <section className="py-20 bg-[#F2F4F7]" id="nosotros">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Más que administración,<br />
                somos aliados.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                En Equipo VB combinamos experiencia, compromiso y tecnología para brindarle una gestión integral eficiente y transparente.
              </p>

              <ul className="space-y-3 mb-8">
                {bullets.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 m-0"
                  >
                    <div className="w-5 h-5 bg-emerald-600 m-0 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <motion.a
                  href="#presupuesto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25 w-fit"
                >
                  Comenzar Ahora
                  <IconArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#como-trabajamos"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors shadow-lg border border-emerald-100 w-fit"
                >
                  Conocer más
                </motion.a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/images/equipo.jpg"
                  alt="Equipo VB - Administración de consorcios"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-500/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
