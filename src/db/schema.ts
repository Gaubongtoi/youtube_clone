import { pgTable, uuid, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
// Define the "users" table schema
export const users = pgTable(
    'users',
    {
        id: uuid('id').primaryKey().defaultRandom(), //
        clerkId: text('clerk_id').notNull().unique(),
        name: text('name').notNull(),
        // TODO: add banner field
        imageUrl: text('image_url').notNull(),
        createdAt: timestamp('created_at').notNull().defaultNow(),
        updatedAt: timestamp('updated_at').notNull().defaultNow(),
    },
    (table) => [
        // Same as create an index at SQL: CREATE UNIQUE INDEX clerk_id_idx ON users (clerk_id);
        uniqueIndex('clerk_id_idx').on(table.clerkId), // Make sure clerkId is unique
    ],
);

/*
    CREATE TABLE users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        clerk_id TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        image_url TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
*/
