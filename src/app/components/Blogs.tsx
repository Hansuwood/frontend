'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import { BlogPost, fetchBlogPosts } from '@/lib/rss'

const Blogs = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true)
                const blogPosts = await fetchBlogPosts()
                setPosts(blogPosts)
            } catch (err) {
                setError('블로그 포스트를 불러올 수 없습니다.')
                console.error('블로그 로딩 오류:', err)
            } finally {
                setLoading(false)
            }
        }

        loadPosts()
    }, [])
    return (
        <section className='py-20 bg-white dark:bg-slate-900'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>최신 블로그 포스트</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {loading ? (
                        // 로딩 스켈레톤 UI
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className='bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 animate-pulse'>
                                <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2'></div>
                                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2'></div>
                                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4'></div>
                                <div className='flex space-x-4'>
                                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-20'></div>
                                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-16'></div>
                                </div>
                            </div>
                        ))
                    ) : error ? (
                        <div className='col-span-full text-center text-red-500 py-8'>
                            <p>{error}</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <article key={post.slug} className='bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                                <Link href={post.link} target='_blank' rel='noopener noreferrer'>
                                    <h3 className='text-xl font-semibold mb-2 hover:text-indigo-500 transition-colors flex items-center gap-2'>
                                        {post.title}
                                        <FaExternalLinkAlt className='w-4 h-4' />
                                    </h3>
                                </Link>
                                <p className='text-gray-600 dark:text-gray-300 mb-4'>{post.excerpt}</p>
                                <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                                    <span className='flex items-center'>
                                        <FaCalendarAlt className='mr-2' />
                                        {new Date(post.date).toLocaleDateString('ko-KR')}
                                    </span>
                                    <span className='flex items-center'>
                                        <FaClock className='mr-2' />
                                        {post.readTime}
                                    </span>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                <div className='text-center mt-12'>
                    <Link href="https://velog.io/@grinding" target='_blank' rel='noopener noreferrer'
                        className='inline-block bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors'>
                        블로그에서 더 많은 글 보기
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blogs
