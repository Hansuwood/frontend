"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";



type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error("Failed to send message")
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        } catch {
            setStatus("error");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-20 text-center">연락처</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* contact info */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold mb-4">연락하기</h2>
                    <p className="text-slate-600 dark:text-gray-300 md:w-2/3">새로운 프로젝트, 창의적인 아이디어, 또는 함께 할 수 있는 기회에 대해 언제든 논의할 준비가 되어 있습니다.</p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="w-6 h-6 text-indigo-500" />
                            <div >
                                <h3 className="font-semibold">이메일</h3>
                                <Link href="mailto:limotiso@gmail.com" className="text-slate-600 dark:text-gray-300 hover:text-indigo-500">
                                    limotiso@gmail.com</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhone className="w-6 h-6 text-indigo-500" />
                            <div >
                                <h3 className="font-semibold">전화</h3>
                                <Link href="tle:821073071839" className="text-slate-600 dark:text-gray-300 hover:text-indigo-500">
                                    +82 10-7307-1839</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="w-6 h-6 text-indigo-500" />
                            <div >
                                <h3 className="font-semibold">위치</h3>
                                <p className="text-slate-600 dark:text-gray-300">대한민국 과천</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">이름</label>
                            <input
                                required
                                value={formData.name}
                                onChange={handleChange}
                                type="text" id="name" name="name" placeholder="이름을 입력하세요"
                                className="w-full px-4 py-2 rounded-md border placeholder:text-gray-400 dark:placeholder:text-gray-500 border-gray-300 dark:border-gray-700
                            bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-none"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">이메일</label>
                            <input
                                required
                                value={formData.email}
                                onChange={handleChange}
                                type="email" id="email" name="email" placeholder="이메일을 입력하세요"
                                className="w-full px-4 py-2 rounded-md border placeholder:text-gray-400 dark:placeholder:text-gray-500 border-gray-300 dark:border-gray-700
                            bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-none"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">메시지</label>
                            <textarea
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                id="message" name="message" placeholder="메시지를 입력하세요"
                                className="w-full px-4 py-2 rounded-md border placeholder:text-gray-400 dark:placeholder:text-gray-500 border-gray-300 dark:border-gray-700
                            bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-none"/>
                        </div>

                        <button type="submit" className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'loading' ? "전송 중..." : "메시지 보내기"}
                        </button>
                        {
                            status === "success" && (
                                <p className="text-green-500">메시지가 성공적으로 전송되었습니다!</p>
                            )
                        }

                        {
                            status === "error" && (
                                <p className="text-red-500">메시지 전송에 실패했습니다. 다시 시도해주세요.</p>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;