import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

const About = () => {
    return (
        <div className='container max-w-7xl mx-auto py-20'>
            <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

            {/* bio section */}
            <section className='mb-16'>
                <p className='text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed'>
                    구직중
                </p>
            </section>

            {/* skill section */}
            <section className='mb-16'>
                <h2 className='section-title'>Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaCode className='h-8 w-8 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>React / Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>HTML5 / CSS3</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Backend</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaGraduationCap className='h-8 w-8 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Tool & Others</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>c, c++, c#</li>
                            <li>unity, unreal 4,5</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* expriences section */}
            <section className='mb-16'>
                <h2 className='section-title'>Expriences</h2>

                <div className='max-w-3xl mx-auto space-y-8'>
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>Game Devloper & Game Designer</h3>
                        <p className='text-primary mb-2'>WHstudio • 2018 - 2019</p>
                        <ul className='text-secondary space-y-2 list-disc list-inside'>
                            <li>게임 기획 및 개발 / Game Design & Game Devloper</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* edcation section */}
            <section className='mb-16'>
                <h2 className='section-title'>Education</h2>

                <div className='max-w-3xl mx-auto space-y-8'>T
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>Bachelor of Engineering / 공학사</h3>
                        <p className='text-primary mb-2'>Credit Bank System / 학점은행제  • 2019 - 2025</p>
                        <p className='text-secondary'>Focused on Information Security engineering / 정보보호학 전공.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
