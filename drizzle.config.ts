import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // Load environment variables from .env.local file

export default defineConfig({
    schema: './src/db/schema.ts', // path to your schema files
    out: './drizzle',
    dbCredentials: {
        // information to connect to your database -> URL connection
        url: process.env.DATABASE_URL!,
    },
    dialect: 'postgresql', // type of your database
});
