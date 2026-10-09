import { and, eq, lte } from 'drizzle-orm'
import { publications } from '../../database/schema'

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    if (!slug) {
        throw createError({ statusCode: 400, statusMessage: 'Publication slug is required' })
    }

    const [publication] = await useDatabase()
        .select({
            id: publications.id,
            slug: publications.slug,
            kind: publications.kind,
            title: publications.title,
            excerpt: publications.excerpt,
            body: publications.body,
            category: publications.category,
            coverImage: publications.coverImage,
            readingMinutes: publications.readingMinutes,
            publishedAt: publications.publishedAt
        })
        .from(publications)
        .where(and(
            eq(publications.slug, slug),
            eq(publications.status, 'published'),
            lte(publications.publishedAt, new Date())
        ))
        .limit(1)

    if (!publication) {
        throw createError({ statusCode: 404, statusMessage: 'Publication not found' })
    }

    return publication
})