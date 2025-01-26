/*
  Warnings:

  - You are about to drop the column `anchoDeLasFosas` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `anilloLimbalColorHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `anilloLimbalGrosor` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `colorBaseHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `colorOjosHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `colorPrincipalPielHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `coloresQueDesfavorecen` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `coloresQueFavorecen` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `contornoDeLabios` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `contrasteEsclerotica` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `distanciaInterocular` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `estacionDeColor` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `formaDeLaNariz` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `formaDeLosLabios` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `formaDeOjos` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `formaDelrostro` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `frenteHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `idioma` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `mejillasHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `mentonHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `narizHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `proporcionOjosCara` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `puntasHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `raizHex` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `reflejosProporcion` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `reflejosTonos` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `simetriaFacial` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `subtonosPiel` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `tamanoDeLaBoca` on the `AnalisisFacial` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDePiel` on the `AnalisisFacial` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnalisisFacial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
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
INSERT INTO "new_AnalisisFacial" ("id", "userId") SELECT "id", "userId" FROM "AnalisisFacial";
DROP TABLE "AnalisisFacial";
ALTER TABLE "new_AnalisisFacial" RENAME TO "AnalisisFacial";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
