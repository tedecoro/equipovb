'use client';

import { motion } from 'framer-motion';
import { IconBrandWhatsapp, IconPhone, IconMail, IconMapPin, IconBuilding, IconShield, IconClock, IconArrowUp } from '@tabler/icons-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      <div className="container px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold text-white tracking-tight">Equipo VB</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Administración profesional de consorcios y propiedades. 
                Matrícula habilitada en CABA y Provincia de Buenos Aires.
              </p>
              <div className="flex gap-3 pt-2">
                <motion.a
                  href="https://wa.me/5491140487780"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
                >
                  <IconBrandWhatsapp className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="tel:+5491140487780"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                >
                  <IconPhone className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:info@equipovb.com.ar"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                >
                  <IconMail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', href: '#hero' },
                  { name: 'Servicios', href: '#servicios' },
                  { name: 'Cómo Trabajamos', href: '#como-trabajamos' },
                  { name: 'Presupuesto', href: '#presupuesto' },
                  { name: 'Contacto', href: '#contacto' }
                ].map((link, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-3">
                {[
                  'Administración de consorcios',
                  'Barrios privados / countries',
                  'Área legal y contable',
                  'Servicios técnicos',
                  'Pericias e informes'
                ].map((service, index) => (
                  <motion.li key={index}>
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block cursor-pointer"
                    >
                      {service}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 m-0 text-gray-400 text-sm"
                >
                  <IconPhone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">+54 9 11 4048-7780</p>
                    <p className="text-xs text-gray-500">Atención 24/7</p>
                  </div>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 m-0 text-gray-400 text-sm"
                >
                  <IconMapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">CABA y PBA</p>
                    <p className="text-xs text-gray-500">4 sedes disponibles</p>
                  </div>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 m-0 text-gray-400 text-sm"
                >
                  <IconBuilding className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Matrícula Habilitada</p>
                    <p className="text-xs text-gray-500">Profesional certificado</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Equipo VB. Todos los derechos reservados.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <IconShield className="w-4 h-4" />
                Matrícula habilitada
              </span>
              <span className="flex items-center gap-2">
                <IconClock className="w-4 h-4" />
                Atención 24/7
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <IconArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
