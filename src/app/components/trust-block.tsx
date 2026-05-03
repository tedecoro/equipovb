'use client';

import { motion } from 'framer-motion';
import { IconLicense, IconShield, IconUsers, IconEye } from '@tabler/icons-react';

export default function TrustBlock() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
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
