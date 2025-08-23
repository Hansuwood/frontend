import React from 'react'

const Newsletter = () => {
    return (
        <section className='py-20 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden'>
            <div className='p-8 md:p-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-slate-800 dark:text-white'>뉴스레터 구독</h2>
                            <p className='text-gray-600 dark:text-gray-300 md:w-2/3'>최신 프로젝트, 블로그 포스트, 그리고 기술 인사이트를
                                이메일로 받아보세요.</p>
                        </div>
                        <form className='flex flex-col md:flex-row gap-4'>
                            <input type='email' placeholder='이메일을 입력하세요' className='flex-1 px-4 py-3
                        border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-slate-900
                        dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                            <button type='submit' className='bg-indigo-500 text-white px-8 py-3 rounded-lg 
                        hover:bg-indigo-600 transition-colors'>구독하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
