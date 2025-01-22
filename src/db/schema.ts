import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const roomsTable = sqliteTable('rooms', {
	id: text().primaryKey(),
});

export type Room = typeof roomsTable.$inferSelect;

export const playersTable = sqliteTable('players', {
	id: text().primaryKey(),
	name: text().notNull(),
	roomId: text()
		.notNull()
		.references(() => roomsTable.id),
});
