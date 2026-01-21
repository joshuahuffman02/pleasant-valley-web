import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
  integer,
} from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash'),
  firstName: text('first_name'),
  lastName: text('last_name'),
  planningCenterId: text('planning_center_id'),
  isAdmin: boolean('is_admin').default(false).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Spiritual Journey Milestones
export const milestones = pgTable('milestones', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  milestoneType: varchar('milestone_type', { length: 50 }).notNull(), // 'salvation', 'baptism', 'membership', etc.
  completedAt: timestamp('completed_at').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Sermon Series
export const sermonSeries = pgTable('sermon_series', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  startDate: timestamp('start_date'),
  endDate: timestamp('end_date'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Sermons
export const sermons = pgTable('sermons', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  seriesId: uuid('series_id').references(() => sermonSeries.id, { onDelete: 'set null' }),
  title: text('title').notNull(),
  speaker: text('speaker').notNull(),
  description: text('description'),
  date: timestamp('date').notNull(),
  audioUrl: text('audio_url'),
  videoUrl: text('video_url'),
  transcript: text('transcript'),
  viewCount: integer('view_count').default(0).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Events
export const events = pgTable('events', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  location: text('location'),
  imageUrl: text('image_url'),
  registrationUrl: text('registration_url'),
  planningCenterEventId: text('planning_center_event_id'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Giving Campaigns
export const givingCampaigns = pgTable('giving_campaigns', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  goalAmount: integer('goal_amount'),
  currentAmount: integer('current_amount').default(0).notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  imageUrl: text('image_url'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
