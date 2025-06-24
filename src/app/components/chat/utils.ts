import { ChatMessage } from './types'

export const createMessage = (text: string, isUser: boolean): ChatMessage => ({
    id: Date.now(),
    text,
    isUser,
    timestamp: new Date()
})

export const getAutoReply = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('안녕') || lowerMessage.includes('hello')) {
        return '안녕하세요! 무엇을 도와드릴까요?'
    }

    if (lowerMessage.includes('프로젝트') || lowerMessage.includes('project')) {
        return '프로젝트에 대해 궁금한 점이 있으시면 언제든 말씀해 주세요!'
    }

    if (lowerMessage.includes('연락') || lowerMessage.includes('contact')) {
        return '연락처는 이메일: limotiso@gmail.com 또는 전화: +82 10-7307-1839 입니다.'
    }

    return '메시지를 받았습니다. 곧 답변드리겠습니다!'
}

export const formatTimestamp = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit'
    })
} 