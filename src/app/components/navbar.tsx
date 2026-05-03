'use client'
import React, { useEffect, useState } from 'react'
import {Link as Link1} from 'react-scroll'

import Link from 'next/link'
import LogoSvg from './logo-svg'

export default function Navbar({navLight, playBtn, bgLight, navCenter} : {navLight:boolean, playBtn:boolean, bgLight:boolean, navCenter:boolean}) {
    let [menu, setMenu] = useState<boolean>(false);
    let [scroll, setScroll] = useState<boolean>(false)

    useEffect(()=>{

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }

        window.addEventListener('scroll',handlerScroll)
        return () => {
        window.removeEventListener('scroll',handlerScroll)
        };
    },[])

  return (
        <nav className={`navbar ${bgLight ? 'bg-white dark:bg-slate-900 shadow dark:shadow-gray-800' : ''} ${scroll ? 'is-sticky' : '' }`} id="navbar">
            <div className="container relative flex flex-wrap items-center justify-between">
                <Link className="navbar-brand md:me-8" href="/">
                    <span className={`inline-block text-2xl font-bold ${scroll ? 'text-black' : 'text-white lg_992:text-white'}`}>Equipo VB</span>
                </Link>

                <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
                    <ul className="list-none menu-social mb-0">
                        <li className="inline">
                            <Link href="#presupuesto" className={`hidden lg_992:inline-flex h-8 px-4 text-[12px] tracking-wider items-center justify-center font-medium rounded-full uppercase transition-colors duration-300 ${scroll ? 'bg-black text-white' : 'bg-white text-black'}`}>Presupuesto</Link>
                        </li>
                    </ul>
                    <button type="button" className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden" onClick={() => setMenu(!menu)}>
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                <div className={`navigation lg_992:order-1 lg_992:flex  ${navCenter ? '' : 'ms-auto'} ${menu ? '' : 'hidden'}`} id="menu-collapse">
                    <ul className={`navbar-nav ${navLight ? 'nav-light' : ''}`} id="navbar-navlist">
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" activeClass="active" spy={true} smooth={true} duration={500} to="home">Inicio</Link1>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" activeClass="active" spy={true} smooth={true} duration={500} to="servicios">Servicios</Link1>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" activeClass="active" spy={true} smooth={true} duration={500} to="como-trabajamos">Cómo Trabajamos</Link1>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" activeClass="active" spy={true} smooth={true} duration={500} to="presupuesto">Presupuesto</Link1>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" activeClass="active" spy={true} smooth={true} duration={500} to="contacto">Contacto</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
