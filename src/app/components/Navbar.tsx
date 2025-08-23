"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems = [
        { href: "/", label: "홈" },
        { href: "/about", label: "소개" },
        { href: "/projects", label: "프로젝트" },
        { href: "/blogs", label: "블로그" },
        { href: "/contact", label: "연락처" },
    ]

    return (
        <nav className='fixed w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-slate-700/50 shadow-lg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* desktop menu */}
                <div className='flex items-center justify-between h-20'>
                    <Link href="/" className='text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300'>
                        사이버보안포트폴리오&trade;
                    </Link>

                    {/* desktop menus*/}
                    <div className='hidden md:flex items-center space-x-1'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${isActive
                                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                                            : 'text-slate-600 hover:text-indigo-500 hover:bg-indigo-500/10'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })
                        }
                        <button
                            onClick={toggleTheme}
                            className='ml-4 p-3 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/10 hover:text-indigo-500 transition-all duration-300 hover:scale-105 shadow-md'
                        >
                            {
                                theme === "dark" ? (
                                    <SunIcon className='w-5 h-5' />
                                ) : (
                                    <MoonIcon className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>

                    {/* mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        type='button'
                        className='md:hidden p-3 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/10 hover:text-indigo-500 transition-all duration-300 hover:scale-105 shadow-md'
                    >
                        {
                            isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6' />)
                        }
                    </button>
                </div>

                {/* mobile menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden border-t border-gray-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md'>
                        <div className='py-6 space-y-3'>
                            {
                                menuItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <div key={index} onClick={toggleMobileMenu}>
                                            <Link
                                                href={item.href}
                                                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                                                    : 'text-slate-600 hover:text-indigo-500 hover:bg-indigo-500/10'
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            <div className='pt-3 border-t border-gray-200/50 dark:border-slate-700/50'>
                                <button
                                    onClick={toggleTheme}
                                    className='flex items-center px-4 py-3 rounded-xl font-medium text-slate-600 hover:text-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 w-full'
                                >
                                    {
                                        theme === "dark" ? (
                                            <><SunIcon className='w-5 h-5 mr-3' />라이트 모드</>
                                        ) : (
                                            <><MoonIcon className='w-5 h-5 mr-3' />다크 모드</>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </nav >
    )
}

export default Navbar
