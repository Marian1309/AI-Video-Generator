import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_DRIZZLE_DATABASE_URL: z.string().url()
  },
  runtimeEnv: {
    NEXT_PUBLIC_DRIZZLE_DATABASE_URL: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL
  }
});

export default env;
