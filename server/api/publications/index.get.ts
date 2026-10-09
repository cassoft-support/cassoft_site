import { and, desc, eq, lte } from 'drizzle-orm'
import { publications } from '../../database/schema'
import type { PublicationKind } from '#shared/types/publication'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const requestedKind = query.kind
    const kind = requestedKind === 'article' || requestedKind === 'news'
        ? requestedKind as PublicationKind
        : undefined
    const limit = Math.min(Math.max(Number(query.limit) || 20, 1), 100)
    const filters = [
        eq(publications.status, 'published'),
        lte(publications.publishedAt, new Date())
    ]

    if (kind) filters.push(eq(publications.kind, kind))

    return useDatabase()
        .select({
            id: publications.id,
            slug: publications.slug,
            kind: publications.kind,
            title: publications.title,
            excerpt: publications.excerpt,
            category: publications.category,
            coverImage: publications.coverImage,
            readingMinutes: publications.readingMinutes,
            publishedAt: publications.publishedAt
        })
        .from(publications)
        .where(and(...filters))
        .orderBy(desc(publications.publishedAt))
        .limit(limit)
})