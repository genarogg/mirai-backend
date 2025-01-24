/*
  Warnings:

  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "dateOfBirth" DATETIME,
    "gender" TEXT,
    "preferredPayment" TEXT,
    "subscription" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'customer',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "profileImage" TEXT,
    "notificationsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" DATETIME,
    "totalOrders" INTEGER NOT NULL DEFAULT 0,
    "preferredLanguage" TEXT DEFAULT 'es',
    "preferredCurrency" TEXT DEFAULT 'USD',
    "referralCode" TEXT,
    "referrerId" INTEGER
);
INSERT INTO "new_User" ("address", "city", "country", "createdAt", "dateOfBirth", "email", "gender", "id", "isActive", "isVerified", "lastLogin", "name", "notificationsEnabled", "password", "phoneNumber", "postalCode", "preferredCurrency", "preferredLanguage", "preferredPayment", "profileImage", "referralCode", "referrerId", "role", "state", "subscription", "totalOrders", "updatedAt") SELECT "address", "city", "country", "createdAt", "dateOfBirth", "email", "gender", "id", "isActive", "isVerified", "lastLogin", "name", "notificationsEnabled", "password", "phoneNumber", "postalCode", "preferredCurrency", "preferredLanguage", "preferredPayment", "profileImage", "referralCode", "referrerId", "role", "state", "subscription", "totalOrders", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
