/*
  Warnings:

  - Added the required column `categoryId` to the `cakeFilling` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cakeFilling" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "fillingCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "fillingCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cakeFilling" ADD CONSTRAINT "cakeFilling_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "fillingCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
