import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700'>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <Link href="/" className='text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>사이버보안포트폴리오&trade;</Link>
                        <p className='text-sm text-slate-600 dark:text-slate-400 mt-2'>© {new Date().getFullYear()} 사이버보안포트폴리오. 모든 권리 보유.</p>
                    </div>

                    <div className='flex space-x-8'>
                        <Link href="/" className='text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-300 hover:scale-110 transition-all duration-300'>
                            <FaGithub />
                        </Link>
                        <Link href="/" className='text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-300 hover:scale-110 transition-all duration-300'>
                            <FaLinkedin />
                        </Link>
                        <Link href="/" className='text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-300 hover:scale-110 transition-all duration-300'>
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
