import { pgTable, numeric, serial, varchar, boolean, integer, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';

export const customer = pgTable('customer', {
    id: serial('id').primaryKey(),
    firstName: varchar('fname',{ length: 64 }).notNull(),
    lastName: varchar('lname',{ length: 64 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    password: varchar('password', { length: 256 }).notNull(),
});

export const customerRelations = relations(customer, ({ one }) => ({
    shoppingCart: one(shoppingCart),
}));

export const item = pgTable('item', {
    id: serial('id').primaryKey(),
    itemName: varchar('name',{ length: 64 }).notNull(),
    itemPrice: numeric('price', { precision: 10, scale: 2 }),
    itemType: varchar('type', { length: 64 }).notNull(),
});

export const itemRelations = relations(item, ({ many }) => ({
    cartTransaction: many(cartTransaction),
}));

export const shoppingCart = pgTable('shopping_cart', {
    id: serial('id').primaryKey(),
    customerId: integer('cus_id').notNull().unique().references(() => customer.id),
});

export const shoppingCartRelations = relations(shoppingCart, ({ one, many }) => ({
    customer: one(customer, { fields: [shoppingCart.customerId], references: [customer.id]}),
    cartTransaction: many(cartTransaction),
}));

export const cartTransaction = pgTable('cart_transaction', {
    shoppingCartId: integer('sc_id').notNull().references(() => shoppingCart.id),
    itemId: integer('item_id').notNull().references(() => item.id),
    transactionDate: timestamp('transaction_date').notNull().defaultNow(),
}, (table) => [
   primaryKey({ columns: [table.shoppingCartId, table.itemId]})
])

