/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `tasks` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `description` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - The `status` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `priority` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The required column `id_task` was added to the `tasks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('PENDENTE', 'INICIADA', 'CONCLUIDA', 'CANCELADA', 'AGUARDANDO', 'AGENDADA');

-- CreateEnum
CREATE TYPE "priority" AS ENUM ('ALTA', 'MEDIA', 'BAIXA', 'NORMAL');

-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
DROP COLUMN "category",
DROP COLUMN "id",
ADD COLUMN     "end_dt" TIMESTAMP(3),
ADD COLUMN     "id_category" TEXT,
ADD COLUMN     "id_task" TEXT NOT NULL,
ADD COLUMN     "start_dt" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(100),
DROP COLUMN "status",
ADD COLUMN     "status" "status" DEFAULT 'PENDENTE',
DROP COLUMN "priority",
ADD COLUMN     "priority" "priority" DEFAULT 'NORMAL',
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id_task");

-- CreateTable
CREATE TABLE "category" (
    "id_category" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id_category")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;
