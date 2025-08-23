import { NextResponse } from 'next/server';
import { BlogPost, estimateReadTime, createSlug } from '@/lib/rss';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXml = promisify(parseString);

// Velog RSS 피드 URL
const RSS_URL = 'https://api.velog.io/rss/@grinding';

export async function GET() {
    try {
        // RSS 피드 가져오기
        const response = await fetch(RSS_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Portfolio-Bot/1.0)',
            },
        });

        if (!response.ok) {
            throw new Error(`RSS 피드를 가져올 수 없습니다: ${response.status}`);
        }

        const rssText = await response.text();

        // RSS XML 파싱
        const result = await parseXml(rssText) as any;
        const items = result.rss?.channel?.[0]?.item || [];

        const posts: BlogPost[] = [];

        items.slice(0, 6).forEach((item: Record<string, string[]>) => {
            const title = item.title?.[0] || '';
            const link = item.link?.[0] || '';
            const pubDate = item.pubDate?.[0] || '';
            const description = item.description?.[0] || '';

            // HTML 태그 제거하여 순수 텍스트만 추출
            const cleanDescription = description.replace(/<[^>]*>/g, '').trim();
            const excerpt = cleanDescription.length > 150
                ? cleanDescription.substring(0, 150) + '...'
                : cleanDescription;

            posts.push({
                title,
                excerpt,
                date: new Date(pubDate).toISOString().split('T')[0],
                readTime: estimateReadTime(cleanDescription),
                slug: createSlug(title),
                link
            });
        });

        return NextResponse.json(posts);
    } catch (error) {
        console.error('RSS 피드 처리 중 오류:', error);

        // 오류 발생 시 기본 데이터 반환
        const fallbackPosts: BlogPost[] = [
            {
                title: '사이버 보안의 기초',
                excerpt: '정보보안의 기본 개념과 중요성에 대해 알아보겠습니다.',
                date: '2024-03-15',
                readTime: '5분 읽기',
                slug: 'cybersecurity-basics',
                link: 'https://velog.io/@grinding'
            },
            {
                title: '모의해킹 입문 가이드',
                excerpt: '모의해킹의 개념과 시작 방법에 대해 설명합니다.',
                date: '2024-03-10',
                readTime: '7분 읽기',
                slug: 'penetration-testing-guide',
                link: 'https://velog.io/@grinding'
            },
            {
                title: '네트워크 보안 기본기',
                excerpt: '네트워크 보안의 핵심 요소들을 살펴보겠습니다.',
                date: '2024-03-05',
                readTime: '6분 읽기',
                slug: 'network-security-basics',
                link: 'https://velog.io/@grinding'
            }
        ];

        return NextResponse.json(fallbackPosts);
    }
}
