import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from '../database/schema'

let client: ReturnType<typeof postgres> | undefined

export function useDatabase() {
    const databaseUrl = useRuntimeConfig().databaseUrl || process.env.DATABASE_URL

    if (!databaseUrl) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Database connection is not configured'
        })
    }

    client ??= postgres(databaseUrl)
    return drizzle(client, { schema })
}