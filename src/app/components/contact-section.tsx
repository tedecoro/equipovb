'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMapPin, IconBrandWhatsapp, IconMail, IconPhone, IconNavigation } from '@tabler/icons-react';

const locations = [
  { 
    id: 'villa-crespo',
    address: 'Padilla 869 4C, Villa Crespo, CABA', 
    type: 'principal',
    label: 'Villa Crespo',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168875035394!2d-58.43852!3d-34.59828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6f1a2551e9%3A0x8f5f4e4b7b8c3d2a!2sPadilla%20869%2C%20CABA!5e0!3m2!1ses!2sar!4v1704067200000',
    color: 'from-emerald-500 to-teal-600'
  },
  { 
    id: 'caballito',
    address: 'Francisco Seguí 535, Caballito, CABA', 
    type: 'sucursal',
    label: 'Caballito',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.866896774765!2d-58.44076!3d-34.62268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca44d7a9b1b3%3A0x7b8c3d2a8f5f4e4b!2sFrancisco%20Segu%C3%AD%20535%2C%20CABA!5e0!3m2!1ses!2sar!4v1704067200000',
    color: 'from-sky-500 to-blue-600'
  },
  { 
    id: 'olivos',
    address: 'Av. Maipú 355, Olivos, Vicente López', 
    type: 'sucursal',
    label: 'Olivos',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.4389651078824!2d-58.4895!3d-34.5084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1b7b8c3d2a1%3A0x4f5f4e4b7b8c3d2a!2sAv.%20Maip%C3%BA%20355%2C%20Olivos!5e0!3m2!1ses!2sar!4v1704067200000',
    color: 'from-violet-500 to-purple-600'
  },
  { 
    id: 'zona-oeste',
    address: 'Zona Oeste, Buenos Aires', 
    type: 'sucursal',
    label: 'Zona Oeste',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52482.63369047854!2d-58.7834!3d-34.6832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc954b2f5c3d2a%3A0x7b8c3d2a8f5f4e4b!2sZona%20Oeste%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1704067200000',
    color: 'from-amber-500 to-orange-600'
  }
];

export default function ContactSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white" id="contacto">
      <div className="container px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <IconMapPin className="w-4 h-4" />
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Estamos cerca de vos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 sedes estratégicamente ubicadas para brindarte la mejor atención
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Info & Location Selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-900/5 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Contacto rápido</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="https://wa.me/5491140487780"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconBrandWhatsapp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Escribir por WhatsApp</p>
                      <p className="text-green-100 text-sm">Respuesta inmediata</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <IconPhone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">11 4048-7780</p>
                      <p className="text-gray-500 text-sm">Lun a Vie 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <IconMail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">info@equipovb.com</p>
                      <p className="text-gray-500 text-sm">Consultas generales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Selector */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <IconNavigation className="w-5 h-5 text-emerald-600" />
                  Seleccioná una sede
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {locations.map((loc) => (
                    <motion.button
                      key={loc.id}
                      onClick={() => setActiveLocation(loc)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative p-4 rounded-2xl text-left transition-all duration-300 ${
                        activeLocation.id === loc.id
                          ? `bg-gradient-to-r ${loc.color} text-white shadow-xl`
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          activeLocation.id === loc.id ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {loc.type === 'principal' ? 'Principal' : 'Sucursal'}
                        </span>
                        {activeLocation.id === loc.id && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                      <p className={`font-semibold text-sm ${
                        activeLocation.id === loc.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {loc.label}
                      </p>
                      <p className={`text-xs mt-1 line-clamp-2 ${
                        activeLocation.id === loc.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {loc.address}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* Right: Interactive Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gray-100 rounded-3xl h-[500px] overflow-hidden shadow-2xl shadow-gray-900/10">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeLocation.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={activeLocation.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(15%) contrast(1.02)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </AnimatePresence>
                
                {/* Location Badge Overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activeLocation.color} flex items-center justify-center flex-shrink-0`}>
                          <IconMapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 truncate">{activeLocation.label}</p>
                          <p className="text-sm text-gray-600 truncate">{activeLocation.address}</p>
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 bg-gradient-to-r ${activeLocation.color} text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity flex-shrink-0`}
                        >
                          Cómo llegar
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Map Legend */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                  <span>Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                  <span>Caballito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
                  <span>Olivos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                  <span>Zona Oeste</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
