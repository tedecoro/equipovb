'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconLicense, IconShield, IconUsers, IconEye } from '@tabler/icons-react';

export default function TrustBlock() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const trustItems = [
    {
      icon: IconLicense,
      title: 'Matrícula Habilitada',
      description: 'CABA y Provincia de Buenos Aires'
    },
    {
      icon: IconShield,
      title: 'Atención 24/7',
      description: 'Guardia permanente los 365 días del año'
    },
    {
      icon: IconUsers,
      title: 'Equipo Interdisciplinario',
      description: 'Abogadas, contadoras, arquitectos y técnicos'
    },
    {
      icon: IconEye,
      title: 'Transparencia Total',
      description: 'Gestión clara y accesible para propietarios'
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, trustItems.length - 1));
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-4">
        {/* Mobile: Carousel with snap scroll */}
        <div className="md:hidden overflow-hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[85%] snap-start"
              >
                <div className="text-center p-6 rounded-xl bg-gray-50 h-full">
                  <div className="inline-block mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {trustItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const itemWidth = scrollRef.current.offsetWidth * 0.85;
                    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-emerald-500' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Ir al item ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
