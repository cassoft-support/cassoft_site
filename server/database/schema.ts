import { integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const publicationKind = pgEnum('publication_kind', ['article', 'news'])
export const publicationStatus = pgEnum('publication_status', ['draft', 'published', 'archived'])

export const publications = pgTable('publications', {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: varchar('slug', { length: 180 }).notNull().unique(),
    kind: publicationKind('kind').notNull(),
    status: publicationStatus('status').notNull().default('draft'),
    title: varchar('title', { length: 240 }).notNull(),
    excerpt: text('excerpt').notNull(),
    body: text('body').notNull(),
    category: varchar('category', { length: 100 }).notNull(),
    coverImage: text('cover_image'),
    readingMinutes: integer('reading_minutes'),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
})

export type Publication = typeof publications.$inferSelect