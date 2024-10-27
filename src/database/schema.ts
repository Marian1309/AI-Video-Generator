import { boolean, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export var usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  imageUrl: varchar('imageUrl'),
  subscription: boolean('subscription').default(false)
});
