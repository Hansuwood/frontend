import { projects } from "@/contents/project";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from 'next/image';

const ProjectsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">주요 프로젝트</h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-24 text-center">사이버 보안 및 웹 개발 프로젝트들을 소개합니다. 코드나 라이브 데모를 확인하실 수 있습니다.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <article key={project.title} className='bg-white dark:bg-slate-800 rounded-lg shadow-md p-6'>
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Image src={project.image} alt={project.title} fill className='object-cover'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                            </div>

                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    project.technologies.map((tech) => (
                                        <span key={tech} className='px-3 py-1 bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-full text-sm'>
                                            {tech}</span>
                                    ))
                                }
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <Link href={project.githubLink} target='_blank' className='flex items-center gap-2
                                text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors'>
                                    <FaGithub className='w-5 h-5' /><span>코드</span>
                                </Link>
                                <Link href={project.demoLink} target='_blank' className='flex items-center gap-2
                                text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors'>
                                    <FaExternalLinkAlt className='w-5 h-5' /><span>라이브 데모</span>
                                </Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsPage;