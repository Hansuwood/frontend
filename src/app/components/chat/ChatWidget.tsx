'use client'

import React, { useState } from 'react'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "안녕하세요! 무엇을 도와드릴까요?", isUser: false }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isConnected, setIsConnected] = useState(false)

    // ✅ Next.js API Route 사용 (가장 안전함)
    // 백엔드 IP가 클라이언트에 노출되지 않음
    const API_URL = '/api/chat'

    // ✅ 수정된 기능: Next.js API Route를 통한 백엔드 연결 확인
    // 직접 AWS 서버 접근 대신 프록시를 통해 안전하게 연결
    const checkBackendConnection = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'GET'
            })
            if (response.ok) {
                setIsConnected(true)
                console.log('Backend 서버에 연결되었습니다!')
            }
        } catch (error) {
            setIsConnected(false)
            console.log('Backend 서버에 연결할 수 없습니다.')
        }
    }

    // 컴포넌트 마운트 시 연결 확인
    React.useEffect(() => {
        checkBackendConnection()
    }, [])

    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            // 사용자 메시지 추가
            const userMessage = {
                id: Date.now(),
                text: inputMessage,
                isUser: true
            }
            setMessages(prev => [...prev, userMessage])
            setInputMessage('')

            try {
                // ✅ Next.js API Route로 요청 (AWS IP 숨김)
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: inputMessage }),
                    credentials: 'include', // 쿠키 포함 (대화 스레드 유지용)
                })
                const data = await response.json()
                if (data.status === 'success' && data.ai_response) {
                    // ✅ OpenAI Assistant의 AI 응답을 채팅창에 표시
                    setMessages(prev => [...prev, {
                        id: Date.now() + 1,
                        text: data.ai_response,
                        isUser: false
                    }])
                } else {
                    // 에러 표시
                    setMessages(prev => [...prev, {
                        id: Date.now() + 1,
                        text: data.message || "OpenAI 응답을 받지 못했습니다.",
                        isUser: false
                    }])
                }
            } catch (error) {
                // ✅ 네트워크 오류 처리 (API Route 연결 실패 시)
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
                    isUser: false
                }])
            }
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* 채팅 버튼 */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                    <FaComments className="w-6 h-6" />
                    {/* ✅ 연결 상태 표시기 */}
                    <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
                </button>
            )}

            {/* 채팅창 */}
            {isOpen && (
                <div className="bg-white dark:bg-dark/90 rounded-lg shadow-xl w-80 h-96 flex flex-col">
                    {/* 헤더 */}
                    <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">AI 어시스턴트</h3>
                            {/* ✅ 연결 상태 표시 */}
                            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-300' : 'bg-red-300'}`}></div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded"
                        >
                            <FaTimes className="w-4 h-4" />
                        </button>
                    </div>

                    {/* 메시지 영역 */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg ${message.isUser
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 입력 영역 */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="메시지를 입력하세요..."
                                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <FaPaperPlane className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatWidget 