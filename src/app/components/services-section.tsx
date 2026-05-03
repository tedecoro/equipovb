'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBuilding, IconShieldCheck, IconTools, IconCash, IconHeadset, IconUsers } from '@tabler/icons-react';

const services = [
  {
    id: 1,
    title: 'Administración integral de consorcios',
    subtitle: 'Consorcios (edificios) • Barrios privados / countries • PH y condominios',
    image: '/images/administracion.png',
    icon: IconBuilding,
    items: [
      'Consorcios (edificios)',
      'Barrios privados / countries',
      'PH y condominios'
    ],
    tagline: 'Gestión profesional para toda propiedad horizontal'
  },
  {
    id: 2,
    title: 'Transparencia y control',
    subtitle: 'Acceso a documentación online • Portal Red Conar • Seguimiento en tiempo real',
    image: '/images/equipo.jpg',
    icon: IconShieldCheck,
    items: [
      'Acceso a documentación online (expensas, facturas, etc.)',
      'Portal para propietarios (Red Conar)',
      'Seguimiento de gestión en tiempo real'
    ],
    tagline: 'Transparencia total en cada movimiento'
  },
  {
    id: 3,
    title: 'Gestión de mantenimiento y reparaciones',
    subtitle: 'Presupuestos • Seguimiento de trabajos • Sistema de tickets',
    image: '/images/profesionales.jpg',
    icon: IconTools,
    items: [
      'Gestión de presupuestos',
      'Seguimiento de trabajos',
      'Sistema de tickets'
    ],
    tagline: 'Resolución rápida y controlada de problemas'
  },
  {
    id: 4,
    title: 'Cobranza y reducción de morosidad',
    subtitle: 'Planes de pago • Gestión legal • Seguimiento activo',
    image: '/images/legal.jpeg',
    icon: IconCash,
    items: [
      'Planes de pago',
      'Gestión legal',
      'Seguimiento activo'
    ],
    tagline: 'Reducimos la morosidad y mejoramos la salud financiera'
  },
  {
    id: 5,
    title: 'Atención y soporte 24/7',
    subtitle: 'Guardia 24hs los 365 días • Respuesta ante urgencias',
    image: '/images/1.jpg',
    icon: IconHeadset,
    items: [
      'Guardia 24hs los 365 días',
      'Respuesta ante urgencias'
    ],
    tagline: 'Siempre disponibles para lo que necesites'
  },
  {
    id: 6,
    title: 'Gestión del personal',
    subtitle: 'Control de tareas • Cumplimiento legal • Capacitación',
    image: '/images/nosotros.jpg',
    icon: IconUsers,
    items: [
      'Control de tareas',
      'Cumplimiento legal/laboral',
      'Capacitación'
    ],
    tagline: 'Personal capacitado y en regla'
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Auto-rotate slider
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeService = services[activeIndex];
  const IconComponent = activeService.icon;

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="container px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluciones integrales para tu consorcio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Administración profesional con tecnología de punta y atención personalizada
          </p>
        </motion.div>

        {/* Main Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${activeService.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-transparent lg:to-transparent" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Mobile Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Servicio {activeIndex + 1} de {services.length}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                          Servicio {activeIndex + 1} de {services.length}
                        </span>
                        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
                          {activeService.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg text-emerald-600 font-medium mb-6 italic">
                      &ldquo;{activeService.tagline}&rdquo;
                    </p>

                    {/* Items List */}
                    <ul className="space-y-3 mb-8">
                      {activeService.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#presupuesto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
                    >
                      Solicitar información
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-emerald-600 hover:bg-white shadow-lg transition-all z-10"
            aria-label="Servicio anterior"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-emerald-600 hover:bg-white shadow-lg transition-all z-10"
            aria-label="Siguiente servicio"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === activeIndex 
                  ? 'w-8 bg-emerald-600' 
                  : 'w-2 bg-gray-300 hover:bg-emerald-300'
              }`}
              aria-label={`Ir al servicio ${idx + 1}`}
            />
          ))}
        </div>

        {/* Service Grid Cards - Desktop 6 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {services.map((service, idx) => {
            const ServiceIcon = service.icon;
            const isActive = idx === activeIndex;
            
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/25' 
                    : 'bg-white text-gray-700 hover:bg-emerald-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  isActive ? 'bg-white/20' : 'bg-emerald-100'
                }`}>
                  <ServiceIcon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                </div>
                <h4 className={`text-sm font-semibold leading-tight ${
                  isActive ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h4>
                <p className={`text-xs mt-1 line-clamp-2 ${
                  isActive ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {service.subtitle}
                </p>
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
