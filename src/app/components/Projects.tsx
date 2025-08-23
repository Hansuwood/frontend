import { projects } from '@/contents/project'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <section className='py-24 bg-slate-50 dark:bg-slate-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>주요 프로젝트</h2>
                    <p className='text-lg text-slate-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed'>
                        사이버 보안 분야에서 진행한 다양한 프로젝트들을 소개합니다.
                        실무에 적용 가능한 보안 솔루션과 도구들을 개발했습니다.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className='bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 backdrop-blur-sm hover:transform hover:-translate-y-2 hover:scale-[1.02] p-6 group animate-slideUp'
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* 프로젝트 이미지 */}
                            <div className='relative aspect-video mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>

                            {/* 프로젝트 정보 */}
                            <div className='space-y-4'>
                                <h3 className='text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-500 transition-colors'>
                                    {project.title}
                                </h3>

                                <p className='text-slate-600 dark:text-gray-300 leading-relaxed'>
                                    {project.description}
                                </p>

                                {/* 기술 스택 태그 */}
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className='px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-indigo-600 border border-indigo-500/20 rounded-full text-sm font-medium hover:bg-indigo-500/20 transition-colors'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* 프로젝트 링크 */}
                                <div className='flex gap-4 pt-2'>
                                    <Link
                                        href={project.githubLink}
                                        target='_blank'
                                        className='flex items-center gap-2 text-slate-600 hover:text-indigo-500 transition-all duration-300 hover:scale-105 group/link'
                                    >
                                        <FaGithub className='w-5 h-5 group-hover/link:rotate-12 transition-transform' />
                                        <span className='font-medium'>코드</span>
                                    </Link>
                                    <Link
                                        href={project.demoLink}
                                        target='_blank'
                                        className='flex items-center gap-2 text-slate-600 hover:text-cyan-500 transition-all duration-300 hover:scale-105 group/link'
                                    >
                                        <FaExternalLinkAlt className='w-4 h-4 group-hover/link:rotate-12 transition-transform' />
                                        <span className='font-medium'>라이브 데모</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
