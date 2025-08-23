import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: '사이버 보안 취약점 스캐너',
        description: '웹 애플리케이션의 보안 취약점을 자동으로 탐지하고 분석하는 도구입니다.',
        technologies: ['Python', 'Flask', 'SQLite', 'Nmap'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/e-commerce-website.png',
    },
    {
        title: '네트워크 모니터링 시스템',
        description: '실시간 네트워크 트래픽 분석 및 침입 탐지 시스템입니다.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/task-manager.webp',
    },
    {
        title: '개인 포트폴리오 웹사이트',
        description: '사이버 보안 프로젝트와 기술을 소개하는 포트폴리오 사이트입니다.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/portfolio-website.jpg',
    },
    {
        title: '보안 블로그 플랫폼',
        description: '사이버 보안 정보를 공유하는 블로그 플랫폼입니다.',
        technologies: ['Gatsby', 'GraphQL', 'Contentful'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/blog-website.jpeg',
    },
    {
        title: '악성코드 분석 도구',
        description: '악성코드를 정적/동적으로 분석하는 도구입니다.',
        technologies: ['Python', 'YARA', 'VirusTotal API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/weather-app.png',
    },
    {
        title: '보안 채팅 애플리케이션',
        description: '엔드투엔드 암호화가 적용된 실시간 채팅 앱입니다.',
        technologies: ['React', 'Node.js', 'Socket.io', 'Crypto'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/chat-app.png',
    },
    {
        title: '패스워드 보안 검사기',
        description: '패스워드 강도를 분석하고 보안 권장사항을 제공합니다.',
        technologies: ['React', 'zxcvbn', 'HaveIBeenPwned API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/recipe-finder.png',
    },
    {
        title: '보안 로그 분석기',
        description: '시스템 로그를 분석하여 보안 이벤트를 탐지합니다.',
        technologies: ['Python', 'ELK Stack', 'Machine Learning'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/expense-tracker.webp',
    }
];