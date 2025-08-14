import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-600">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    페이지를 찾을 수 없습니다
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                    홈페이지로 돌아가서 다시 시도해주세요.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                   text-white px-6 py-3 rounded-lg font-medium transition-colors
                   dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    <HomeIcon className="w-5 h-5" />
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    )
}

