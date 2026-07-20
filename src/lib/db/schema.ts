import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  date,
  decimal,
  json,
} from 'drizzle-orm/pg-core';

// ─── Users ───────────────────────────────────────────────────────────────────

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  address: text('address'),
  city: varchar('city', { length: 100 }),
  postalCode: varchar('postal_code', { length: 20 }),
  language: varchar('language', { length: 5 }).default('nl'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  cats: many(cats),
  bookings: many(bookings),
}));

// ─── Cats ────────────────────────────────────────────────────────────────────

export const cats = pgTable('cats', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: varchar('name', { length: 100 }).notNull(),
  breed: varchar('breed', { length: 100 }),
  age: integer('age'),
  weight: decimal('weight'),
  medicalNotes: text('medical_notes'),
  feedingInstructions: text('feeding_instructions'),
  specialNeeds: text('special_needs'),
  photoUrl: text('photo_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const catsRelations = relations(cats, ({ one, many }) => ({
  user: one(users, {
    fields: [cats.userId],
    references: [users.id],
  }),
  bookingCats: many(bookingCats),
}));

// ─── Services ────────────────────────────────────────────────────────────────

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  nameKey: varchar('name_key', { length: 50 }).notNull(),
  descriptionKey: varchar('description_key', { length: 50 }),
  pricePerVisit: decimal('price_per_visit', { precision: 10, scale: 2 }).notNull(),
  features: json('features'),
  isActive: boolean('is_active').default(true),
});

export const servicesRelations = relations(services, ({ many }) => ({
  bookings: many(bookings),
}));

// ─── Bookings ────────────────────────────────────────────────────────────────

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  serviceId: integer('service_id').references(() => services.id),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  status: varchar('status', { length: 20 }).default('pending'),
  totalPrice: decimal('total_price', { precision: 10, scale: 2 }),
  notes: text('notes'),
  emergencyContact: varchar('emergency_contact', { length: 255 }),
  emergencyPhone: varchar('emergency_phone', { length: 50 }),
  veterinarianName: varchar('veterinarian_name', { length: 255 }),
  veterinarianPhone: varchar('veterinarian_phone', { length: 50 }),
  keyHandoff: varchar('key_handoff', { length: 50 }).default('inPerson'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const bookingsRelations = relations(bookings, ({ one, many }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
  service: one(services, {
    fields: [bookings.serviceId],
    references: [services.id],
  }),
  bookingCats: many(bookingCats),
  visits: many(visits),
}));

// ─── Booking Cats (Junction Table) ──────────────────────────────────────────

export const bookingCats = pgTable('booking_cats', {
  id: serial('id').primaryKey(),
  bookingId: integer('booking_id').references(() => bookings.id),
  catId: integer('cat_id').references(() => cats.id),
});

export const bookingCatsRelations = relations(bookingCats, ({ one }) => ({
  booking: one(bookings, {
    fields: [bookingCats.bookingId],
    references: [bookings.id],
  }),
  cat: one(cats, {
    fields: [bookingCats.catId],
    references: [cats.id],
  }),
}));

// ─── Visits ──────────────────────────────────────────────────────────────────

export const visits = pgTable('visits', {
  id: serial('id').primaryKey(),
  bookingId: integer('booking_id').references(() => bookings.id),
  visitDate: date('visit_date').notNull(),
  arrivalTime: timestamp('arrival_time'),
  departureTime: timestamp('departure_time'),
  sitterName: varchar('sitter_name', { length: 255 }),
  feedingDone: boolean('feeding_done').default(false),
  waterRefreshed: boolean('water_refreshed').default(false),
  litterCleaned: boolean('litter_cleaned').default(false),
  playTime: integer('play_time'),
  healthNotes: text('health_notes'),
  behaviorNotes: text('behavior_notes'),
  photosUrls: json('photos_urls'),
  bodycamUrl: text('bodycam_url'),
  bodycamDuration: integer('bodycam_duration'),
  overallStatus: varchar('overall_status', { length: 20 }).default('scheduled'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const visitsRelations = relations(visits, ({ one }) => ({
  booking: one(bookings, {
    fields: [visits.bookingId],
    references: [bookings.id],
  }),
}));
