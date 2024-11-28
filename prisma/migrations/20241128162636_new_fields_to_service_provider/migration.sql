/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `service_providers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `service_providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `service_providers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_providers" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "service_providers_slug_key" ON "service_providers"("slug");
