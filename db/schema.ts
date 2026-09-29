import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const cmsProjects=sqliteTable('cms_projects',{id:text('id').primaryKey(),data:text('data').notNull(),revision:integer('revision').notNull().default(1),updatedAt:text('updated_at').notNull()});

export const cmsArticles=sqliteTable('cms_articles',{id:text('id').primaryKey(),data:text('data').notNull(),revision:integer('revision').notNull().default(1),updatedAt:text('updated_at').notNull()});

export const cmsServices=sqliteTable('cms_services',{id:text('id').primaryKey(),data:text('data').notNull(),revision:integer('revision').notNull().default(1),updatedAt:text('updated_at').notNull()});
