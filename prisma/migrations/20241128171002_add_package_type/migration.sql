/*
  Warnings:

  - Added the required column `type` to the `packages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PackageType" AS ENUM ('PROFESSIONAL', 'SEMI_PROFESSIONAL', 'ENTHUSIAST', 'BYOD');

-- AlterTable
ALTER TABLE "packages" ADD COLUMN     "type" "PackageType" NOT NULL;
