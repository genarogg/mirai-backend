-- CreateTable
CREATE TABLE "AnalisisFacial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "imgProcessed" TEXT,
    "colorDePiel" TEXT,
    "colorDePelo" TEXT,
    "colorDeOjos" TEXT,
    "tonoDePiel" TEXT,
    "subtonoDePiel" TEXT,
    "estacionDelAno" TEXT,
    "tipoDeRostro" TEXT,
    "sistemaFitzpatrick" TEXT,
    "PantoneSkintone" TEXT,
    "NARSSkinToneSystem" TEXT,
    "LOrealColorCode" TEXT,
    "ColorMeBeautiful" TEXT,
    "MunsellColorSystem" TEXT,
    CONSTRAINT "AnalisisFacial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bitacora" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "nivel_severidad" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "hora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "preferredPayment" TEXT,
    "subscription" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "imgForChange" TEXT,
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

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "dateOfBirth" DATETIME,
    "etnia" TEXT,
    "idiomas" TEXT NOT NULL,
    "sexo" TEXT,
    "altura" TEXT,
    "peso" TEXT,
    "tallaDeRopa" TEXT,
    "edad" INTEGER NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
