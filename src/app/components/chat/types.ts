export interface ChatMessage {
    id: number;
    text: string;
    isUser: boolean;
    timestamp?: Date;
}

export interface ChatState {
    isOpen: boolean;
    messages: ChatMessage[];
    inputMessage: string;
}

export interface ChatConfig {
    autoReplyDelay: number;
    maxMessages: number;
    placeholder: string;
} 