'use client'

import React, { useState } from 'react'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "안녕하세요! 무엇을 도와드릴까요?", isUser: false }
    ])
    const [inputMessage, setInputMessage] = useState('')

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                isUser: true
            }
            setMessages([...messages, newMessage])
            setInputMessage('')

            // 간단한 자동 응답 (실제로는 API 호출)
            setTimeout(() => {
                const autoReply = {
                    id: messages.length + 2,
                    text: "메시지를 받았습니다. 곧 답변드리겠습니다!",
                    isUser: false
                }
                setMessages(prev => [...prev, autoReply])
            }, 1000)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        }
    }

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {/* 채팅 버튼 */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                >
                    <FaComments className="w-6 h-6" />
                </button>
            )}

            {/* 채팅창 */}
            {isOpen && (
                <div className="bg-white dark:bg-dark/90 rounded-lg shadow-xl w-80 h-96 flex flex-col">
                    {/* 헤더 */}
                    <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-semibold">채팅</h3>
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