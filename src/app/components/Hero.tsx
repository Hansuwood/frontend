import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='relative py-32 overflow-hidden'>
            {/* 배경 그라데이션 */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'></div>

            {/* 장식적 요소 */}
            <div className='absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-soft'></div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-soft' style={{ animationDelay: '1s' }}></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    {/* 프로필 아바타 */}
                    <div className='flex flex-col items-center mb-8 animate-scale'>
                        <div className='w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-500 flex items-center justify-center ring-4 ring-white/20 mb-6 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-110 animate-float'>
                            <FaUser className='w-18 h-18 text-white' />
                        </div>
                    </div>

                    {/* 메인 제목 */}
                    <h1 className='text-5xl md:text-7xl font-bold mb-6 animate-slideUp'>
                        안녕하세요, <span className='bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>한수</span>입니다
                    </h1>

                    {/* 부제목 */}
                    <p className='text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-12 leading-relaxed animate-slideUp' style={{ animationDelay: '0.2s' }}>
                        사이버 보안 전문가 • 모의해킹 • 정보보호 컨설턴트
                    </p>

                    {/* 소셜 링크 */}
                    <div className='flex justify-center space-x-6 mb-12 animate-slideUp' style={{ animationDelay: '0.4s' }}>
                        <Link href="/" className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-slate-600 hover:text-indigo-500 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg'>
                            <FaGithub className='w-5 h-5' />
                        </Link>
                        <Link href="/" className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-slate-600 hover:text-indigo-500 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg'>
                            <FaLinkedin className='w-5 h-5' />
                        </Link>
                        <Link href="/" className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-slate-600 hover:text-indigo-500 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg'>
                            <FaTwitter className='w-5 h-5' />
                        </Link>
                    </div>

                    {/* CTA 버튼들 */}
                    <div className='flex flex-col sm:flex-row justify-center gap-4 animate-slideUp' style={{ animationDelay: '0.6s' }}>
                        <Link href="/projects" className='px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-lg hover:shadow-xl'>
                            프로젝트 보기
                        </Link>
                        <Link href="/contact" className='px-6 py-3 border-2 border-indigo-500 text-indigo-500 bg-transparent rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-lg hover:shadow-xl'>
                            연락하기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
