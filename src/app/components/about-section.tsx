'use client';

import { motion } from 'framer-motion';
import { IconCheck } from '@tabler/icons-react';

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
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Más que administración,<br />
                somos aliados.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
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
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#como-trabajamos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Conocer más sobre nosotros
              </a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Foto del equipo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
