'use client';

import { motion } from 'framer-motion';
import { IconClock, IconShieldCheck, IconDeviceMobile } from '@tabler/icons-react';
import Image from 'next/image';

export default function TransparencySection() {
  return (
    <section className="py-20 bg-[#F2F4F7]" id="portal">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mockup content with RED CONAR logo */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center py-8">
                    <Image
                      src="https://www.redconar.net/common/resources/images/logos/LogoHcolor01-72.png"
                      alt="Red Conar Logo"
                      width={200}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Phone mockup */}
              <div className="absolute -bottom-6 -right-6 w-32 bg-gray-900 rounded-2xl p-3 shadow-2xl border-4 border-white">
                <div className="flex items-center justify-center py-2">
                  <Image
                    src="https://www.redconar.net/common/resources/images/logos/LogoHcolor01-72.png"
                    alt="Red Conar Logo"
                    width={80}
                    height={28}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                PORTAL DIGITAL / RED CONAR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Toda la información,<br />
                siempre a tu alcance
              </h2>
              <p className="text-gray-600 mb-8 text-sm">
                Portal web y app móvil para que estés al tanto de todo: expensas, facturas, avisos y más.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <IconClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pagos y expensas online</h4>
                    <p className="text-sm text-gray-500">Sistema de tickets activo</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <IconShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Totalmente visible</h4>
                    <p className="text-sm text-gray-500">Reportes claros y concisos</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <IconDeviceMobile className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Desde tu celular</h4>
                    <p className="text-sm text-gray-500">App disponible 24/7</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://www.redconar.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Ingresar al portal
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
