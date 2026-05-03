'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const serviceGroups = [
    {
      title: 'Administración Integral',
      image: '/images/administracion.png',
      description: 'Gestión completa de consorcios, countries y propiedades con profesionalismo y dedicación.',
      services: [
        { name: 'Liquidación de expensas' },
        { name: 'Cobranza y morosidad' },
        { name: 'Reclamos de seguros' }
      ]
    },
    {
      title: 'Servicios Técnicos',
      image: '/images/profesionales.jpg',
      description: 'Soluciones técnicas especializadas con arquitectos y profesionales capacitados.',
      services: [
        { name: 'Mantenimiento preventivo' },
        { name: 'Seguimiento de obras' },
        { name: 'Planos y relevamientos' }
      ]
    },
    {
      title: 'Gestión Contable',
      image: '/images/legal.jpeg',
      description: 'Asesoramiento experto en gestión contable, legal y documental para su tranquilidad.',
      services: [
        { name: 'Contabilidad profesional' },
        { name: 'Balances e impuestos' },
        { name: 'Asesoramiento' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
            SERVICIOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Soluciones integrales para tu consorcio
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Administración, asesoramiento legal y técnico para edificios, countries y propiedades
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {serviceGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${group.image}')` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {group.services.slice(0, 2).map((service, serviceIndex) => (
                    <li 
                      key={serviceIndex} 
                      className="flex items-start gap-2 m-0"
                    >
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-gray-600 text-sm">{service.name}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Ver más <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
