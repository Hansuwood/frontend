import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-20'>
            <h1 className='text-4xl font-bold mb-8 text-center'>소개</h1>

            {/* bio section */}
            <section className='mb-16'>
                <p className='text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed'>
                    구직중
                </p>
            </section>

            {/* skill section */}
            <section className='mb-16'>
                <h2 className='text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>기술 스택</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'>
                        <FaCode className='h-8 w-8 text-indigo-500 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>프론트엔드</h3>
                        <ul className='text-slate-600 dark:text-gray-300 space-y-2'>
                            <li>React / Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>HTML5 / CSS3</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-8 w-8 text-indigo-500 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>백엔드</h3>
                        <ul className='text-slate-600 dark:text-gray-300 space-y-2'>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'>
                        <FaGraduationCap className='h-8 w-8 text-indigo-500 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>도구 및 기타</h3>
                        <ul className='text-slate-600 dark:text-gray-300 space-y-2'>
                            <li>c, c++, c#</li>
                            <li>unity, unreal 4,5</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* expriences section */}
            <section className='mb-16'>
                <h2 className='text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>경험</h2>

                <div className='max-w-3xl mx-auto space-y-8'>
                    <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>게임 개발자 & 게임 디자이너</h3>
                        <p className='text-indigo-500 mb-2'>WHstudio • 2018 - 2019</p>
                        <ul className='text-slate-600 dark:text-gray-300 space-y-2 list-disc list-inside'>
                            <li>게임 기획 및 개발 / Game Design & Game Devloper</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* edcation section */}
            <section className='mb-16'>
                <h2 className='text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>학력</h2>

                <div className='max-w-3xl mx-auto space-y-8'>
                    <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>공학사</h3>
                        <p className='text-indigo-500 mb-2'>학점은행제 • 2019 - 2025</p>
                        <p className='text-slate-600 dark:text-gray-300'>정보보호학 전공</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
