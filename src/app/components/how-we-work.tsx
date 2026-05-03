'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { IconEar, IconClipboardList, IconSettings, IconFileText } from '@tabler/icons-react';

const steps = [
  {
    number: '01',
    title: 'Escuchamos',
    desc: 'Diagnosticamos las necesidades específicas de tu consorcio con atención personalizada',
    icon: IconEar,
    color: 'from-emerald-400 to-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  },
  {
    number: '02',
    title: 'Planificamos',
    desc: 'Diseñamos un plan de trabajo a medida, transparente y eficiente para tu propiedad',
    icon: IconClipboardList,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50/70',
    borderColor: 'border-emerald-100'
  },
  {
    number: '03',
    title: 'Gestionamos',
    desc: 'Coordinamos profesionales y proveedores con tecnología de punta y seguimiento real',
    icon: IconSettings,
    color: 'from-emerald-600 to-emerald-700',
    bgColor: 'bg-emerald-50/50',
    borderColor: 'border-emerald-100'
  },
  {
    number: '04',
    title: 'Informamos',
    desc: 'Reportes claros, documentación online y comunicación constante 24/7',
    icon: IconFileText,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50/70',
    borderColor: 'border-emerald-100'
  }
];

function ProcessStep({ step, index, isActive, totalSteps }: { 
  step: typeof steps[0]; 
  index: number; 
  isActive: boolean;
  totalSteps: number;
}) {
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`relative flex items-center gap-4 md:gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      {/* Content Card */}
      <motion.div
        animate={{ 
          y: isActive ? [0, -8, 0] : 0,
          boxShadow: isActive 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
            : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.5 }}
        className={`flex-1 w-full ${step.bgColor} ${step.borderColor} border rounded-3xl p-6 md:p-8 relative overflow-hidden group`}
      >
        {/* Gradient accent */}
        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-full bg-gradient-to-b ${step.color}`} />
        
        <div className={`flex items-start gap-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          
          <div className={`flex-1 ${isEven ? '' : 'md:text-right'}`}>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${step.color} text-white mb-3`}>
              Paso {step.number}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
          </div>
        </div>

        {/* Floating number decoration */}
        <motion.div
          animate={{ 
            y: isActive ? [0, -10, 0] : 0,
            opacity: isActive ? 0.15 : 0.08
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} text-8xl font-black text-gray-900 pointer-events-none select-none`}
        >
          {step.number}
        </motion.div>
      </motion.div>

      {/* Center Node */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div
          animate={{ 
            scale: isActive ? [1, 1.2, 1] : 1,
            boxShadow: isActive 
              ? '0 0 30px rgba(16, 185, 129, 0.5)' 
              : '0 0 0px rgba(0,0,0,0)'
          }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
        >
          <span className="text-white font-bold text-lg md:text-xl">{index + 1}</span>
        </motion.div>
        
        {/* Pulse ring */}
        {isActive && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
          />
        )}
      </div>

      {/* Spacer for layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden" id="como-trabajamos">
      <div className="container px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            CÓMO TRABAJAMOS
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Un proceso claro y <span className="text-emerald-600">simple</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Así como gestionamos su tranquilidad, paso a paso
          </p>
        </motion.div>

        {/* Process Flow */}
        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          {/* Progress Bar */}
          <div className="hidden md:block absolute left-0 right-0 top-8 h-1 bg-gray-200 rounded-full">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                totalSteps={steps.length}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#presupuesto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
            >
              Comenzar ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
