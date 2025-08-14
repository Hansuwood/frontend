import { NextRequest, NextResponse } from 'next/server'

// ✅ 서버사이드에서만 사용되는 환경변수 (더 안전함)
const BACKEND_URL = process.env.BACKEND_URL || 'http://52.78.58.134:5001'

export async function GET() {
    try {
        const response = await fetch(`${BACKEND_URL}/sendMessage`, {
            method: 'GET'
        })
        const data = await response.json()
        return NextResponse.json(data)
    } catch {
        return NextResponse.json(
            { status: 'error', message: '백엔드 서버 연결 실패' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const response = await fetch(`${BACKEND_URL}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 클라이언트의 쿠키를 백엔드로 전달
                'Cookie': request.headers.get('cookie') || ''
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()

        // 백엔드에서 설정한 쿠키를 클라이언트로 전달
        const responseHeaders = new Headers()
        const setCookie = response.headers.get('set-cookie')
        if (setCookie) {
            responseHeaders.set('set-cookie', setCookie)
        }

        return NextResponse.json(data, { headers: responseHeaders })
    } catch {
        return NextResponse.json(
            { status: 'error', message: 'OpenAI 서비스 오류' },
            { status: 500 }
        )
    }
}
