import { neon } from '@neon/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import env from '@/env';

const sql = neon(env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
const db = drizzle(sql);

export default db;
