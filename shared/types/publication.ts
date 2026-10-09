export type PublicationKind = 'article' | 'news'

export interface PublicationSummary {
    id: string
    slug: string
    kind: PublicationKind
    title: string
    excerpt: string
    category: string
    coverImage: string | null
    readingMinutes: number | null
    publishedAt: string
}

export interface PublicationDetail extends PublicationSummary {
    body: string
}