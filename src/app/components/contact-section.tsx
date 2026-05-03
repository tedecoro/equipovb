'use client';

import { motion } from 'framer-motion';
import { IconMapPin, IconBrandWhatsapp, IconMail, IconPhone } from '@tabler/icons-react';

const locations = [
  { address: 'Padilla 869 4C, Villa Crespo, CABA', type: 'principal' },
  { address: 'Francisco Seguí 535, Caballito, CABA', type: 'sucursal' },
  { address: 'Av. Maipú 355, Olivos, Vicente López', type: 'sucursal' },
  { address: 'General Rodríguez', type: 'sucursal' }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                CONTACTO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Estamos cerca
              </h2>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5491140487780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors mb-8"
              >
                <IconBrandWhatsapp className="w-6 h-6" />
                Escribir por WhatsApp
              </a>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <IconPhone className="w-5 h-5" />
                  <span>11 4048-7780</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <IconMail className="w-5 h-5" />
                  <span>info@equipovb.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <IconMapPin className="w-5 h-5" />
                  <span>4 sedes en CABA y GBA</span>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900 mb-3">Nuestras oficinas:</p>
                {locations.map((loc, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className={`w-2 h-2 rounded-full ${loc.type === 'principal' ? 'bg-gray-900' : 'bg-gray-400'}`} />
                    {loc.address}
                    {loc.type === 'principal' && (
                      <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">Principal</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Map with principal location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-gray-100 rounded-2xl h-[400px] overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168875035394!2d-58.43852!3d-34.59828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzUzLjgiUyA1OMKwMjYnMTguNyJX!5e0!3m2!1ses!2sar!4v1609459200000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Overlay to block interaction */}
              <div className="absolute inset-0 pointer-events-none" />
              {/* Principal location badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Padilla 869, Villa Crespo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
