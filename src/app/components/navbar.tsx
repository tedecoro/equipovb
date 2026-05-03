'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Link as Link1} from 'react-scroll'
import Link from 'next/link'

const navItems = [
  { name: 'Inicio', to: 'home', number: '01' },
  { name: 'Servicios', to: 'servicios', number: '02' },
  { name: 'Cómo Trabajamos', to: 'como-trabajamos', number: '03' },
  { name: 'Presupuesto', to: 'presupuesto', number: '04' },
  { name: 'Contacto', to: 'contacto', number: '05' },
]

export default function Navbar({navLight, playBtn, bgLight, navCenter} : {navLight:boolean, playBtn:boolean, bgLight:boolean, navCenter:boolean}) {
    const [menu, setMenu] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false)

    useEffect(() => {
        const handlerScroll = () => {
            if(window.scrollY > 50){
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', handlerScroll)
        return () => {
            window.removeEventListener('scroll', handlerScroll)
        };
    }, [])

    const toggleMenu = () => setMenu(!menu)
    const closeMenu = () => setMenu(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menu])

  return (
        <>
            <nav 
                className={`fixed top-0 left-0 right-0 z-[999] w-full py-4 transition-all duration-500 ${scroll ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`} 
                id="navbar"
            >
                <div className="container relative flex items-center justify-between">
                    {/* Logo - Siempre Esmeralda */}
                    <Link className="relative z-[1001]" href="/">
                        <span className="inline-block text-2xl md:text-3xl font-bold tracking-tight text-emerald-600">
                            Equipo VB
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link1 
                                key={item.to}
                                className={`text-sm font-medium transition-colors cursor-pointer ${scroll ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'}`}
                                activeClass="text-emerald-500"
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                to={item.to}
                            >
                                {item.name}
                            </Link1>
                        ))}
                        <Link 
                            href="#presupuesto" 
                            className="inline-flex h-10 px-6 text-xs tracking-wider items-center justify-center font-semibold rounded-full uppercase bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/25"
                        >
                            Presupuesto
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        type="button" 
                        className="lg:hidden relative z-[1001] w-10 h-10 flex items-center justify-center"
                        onClick={toggleMenu}
                        aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <div className="relative w-6 h-5">
                            <motion.span 
                                className={`absolute left-0 w-full h-0.5 rounded-full transition-colors duration-300 ${menu ? 'bg-gray-900' : scroll ? 'bg-gray-900' : 'bg-white'}`}
                                animate={{ 
                                    top: menu ? '50%' : '0%',
                                    translateY: menu ? '-50%' : '0%',
                                    rotate: menu ? 45 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span 
                                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full transition-colors duration-300 ${menu ? 'bg-gray-900' : scroll ? 'bg-gray-900' : 'bg-white'}`}
                                animate={{ 
                                    opacity: menu ? 0 : 1,
                                    scaleX: menu ? 0 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span 
                                className={`absolute left-0 w-full h-0.5 rounded-full transition-colors duration-300 ${menu ? 'bg-gray-900' : scroll ? 'bg-gray-900' : 'bg-white'}`}
                                animate={{ 
                                    bottom: menu ? '50%' : '0%',
                                    translateY: menu ? '50%' : '0%',
                                    rotate: menu ? -45 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menu && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] lg:hidden"
                            onClick={closeMenu}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[1000] lg:hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeMenu}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-[1001]"
                                aria-label="Cerrar menú"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 pointer-events-none" />
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-40 left-10 w-24 h-24 bg-emerald-300/20 rounded-full blur-2xl" />
                            
                            {/* Content */}
                            <div className="relative h-full flex flex-col pt-24 pb-8 px-8">
                                {/* Navigation Links */}
                                <nav className="flex-1">
                                    <ul className="space-y-1">
                                        {navItems.map((item, index) => (
                                            <motion.li 
                                                key={item.to}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                            >
                                                <Link1 
                                                    className="group flex items-center gap-4 py-4 cursor-pointer"
                                                    activeClass="text-emerald-600"
                                                    spy={true} 
                                                    smooth={true} 
                                                    duration={500} 
                                                    to={item.to}
                                                    onClick={closeMenu}
                                                >
                                                    <span className="text-xs font-mono text-emerald-400 font-medium">
                                                        {item.number}
                                                    </span>
                                                    <span className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                                        {item.name}
                                                    </span>
                                                    <motion.svg 
                                                        className="ml-auto w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors"
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </motion.svg>
                                                </Link1>
                                                <div className="h-px bg-gradient-to-r from-emerald-100 via-gray-100 to-transparent" />
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* CTA Section */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                    className="mt-auto"
                                >
                                    <Link 
                                        href="#presupuesto"
                                        onClick={closeMenu}
                                        className="block w-full py-4 bg-emerald-600 text-white font-semibold rounded-xl text-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25"
                                    >
                                        Solicitar Presupuesto
                                    </Link>
                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        Respuesta en menos de 24 horas
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
  )
}
