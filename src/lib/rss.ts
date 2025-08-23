// RSS 피드를 파싱하는 유틸리티 함수들

export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    link: string;
}

// RSS 피드에서 블로그 포스트를 가져오는 함수
export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        // Next.js API route를 통해 RSS 피드 가져오기 (CORS 문제 해결)
        const response = await fetch('/api/blog/rss');

        if (!response.ok) {
            throw new Error('RSS 피드를 가져올 수 없습니다.');
        }

        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('블로그 포스트를 가져오는 중 오류 발생:', error);
        return [];
    }
}

// 읽기 시간 추정 함수 (대략적인 계산)
export function estimateReadTime(content: string): string {
    const wordsPerMinute = 200; // 평균 읽기 속도 (한국어 기준)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime}분 읽기`;
}

// 날짜 포맷팅 함수
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 슬러그 생성 함수
export function createSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
}
