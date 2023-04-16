-- AlterTable
ALTER TABLE "fillingCategory" ADD COLUMN     "price" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "categoryDecoration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categoryDecoration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decorations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "decorations_pkey" PRIMARY KEY ("id")
);
